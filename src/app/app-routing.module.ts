import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import{EntertainmentComponent} from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'general',component:GeneralComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
