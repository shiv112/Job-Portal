import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonTab, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { menuSharp, notificationsSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonMenuButton ,RouterLink, IonIcon, IonHeader, IonButtons, IonTitle , IonToolbar , CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  @Input() pageName: string = "";
  
  constructor() { 
    addIcons({notificationsSharp,menuSharp});
  }

  ngOnInit() {
  }

}
