import { Component } from '@angular/core';
import {ProfilesService} from '../services/profiles.service';
import * as _ from 'underscore';

@Component({
	moduleId: module.id,
  	selector: 'profile',
  	templateUrl: 'profile.component.html',
  	providers: [ProfilesService]
})

export class ProfileComponent  { 
	name: string;
	posts: Post[];
	profiles: Profiles[];
	

	constructor(private profilesService: ProfilesService){
		console.log("constructor is running")
		this.name = 'Dennys Morales';
		
		this.profilesService.getPosts().subscribe(posts => {
			this.posts = posts
		});

		this.profilesService.getProfiles().subscribe(profiles => {
			this.profiles = profiles
		});

  	}

  	updateIsBot(profile){
  		var _profile = Object.assign({}, profile);
  		_profile.isBot = !profile.isBot

		this.profilesService.updateIsBot(_profile).subscribe(data => {
            profile.isBot = !profile.isBot;
        });
	}
}


interface Post {
	id: number;
	title: string;
	body: string;

}

interface Profiles {
	_id: object;
	biography: string;
	blocked_by_viewer: boolean;
	country_block: boolean;
	external_url: object;
	external_url_linkshimmed: object;
	edge_followed_by: object;
	followed_by_viewer: boolean;
	edge_follow: object;
	follows_viewer: boolean;
	full_name: string;
	has_blocked_viewer: boolean;
	has_requested_viewer: boolean;
	id: string;
	is_private: boolean;
	is_verified: boolean;
	mutual_followers: object;
	profile_pic_url: string;
	profile_pic_urlhd: string;
	requested_by_viewer: boolean;
	username: string;
	connected_fb_page: object;
	edge_owner_to_timeline_media:object;
	edge_saved_media: object;
	edge_media_collections: object;
	follows: object;
	followed_by: object;
	media: object;
	_type_: string;
}

