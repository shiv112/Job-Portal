import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone:true,
  imports:[  IonicModule , MatIconModule , CommonModule],
})
export class ProfileComponent  implements OnInit {

  constructor() { 

  }

  skills = [
    { name: 'PHP', percentage: 86, color: '#E67E22' },
    { name: 'Java', percentage: 48, color: '#27AE60' },
    { name: 'MySQL', percentage: 56, color: '#2980B9' },
    { name: 'React N', percentage: 34, color: '#9B59B6' },
    { name: 'CSS', percentage: 86, color: '#5D3FD3' }
  ];

  // Circle properties
  radius = 40;
  circumference = 2 * Math.PI * this.radius;

  getStrokeOffset(percentage: number): number {
    return this.circumference - (percentage / 100) * this.circumference;
  }

  ngOnInit() {}

}
