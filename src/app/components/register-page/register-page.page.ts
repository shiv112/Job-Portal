import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FooterPage } from "../../shared/footer/footer.page";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
