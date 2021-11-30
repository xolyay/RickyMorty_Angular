import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { LocationsInterface } from './locationsmodels';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public locationsList?: LocationsInterface[];
  public apiResults?: LocationsInterface;
 
  constructor(private locationsService: LocationsService) { }
 
  ngOnInit(): void {
    this.locationsService.getAllLocations().subscribe(
      (element: any) => {
       const apiResults: LocationsInterface[] = element.results;
       const formattedResults = apiResults.map(({id, name, dimension, created}) => ({
         id,
         name,
         dimension,
         created,
       }));
       this.locationsList = formattedResults;
 
       console.log(this.locationsList)
    })
  }
 
  
 }
 