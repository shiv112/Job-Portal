import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationSharp, bookmarkOutline, add, logoUsd, bookmarkSharp } from 'ionicons/icons';
import { FooterPage } from "../../shared/footer/footer.page";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterPage]
})
export class JobDetailsPage implements OnInit {
goToApplyForm() {
throw new Error('Method not implemented.');
}

  constructor() { 
    addIcons({bookmarkOutline,logoUsd,locationSharp,bookmarkSharp,add});
  }

  ngOnInit() {
  }

}
