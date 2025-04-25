import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonTab, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { menuSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonIcon,IonMenuButton , IonHeader, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  constructor() { 
    addIcons({ menuSharp });
  }

  ngOnInit() {
  }

}
