import { Component } from '@angular/core';
import { TechCardComponent } from '../tech-card/tech-card.component';

@Component({
  selector: 'app-main-stack',
  standalone: true,
  imports: [TechCardComponent],
  templateUrl: './main-stack.component.html',
  styleUrl: './main-stack.component.scss'
})
export class MainStackComponent {

}
