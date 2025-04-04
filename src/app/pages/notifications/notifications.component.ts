import { Component, OnInit } from '@angular/core';
import { IonApp, IonContent } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [IonicModule]
})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
