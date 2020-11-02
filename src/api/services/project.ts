import axios from 'axios';

class ProjectService {
  public API_URL: string;
  public API_KEY: string;

  constructor() {
    this.API_URL = 'https://api.nasa.gov/techport/api';
    this.API_KEY = 'FpvQGkOQ3wInbQRk0Cuos9FMuCcdmK417K1uHzoq';
  }

  public async fetchProjects() {
    const response = await axios.get(`${this.API_URL}/projects`, { params: { api_key: this.API_KEY } });

    if (response.data && response.data.projects && response.data.projects.projects) {
      return this.marshallProjects(response.data.projects.projects);
    } else {
      return {};
    }
  }

  private marshallProjects(projects: IProject[]) {
    return projects.slice(0, 6);
  }
}

interface IProject {
  id: string;
  lastUpdated: string;
}

export default new ProjectService();
