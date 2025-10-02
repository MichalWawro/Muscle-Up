import { Component, inject, effect, computed, signal } from '@angular/core';
import { MuscleService } from '../../services/muscle-service/muscle-service';
import { ExerciseObject, ExerciseService } from '../../services/exercise-service/exercise-service';
import { computeMsgId } from '@angular/compiler';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css'
})
export class Exercise {
  private exerciseService = inject(ExerciseService);
  private muscleService = inject(MuscleService);

  exercises: ExerciseObject[] = [];
  lastMuscleName = signal('');
  currentMuscle = computed(() =>
    this.formatMuscleName(this.muscleService.selectedMuscle())
  );

  constructor() {
    effect(() => {
      const muscle = this.muscleService.selectedMuscle();
      if (muscle) {
        this.lastMuscleName.set(this.formatMuscleName(muscle));

        this.exerciseService.getExercises(muscle)
          .subscribe(ex => {
            this.exercises = ex;
            console.log(ex);
          });
      }
    })
  }

  formatMuscleName(slug: string): string {
    if (!slug) return '';
    return slug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
}
