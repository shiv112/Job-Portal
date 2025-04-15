import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonToolbar, IonFooter, IonIcon, IonButton, IonTabButton, IonLabel, IonBadge, IonTab, IonTabs, IonTabBar } from '@ionic/angular/standalone';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { home , chatbubble   ,  notificationsSharp , chatboxSharp, homeSharp, personSharp, people, card, storefront, settings } from 'ionicons/icons'; // ✅ Import the icon(s) you want to use

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabs, IonTabButton , IonLabel,  IonIcon , MatIconModule ,RouterLink  , CommonModule, FormsModule]
})
export class FooterPage implements OnInit {

  constructor() { 
  addIcons({people,card,storefront,settings,homeSharp,notificationsSharp,chatboxSharp,personSharp,home,chatbubble});
}
  ngOnInit() {
  }

}
