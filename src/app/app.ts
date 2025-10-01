import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Background } from './components/background/background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Background, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MuscleUp');
}
