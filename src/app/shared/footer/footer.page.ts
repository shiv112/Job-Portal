import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonToolbar, IonFooter, IonIcon, IonButton } from '@ionic/angular/standalone';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  standalone: true,
  imports: [IonButton,  IonFooter, MatIconModule ,RouterLink  ,IonToolbar, CommonModule, FormsModule]
})
export class FooterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
