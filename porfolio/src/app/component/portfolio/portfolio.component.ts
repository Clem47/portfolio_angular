import { Component } from '@angular/core';
import { Iprojects } from 'src/app/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-portfolio',
  template: `
  <div class="container mx-auto max-w-full flex flex-row flex-wrap mt-10 justify-center items-center">
    <div *ngFor="let project of projects" class="max-w-lg mx-16 mt-10">
        <app-project-card [proj] = "project" ></app-project-card>
    </div>
  </div>
  `,
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  public projects : Iprojects[] = [];
  constructor(private _projectService : ProjectsService){
  }
  ngOnInit(){
    this._projectService.getProjects().subscribe(data =>( this.projects = data));
  }
}
