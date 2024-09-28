import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  username: string = 'einstein'
  name: string = 'Albert Einstein'
  fixedUrl: string = '/images/profile-image'
  imagePath: string = 'albert'
  description: string = '👨‍🔬 Físico teórico | E=mc² | Curioso pelo universo | Explorando a relatividade e os mistérios do cosmos | A imaginação é mais importante que o conhecimento ✨'
  site: string = 'https://www.alberteinstein.com/'
  followingProfile: boolean = false

  getImageUrl(){
    switch(this.imagePath){
      case 'dog':
        return `${this.fixedUrl}/dog-image.png`
      case 'cat':
        return `${this.fixedUrl}/cat-image.png`
      default:
        return `${this.fixedUrl}/albert-image.png`
    }
  }

  handleFollowClick(){
    this.followingProfile = !this.followingProfile
  }

  handleTextareaSize(id: string) {
    const textarea = document.getElementById(id)
    
    if(textarea){
      textarea.style.height = '0rem'
      textarea.style.height = (textarea.scrollHeight/10) + 'rem'
    }
  }
}
