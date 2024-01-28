import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private menuController: MenuController, private footerService: FooterService) { }
  
  ngOnInit() {
    if (localStorage.getItem('myComponentUrl') === '/home') {
      this.router.navigate(['menuinter']);
    }
    this.footerService.setFooterVisible(false);
  }
  
  iniciar() {
    localStorage.setItem('myComponentUrl', this.router.url);
    this.router.navigate(['menuinter']);
  }

  isInicioPage() {
    const activePage = this.router.url;
    return ['/home', '/configuracion'].includes(activePage);
 }
  openMenu() { this.menuController.open(); }
}
