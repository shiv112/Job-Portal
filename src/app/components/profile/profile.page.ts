import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { callSharp, locationSharp, mailSharp } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [ IonicModule,CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  constructor() { 
    addIcons({callSharp,mailSharp,locationSharp});
  }

  ngOnInit() {
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


}
