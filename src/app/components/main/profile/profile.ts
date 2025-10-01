import { Component, ElementRef } from '@angular/core';
import { CanComponentDeactivate } from '../../../services/animation-guard/animation-guard';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements CanComponentDeactivate {
  constructor(private host: ElementRef<HTMLElement>) { }

  canDeactivate(): Promise<boolean> {
    const root = this.host.nativeElement.querySelector('.profile') ?? this.host.nativeElement;

    const anim = root.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(-100%)' }], { duration: 300, easing: 'linear' })
    return anim.finished.then(() => true).catch(() => true);
  }
}