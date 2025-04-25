import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonIcon,  IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { FooterPage } from "../../shared/footer/footer.page";
import { addIcons } from 'ionicons';
import { starOutline, callSharp, mailSharp, locationSharp } from 'ionicons/icons';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
  standalone: true,
  imports: [ IonBackButton, IonButtons, IonToolbar ,IonIcon , IonTitle, IonContent, CommonModule, FormsModule]
})
export class CompanyDetailsPage implements OnInit {

  constructor() {
        addIcons({starOutline,callSharp,mailSharp,locationSharp});
    
   }

  ngOnInit() {
  }

}
