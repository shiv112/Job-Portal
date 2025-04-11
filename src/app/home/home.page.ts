import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonSearchbar, IonCard, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonCard, IonSearchbar, IonAvatar,  IonContent],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
    
  }
  
}
