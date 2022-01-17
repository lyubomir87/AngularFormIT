import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private REST_API_SERVER = "http://localhost:3000/employees";
  constructor(private httpreq: HttpClient) { 
    
  }
  sendMessage(body){
    console.log(body)
    let headers={
     headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpreq.post("http://localhost:3000/send",body,headers)
  }

  public sendGetRequest(){
    let result=this.httpreq.get(this.REST_API_SERVER);
    console.log(result);
    return result;
  }
}
