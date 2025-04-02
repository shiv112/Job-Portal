import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonicModule, FormsModule] ,
})
export class RegisterComponent  implements OnInit {
passwordVisibility: any;
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
  fullName = 'Henry Kanwil';
  email = 'henrykanwil@mail.com';
  password = '';
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  constructor() { }

  ngOnInit() {}

}
