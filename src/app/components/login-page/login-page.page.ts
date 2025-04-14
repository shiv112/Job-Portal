import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle, bookmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPagePage implements OnInit {
goToCreatAccPage() {
throw new Error('Method not implemented.');
}

  constructor() { 
        addIcons({bookmarkOutline,logoGoogle,logoFacebook});
    
  }

  ngOnInit() {
  }

}
