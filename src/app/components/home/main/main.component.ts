import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { MainStackComponent } from '../stack/main-stack/main-stack.component';
import { SupermarketSectorsComponent } from '../supermarket-sectors/supermarket-sectors.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { AdsModule } from '../ads/ads.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule,
    MainStackComponent,
    SupermarketSectorsComponent,
    UserProfileComponent,
    ToDoListComponent,
    AdsModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  existingCards: string[] = ['stack', 'supermarket-sectors', 'user-profile', 'to-do-list']
  contentShown: string = 'default'

  cardClicked(cardName: string){
    this.existingCards.includes(cardName) ?
    this.contentShown = cardName :
    this.contentShown = 'default'
  }

  returnToDefaultContent(){
    this.contentShown = 'default'
  }
}
