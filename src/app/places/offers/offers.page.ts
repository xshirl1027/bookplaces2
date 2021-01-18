import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { take, switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss']
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[];
  isLoading = false;
  private placesSub: Subscription;

  constructor(private placesService: PlacesService, 
    private router: Router,
     private authService: AuthService,
     private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {}

  ngOnInit() {
    this.authService.userId.subscribe(userId => {
      this.placesSub = this.placesService.places.subscribe(places => {
        this.offers = places;
      });
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService.fetchOffers().subscribe(() => {
      this.isLoading = false;
    });
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
  }

  onDelete(offerId: string, slidingItem: IonItemSliding) {
    this.alertCtrl.create({header: "Delete", message: "Are you sure you want to delete booking?", buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        slidingItem.close();
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Delete',
      handler: () => {
        slidingItem.close();
        this.loadingCtrl.create({ message: 'deleting...' }).then(loadingEl => {
          loadingEl.present();
          this.isLoading = true;
          this.placesService.deletePlace(offerId).subscribe(() => {
            this.placesService.fetchPlaces().subscribe(() => {
              this.isLoading = false;
              loadingEl.dismiss();
            });
          });
        });
      }
    }]})
    .then((ctrl) => {
      ctrl.present();
    });

  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
