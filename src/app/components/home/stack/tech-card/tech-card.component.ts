import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.scss'
})
export class TechCardComponent {
  @Input({
    required: true
  }) imagePath!: string

  @Input({
    required: true
  }) techName!: string

  @Input({
    required: true
  }) mySituation!: string
}
