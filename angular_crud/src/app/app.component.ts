import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('myModal') modal: ElementRef | undefined;
  studentObj: Student = new Student();

  openModal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeModal() {
    if (this.modal != null) {
      this.modal.nativeElement.style.display = 'none';
    }
  }
}

export class Student {
  name: string;
  movileNo: string;
  email: string;
  city: string;
  pincode: string;
  address: string;

  constructor() {
    this.address = '';
    this.city = '';
    this.email = '';
    this.movileNo = '';
    this.name = '';
    this.pincode = '';
  }
}
