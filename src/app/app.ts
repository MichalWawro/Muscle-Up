import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Exercise } from './components/exercise/exercise';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Exercise, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MuscleUp');
}
