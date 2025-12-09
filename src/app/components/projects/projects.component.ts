import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../service/project-service.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  navigateToProject(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
}
