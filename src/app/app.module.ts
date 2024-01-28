import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FooterService } from './footer.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, MenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [FooterService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, BrowserModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}
