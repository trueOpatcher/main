import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { EpilogComponent } from "./epilog/epilog.component";
import { MainComponent } from "./main.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";


const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
            path: ''
            },
            {
                path: 'skills', component: SkillsComponent
            },
            {
                path: 'about', component: AboutComponent
            },
            {
                path: 'projects', component: ProjectsComponent
            },
            {
                path: 'epilog', component: EpilogComponent
            }
        ]
    }
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}