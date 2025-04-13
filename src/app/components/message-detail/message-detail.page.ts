import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [ IonContent, CommonModule, FormsModule]
})
export class MessageDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
