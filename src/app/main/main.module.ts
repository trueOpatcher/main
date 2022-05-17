import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { EpilogComponent } from './epilog/epilog.component';


@NgModule({
    declarations: [
        MainComponent,
        ProjectsComponent,
        SkillsComponent,
        AboutComponent,
        EpilogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MainRoutingModule
    ]
})

export class MainModule {

}