import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonSearchbar, IonCard, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonCard, IonSearchbar, IonAvatar, CommonModule,  IonContent],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
    
  }

  companyList = [
    {
      companyImg: "https://i.pravatar.cc/100?img=1",
      companyName: "ITC Pvt Ltd.",
      jobTitle: "Software Engineer",
      location: "Jakarta, Indonesia",
      salary: "$500 - $1,000"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=2",
      companyName: "Globex Corporation",
      jobTitle: "Frontend Developer",
      location: "Bangalore, India",
      salary: "$800 - $1,200"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=3",
      companyName: "Initech Solutions",
      jobTitle: "Backend Developer",
      location: "Manila, Philippines",
      salary: "$700 - $1,100"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=4",
      companyName: "Acme Corp",
      jobTitle: "Full Stack Developer",
      location: "Kuala Lumpur, Malaysia",
      salary: "$1,000 - $1,500"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=5",
      companyName: "Stark Industries",
      jobTitle: "DevOps Engineer",
      location: "Singapore",
      salary: "$1,200 - $1,800"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=6",
      companyName: "Wayne Enterprises",
      jobTitle: "Mobile App Developer",
      location: "Bangkok, Thailand",
      salary: "$900 - $1,400"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=7",
      companyName: "Hooli",
      jobTitle: "Data Analyst",
      location: "Hanoi, Vietnam",
      salary: "$600 - $1,000"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=8",
      companyName: "Umbrella Corp",
      jobTitle: "UI/UX Designer",
      location: "Jakarta, Indonesia",
      salary: "$700 - $1,100"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=9",
      companyName: "Cyberdyne Systems",
      jobTitle: "Machine Learning Engineer",
      location: "Tokyo, Japan",
      salary: "$2,000 - $3,000"
    },
    {
      companyImg: "https://i.pravatar.cc/100?img=10",
      companyName: "Oscorp",
      jobTitle: "Cloud Engineer",
      location: "Seoul, South Korea",
      salary: "$1,500 - $2,200"
    }
  ];
  
  
}
