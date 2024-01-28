import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {}

  async gotopage3(){
    await this.menuController.close();
    Browser.open({ url: 'https://mujer.tlaxcala.gob.mx/index.php/trans/proabim/pbmnm' });
  }
}
