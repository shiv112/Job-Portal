  import { Component } from '@angular/core';
  import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
  import { FooterPage } from "./shared/footer/footer.page";
  import { NavigationEnd, Router } from '@angular/router';
  import { filter } from 'rxjs';
  import { CommonModule } from '@angular/common';
  import {  IonMenu , IonSplitPane} from '@ionic/angular/standalone';
  import { HeaderPage } from "./shared/header/header.page";
  import { SlidingMenuComponent } from "./shared/sliding-menu/sliding-menu.component";

  @Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonApp, IonRouterOutlet, IonSplitPane, IonMenu, CommonModule, HeaderPage, SlidingMenuComponent],
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
