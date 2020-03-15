import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class postService {

  header = { headers: new HttpHeaders({ "content-type": "application/json" }) }


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get("http://localhost:3000/users").pipe();
  }

  editData(data , id) {
    return this.http.put(`http://localhost:3000/users/${id}`, data)
  }
  postData(data){
    return this.http.post("http://localhost:3000/users", data ,this.header )
  }
  deleteData(id){
    return this.http.delete("http://localhost:3000/users/"+id)
  }

}





