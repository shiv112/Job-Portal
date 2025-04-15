import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonCard, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.page.html',
  styleUrls: ['./welcomescreen.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonItem, IonCard, IonContent, CommonModule, FormsModule]
})
export class WelcomescreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
