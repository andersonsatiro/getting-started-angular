import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  @Input({
    required: true
  }) imagePath!: string

  @Input({
    required: true
  }) mainText!: string

  @Input({
    required: true
  }) conceptsLearned!: string[]

  @Input({
    required: true
  }) creationDate!: string
}
