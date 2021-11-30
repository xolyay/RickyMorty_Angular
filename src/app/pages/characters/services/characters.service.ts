import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public RICKANDMORTYURL: string = "https://rickandmortyapi.com/api/";
  public CHARACTERSURL: string = `${this.RICKANDMORTYURL}character`;

  constructor(private httpClient: HttpClient) 
  { }

  public getAllCharacters() {
    return this.httpClient.get(this.CHARACTERSURL)
  }

  public getCharacter = (idCharacter:any) => {
    return this.httpClient.get(`${this.CHARACTERSURL}/${idCharacter}`)
  }

}