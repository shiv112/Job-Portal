import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterPage } from "../../shared/footer/footer.page";

import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboading',
  templateUrl: './onboading.page.html',
  styleUrls: ['./onboading.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]

})
export class OnboadingPage implements OnInit {
  

  constructor(
    private router:Router) {  
  }

  ngOnInit() {
    setTimeout(()=>{
       this.goToHomePage();
    } , 2000)
  }
  goToHomePage(){
      this.router.navigate(['home'])
  }

}
