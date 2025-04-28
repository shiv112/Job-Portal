  import { Component } from '@angular/core';
  import { NavigationEnd, Router, RouterLink } from '@angular/router';
  import { filter } from 'rxjs';
  import { IonicModule , IonSplitPane } from '@ionic/angular';
  @Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonicModule,RouterLink ],
    // imports: [IonApp, IonRouterOutlet, IonSplitPane, IonMenu, CommonModule, HeaderPage, SlidingMenuComponent],
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
