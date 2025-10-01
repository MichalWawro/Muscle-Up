import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  currentPage: string = "Home";

  setCurrentPage(page: string) {
    this.currentPage = page;
  }
}
