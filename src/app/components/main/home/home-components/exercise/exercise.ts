import { Component, computed, inject } from '@angular/core';
import { MuscleService } from '../../../../../services/muscle-service/muscle-service';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css'
})
export class Exercise {
  private muscleService = inject(MuscleService);
  selectedMuscle = this.muscleService.selectedMuscle;
}
