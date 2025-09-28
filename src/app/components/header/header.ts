import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  currentPage: string = "Home";

  setCurrentPage(page: string) {
    this.currentPage = page;
  }
}
