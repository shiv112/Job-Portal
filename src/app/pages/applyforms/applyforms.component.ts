import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";


@Component({
  selector: 'applyforms',
  templateUrl: './applyforms.component.html',
  styleUrls: ['./applyforms.component.scss'],
  imports: [IonicModule, FormsModule] 
})
export class ApplyformsComponent  implements OnInit {

  applicant = {
    name: '',
    email: '',
    phone: '',
    resume: null
  };

  constructor() {}
  submitApplication(){}
  uploadResume(){}
  ngOnInit() {}

}
