import axios from "axios";

export class GithubService {
  constructor(username) {
    this._baseUrl = "https://api.github.com";
    this._username = username;
    this._http = axios.create({
      baseURL: this._baseUrl
    })
  }

  getUserInfo() {
    return this._http.get(`users/${this._username}`);
  }

  getUserRepositories() {
    return this._http.get(`users/${this._username}`);
  }
}