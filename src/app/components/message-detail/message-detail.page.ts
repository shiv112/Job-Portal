import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,} from '@ionic/angular/standalone';
import { FooterPage } from "../../shared/footer/footer.page";

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, FooterPage]
})
export class MessageDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
