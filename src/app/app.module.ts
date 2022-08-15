import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { EducationComponent } from './components/education/education.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutusComponent,
    SkillsComponent,
    ExperianceComponent,
    EducationComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
