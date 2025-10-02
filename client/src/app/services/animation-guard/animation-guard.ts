import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate?: () => Promise<boolean> | Observable<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class AnimationGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Promise<boolean> | Observable<boolean> | boolean {
    return component?.canDeactivate ? component.canDeactivate() : true;
  }
}
