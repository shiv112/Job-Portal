import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonTitle, IonButtons, IonBackButton, IonToolbar, IonHeader, IonApp } from "@ionic/angular/standalone"
import { FooterComponent } from "../../shared/footer/footer.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-messages-details',
  templateUrl: './messages-details.component.html',
  styleUrls: ['./messages-details.component.scss'],
  imports: [IonicModule],

})
export class MessagesDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
