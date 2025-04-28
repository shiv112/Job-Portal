import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonCard } from '@ionic/angular/standalone';
import { FooterPage } from "../../shared/footer/footer.page";
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from "../../shared/header/header.page";
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
  // imports: [IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notifications = [
    {
      title: 'Apply Success',
      message: 'You have applied for a job at Queenify Group as UI Designer',
      time: '10h ago',
      seen: 'read'
    },
    {
      title: 'Interview Scheduled',
      message: 'Your interview is scheduled with DreamCorp',
      time: '2h ago',
      seen: 'not read'
    },
    {
      title: 'Profile Updated',
      message: 'Your profile was successfully updated.',
      time: '5m ago',
      seen: 'read'
    },
    {
      title: 'New Message',
      message: 'You received a new message from XYZ Recruiter.',
      time: '1h ago',
      seen: 'not read'
    },
    {
      title: 'Application Viewed',
      message: 'Your application at TechNova was viewed by the recruiter.',
      time: '3h ago',
      seen: 'read'
    },
    {
      title: 'Job Match Alert',
      message: 'A new job at Cloud9 matches your profile!',
      time: '8h ago',
      seen: 'not read'
    },
    {
      title: 'Resume Downloaded',
      message: 'Your resume was downloaded by a potential employer.',
      time: '12h ago',
      seen: 'read'
    },
    {
      title: 'New Job Posted',
      message: 'Frontend Developer role posted by Skyline Inc.',
      time: '20m ago',
      seen: 'not read'
    }
  ];

  


}
