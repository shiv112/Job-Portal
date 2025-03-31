import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Import Material Icons
import { Route , Router , RouterLink , RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone:true,
  imports:[IonicModule , CommonModule ,MatIconModule ,
     RouterLink , RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
