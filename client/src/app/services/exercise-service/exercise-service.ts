import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ExerciseObject {
  id: number;
  name: string;
  repRange: string;
  muscle: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getExercise(muscle: string) {
    return this.http.get<ExerciseObject>(`${this.apiUrl}/exercise`, { params: { muscle } });
  }

  getExercises(muscle: string) {
    return this.http.get<ExerciseObject[]>(`${this.apiUrl}/exercises`, { params: { muscle } });
  }
}
