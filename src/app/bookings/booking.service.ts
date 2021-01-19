import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';

import { Booking } from './booking.model';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment.prod';

interface BookingData {
  bookedFrom: string;
  bookedTo: string;
  firstName: string;
  guestNumber: number;
  lastName: string;
  placeId: string;
  placeImage: string;
  placeTitle: string;
  userEmail: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([]);

  get bookings() {
    return this._bookings.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;
    let newBooking;
    return this.authService.user.pipe(take(1), switchMap(user => {
      newBooking = new Booking(
        Math.random().toString(),
        placeId,
        user.email,
        placeTitle,
        placeImage,
        firstName,
        lastName,
        guestNumber,
        dateFrom,
        dateTo
      );
      return this.http
        .post<{ name: string }>(
          `${environment.firebaseUrl}/bookings.json`,
          { ...newBooking, id: null }
        );
    }),
        switchMap(resData => {
          generatedId = resData.name;
          return this.bookings;
        }),
        take(1),
        tap(bookings => {
          newBooking.id = generatedId;
          this._bookings.next(bookings.concat(newBooking));
        })
      );
  }

  updateBooking(
    id: string,
    placeId: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;
    let newBooking;
    return this.authService.user.pipe(take(1), switchMap(user => {
      newBooking = new Booking(
        id,
        placeId,
        user.email,
        placeTitle,
        placeImage,
        firstName,
        lastName,
        guestNumber,
        dateFrom,
        dateTo
      );
      return this.http
        .put<{ name: string }>(
          `${environment.firebaseUrl}/bookings/${id}.json`,
          { ...newBooking, id: null }
        );
    }),
        switchMap(resData => {
          generatedId = resData.name;
          return this.bookings;
        }),
        take(1),
        tap(bookings => {
          newBooking.id = generatedId;
          bookings=bookings.filter(booking=>booking.id!=id);
          this._bookings.next(bookings.concat(newBooking));
        })
      );
  }

  cancelBooking(bookingId: string) {
    return this.http
      .delete(
        `${environment.firebaseUrl}/bookings/${bookingId}.json`
      )
      .pipe(
        switchMap(() => {
          return this.bookings;
        }),
        take(1),
        tap(bookings => {
          this._bookings.next(bookings.filter(b => b.id !== bookingId));
        })
      );
  }

  fetchBookings() {
    let bookingData;
    return this.authService.user.pipe(switchMap(user=>{
      return this.http
      .get<{ [key: string]: BookingData }>(
        `${environment.firebaseUrl}/bookings.json`
      )
      .pipe(
        switchMap(res=>{
          bookingData=res;
          return this.authService.checkUserIsAdmin();
        }),
        map(userIsAdmin => {
          const bookings = [];
          for (const key in bookingData) {
            if (bookingData.hasOwnProperty(key)) {
              if(bookingData[key].userEmail == user.email || userIsAdmin == true){
                bookings.push(
                  new Booking(
                    key,
                    bookingData[key].placeId,
                    bookingData[key].userEmail,
                    bookingData[key].placeTitle,
                    bookingData[key].placeImage,
                    bookingData[key].firstName,
                    bookingData[key].lastName,
                    bookingData[key].guestNumber,
                    new Date(bookingData[key].bookedFrom),
                    new Date(bookingData[key].bookedTo)
                  )
                );
              }
              }
          }
          return bookings;
        }),
        tap(bookings => {
          this._bookings.next(bookings);
        })
      );
    }));
    
  }
}
