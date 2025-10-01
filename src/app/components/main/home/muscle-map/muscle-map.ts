import { Component, inject } from '@angular/core';
import { MuscleService } from '../../../../services/muscle-service/muscle-service';

@Component({
  selector: 'app-muscle-map',
  imports: [],
  templateUrl: './muscle-map.html',
  styleUrl: './muscle-map.css'
})
export class MuscleMap {
  // constructor(private muscleService: MuscleService) { }
  private muscleService = inject(MuscleService);
  selectedMuscle = this.muscleService.selectedMuscle;

  selectMuscle(muscle: string) {
    console.log(muscle);
    this.muscleService.selectedMuscle.set(muscle);
  }
}
