import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Background } from './components/background/background';
import { Exercise } from './components/exercise/exercise';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Exercise, Background, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MuscleUp');
}
