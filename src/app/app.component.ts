import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isFooterVisible = false;

  constructor(private router: Router, public menuController: MenuController, private activatedRoute: ActivatedRoute) { }

  openMenu() {
    this.menuController.open();
  }

  isInicioPage() {

    const activePage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path as string;
    return ['menuinter'].includes(activePage);
 }
}
