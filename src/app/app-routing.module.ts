import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './Components/catagory/catagories/catagories.component';
import { SelectedCatComponent } from './Components/catagory/selected-cat/selected-cat.component';
import { HomeFreelancerDashboardComponent } from './Components/freelancerDashboard/home-freelancer-dashboard/home-freelancer-dashboard.component';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { SettingComponent } from './Components/setting/setting.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { AddPortfolioComponent } from './Components/portfolio/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './Components/portfolio/edit-portfolio/edit-portfolio.component';
import { ListPortfolioComponent } from './Components/portfolio/list-portfolio/list-portfolio.component';
import { ViewPortfolioComponent } from './Components/portfolio/view-portfolio/view-portfolio.component';



// //signup
import { PersonalComponent } from "./Components/SignUp/personal/personal.component";
import { EmailComponent } from "./Components/SignUp/email/email.component";
import { WorkflowGuard } from "./Components/SignUp/workflow/workflow-guard.service";
import { WorkComponent } from "./Components/SignUp/work/work.component";

import { ResultComponent } from "./Components/SignUp/result/result.component";
import { LoginComponent } from "./Components/login/login.component";


const routes: Routes = [
  {path:"Catagories",component:CatagoriesComponent },
  {path: "Catagories/:name",component: SelectedCatComponent },
  {path:"dashboard",component:HomeFreelancerDashboardComponent},
  {path:"listportfolio",component:ListPortfolioComponent},
  {path:"viewportfolio",component:ViewPortfolioComponent},
  {path:"addportfolio",component:AddPortfolioComponent},
  {path:"editportfolio" , component:EditPortfolioComponent},
  {path:"profile",component:ProfileComponent},
  {path:"setting",component:SettingComponent},
  {path:"editProfile",component:EditprofileComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component: AboutComponent},
  {path:"jobs",component:JobsComponent},
  {path:"home",component:HomeComponent},

//signup
  // 1st Route
  { path: "SignUp/personal", component: PersonalComponent},
   // 2nd Route
  { path: "SignUp/email", component: EmailComponent, canActivate: [WorkflowGuard]  },
  // 3rd Route
  { path: "SignUp/work", component: WorkComponent, canActivate: [WorkflowGuard]  },
  // 4th Route
  { path: "SignUp/result", component: ResultComponent, canActivate: [WorkflowGuard]  },

  //login
  { path: "login", component:LoginComponent},

  {path:"",redirectTo:"home" , pathMatch:"full"}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WorkflowGuard],
})
export class AppRoutingModule { }
