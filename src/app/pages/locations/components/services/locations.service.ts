import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public RICKANDMORTYURL: string = "https://rickandmortyapi.com/api/";
  public LOCATIONSURL: string = `${this.RICKANDMORTYURL}location`;

  constructor(private httpClient: HttpClient) 
  { }

  public getAllLocations() {
    return this.httpClient.get(this.LOCATIONSURL)
  }

  public getLocation = (idLocation:any) => {
    return this.httpClient.get(`${this.LOCATIONSURL}/${idLocation}`)
  }

}