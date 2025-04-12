import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
// import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone: true,
  imports: [IonLabel,IonItem,IonAvatar, IonList, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MessagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chatList = [
    {
      id: 1,
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      lastMessage: 'Hey! Are we still on for tomorrow?',
      time: '10:45 AM',
      unread: 2
    },
    {
      id: 2,
      name: 'Bob Smith',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      lastMessage: 'Thanks for the update!',
      time: '9:30 AM',
      unread: 0
    },
    {
      id: 3,
      name: 'Carol Lee',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      lastMessage: 'Let me know when you’re free.',
      time: 'Yesterday',
      unread: 5
    },
    {
      id: 4,
      name: 'David Kim',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      lastMessage: 'Meeting rescheduled to 3 PM.',
      time: 'Mon',
      unread: 1
    },
    {
      id: 5,
      name: 'Eva Green',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      lastMessage: 'Can you send me that file?',
      time: 'Sun',
      unread: 0
    },
    {
      id: 6,
      name: 'Frank Miller',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      lastMessage: 'Looking forward to our call.',
      time: 'Sat',
      unread: 3
    },
    {
      id: 7,
      name: 'Grace Adams',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      lastMessage: 'Lunch tomorrow?',
      time: 'Fri',
      unread: 0
    },
    {
      id: 8,
      name: 'Henry Walker',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      lastMessage: 'Got it, thanks!',
      time: 'Thu',
      unread: 0
    },
    {
      id: 9,
      name: 'Isabella Scott',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      lastMessage: 'I’ll send the files shortly.',
      time: 'Wed',
      unread: 1
    },
    {
      id: 10,
      name: 'Jake Thomas',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      lastMessage: 'Check your inbox.',
      time: 'Tue',
      unread: 4
    }
  ];
  
}
