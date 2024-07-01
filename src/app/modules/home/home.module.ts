import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { SplitPipe } from './pipe/split.pipe';


@NgModule({
    declarations: [
        HomeComponent,
        IntroComponent,
        AboutComponent,
        ExperianceComponent,
        SkillsComponent,
        EducationComponent,
        ContactComponent,
        SplitPipe
    ],
    imports: [
      SharedModule,
        CommonModule,
        HomeRoutingModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
    ],
    exports: [
      IntroComponent,
      ContactComponent
    ]
})
export class HomeModule { }
