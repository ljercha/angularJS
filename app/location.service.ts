import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './mock-locations';

@Injectable()
export class LocationService {
  getLocations() {
    return Promise.resolve(LOCATIONS);
  }

  getLocationsSlowly() {
    return new Promise<Location[]>(resolve =>
      setTimeout(()=>resolve(LOCATIONS), 2000) // 2 seconds
    );
  }
  
  getLocation(id: number) {
    return this.getLocations()
             .then(locations => locations.filter(location => location.id === id)[0]);
  }
}
