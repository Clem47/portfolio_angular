import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs" 
import { Iprojects } from '../projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _url: string = "./assets/data/project.json"

  constructor(private http : HttpClient) { }

  getProjects() : Observable<Iprojects[]> {
    return this.http.get<Iprojects[]>(this._url);
  }
}
