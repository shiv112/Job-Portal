import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Import only standalone Ionic components that you are using
import {
  IonContent,
  
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
  
  ]
})
export class MessageDetailPage implements OnInit {
  constructor() {}
  ngOnInit() {}
}
