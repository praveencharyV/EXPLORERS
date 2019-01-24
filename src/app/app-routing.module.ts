import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { DISCUSSIONPORTALComponent } from './discussionportal/discussionportal.component';
import { OURPROJECTSComponent } from './ourprojects/ourprojects.component';
import { OURTEAMComponent } from './ourteam/ourteam.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: ABOUTUSComponent },
  { path: 'team', component: OURTEAMComponent },
  { path: 'projects', component: OURPROJECTSComponent },
  { path: 'discussions', component: DISCUSSIONPORTALComponent },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
