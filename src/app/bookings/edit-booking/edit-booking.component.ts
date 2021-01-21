import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Place } from '../../places/place.model';
import { Booking } from '../booking.model';
@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedBooking: Booking;
  form: FormGroup;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(this.selectedBooking.firstName, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(50)]
      }),      
      lastName: new FormControl(this.selectedBooking.lastName, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(50)]
      }),
      dateFrom: new FormControl(this.selectedBooking.bookedFrom.toISOString(), {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(this.selectedBooking.bookedTo.toISOString(), {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      guestNumber: new FormControl(this.selectedBooking.guestNumber, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1), Validators.max(500)]
      })
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    if (!this.form.valid || !this.datesValid()) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value['firstName'],
          lastName: this.form.value['lastName'],
          guestNumber: this.form.value['guestNumber'],
          startDate: new Date(this.form.value['dateFrom']),
          endDate: new Date(this.form.value['dateTo'])
        }
      },
      'confirm'
    );
  }

  datesValid() {
    if (!this.form) {
      return false;
    }
    const startDate = new Date(this.form.value['dateFrom']);
    const endDate = new Date(this.form.value['dateTo']);
    return endDate > startDate;
  }
  
}
