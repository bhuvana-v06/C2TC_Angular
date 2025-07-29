import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Interpolation
  username: string = 'bhuvana';

  //Two-way binding example
  userInput: string = '';

  //Event binding example
  sayHello() {
    alert('hello, ' + this.username + '!');
  }
  onUsernameInput(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }
}
