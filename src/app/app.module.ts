import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {NiceFooterComponent} from './nice-footer/nice-footer.component';
import {LecturesComponent} from './lectures/lectures.component';
import {BreweryComponent} from './brewery/brewery.component';
import {FormsModule} from "@angular/forms";
import {BankViewComponent} from './bank-view/bank-view.component';
import {OnlineBankingComponent} from './online-banking/online-banking.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BiuletynComponent} from './biuletyn/biuletyn.component';
import {PostViewComponent} from "./biuletyn/post-view/post-view.component";
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    NiceFooterComponent,
    LecturesComponent,
    BreweryComponent,
    BankViewComponent,
    OnlineBankingComponent,
    BiuletynComponent,
    PostViewComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
