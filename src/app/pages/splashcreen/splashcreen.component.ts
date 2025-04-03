import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splashcreen',
  templateUrl: './splashcreen.component.html',
  styleUrls: ['./splashcreen.component.scss'],
  imports:[IonicModule]
})
export class SplashcreenComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToOnboarding(){
    this.router.navigate(['/onboarding'])
  }

}
