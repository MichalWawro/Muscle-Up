import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  muscles = ["Biceps", "Triceps", "Quads", "Lats", "Abs", ];

  logMuscle(muscle: string) {
    console.log(muscle);
  } 
}
