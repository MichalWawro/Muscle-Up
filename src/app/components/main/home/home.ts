import { Component, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MuscleMap } from './muscle-map/muscle-map';
import { CanComponentDeactivate } from '../../../services/animation-guard/animation-guard';
import { DirectionService } from '../../../services/direction-service/direction-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, MuscleMap],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements CanComponentDeactivate {
  constructor(private host: ElementRef<HTMLElement>) { }
  routeDirection = inject(DirectionService);

  //Leave Animation
  transitionFrom: string = this.routeDirection.direction() === "left" ? "slide-in-left" : "slide-in-right";

  //Enter Animation
  canDeactivate(): Promise<boolean> {
    const root = this.host.nativeElement.querySelector('.home') ?? this.host.nativeElement;

    const anim = root.animate([
      { transform: 'translateX(0%)' },
      this.routeDirection.direction() === "left" ? { transform: 'translateX(100%)' } : { transform: 'translateX(-100%)' }
    ], { duration: 300, easing: 'linear' })

    return anim.finished.then(() => true).catch(() => true);
  }
}
