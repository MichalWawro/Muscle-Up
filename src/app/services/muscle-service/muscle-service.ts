import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  selectedMuscle = signal<string>('');
}
