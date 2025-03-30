import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplyformsComponent } from './pages/applyforms/applyforms.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessagesDetailsComponent } from './pages/messages-details/messages-details.component';


export const routes: Routes = [
    {
        path:'' , component:DashboardComponent
    },
    {
        path:'formComponent' , component:ApplyformsComponent
    } ,
    {
        path:'jobDetails' , component:JobdetailsComponent
    },
    {
        path:'profile' , component:ProfileComponent
    }
    ,
    {
        path:'message' , component:MessagesComponent
    },
    {
        path:'messageDetails', component:MessagesDetailsComponent
    }
];

