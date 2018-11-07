import { Component } from '@angular/core';
import {ProfilesService} from './services/profiles.service';


@Component({
  selector: 'my-app',
  template: '<profile> </profile>',
  providers:[ProfilesService]
})

export class AppComponent { }

