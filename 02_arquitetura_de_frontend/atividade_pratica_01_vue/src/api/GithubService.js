import axios from "axios";

export class GithubService {
  constructor() {
    this._baseUrl = "https://api.github.com";
    this._username = "marcusbalbi";
    this._http = axios.create({
      baseURL: this._baseUrl
    })
  }

  getUserInfo() {
    return this._http.get(`users/${this._username}`);
  }

  getUserRepositories(perPage = 15) {
    return this._http.get(`users/${this._username}/repos?per_page=${perPage}`);
  }
  getUserFollowers(perPage = 15) {
    return this._http.get(`users/${this._username}/followers?per_page=${perPage}`);
  }
}