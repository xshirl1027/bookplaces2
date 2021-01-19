import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { EditBookingComponent} from './edit-booking/edit-booking.component';
import { PlacesService } from '../places/places.service';
import { Place } from '../places/place.model';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss']
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[];
  isLoading = false;
  private bookingSub: Subscription;

  constructor(
    private bookingService: BookingService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.bookingSub = this.bookingService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.bookingService.fetchBookings().subscribe(() => {
      this.isLoading = false;
    });
  }
  onEdit(booking: Booking, slidingEl: IonItemSliding) {
    this.placesService.getPlace(booking.placeId).subscribe((place:Place)=>{
      this.modalCtrl
      .create({
        component: EditBookingComponent,
        componentProps: { selectedPlace: place, selectedBooking: booking }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.loadingCtrl
            .create({ message: 'Booking place...' })
            .then(loadingEl => {
              loadingEl.present();
              const data = resultData.data.bookingData;
              this.bookingService
                .updateBooking(
                  booking.id,
                  place.id,
                  place.title,
                  place.imageDataUrl,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  new Date(data.startDate),
                  new Date(data.endDate)
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                });
            });
        }
      });
    });
    
  }
  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    this.alertCtrl.create({header: "Delete", message: "Are you sure you want to delete booking?", buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        slidingEl.close();
      }
    },
    {
      text: 'Delete',
      handler: () => {
        slidingEl.close();
        this.loadingCtrl.create({ message: 'Cancelling...' }).then(loadingEl => {
          loadingEl.present();
          this.bookingService.cancelBooking(bookingId).subscribe(() => {
            loadingEl.dismiss();
          });
        });
      }
    }]})
    .then((ctrl) => {
      ctrl.present();
    });
   
  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }
}
