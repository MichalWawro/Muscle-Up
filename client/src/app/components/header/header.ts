import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MuscleService } from '../../services/muscle-service/muscle-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  currentPage: string = '';

  constructor(private muscleService: MuscleService, private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentPage = e.urlAfterRedirects.replace('/', '') || 'home';
      })
  }

  setCurrentPage(page: string) {
    this.muscleService.selectedMuscle.set('');
    this.currentPage = page;
  }
}
