import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MuscleService } from '../../services/muscle-service/muscle-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private muscleService: MuscleService) { }
  currentPage: string = "Home";

  setCurrentPage(page: string) {
    this.muscleService.selectedMuscle.set('');
    this.currentPage = page;
  }
}
