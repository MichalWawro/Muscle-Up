import { Injectable, signal } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';
import { ROUTE_ORDER } from '../route-order/route-order';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private lastRoute = signal<string>('');
  direction = signal<'left' | '' | 'right'>('');

  constructor(router: Router) {
    router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        const target = e.url.replace('/', '');
        const current = this.lastRoute();

        if (ROUTE_ORDER[target] > ROUTE_ORDER[current]) {
          this.direction.set('right');
        } else {
          this.direction.set('left');
        }
        this.lastRoute.set(target);
      })
  }
}
