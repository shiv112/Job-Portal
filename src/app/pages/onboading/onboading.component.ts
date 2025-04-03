import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-onboading',
  templateUrl: './onboading.component.html',
  styleUrls: ['./onboading.component.scss'],
  imports:[IonicModule]
})
export class OnboadingComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  goTowelcomePage (){
      this.router.navigate(['/welcome'])
  }

}
