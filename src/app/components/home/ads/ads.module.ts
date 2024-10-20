import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { PublicAdCardComponent } from './public-ad-card/public-ad-card.component';
import { PrivateAdCardComponent } from './private-ad-card/private-ad-card.component';

@NgModule({
  declarations: [
    AdsComponent,
    PublicAdCardComponent,
    PrivateAdCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdsComponent,
    PublicAdCardComponent
  ]
})

export class AdsModule {}
