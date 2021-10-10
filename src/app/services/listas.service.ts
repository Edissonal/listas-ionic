import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(private http:HttpClient) { }

  datos = "https://jsonplaceholder.typicode.com/posts";

  getposteo() {
    
    return this.http.get(this.datos);

  }

  getuni(id:string) {
   
    const url = `${this.datos + '/' + id}`;
    return this.http.get(url);

  }
}
