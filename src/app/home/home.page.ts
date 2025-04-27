import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from "../shared/header/header.page";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, HeaderPage],
  // imports: [IonCard, IonSearchbar, IonAvatar, RouterLink, CommonModule, IonContent],
})
export class HomePage implements OnInit {
  constructor() {}

  // pageName = 'Home';

  ngOnInit(): void {
    
    
  }

  companyList = [
    {
      companyImg: "https://logo.clearbit.com/itcportal.com",
      companyName: "ITC Pvt Ltd.",
      jobTitle: "Software Engineer",
      location: "Jakarta, Indonesia",
      salary: "$500 - $1,000"
    },
    {
      companyImg: "https://logo.clearbit.com/globex.com",
      companyName: "Globex Corporation",
      jobTitle: "Frontend Developer",
      location: "Bangalore, India",
      salary: "$800 - $1,200"
    },
    {
      companyImg: "https://logo.clearbit.com/initech.com",
      companyName: "Initech Solutions",
      jobTitle: "Backend Developer",
      location: "Manila, Philippines",
      salary: "$700 - $1,100"
    },
    {
      companyImg: "https://logo.clearbit.com/acme.com",
      companyName: "Acme Corp",
      jobTitle: "Full Stack Developer",
      location: "Kuala Lumpur, Malaysia",
      salary: "$1,000 - $1,500"
    },
    {
      companyImg: "https://logo.clearbit.com/starkindustries.com", // fictional
      companyName: "Stark Industries",
      jobTitle: "DevOps Engineer",
      location: "Singapore",
      salary: "$1,200 - $1,800"
    },
    {
      companyImg: "https://logo.clearbit.com/wayneenterprises.com", // fictional
      companyName: "Wayne Enterprises",
      jobTitle: "Mobile App Developer",
      location: "Bangkok, Thailand",
      salary: "$900 - $1,400"
    },
    {
      companyImg: "https://logo.clearbit.com/hooli.xyz", // from Silicon Valley TV show
      companyName: "Hooli",
      jobTitle: "Data Analyst",
      location: "Hanoi, Vietnam",
      salary: "$600 - $1,000"
    },
    {
      companyImg: "https://logo.clearbit.com/umbrella-corporation.com", // fictional
      companyName: "Umbrella Corp",
      jobTitle: "UI/UX Designer",
      location: "Jakarta, Indonesia",
      salary: "$700 - $1,100"
    },
    {
      companyImg: "https://logo.clearbit.com/cyberdynesystems.com", // fictional
      companyName: "Cyberdyne Systems",
      jobTitle: "Machine Learning Engineer",
      location: "Tokyo, Japan",
      salary: "$2,000 - $3,000"
    },
    {
      companyImg: "https://logo.clearbit.com/oscorp.com", // fictional
      companyName: "Oscorp",
      jobTitle: "Cloud Engineer",
      location: "Seoul, South Korea",
      salary: "$1,500 - $2,200"
    }
  ];
  
  
  
}
