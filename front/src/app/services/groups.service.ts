import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient, private authService:AuthService) { }
 
  public getGroups(){
    return this.http.get<Group[]>('http://localhost:4999/groups/');
  }

  public getGroup(id:number){
    return this.http.get<Group>('http://localhost:4999/groups/'+id);
  }

  public addGroup(group:Group){
    return this.http.post('http://localhost:4999/groups/', group);
  }

  public updateGroup(group:Group){
    return this.http.put('http://localhost:4999/groups/', group);
  }

  public deleteGroup(id:number){
    return this.http.delete('http://localhost:4999/groups/'+id);
  }
}

