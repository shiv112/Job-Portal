import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplyformsComponent } from './pages/applyforms/applyforms.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessagesDetailsComponent } from './pages/messages-details/messages-details.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SplashcreenComponent } from './pages/splashcreen/splashcreen.component';
import { OnboadingComponent } from './pages/onboading/onboading.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


export const routes: Routes = [
    {
        path:'' , component:SplashcreenComponent
    }, {
        path:'onboarding' , component:OnboadingComponent
    },{
        path:'welcome' , component:WelcomeComponent
    },
    {
        path:'notification' , component:NotificationsComponent
    },
    {
        path:'splashcreen' , component:SplashcreenComponent
    } 
    ,{
        path:'home' , component:DashboardComponent
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
        path:'messagedetails', component:MessagesDetailsComponent
    },
    {
        path:'login' , component:LoginComponent
    },
    {
        path:'register' , component:RegisterComponent
    }
];

