import { Component, OnInit } from '@angular/core';
import { IonButtons, IonTabs, IonTabBar, IonMenuButton , IonTabButton, IonLabel, IonIcon, IonToggle, IonItem, IonList, IonRouterOutlet } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chatboxSharp, homeSharp, notificationsSharp, personSharp } from 'ionicons/icons';

@Component({
  selector: 'app-sliding-menu',
  standalone:true,
  templateUrl: './sliding-menu.component.html',
  styleUrls: ['./sliding-menu.component.scss'],
  imports: [   IonIcon  , IonLabel  , IonItem , IonList]

})
export class SlidingMenuComponent  implements OnInit {

  constructor() { 
    addIcons({
        notificationsSharp , homeSharp , personSharp , chatboxSharp , 
    })
  }

  ngOnInit() {}

}
