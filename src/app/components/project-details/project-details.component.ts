import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../service/project-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  project: Project | undefined;
  projectList: Project[] = [];
  currentIndex: number = 0;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router,) {
  }
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(projects => {
      this.projectList = projects;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.projectList.findIndex(project => project.id === id);
          this.project = this.projectList[this.currentIndex];
        }
      })
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
  goForward(): void {
    if(this.currentIndex < this.projectList.length - 1)
    {
      this.currentIndex++;
      this.router.navigate(['/projects', this.projectList[this.currentIndex].id]);
    }
  }
  goBackward(): void {
    if(this.currentIndex > 0)
    {
      this.currentIndex--;
      this.router.navigate(['/projects', this.projectList[this.currentIndex].id]);
    }
  }
}
