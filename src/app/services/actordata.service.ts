import { Injectable } from '@angular/core';

import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {

  actors: Actor[];

  constructor() {
    this.actors = [
      { name: 'Amitabh Bachhan', city: 'Mumbai' },
      { name: 'Nana Patekar', city: 'Mumbai' },
      { name: 'Deepika Padukone', city: 'Bangalore' },
      { name: 'Aishwarya Rai', city: 'Mangalore' },
      { name: 'Rajnikant', city: 'Chennai' },
    ];
  }

  getActorList(): Actor[] {
    return this.actors;
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
  }

  deleteActor(index: number) {
    this.actors.splice(index, 1);
  }

  updateActor(index: number, newActor: Actor) {
    this.actors.splice(index, 1, newActor);
  }
}
