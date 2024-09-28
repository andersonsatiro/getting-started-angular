import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { MainStackComponent } from '../stack/main-stack/main-stack.component';
import { SupermarketSectorsComponent } from '../supermarket-sectors/supermarket-sectors.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule,
    MainStackComponent,
    SupermarketSectorsComponent,
    UserProfileComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  contentShown: string = 'default'

  cardClicked(cardName: string){
    this.contentShown = cardName
  }

  returnToDefaultContent(){
    this.contentShown = 'default'
  }
}
