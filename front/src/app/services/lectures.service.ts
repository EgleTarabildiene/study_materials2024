import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecture } from '../models/lecture';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  constructor(private http:HttpClient) { }
 
  public getLectures(){
    return this.http.get<Lecture[]>('http://localhost:4999/lectures/');
  }

  public getLecture(id:number){
    return this.http.get<Lecture>('http://localhost:4999/lectures/'+id);
  }

  public addLecture(lecture:Lecture){
    return this.http.post('http://localhost:4999/lectures/', lecture);
  }

  public updateLecture(lecture:Lecture){
    return this.http.put('http://localhost:4999/lectures/', lecture);
  }

  public deleteLecture(id:number){
    return this.http.delete('http://localhost:4999/lectures/'+id);
  }
}

