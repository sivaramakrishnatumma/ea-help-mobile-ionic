import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { baseURL } from "../../constants/constants";

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  constructor(public http: HttpClient) {
    console.log("Hello DataServiceProvider Provider");
  }

  getProducts() {
    return this.http.get(`${baseURL}/products/`);
  }

  getPlatforms(platforms) {
    return this.http.post(`${baseURL}/platforms/`, {
      platforms
    });
  }

  getTopics(topics) {
    return this.http.post(`${baseURL}/topics/`, { topics });
  }

  getIssues(issues) {
    return this.http.post(`${baseURL}/issues/`, { issues });
  }
}
