import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {ArtistDetailComponent} from "./artist-detail/artist-detail.component";

const routes: Routes = [{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'search',
  component:SearchComponent,
  pathMatch:'full'
},{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'artist/:id',
  component:ArtistDetailComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
