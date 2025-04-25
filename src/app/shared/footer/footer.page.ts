import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonToolbar, IonFooter, IonIcon, IonMenuButton, IonTabButton, IonLabel , IonTab, IonTabs, IonTabBar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { home , chatbubble ,  notificationsSharp , chatboxSharp, homeSharp, personSharp, people, card, storefront, settings, add, menu, menuSharp } from 'ionicons/icons'; // ✅ Import the icon(s) you want to use

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  standalone: true,
  imports: [ IonButtons, IonMenuButton , IonTabBar, IonTabs, IonTabButton , IonLabel,  IonIcon , MatIconModule ,RouterLink  , CommonModule, FormsModule]
})
export class FooterPage implements OnInit {

  constructor() { 
  addIcons({homeSharp,notificationsSharp,chatboxSharp,personSharp,menuSharp,menu,add,people,card,storefront,settings,home,chatbubble});
}
  ngOnInit() {
  }

}
