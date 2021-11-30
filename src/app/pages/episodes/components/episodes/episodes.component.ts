import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodesInterface } from './episodes.models';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
 public episodesList?: EpisodesInterface[];
 public apiResults?: EpisodesInterface;

 constructor(private episodesService: EpisodesService) { }

 ngOnInit(): void {
   this.episodesService.getAllEpisodes().subscribe(
     (element: any) => {
      const apiResults: EpisodesInterface[] = element.results;
      const formattedResults = apiResults.map(({id, name, air_date, episode, image}) => ({
        id,
        name,
        air_date,
        episode,
        image,
      }));
      this.episodesList = formattedResults;

      console.log(this.episodesList)
   })
 }

 
}

