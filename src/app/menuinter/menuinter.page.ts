import { Component, OnInit } from '@angular/core'; import { MenuController } from '@ionic/angular'; import { Router } from '@angular/router'; import { Browser } from '@capacitor/browser'; import { FooterService } from '../footer.service'; @Component({ selector: 'app-menuinter', templateUrl: './menuinter.page.html', styleUrls: ['./menuinter.page.scss'], })
export class MenuinterPage implements OnInit {
  constructor(private router: Router, private menuController: MenuController, private footerService: FooterService) { }
  ngOnInit() { if (localStorage.getItem('myComponentUrl') === null) { this.router.navigate(['home']); } this.footerService.setFooterVisible(true); }
  openMenu() { this.menuController.open(); }
  async gotopage1() { await this.menuController.close(); Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/conocenos/organigrama'}); }
  async gotopage2(){ await this.menuController.close(); Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/#programas' });}
  async gotopage3(){ await this.menuController.close(); Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/trans/proabim/pbmnm' }); }
  async gotoproa(){ await this.menuController.close(); Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/trans/proabim' }); }
  async gotopaimef(){ await this.menuController.close(); Browser.open({ url: 'https://linktr.ee/unidadmovilpaimef' }); }
}