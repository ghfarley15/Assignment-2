import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannerComponent } from './components/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchComponent } from './components/Routing/search.components';
import { HomeComponent } from './components/Routing/home.components';
import { DownloadsComponent } from './components/Routing/downloads.components';
import { SignoutComponent } from './components/Routing/signout.components';
import { Card_oneComponent } from './components/Routing/card_one.components';
import { downloadcards } from './components/download-cards';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './components/user-info.component';
import { NumbersComponent } from './components/Routing/numbers.components';
import { EditUserInfoComponent } from './components/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    BannerComponent,
    LayoutComponent,
    SearchComponent,
    HomeComponent,
    DownloadsComponent,
    SignoutComponent,
    Card_oneComponent,
    downloadcards,
    UserInfoComponent,
    NumbersComponent,
    EditUserInfoComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'skype-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
