"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profiles_service_1 = require("../services/profiles.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profilesService) {
        var _this = this;
        this.profilesService = profilesService;
        console.log("constructed is running");
        this.name = 'Dennys Morales';
        this.profilesService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
        this.profilesService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
        });
    }
    ProfileComponent.prototype.updateIsBot = function (profile) {
        var _profile = Object.assign({}, profile);
        _profile.isBot = !profile.isBot;
        this.profilesService.updateIsBot(_profile).subscribe(function (data) {
            profile.isBot = !profile.isBot;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html',
            providers: [profiles_service_1.ProfilesService]
        }),
        __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profiles.component.js.map