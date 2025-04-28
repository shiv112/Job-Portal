  import { Component } from '@angular/core';
  import {  NavigationEnd, Router, RouterLink } from '@angular/router';
  import { filter } from 'rxjs';
  import { IonRouterOutlet, IonMenuToggle , IonApp , IonToolbar,IonSplitPane , IonHeader, IonContent, IonMenu, IonItem, IonIcon, IonLabel, IonTitle, IonList, IonAvatar } from '@ionic/angular/standalone';
  @Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: 'app.component.html',
    imports: [IonRouterOutlet, IonMenuToggle , IonApp , IonToolbar ,IonSplitPane , IonHeader, IonContent, IonMenu, IonItem, IonTitle ,IonLabel, IonList, IonAvatar],
  })
  export class AppComponent {
    showFooter: boolean | undefined;
    constructor(private router: Router) {
      this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const url = event.urlAfterRedirects;

          // Pages where footer should NOT be shown
          const hiddenFooterRoutes = [
            '/splashcreen',
            '/onboading',
            '/welcomescreen',
            '/login-page',
            '/register-page',
            
          ];

          this.showFooter = !hiddenFooterRoutes.includes(url);
        });
      }
  }
