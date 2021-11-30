import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
 public charactersList?: CharacterInterface[];
 public apiResults?: CharacterInterface;

 constructor(private charactersService: CharactersService) { }

 ngOnInit(): void {
   this.charactersService.getAllCharacters().subscribe(
     (element: any) => {
      const apiResults: CharacterInterface[] = element.results;
      const formattedResults = apiResults.map(({id, name, status, type, gender, image}) => ({
        id,
        name,
        status,
        type,
        gender,
        image,
      }));
      this.charactersList = formattedResults;

      console.log(this.charactersList)
   })
 }

 
}
