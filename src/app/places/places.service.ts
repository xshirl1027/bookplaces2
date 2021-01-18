import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { PlaceLocation } from './location.model';
import { environment } from 'src/environments/environment';

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  location: PlaceLocation;
  imageDataUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchPlaces() {
    return this.authService.userId.pipe(switchMap(userId=>{
      return this.http
        .get<{ [key: string]: PlaceData }>(
          `${environment.firebaseUrl}/places.json`
        )
        .pipe(
          map(resData => {
            const places = [];
            for (const key in resData) {
              if (resData.hasOwnProperty(key)) {
                places.push(
                  new Place(
                    key,
                    resData[key].title,
                    resData[key].description,
                    resData[key].price,
                    new Date(resData[key].availableFrom),
                    new Date(resData[key].availableTo),
                    resData[key].userId,
                    resData[key].location,
                    resData[key].imageDataUrl
                  )
                );
              }
            }
            return places;
          }),
          tap(places => {
            this._places.next(places);
          })
        );
    }));
  }

  fetchOffers() {
    return this.authService.user.pipe(switchMap(user=>{
      return this.http
        .get<{ [key: string]: PlaceData }>(
          `${environment.firebaseUrl}/places.json`
        )
        .pipe(
          map(resData => {
            const places = [];
            for (const key in resData) {
              if (resData.hasOwnProperty(key) && (resData[key].userId==user.id || user.email == 'admin@admin.com')) {
                places.push(
                  new Place(
                    key,
                    resData[key].title,
                    resData[key].description,
                    resData[key].price,
                    new Date(resData[key].availableFrom),
                    new Date(resData[key].availableTo),
                    resData[key].userId,
                    resData[key].location,
                    resData[key].imageDataUrl
                  )
                );
              }
            }
            return places;
          }),
          tap(places => {
            this._places.next(places);
          })
        );
    }));
  }

  getPlace(id: string) {
    return this.http
      .get<PlaceData>(
        `${environment.firebaseUrl}/places/${id}.json`
      )
      .pipe(
        map(placeData => {
          return new Place(
            id,
            placeData.title,
            placeData.description,
            placeData.price,
            new Date(placeData.availableFrom),
            new Date(placeData.availableTo),
            placeData.userId,
            placeData.location,
            placeData.imageDataUrl
          );
        })
      );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
    location: PlaceLocation,
    imageDataURL: string
  ) {
    let generatedId: string;
    let newPlace: Place;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('No user found!');
        }
        newPlace = new Place(
          Math.random().toString(),
          title,
          description,
          price,
          dateFrom,
          dateTo,
          userId,
          location,
          imageDataURL
        );
        return this.http.post<{ name: string }>(
          `${environment.firebaseUrl}/places.json`,
          {
            ...newPlace,
            id: null
          }
        );
      }),
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap(places => {
        newPlace.id = generatedId;
        this._places.next(places.concat(newPlace));
      })
    );
  }

  deletePlace(placeId: string) {
    return this.http.delete(
      `${environment.firebaseUrl}/places/${placeId}.json`
    );
  }

  updatePlace(place: Place) {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1),
      switchMap(places => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          return of(places);
        }
      }),
      switchMap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === place.id);
        updatedPlaces = [...places];
        updatedPlaces[updatedPlaceIndex] = place;
        return this.http.put(
          `${environment.firebaseUrl}/places/${place.id}.json`,
          { ...updatedPlaces[updatedPlaceIndex], id: null }
        );
      }),
      tap(() => {
        this._places.next(updatedPlaces);
      })
    );
  }
}
