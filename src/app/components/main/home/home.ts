import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MuscleMap } from './home-components/muscle-map/muscle-map';
import { Exercise } from './home-components/exercise/exercise';

@Component({
  selector: 'app-home',
  imports: [FormsModule, MuscleMap, Exercise],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
