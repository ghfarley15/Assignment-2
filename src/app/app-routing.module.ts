import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './components/Routing/downloads.components';
import { HomeComponent } from './components/Routing/home.components';
import { SearchComponent } from './components/Routing/search.components';


const routes: Routes = [
{path: 'home', component: HomeComponent,},
{path: 'search', component: SearchComponent},
{path: 'downloads', component: DownloadsComponent}


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   
  
})
export class AppRoutingModule { }