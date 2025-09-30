import { Component } from '@angular/core';

@Component({
  selector: 'app-muscle-map',
  imports: [],
  templateUrl: './muscle-map.html',
  styleUrl: './muscle-map.css'
})
export class MuscleMap {
  logMuscle(muscle: string) {
    console.log(muscle);
  }
}
