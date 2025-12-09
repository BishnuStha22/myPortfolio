import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Weather App',
      description: 'This Weather app is a simple and responsive web application that shows live updates about the weather information for any city the user enters. This app connects to the weather API to get real-time data like temperature, humidity, wind speed, and conditions. This app is made by using simple JavaFX and OOP concepts.',
      image: 'assets/images/clouds.jpg'
    },
    {
      id: 2,
      name: 'Memory Match',
      description: 'The Memory Match game is a fun memory game made with JavaFX components and OOP concepts. In this game, players must flip two cards at a time to find the matching pairs. This game includes a timer to track the attempts, making it both entertaining and challenging at the same time. It helped me to better understand how JavaFX components function.',
      image: 'assets/images/memorymatch.png'
    },
    {
      id: 3,
      name: 'Simple Calculator',
      description: 'This is a basic calculator made with Python that performs addition, subtraction, multiplication, and division. It is super easy to understand and use, with clickable buttons and a display screen. Building this project helped me to improve my understanding of math operands and the logic to write code.',
      image: 'assets/images/calculator.jpg'
    },
    {
      id: 4,
      name: 'Portfolio Website',
      description: 'This is a personal portfolio website created using HTML and CSS to showcase my skills, education, and projects. This website includes sections like "About Me," "Projects," "Main," and "Contact," all in a clean, responsive layout. Completing this project helped me understand web designing and structure handling which could serve as my resume for potential interviews and others.',
      image: 'assets/images/webpageportfolio.png'
    },
    {
      id: 5,
      name: 'ApexLiveSocial',
      description: 'ApexLiveSocial is an event management application built with JavaFX that allows users to create, organize, and manage events efficiently. This application features user authentication, event scheduling, attendee management, and reporting of events. The project demonstrates advanced JavaFX concepts including scene management, data persistence, and intuitive UI design to streamline event planning and coordination.',
      image: 'assets/images/apexlivesocial.png'
    },
    {
      id: 6,
      name: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game built with JavaFX featuring both single-player (vs computer) and two-player modes. The game includes an intelligent AI opponent with different difficulty levels, score tracking, and a clean, interactive interface. This project helped me understand game logic, AI algorithms, and event handling in JavaFX.',
      image: 'assets/images/tictactoe.png'
    }
  ];

  constructor() {}

  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id:number): Observable<Project | undefined> {
    return of (this.projects.find(project => project.id === id));
  }

}
