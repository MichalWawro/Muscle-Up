import { Component, ElementRef } from '@angular/core';
import { CanComponentDeactivate } from '../../../services/animation-guard/animation-guard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements CanComponentDeactivate {
  constructor(private host: ElementRef<HTMLElement>) { }

  username = '';
  password = '';
  loggedIn = false;

  //Profile data hardcoded to skip setting up Login on backend;
  name = "Admin";
  birthday = '10.01.2000';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loggedIn = true;
    }
  }

  logout() {
    this.loggedIn = false;
    this.username = '';
    this.password = '';
  }

  canDeactivate(): Promise<boolean> {
    const root = this.host.nativeElement.querySelector('.profile') ?? this.host.nativeElement;

    const anim = root.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(-100%)' }], { duration: 400, easing: 'ease' })
    return anim.finished.then(() => true).catch(() => true);
  }
}