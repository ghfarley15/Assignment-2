import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Card_oneComponent } from './components/Routing/card_one.components';
import { DownloadsComponent } from './components/Routing/downloads.components';
import { HomeComponent } from './components/Routing/home.components';
import { NumbersComponent } from './components/Routing/numbers.components';
import { SearchComponent } from './components/Routing/search.components';
import { SignoutComponent } from './components/Routing/signout.components';



const routes: Routes = [
{path: 'home', component: HomeComponent,},
{path: 'search', component: SearchComponent},
{path: 'downloads', component: DownloadsComponent},
{path: 'signout', component: SignoutComponent},
{path: 'card_one', component: Card_oneComponent},
{path: 'numbers', component: NumbersComponent},
{path: 'auth', component: AuthComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   
  
})
export class AppRoutingModule { } 