import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MuscleMap } from './home-components/muscle-map/muscle-map';
import { Exercise } from './home-components/exercise/exercise';
import { CanComponentDeactivate } from '../../../services/animation-guard/animation-guard';

@Component({
  selector: 'app-home',
  imports: [FormsModule, MuscleMap, Exercise],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements CanComponentDeactivate {
  constructor(private host: ElementRef<HTMLElement>) { }

  side: string = "left";
  transitionFrom: string = this.side === "left" ? "slide-in-left" : "slide-in-right";

  canDeactivate(): Promise<boolean> {
    const root = this.host.nativeElement.querySelector('.home') ?? this.host.nativeElement;

    const anim = root.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(-100%)' }], { duration: 300, easing: 'linear' })
    // const anim = root.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(100%)' }], { duration: 300, easing: 'linear' })
    return anim.finished.then(() => true).catch(() => true);
  }
}
