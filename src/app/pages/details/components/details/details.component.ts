import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/pages/characters/services/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public character: any;
  constructor(public charactersService: CharactersService, private route: ActivatedRoute) { } //cuando se activa la ruta de aquí me haga una petición y luego otra y así 

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get("idCharacter");

      this.charactersService.getCharacter(idCharacter).subscribe(
        (characterData) => {
          this.character = characterData;
          console.log("character", this.character)
        })
    })
} 
}
