import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class ProfilesService {
    constructor(private http: Http){
        console.log('ProfilesService Initialized...');
    }

    getProfiles(){
        return this.http.get('/api/profiles')
            .map(res => res.json());
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    updateIsBot(profile){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/profile_id/'+profile._id, JSON.stringify(profile), {headers: headers})
            .map(res => res.json());
    }


}

