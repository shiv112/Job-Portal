import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splashcreen',
  templateUrl: './splashcreen.page.html',
  styleUrls: ['./splashcreen.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonContent,  CommonModule, FormsModule]
})
export class SplashcreenPage implements OnInit {
goToOnboarding() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
