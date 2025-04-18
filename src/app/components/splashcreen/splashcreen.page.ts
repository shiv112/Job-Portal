import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCol, IonRow, IonGrid, IonLoading } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashcreen',
  templateUrl: './splashcreen.page.html',
  styleUrls: ['./splashcreen.page.scss'],
  standalone: true,
  imports:[ IonGrid, IonRow, IonCol, IonContent,  CommonModule, FormsModule]
})
export class SplashcreenPage implements OnInit {
  
  constructor( private router:Router ) { }

  ngOnInit() {
    setTimeout(() => {
            this.goToOnboarding(); 
    }, 2000);
  }

  goToOnboarding() {
    this.router.navigate(['/onboading']); // Make sure '/onboarding' is correct
  }
  }
