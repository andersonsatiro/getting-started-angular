import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
