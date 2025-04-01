import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";

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

  constructor() { }
  
  ngOnInit() {}

}
