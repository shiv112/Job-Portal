import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";
import {MatBadgeModule} from '@angular/material/badge';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [IonicModule , MatBadgeModule,
    RouterModule]
})
export class MessagesComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  goToDetails() {
    this.router.navigate(['/formComponent']);
  }
  
}
