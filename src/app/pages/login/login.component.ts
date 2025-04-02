import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmarkOutline } from 'ionicons/icons';

addIcons({
  'bookmark-outline': bookmarkOutline
});
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule]
})
export class LoginComponent  implements OnInit {
  username = '';
  password = '';
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private router: Router) { }
  
  ngOnInit() {}
  
  goToCreatAccPage() {
      this.router.navigate(['/register']);
  }
 
  

}
