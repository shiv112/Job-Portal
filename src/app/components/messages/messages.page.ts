import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterPage } from "../../shared/footer/footer.page";
// import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonAvatar, IonList, IonSearchbar, RouterLink, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, FooterPage]
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
    },
    {
      id: 11,
      name: 'Emily Carter',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      lastMessage: 'See you tomorrow!',
      time: 'Mon',
      unread: 2
    },
    {
      id: 12,
      name: 'Michael Scott',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      lastMessage: 'That’s what she said.',
      time: 'Wed',
      unread: 0
    },
    {
      id: 13,
      name: 'Sophie Turner',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      lastMessage: 'Let me know when you’re free.',
      time: 'Fri',
      unread: 1
    },
    {
      id: 14,
      name: 'Daniel Kim',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      lastMessage: 'I’ve sent the files.',
      time: 'Thu',
      unread: 3
    },
    {
      id: 15,
      name: 'Lily Nguyen',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      lastMessage: 'Great job on the presentation!',
      time: 'Today',
      unread: 0
    },
    {
      id: 16,
      name: 'Ryan Patel',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      lastMessage: 'Let’s catch up soon.',
      time: 'Yesterday',
      unread: 5
    },
    {
      id: 17,
      name: 'Chloe Martin',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      lastMessage: 'Can you review this?',
      time: 'Sat',
      unread: 0
    },
    {
      id: 18,
      name: 'Oscar Rivera',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      lastMessage: 'Thanks!',
      time: 'Sun',
      unread: 0
    },
    {
      id: 19,
      name: 'Ava Johnson',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      lastMessage: 'Happy Birthday!',
      time: 'Today',
      unread: 1
    },
    {
      id: 20,
      name: 'Jake Thomas',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      lastMessage: 'Check your inbox.',
      time: 'Tue',
      unread: 4
    }
  ];
  
}
