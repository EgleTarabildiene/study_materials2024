import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  
  
  public getCourses(){
    return this.http.get<Course[]>('http://localhost:4999/courses/');
  }

  public getCourse(id:number){
    return this.http.get<Course>('http://localhost:4999/courses/'+id);
  }

  public addCourse(course:Course){
    return this.http.post('http://localhost:4999/courses/',course);
  }

  public updateCourse(course:Course){
    return this.http.put('http://localhost:4999/courses/',course);
  }

  public deleteCourse(id:number){
    return this.http.delete('http://localhost:4999/courses/'+id);
  }
}
