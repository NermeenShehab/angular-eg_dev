import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password'; //add input password from primeng
import {ChipsModule} from 'primeng/chips';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FileUploadModule} from 'primeng/fileupload';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionComponent } from './Components/freelancerDashboard/left-section/left-section.component';
import { ProgressComponent } from './Components/freelancerDashboard/progress/progress.component';
import { ActiveJobsComponent } from './Components/freelancerDashboard/active-jobs/active-jobs.component';
import { FeedsComponent } from './Components/freelancerDashboard/feeds/feeds.component';
import { HomeFreelancerDashboardComponent } from './Components/freelancerDashboard/home-freelancer-dashboard/home-freelancer-dashboard.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { ChartModule } from 'primeng/chart';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ListPortfolioComponent } from './Components/portfolio/list-portfolio/list-portfolio.component';
import { AddPortfolioComponent } from './Components/portfolio/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './Components/portfolio/edit-portfolio/edit-portfolio.component';
import { DeletePortfolioComponent } from './Components/portfolio/delete-portfolio/delete-portfolio.component';
import {CardModule} from 'primeng/card';
import { ViewPortfolioComponent } from './Components/portfolio/view-portfolio/view-portfolio.component';
import { TagModule } from 'primeng/tag';
import { CatagoriesComponent } from './Components/catagory/catagories/catagories.component';
import { SelectedCatComponent } from './Components/catagory/selected-cat/selected-cat.component';
import { CityPipe } from './Components/catagory/selected-cat/city.pipe';
import { NamePipe } from './Components/catagory/selected-cat/name.pipe';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';
import { LeftComponent } from './Components/profile/left/left.component';
import { LeftdocumentationComponent } from './Components/profile/leftdocumentation/leftdocumentation.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { RightComponent } from './Components/profile/right/right.component';
import { SettingComponent } from './Components/setting/setting.component';
import { LeftinfoComponent } from './Components/setting/leftinfo/leftinfo.component';
import { RightinfoComponent } from './Components/setting/rightinfo/rightinfo.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { HomeSection1Component } from './Components/Home/home-section1/home-section1.component';
import { HomeSection2Component } from './Components/Home/home-section2/home-section2.component';
import { HomeSection3Component } from './Components/Home/home-section3/home-section3.component';
import { HomeSection4Component } from './Components/Home/home-section4/home-section4.component';
import { HomeSection5Component } from './Components/Home/home-section5/home-section5.component';
import { HomeSection6Component } from './Components/Home/home-section6/home-section6.component';
import { HomeSection7Component } from './Components/Home/home-section7/home-section7.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';

//signup
import { EmailComponent } from './Components/SignUp/email/email.component';
import { ResultComponent } from './Components/SignUp/result/result.component';
import { PersonalComponent } from './Components/SignUp/personal/personal.component';
import { SignUpNavbarComponent } from './Components/SignUp/signUp-navbar/signUp-navbar.component';
import { SignUpComponent } from './Components/SignUp/SignUp/SignUp.component';
import { WorkComponent } from './Components/SignUp/work/work.component';
import { FormDataService } from './Components/SignUp/data/formData.service';
import { WorkflowService } from './Components/SignUp/workflow/workflow.service';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSectionComponent,
    ProgressComponent,
    ActiveJobsComponent,
    FeedsComponent,
    HomeFreelancerDashboardComponent,
    ListPortfolioComponent,
    AddPortfolioComponent,
    EditPortfolioComponent,
    DeletePortfolioComponent,
    ViewPortfolioComponent,
    CatagoriesComponent,
    SelectedCatComponent,
    CityPipe,
    NamePipe,
    EditprofileComponent,
    LeftComponent,
    LeftdocumentationComponent,
    ProfileComponent,
    RightComponent,
    SettingComponent,
    LeftinfoComponent,
    RightinfoComponent,
    AboutComponent,
    ContactComponent,
    JobsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HomeSection1Component,
    HomeSection2Component,
    HomeSection3Component,
    HomeSection4Component,
    HomeSection5Component,
    HomeSection6Component,
    HomeSection7Component,

    //sign up


    EmailComponent,
    PersonalComponent,
    ResultComponent,
    SignUpComponent,
    SignUpNavbarComponent,
    WorkComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ChartModule,
    RatingModule,
    FormsModule,
    CardModule,
    TagModule,
    ChipsModule,
    PasswordModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CalendarModule,
    NgImageSliderModule,
    CarouselModule,
    FileUploadModule,
    HttpClientModule,

        //signup
        InputMaskModule,
        InputTextareaModule,
  ],
  providers: [
    //signup
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
