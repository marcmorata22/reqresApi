import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private httpClient: HttpClient) { }

  getSpaceData(): Observable<any> {
    let data =  this.httpClient.get('https://api.nasa.gov/planetary/apod?api_key=8zreV5UFFB5dQZwpPi4FZzh0YWNRCtT7WHJPCb4b');
    return data;
  }
}
