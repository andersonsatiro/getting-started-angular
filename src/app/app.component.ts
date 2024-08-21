import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    HeaderComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'getting-started-angular';
}
