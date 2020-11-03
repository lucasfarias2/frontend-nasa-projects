import axios from 'axios';
import data from '../../../data.json';
import data_project from '../../../data_project.json';

class ProjectService {
  public API_URL: string;
  public API_KEY: string;

  constructor() {
    this.API_URL = 'https://api.nasa.gov/techport/api';
    this.API_KEY = 'FpvQGkOQ3wInbQRk0Cuos9FMuCcdmK417K1uHzoq';
  }

  public async fetchProjects(offset: number = 0, limit: number = 6) {
    // const response = await axios.get(`${this.API_URL}/projects`, {
    //   params: { updatedSince: '2020-10-30', api_key: this.API_KEY },
    // });

    // if (response.data && response.data.projects && response.data.projects.projects) {
    return this.marshallProjects(data.projects, offset, limit);
    // } else {
    //   return [];
    // }
  }

  public async fetchProjectDetails(projectId: string) {
    return this.marshallProjectDetails(data_project);
  }

  private marshallProjects(projectsResponse: IProjectsResponse, offset: number, limit: number) {
    return projectsResponse.projects.slice(offset, limit);
  }

  private marshallProjectDetails(projectResponse: IProjectDetailsResponse) {
    if (projectResponse.project) {
      const projectDto: IProject = {
        id: projectResponse.project.id,
        lastUpdated: projectResponse.project.lastUpdated,
        title: projectResponse.project.title,
        description: projectResponse.project.description,
        status: projectResponse.project.status,
        endDate: projectResponse.project.endDate,
        startDate: projectResponse.project.startDate,
      };

      return projectDto;
    } else {
      return {};
    }
  }
}

interface IProject {
  id: number;
  lastUpdated: string;
  title?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

interface IProjectsResponse {
  projects: IProject[];
}

interface IProjectDetailsResponse {
  project: IProject;
}

export default new ProjectService();
