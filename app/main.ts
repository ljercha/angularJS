import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS ]);