import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SettingsComponent } from './settings/settings.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HttpModule } from "@angular/http"; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    WishlistComponent,
    SettingsComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
