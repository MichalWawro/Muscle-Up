import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/main/home/home';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
// import { About } from './components/main/about/about';
import { Background } from './components/background/background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Background, Footer], //About,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MuscleUp');
}
