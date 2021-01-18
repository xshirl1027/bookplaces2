import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AuthService } from '../../auth/auth.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  relevantPlaces: Place[];
  isLoading = false;
  filter: string = 'all';
  displayName: string;
  email: string;
  items = Array.from(document.querySelector('ion-list').children);
  private placesSub: Subscription;
  private userSub: Subscription;
  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub=this.authService.user.subscribe(user => {
      if(user){
        this.displayName=user.displayName;
        this.email=user.email;
        console.log(user);
        this.placesSub = this.placesService.places.subscribe(places => {
          this.loadedPlaces = places;
          if (this.filter === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
          } else {
            this.relevantPlaces = this.loadedPlaces.filter(
              place => place.userId !== user.id
            );
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
          }
          console.log(this.listedLoadedPlaces);
        });
      }
    });

  }
   handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item['style'].display = shouldShow ? 'block' : 'none';
      });
    });
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    this.authService.userId.subscribe(userId => {
    this.filter = event.detail.value;
    if (this.filter === 'all') {
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(
        place => place.userId !== userId
      );
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    }
    });
  }

  ngOnDestroy() {
    if(this.userSub){
      this.userSub.unsubscribe();
    }
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
