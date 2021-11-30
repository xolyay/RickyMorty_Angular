import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  
  {
    path: `characters`, loadChildren: () =>
      import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: `details`, loadChildren: () =>
      import('./pages/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: `locations`, loadChildren: () =>
      import('./pages/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: `episodes`, loadChildren: () =>
      import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  {path: "characters/:idCharacter", loadChildren: () => 
   import("./pages/details/details.module").then((module) => module.DetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
