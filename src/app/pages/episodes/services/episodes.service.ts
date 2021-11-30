import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  public RICKANDMORTYURL: string = "https://rickandmortyapi.com/api/";
  public EPISODESURL: string = `${this.RICKANDMORTYURL}episode`;

  constructor(private httpClient: HttpClient) 
  { }

  public getAllEpisodes() {
    return this.httpClient.get(this.EPISODESURL)
  }

  public getEpisode = (idEpisode:any) => {
    return this.httpClient.get(`${this.EPISODESURL}/${idEpisode}`)
  }

}