import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {HeaderComponent} from './components/parts/header/header.component';
import {FooterComponent} from './components/parts/footer/footer.component';
import {MenuComponent} from './components/parts/menu/menu.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServiceComponent} from './components/service/service.component';
import {SidebarMenuComponent} from './components/parts/sidebar-menu/sidebar-menu.component';
import {ChartsModule} from 'ng2-charts';
import {CanvasComponent} from './components/canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarMenuComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
