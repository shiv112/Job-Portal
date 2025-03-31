import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [IonicModule, FooterComponent , MatBadgeModule]
})
export class MessagesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
}
