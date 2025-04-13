import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.page.html',
  styleUrls: ['./apply-form.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ApplyFormPage implements OnInit {
  
  applicant = {
    name: '',
    email: '',
    phone: '',
    resume: null
  };

  constructor() {}
  submitApplication(){}
  uploadResume(){}
  ngOnInit() {}
}
