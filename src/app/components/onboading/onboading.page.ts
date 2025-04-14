import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboading',
  templateUrl: './onboading.page.html',
  styleUrls: ['./onboading.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent, CommonModule, FormsModule]
})
export class OnboadingPage implements OnInit {
goTowelcomePage() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
