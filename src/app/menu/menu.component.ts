import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {}

  async gotopage1() {
    await this.menuController.close();
    //this.router.navigate(["enlace1ext"]);
    Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/conocenos/organigrama' });
  }

  async gotopage2(){
    await this.menuController.close();
    //this.router.navigate(["enlace2ext"]);
    Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/#programas' });
  }

  async gotopage3(){
    await this.menuController.close();
    //this.router.navigate(["enlace3ext"]);
    Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/trans/proabim/pbmnm' });
  }

  async gotoproa(){
    await this.menuController.close();
    //this.router.navigate(["enlace3ext"]);
    Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/trans/proabim' });
  }

  async gotopaimef(){
    await this.menuController.close();
    //this.router.navigate(["enlace3ext"]);
    Browser.open({ url: 'https://linktr.ee/unidadmovilpaimef' });
  }

  async gotohome(){
    await this.menuController.close();
    this.router.navigate(["home"]);
  }


}
