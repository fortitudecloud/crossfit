webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Nagivation -->\r\n<div flex column fx-1 navigation *ngIf=\"adminView\">\r\n    <!-- User -->\r\n    <!-- <grapple-user></grapple-user> -->\r\n    <!-- Menu  -->\r\n    <!-- <grapple-main-menu></grapple-main-menu> -->\r\n</div>\r\n<!-- Content -->\r\n<div flex column fx-3 content>    \r\n    <!-- ViewContent -->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n[navigation] {\n  background-color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.adminView = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_view_component__ = __webpack_require__("../../../../../src/app/views/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_map_mapmaker_mapmaker_component__ = __webpack_require__("../../../../../src/app/component/map/mapmaker/mapmaker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_map_mapviewer_mapviewer_component__ = __webpack_require__("../../../../../src/app/component/map/mapviewer/mapviewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_user_leader_leader_component__ = __webpack_require__("../../../../../src/app/component/user/leader/leader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_dialogs_checkin_checkin_component__ = __webpack_require__("../../../../../src/app/component/dialogs/checkin/checkin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_dialogs_collection_collection_component__ = __webpack_require__("../../../../../src/app/component/dialogs/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_user_cards_cards_component__ = __webpack_require__("../../../../../src/app/component/user/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_dialogs_account_account_component__ = __webpack_require__("../../../../../src/app/component/dialogs/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_view_group_directive__ = __webpack_require__("../../../../../src/app/directives/view-group.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_admin_mapbuilder_mapbuilder_view__ = __webpack_require__("../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_client_landing_landing_view__ = __webpack_require__("../../../../../src/app/views/client/landing/landing.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_client_home_home_view__ = __webpack_require__("../../../../../src/app/views/client/home/home.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_client_setup_setup_view__ = __webpack_require__("../../../../../src/app/views/client/setup/setup.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__provider_fitbit_provider__ = __webpack_require__("../../../../../src/app/provider/fitbit.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__provider_distance_provider__ = __webpack_require__("../../../../../src/app/provider/distance.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__provider_health_factory__ = __webpack_require__("../../../../../src/app/provider/health.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__provider_storage_user_storage__ = __webpack_require__("../../../../../src/app/provider/storage/user.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__provider_achievement_provider__ = __webpack_require__("../../../../../src/app/provider/achievement.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__provider_storage_achievement_storage__ = __webpack_require__("../../../../../src/app/provider/storage/achievement.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__provider_storage_poker_storage__ = __webpack_require__("../../../../../src/app/provider/storage/poker.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__provider_pokercard_provider__ = __webpack_require__("../../../../../src/app/provider/pokercard.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Routing

// Material Components







// Components









// Directives

// Views




// Providers

// import { FitbitProvider } from './provider/stub/fitbit.stub.provider'; // ! stub



// import { UserStorage } from './provider/stub/storage/user.stub.storage'; // ! stub

// import { AchievementsProvider } from './provider/stub/achievements.stub.provider'; // ! stub

// import { AchievementStorage } from './provider/stub/storage/achievement.stub.storage'; // ! stub

// import { PokerStorage } from './provider/stub/storage/poker.stub.storage'; // ! stub

// import { PokerCardProvider } from './provider/stub/pokercard.stub.provider'; // ! stub

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_20__component_dialogs_checkin_checkin_component__["a" /* CheckinComponent */], __WEBPACK_IMPORTED_MODULE_21__component_dialogs_collection_collection_component__["a" /* CollectionComponent */], __WEBPACK_IMPORTED_MODULE_23__component_dialogs_account_account_component__["a" /* AccountComponent */]],
            declarations: [
                // Components
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_25__views_admin_mapbuilder_mapbuilder_view__["a" /* MapBuilderViewComponent */], __WEBPACK_IMPORTED_MODULE_16__views_view_component__["a" /* ViewComponent */], __WEBPACK_IMPORTED_MODULE_17__component_map_mapmaker_mapmaker_component__["a" /* MapMakerComponent */], __WEBPACK_IMPORTED_MODULE_26__views_client_landing_landing_view__["a" /* LandingViewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__views_client_home_home_view__["a" /* HomeViewComponent */], __WEBPACK_IMPORTED_MODULE_18__component_map_mapviewer_mapviewer_component__["a" /* MapViewerComponent */], __WEBPACK_IMPORTED_MODULE_19__component_user_leader_leader_component__["a" /* LeaderComponent */], __WEBPACK_IMPORTED_MODULE_28__views_client_setup_setup_view__["a" /* SetupViewComponent */], __WEBPACK_IMPORTED_MODULE_20__component_dialogs_checkin_checkin_component__["a" /* CheckinComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_dialogs_collection_collection_component__["a" /* CollectionComponent */], __WEBPACK_IMPORTED_MODULE_22__component_user_cards_cards_component__["a" /* CardsComponent */], __WEBPACK_IMPORTED_MODULE_23__component_dialogs_account_account_component__["a" /* AccountComponent */],
                // Directives
                __WEBPACK_IMPORTED_MODULE_24__directives_view_group_directive__["a" /* ViewGroupDirective */]
            ],
            imports: [
                // Angular
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
                // Maps
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
                }),
                // Material
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__["a" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_table__["b" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__["c" /* MatDialogModule */],
                // App 
                __WEBPACK_IMPORTED_MODULE_7__app_route__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__provider_defaults_provider__["a" /* Defaults */], __WEBPACK_IMPORTED_MODULE_30__provider_fitbit_provider__["a" /* FitbitProvider */], __WEBPACK_IMPORTED_MODULE_31__provider_distance_provider__["a" /* DistanceProvider */], __WEBPACK_IMPORTED_MODULE_32__provider_health_factory__["a" /* HealthFactory */], __WEBPACK_IMPORTED_MODULE_33__provider_storage_user_storage__["a" /* UserStorage */], __WEBPACK_IMPORTED_MODULE_34__provider_achievement_provider__["a" /* AchievementsProvider */],
                __WEBPACK_IMPORTED_MODULE_35__provider_storage_achievement_storage__["a" /* AchievementStorage */], __WEBPACK_IMPORTED_MODULE_36__provider_storage_poker_storage__["a" /* PokerStorage */], __WEBPACK_IMPORTED_MODULE_37__provider_pokercard_provider__["a" /* PokerCardProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_view_route__ = __webpack_require__("../../../../../src/app/views/view.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_client_landing_landing_view__ = __webpack_require__("../../../../../src/app/views/client/landing/landing.view.ts");


;

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__views_client_landing_landing_view__["a" /* LandingViewComponent */] }
].concat(__WEBPACK_IMPORTED_MODULE_1__views_view_route__["a" /* ViewRoute */]);
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/component/dialogs/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 flex row center>Account</h2>\r\n<div flex column center grow>\r\n    <button class=\"primary\" (click)=\"data.logout()\">Logout</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dialogs/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nbutton {\n  margin: 20px 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dialogs/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccountComponent = (function () {
    function AccountComponent(data) {
        this.data = data;
    }
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-account',
            styles: [__webpack_require__("../../../../../src/app/component/dialogs/account/account.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/dialogs/account/account.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dialogs/checkin/checkin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Checkin Complete</h1>\r\n<div mat-dialog-content>\r\n    <i class=\"material-icons\" flex row center>check_circle</i>\r\n    <h6>Your next 2,000 steps will count for double bonus points. Go!</h6>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dialogs/checkin/checkin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  font-size: 100px;\n  color: #72db2a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dialogs/checkin/checkin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CheckinComponent = (function () {
    function CheckinComponent(data) {
        this.data = data;
    }
    CheckinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'checkin-dialog',
            styles: [__webpack_require__("../../../../../src/app/component/dialogs/checkin/checkin.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/dialogs/checkin/checkin.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dialogs/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title [class.fadeIn]=\"show\" flex row center>Card Collected</h1>\r\n<div mat-dialog-content>\r\n    <div class=\"playingCards simpleCards\">\r\n        <section class=\"container\">\r\n            <div id=\"card\" [class.flipped]=\"show\">\r\n                <figure class=\"front\">\r\n                    <i class=\"material-icons\" flex row center>help_outline</i>\r\n                </figure>\r\n                <figure class=\"back\">\r\n                    <div class=\"card {{data.class}}\"\r\n                        [class.diams]=\"data.suit == 'diamonds'\"\r\n                        [class.hearts]=\"data.suit == 'hearts'\"\r\n                        [class.spades]=\"data.suit == 'spades'\"\r\n                        [class.clubs]=\"data.suit == 'clubs'\">\r\n                        <span class=\"rank\">{{data.rank}}</span>\r\n                        <span class=\"suit\" *ngIf=\"data.suit == 'diamonds'\">&diams;</span>\r\n                        <span class=\"suit\" *ngIf=\"data.suit == 'hearts'\">&hearts;</span>\r\n                        <span class=\"suit\" *ngIf=\"data.suit == 'spades'\">&spades;</span>\r\n                        <span class=\"suit\" *ngIf=\"data.suit == 'clubs'\">&clubs;</span>\r\n                    </div>\r\n                </figure>\r\n            </div>\r\n        </section>        \r\n    </div>    \r\n    <h6 [class.fadeIn]=\"show\">This playing card has been added to your collection</h6>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dialogs/collection/collection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  font-size: 100px;\n  color: rgba(0, 0, 0, 0.2); }\n\n.card {\n  width: 95%;\n  height: 95%;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: 0px 2px 14px -4px #000;\n  margin-top: 10px; }\n\n.container {\n  width: 160px;\n  height: 230px;\n  position: relative;\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  margin: auto;\n  margin-bottom: 40px; }\n\n#card {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s; }\n\n#card figure {\n  margin: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n#card .front {\n  background: #f2f1f1;\n  border-radius: 6px;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#card .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n#card.flipped {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\nh1, h6 {\n  opacity: 0;\n  text-align: center; }\n\n.fadeIn {\n  transition: ease 1s all;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dialogs/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interface_poker_interface__ = __webpack_require__("../../../../../src/app/interface/poker.interface.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CollectionComponent = (function () {
    function CollectionComponent(data) {
        var _this = this;
        this.data = data;
        this.show = false;
        window.setTimeout(function () {
            _this.show = true;
        }, 1000);
    }
    CollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'collection-dialog',
            styles: [__webpack_require__("../../../../../src/app/component/dialogs/collection/collection.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/dialogs/collection/collection.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__interface_poker_interface__["a" /* IPokerCard */]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/map/mapmaker/mapmaker.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map \r\n    *ngIf=\"ready\"\r\n    [latitude]=\"map.origin.lat\" \r\n    [longitude]=\"map.origin.lng\" \r\n    [styles]=\"styles\" \r\n    [zoom]=\"zoom\"\r\n    (mapClick)=\"mapClicked($event)\">\r\n\r\n    <agm-marker \r\n        *ngFor=\"let m of map.event; let i = index\"\r\n        (markerClick)=\"clickedMarker('New Event', i)\"\r\n        [latitude]=\"m.location.lat\"\r\n        [longitude]=\"m.location.lng\"        \r\n        [markerDraggable]=\"false\"\r\n        (dragEnd)=\"markerDragEnd(m, $event)\">\r\n    \r\n        <agm-info-window *ngIf=\"eventForm.controls[i]\">   \r\n            <form [formGroup]=\"eventForm.controls[i]\">\r\n                <div flex column>\r\n                    <h4>Map event</h4>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"m.name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Description\" formControlName=\"description\" [(ngModel)]=\"m.description\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Event Type\" formControlName=\"type\" [(ngModel)]=\"m.type\">\r\n                            <mat-option *ngFor=\"let type of eventTypes\" [value]=\"type.key\">\r\n                            {{ type.name }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <button (click)=\"removeEvent(i)\">Remove</button>\r\n                </div>       \r\n            </form>\r\n        </agm-info-window>\r\n    \r\n    </agm-marker>    \r\n\r\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/component/map/mapmaker/mapmaker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  width: inherit;\n  height: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map/mapmaker/mapmaker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interface_map_interface__ = __webpack_require__("../../../../../src/app/interface/map.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapMakerComponent = (function () {
    function MapMakerComponent(defaults, _fb) {
        this.defaults = defaults;
        this._fb = _fb;
        this.ready = false;
        this.eventTypes = [{
                key: 1,
                name: 'Check in'
            }, {
                key: 2,
                name: 'Collectable'
            }, {
                key: 3,
                name: 'Special'
            }];
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }
    MapMakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([]);
        if (this.map)
            window.setTimeout(function () {
                _this.map.event.forEach(function (e) { return _this.updateEventForm(); });
                _this.ready = true;
            });
    };
    MapMakerComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapMakerComponent.prototype.mapClicked = function ($event) {
        this.map.event.push({
            id: 'event' + Math.floor(Math.random() * 1000),
            name: 'New Event',
            description: 'Some event on the map',
            location: {
                lat: $event.coords.lat,
                lng: $event.coords.lng,
            },
            type: __WEBPACK_IMPORTED_MODULE_2__interface_map_interface__["a" /* IMapEventType */].CHECKIN
        });
        this.updateEventForm();
    };
    MapMakerComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MapMakerComponent.prototype.updateEventForm = function () {
        if (this.eventForm.length < this.map.event.length) {
            // add formGroup
            this.eventForm.push(this._fb.group({
                id: '',
                name: '',
                description: '',
                type: ''
            }));
        }
        //patch
        this.eventForm.patchValue(this.map.event);
    };
    MapMakerComponent.prototype.removeEvent = function (index) {
        this.map.event.splice(index, 1);
        this.eventForm.removeAt(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapMakerComponent.prototype, "map", void 0);
    MapMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'map-maker',
            styles: [__webpack_require__("../../../../../src/app/component/map/mapmaker/mapmaker.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/map/mapmaker/mapmaker.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__provider_defaults_provider__["a" /* Defaults */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]])
    ], MapMakerComponent);
    return MapMakerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/map/mapviewer/mapviewer.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map \r\n    *ngIf=\"ready\"\r\n    [latitude]=\"position.lat\" \r\n    [longitude]=\"position.lng\" \r\n    [styles]=\"styles\" \r\n    [zoom]=\"zoom\"\r\n    (mapClick)=\"mapClicked($event)\"\r\n    [style.height]=\"fullHeight\"\r\n    [disableDefaultUI]=\"disabledUI\">\r\n\r\n    <!-- events -->\r\n    <agm-marker \r\n        *ngFor=\"let m of map.event; let i = index\"\r\n        (markerClick)=\"clickedMarker('New Event', i)\"\r\n        [latitude]=\"m.location.lat\"\r\n        [longitude]=\"m.location.lng\"\r\n        [iconUrl]=\"icons[m.type]\"\r\n        [markerDraggable]=\"false\"\r\n        (dragEnd)=\"markerDragEnd(m, $event)\">\r\n    \r\n            <agm-info-window *ngIf=\"canClaim(m)\">                   \r\n                <div flex column>\r\n                    <h4>{{m.name}}</h4>\r\n                    <label>{{m.description}}</label> \r\n                    <div *ngIf=\"m.type == 1\" flex row center>\r\n                        <strong *ngIf=\"m.type == 1\">x2</strong>                   \r\n                    </div>                    \r\n                    <button class=\"primary\" (click)=\"claimEvent(m)\">Claim</button>\r\n                </div>                       \r\n            </agm-info-window>\r\n    \r\n    </agm-marker>  \r\n    \r\n    <!-- position -->\r\n    <agm-marker \r\n        *ngIf=\"position\"                \r\n        [latitude]=\"position.lat\"\r\n        [longitude]=\"position.lng\"\r\n        [iconUrl]=\"icons[100]\"\r\n        [markerDraggable]=\"false\"></agm-marker>\r\n\r\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/component/map/mapviewer/mapviewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  width: inherit;\n  height: inherit; }\n\nh4 {\n  text-transform: uppercase;\n  font-weight: 100;\n  font-size: 22px; }\n\nlabel {\n  margin: 10px 0;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 400; }\n\nstrong {\n  font-size: 80px;\n  border: solid 10px;\n  border-radius: 50%;\n  width: 96px;\n  padding: 10px;\n  margin: 20px 0;\n  color: #49a6de; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map/mapviewer/mapviewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface_map_interface__ = __webpack_require__("../../../../../src/app/interface/map.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_distance_provider__ = __webpack_require__("../../../../../src/app/provider/distance.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_achievement_provider__ = __webpack_require__("../../../../../src/app/provider/achievement.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_storage_achievement_storage__ = __webpack_require__("../../../../../src/app/provider/storage/achievement.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_storage_poker_storage__ = __webpack_require__("../../../../../src/app/provider/storage/poker.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_pokercard_provider__ = __webpack_require__("../../../../../src/app/provider/pokercard.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs_checkin_checkin_component__ = __webpack_require__("../../../../../src/app/component/dialogs/checkin/checkin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dialogs_collection_collection_component__ = __webpack_require__("../../../../../src/app/component/dialogs/collection/collection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub

// import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub

// import { AchievementStorage } from '../../../provider/stub/storage/achievement.stub.storage'; // ! stub

// import { PokerStorage } from '../../../provider/stub/storage/poker.stub.storage'; // ! stub

// import { PokerCardProvider } from '../../../provider/stub/pokercard.stub.provider'; // ! stub




var MapViewerComponent = (function () {
    function MapViewerComponent(elementRef, defaults, distance, achievements, achievementsStorage, pokerStorage, pokerProvider, dialog) {
        this.elementRef = elementRef;
        this.defaults = defaults;
        this.distance = distance;
        this.achievements = achievements;
        this.achievementsStorage = achievementsStorage;
        this.pokerStorage = pokerStorage;
        this.pokerProvider = pokerProvider;
        this.dialog = dialog;
        this.ready = false;
        this.disabledUI = true;
        this.fullHeight = '667px';
        this.icons = {
            1: './assets/mushroom48.png',
            2: './assets/poker48.png',
            3: './assets/hogs48.png',
            100: './assets/circle16.png'
        };
        this.styles = defaults.MAP_STYLES;
        this.zoom = defaults.MAP_ZOOM;
    }
    MapViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.map) {
            this.checkClaims();
            window.setTimeout(function () {
                _this.fullHeight = _this.elementRef.nativeElement.offsetHeight + 'px';
                _this.ready = true;
            });
        }
    };
    MapViewerComponent.prototype.canClaim = function (e) {
        if (this.position) {
            var range = this.distance.getMeters(e.location, this.position);
            if (range <= this.defaults.CLAIMRANGE)
                return true;
        }
        return false;
    };
    MapViewerComponent.prototype.claimEvent = function (e) {
        var _this = this;
        if (e.type === __WEBPACK_IMPORTED_MODULE_3__interface_map_interface__["a" /* IMapEventType */].CHECKIN) {
            this.achievementsStorage.add({
                user: this.user,
                event: e,
                date: new Date()
            }).subscribe(function (result) {
                if (result) {
                    _this.checkClaims();
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialogs_checkin_checkin_component__["a" /* CheckinComponent */]);
                }
            });
        }
        else if (e.type === __WEBPACK_IMPORTED_MODULE_3__interface_map_interface__["a" /* IMapEventType */].COLLECTABLE) {
            // can't claim a card thats been claimed yet
            this.pokerStorage.getAll().subscribe(function (taken) {
                var newCard = _this.pokerProvider.getNewCard(taken, _this.user, e);
                _this.pokerStorage.add(newCard).subscribe(function (result) {
                    if (result) {
                        _this.checkClaims();
                        _this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dialogs_collection_collection_component__["a" /* CollectionComponent */], {
                            data: newCard
                        });
                    }
                    else {
                        // unable to add card. make user try again
                    }
                });
            });
        }
    };
    MapViewerComponent.prototype.clickedMarker = function (label, index) {
        // handle type of marker clicked (event, collectable)
    };
    MapViewerComponent.prototype.mapClicked = function ($event) {
        // show we have an action for this event?
    };
    MapViewerComponent.prototype.markerDragEnd = function (m, $event) {
        // cant be done on the viewer
    };
    MapViewerComponent.prototype.checkClaims = function () {
        var _this = this;
        //var achieved = this.achievements.get(this.user, new Date()); 
        var achieved = this.achievementsStorage.get(this.user);
        var collected = this.pokerStorage.getUsers(this.user, new Date());
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].forkJoin([achieved, collected]).subscribe(function (data) {
            var ach = data[0];
            var col = data[1];
            _this.map.event = _this.map.event.filter(function (e) {
                return !ach.find(function (a) { return a.event.id === e.id; }) &&
                    !col.find(function (c) { return c.event.id === e.id; });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapViewerComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapViewerComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapViewerComponent.prototype, "map", void 0);
    MapViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'map-viewer',
            styles: [__webpack_require__("../../../../../src/app/component/map/mapviewer/mapviewer.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/map/mapviewer/mapviewer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_9__provider_defaults_provider__["a" /* Defaults */],
            __WEBPACK_IMPORTED_MODULE_4__provider_distance_provider__["a" /* DistanceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__provider_achievement_provider__["a" /* AchievementsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__provider_storage_achievement_storage__["a" /* AchievementStorage */],
            __WEBPACK_IMPORTED_MODULE_7__provider_storage_poker_storage__["a" /* PokerStorage */],
            __WEBPACK_IMPORTED_MODULE_8__provider_pokercard_provider__["a" /* PokerCardProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], MapViewerComponent);
    return MapViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"playingCards simpleCards\">\r\n    <section class=\"container\" *ngFor=\"let card of cards\">\r\n        <div id=\"card\" [class.flipped]=\"show\">\r\n            <figure class=\"front\">\r\n                <i class=\"material-icons\" flex row center>help_outline</i>\r\n            </figure>\r\n            <figure class=\"back\">\r\n                <div class=\"card {{card.class}}\"\r\n                    [class.diams]=\"card.suit == 'diamonds'\"\r\n                    [class.hearts]=\"card.suit == 'hearts'\"\r\n                    [class.spades]=\"card.suit == 'spades'\"\r\n                    [class.clubs]=\"card.suit == 'clubs'\">\r\n                    <span class=\"rank\">{{card.rank}}</span>\r\n                    <span class=\"suit\" *ngIf=\"card.suit == 'diamonds'\">&diams;</span>\r\n                    <span class=\"suit\" *ngIf=\"card.suit == 'hearts'\">&hearts;</span>\r\n                    <span class=\"suit\" *ngIf=\"card.suit == 'spades'\">&spades;</span>\r\n                    <span class=\"suit\" *ngIf=\"card.suit == 'clubs'\">&clubs;</span>\r\n                </div>\r\n            </figure>\r\n        </div>\r\n    </section>        \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/user/cards/cards.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  overflow-y: scroll; }\n\ni {\n  font-size: 100px;\n  color: rgba(0, 0, 0, 0.2); }\n\n.card {\n  width: 95%;\n  height: 95%;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: 0px 2px 14px -4px #000;\n  margin-top: 10px; }\n\n.container {\n  width: 160px;\n  height: 230px;\n  position: relative;\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  margin: auto;\n  margin-bottom: 40px; }\n\n#card {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s; }\n\n#card figure {\n  margin: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n#card .front {\n  background: #f2f1f1;\n  border-radius: 6px;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#card .back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n#card.flipped {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\nh1, h6 {\n  opacity: 0;\n  text-align: center; }\n\n.fadeIn {\n  transition: ease 1s all;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/user/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_storage_poker_storage__ = __webpack_require__("../../../../../src/app/provider/storage/poker.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PokerStorage } from '../../../provider/stub/storage/poker.stub.storage';

var CardsComponent = (function () {
    function CardsComponent(defaults, pokerStorage) {
        this.defaults = defaults;
        this.pokerStorage = pokerStorage;
        this.show = false;
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.sync();
    };
    CardsComponent.prototype.sync = function () {
        var _this = this;
        this.show = false;
        // update the cards the user has
        this.pokerStorage.getUsers(this.user, new Date()).subscribe(function (pc) {
            _this.cards = pc;
            window.setTimeout(function () {
                _this.show = true;
            }, 500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "user", void 0);
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'poker-cards',
            styles: [__webpack_require__("../../../../../src/app/component/user/cards/cards.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/user/cards/cards.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__["a" /* Defaults */],
            __WEBPACK_IMPORTED_MODULE_2__provider_storage_poker_storage__["a" /* PokerStorage */]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/leader/leader.component.html":
/***/ (function(module, exports) {

module.exports = "<div stat flex column center *ngFor=\"let l of leaders; let i = index\">\r\n    <div flex row *ngIf=\"!updating && achievementsAll\">\r\n        <h3 flex column center>{{i+1}}</h3>\r\n        <img src=\"./assets/hogs.png\" />\r\n        <div flex column grow>\r\n            <label flex fx-1>\r\n                <span grow>Lionel</span>\r\n                <span class=\"primary pad-w-10px\">{{getStepsToday(l).steps}}</span>\r\n                <span class=\"secondary\">{{getStepsToday(l).bonus}}</span>\r\n            </label>\r\n            <div flex column center fx-1>\r\n                <mat-progress-bar mode=\"determinate\" value=\"{{getStepPercent(l).steps}}\" class=\"primary\"></mat-progress-bar>\r\n            </div>\r\n            <div flex column center fx-1>\r\n                <mat-progress-bar mode=\"determinate\" value=\"{{getStepPercent(l).bonus}}\"></mat-progress-bar>\r\n            </div>                                    \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/user/leader/leader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[stat] {\n  padding: 10px; }\n  [stat]:nth-child(odd) {\n    background-color: rgba(0, 0, 0, 0.05); }\n  [stat] label span.primary {\n    color: #56a8f1; }\n  [stat] label span.secondary {\n    color: #5661f1; }\n  [stat] img {\n    width: 52px;\n    height: 52px;\n    margin: 0 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/user/leader/leader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_achievement_provider__ = __webpack_require__("../../../../../src/app/provider/achievement.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_storage_achievement_storage__ = __webpack_require__("../../../../../src/app/provider/storage/achievement.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub


var LeaderComponent = (function () {
    function LeaderComponent(defaults, achievements, achievementStorage) {
        this.defaults = defaults;
        this.achievements = achievements;
        this.achievementStorage = achievementStorage;
        this.updating = true;
        this.leaders = defaults.TESTUSERS;
    }
    LeaderComponent.prototype.ngOnInit = function () {
        // get users and order by total steps
        this.sync();
    };
    LeaderComponent.prototype.sync = function () {
        var _this = this;
        this.updating = true;
        this.achievementStorage.getAll().subscribe(function (ach) {
            _this.achievementsAll = ach;
            _this.updating = false;
        });
    };
    LeaderComponent.prototype.getStepsToday = function (user) {
        return this.getSteps(user);
    };
    LeaderComponent.prototype.getStepPercent = function (user) {
        //let leader = this.leaders[0].steps.find(s => this.isToday(s.date));
        var leader = this.getSteps(this.leaders[0]);
        //let todaySteps = user.steps.find(s => this.isToday(s.date));
        var userSteps = this.getSteps(user);
        // if(todaySteps) {
        //     return (todaySteps.steps / leader.steps) * 100;
        // }
        return { steps: ((userSteps.steps / leader.steps) * 100), bonus: ((userSteps.bonus / leader.bonus) * 100) };
    };
    LeaderComponent.prototype.getSteps = function (user) {
        var _this = this;
        var steps = user.steps.find(function (s) { return _this.isToday(s.date); });
        if (steps) {
            var ach = this.achievementsAll.filter(function (a) { return a.user.id === user.id && _this.isToday(a.date); });
            return { steps: steps.steps, bonus: this.achievements.calculateBonus(steps.steps, ach) };
        }
        return { steps: 0, bonus: 0 };
    };
    LeaderComponent.prototype.isToday = function (date) {
        var today = new Date();
        if (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()) {
            return true;
        }
        return false;
    };
    LeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'leader-list',
            styles: [__webpack_require__("../../../../../src/app/component/user/leader/leader.component.scss")],
            template: __webpack_require__("../../../../../src/app/component/user/leader/leader.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__["a" /* Defaults */],
            __WEBPACK_IMPORTED_MODULE_2__provider_achievement_provider__["a" /* AchievementsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__provider_storage_achievement_storage__["a" /* AchievementStorage */]])
    ], LeaderComponent);
    return LeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/view-group.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGroupDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewGroupDirective = (function () {
    function ViewGroupDirective(el) {
        this.el = el;
    }
    ViewGroupDirective.prototype.ngOnInit = function () {
        var header = this.el.nativeElement.querySelector('mat-tab-header');
        header.classList.add('none');
    };
    ViewGroupDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[viewGroup]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ViewGroupDirective);
    return ViewGroupDirective;
}());



/***/ }),

/***/ "../../../../../src/app/interface/map.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMapEventType; });
var IMapEventType;
(function (IMapEventType) {
    IMapEventType[IMapEventType["CHECKIN"] = 1] = "CHECKIN";
    IMapEventType[IMapEventType["COLLECTABLE"] = 2] = "COLLECTABLE";
    IMapEventType[IMapEventType["SPECIAL"] = 3] = "SPECIAL";
})(IMapEventType || (IMapEventType = {}));


/***/ }),

/***/ "../../../../../src/app/interface/poker.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPokerCard; });
// https://desandro.github.io/3dtransforms/examples/card-01.html
/** poker cards used in achievements */
var IPokerCard = (function () {
    function IPokerCard() {
    }
    return IPokerCard;
}());



/***/ }),

/***/ "../../../../../src/app/interface/user.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IUserAuthProvider; });
var IUserAuthProvider;
(function (IUserAuthProvider) {
    IUserAuthProvider[IUserAuthProvider["Fitbit"] = 0] = "Fitbit";
    IUserAuthProvider[IUserAuthProvider["Apple"] = 1] = "Apple";
})(IUserAuthProvider || (IUserAuthProvider = {}));


/***/ }),

/***/ "../../../../../src/app/provider/achievement.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_achievement_storage__ = __webpack_require__("../../../../../src/app/provider/storage/achievement.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AchievementsProvider = (function () {
    function AchievementsProvider(achievements, defaults) {
        this.achievements = achievements;
        this.defaults = defaults;
    }
    AchievementsProvider.prototype.get = function (user, date) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            _this.achievements.get(user).subscribe(function (achs) {
                console.log('hit');
                ob.next(achs.filter(function (a) { return _this.isSameDate(date, new Date(a.date)); }));
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    AchievementsProvider.prototype.calculateBonus = function (currentSteps, achievements) {
        var _this = this;
        var sorted = achievements.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            else if (a.date > b.date)
                return 1;
            else
                return 0;
        });
        if (achievements.length === 0)
            return currentSteps;
        var bonus;
        sorted.forEach(function (a) {
            var last = a.user.steps.length - 1;
            if (!bonus)
                bonus = a.user.steps[last].steps;
            var counter = (a.user.steps[last].steps + _this.defaults.BONUSSTEPINCREMENT);
            if (counter <= currentSteps) {
                bonus = bonus + (_this.defaults.BONUSMULTIPLIER * _this.defaults.BONUSSTEPINCREMENT);
            }
            else if (counter > currentSteps) {
                bonus = bonus + (_this.defaults.BONUSMULTIPLIER * (currentSteps - a.user.steps[last].steps));
            }
        });
        return bonus;
    };
    AchievementsProvider.prototype.isSameDate = function (date, compare) {
        if (date.getDate() === compare.getDate() &&
            date.getMonth() === compare.getMonth() &&
            date.getFullYear() === compare.getFullYear()) {
            return true;
        }
        return false;
    };
    AchievementsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__storage_achievement_storage__["a" /* AchievementStorage */],
            __WEBPACK_IMPORTED_MODULE_2__defaults_provider__["a" /* Defaults */]])
    ], AchievementsProvider);
    return AchievementsProvider;
}());



/***/ }),

/***/ "../../../../../src/app/provider/defaults.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Defaults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__ = __webpack_require__("../../../../../src/app/interface/user.interface.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Defaults = (function () {
    function Defaults() {
        this.MAP_ZOOM = 14;
        this.MAP_STYLES = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];
        this.TESTUSERS = [{
                id: 'wersdf234',
                username: 'Lionel',
                firstname: 'Lionel',
                lastname: 'Hickey',
                displayname: 'Lionel',
                avatar: '',
                auth: {
                    provider: __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit,
                    accessToken: 'token',
                    refreshToken: 'refresh',
                    expires: new Date()
                },
                steps: [{
                        date: new Date(),
                        day: +(new Date().getDate()),
                        month: +(new Date().getMonth()),
                        year: +(new Date().getFullYear()),
                        steps: 2211
                    }]
            }];
        this.TESTMAPS = [{
                id: 'aa121',
                name: 'Bright Step Challenge',
                description: 'New years 2017 step challenge. Allows Apple Watch and Fitbit contestants',
                origin: {
                    lat: -36.730199,
                    lng: 146.960896,
                    alias: 'base'
                },
                event: [{ "id": "event736", "name": "Watering Hole", "description": "Hoggies favorite splash zone. Give him a dip if you like", "location": { "lat": -36.72782660096826, "lng": 146.99951648712158 }, "type": 3 }, { "id": "event873", "name": "Top of the town", "description": "Power up!", "location": { "lat": -36.73018269203475, "lng": 146.96123600006104 }, "type": 1 }, { "id": "event359", "name": "Poker Challenge", "description": "Collect here", "location": { "lat": -36.73723333556389, "lng": 146.97067737579346 }, "type": 2 }]
            }];
        this.CLAIMRANGE = 15;
        this.BONUSMULTIPLIER = 2;
        this.BONUSSTEPINCREMENT = 2000;
        this.TESTACHIEVEMENTS = [{
                user: {
                    id: 'wersdf234',
                    username: 'Lionel',
                    firstname: 'Lionel',
                    lastname: 'Hickey',
                    displayname: 'Lionel',
                    avatar: '',
                    auth: {
                        provider: __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit,
                        accessToken: 'token',
                        refreshToken: 'refresh',
                        expires: new Date()
                    },
                    steps: [{
                            date: new Date(),
                            day: +(new Date().getDate()),
                            month: +(new Date().getMonth()),
                            year: +(new Date().getFullYear()),
                            steps: 11
                        }]
                },
                event: { "id": "event853", "name": "Top of the town", "description": "Power up!", "location": { "lat": -36.73018269203475, "lng": 146.96123600006104 }, "type": 1 },
                date: new Date()
            }, {
                user: {
                    id: 'wersdf234',
                    username: 'Lionel',
                    firstname: 'Lionel',
                    lastname: 'Hickey',
                    displayname: 'Lionel',
                    avatar: '',
                    auth: {
                        provider: __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit,
                        accessToken: 'token',
                        refreshToken: 'refresh',
                        expires: new Date()
                    },
                    steps: [{
                            date: new Date(),
                            day: +(new Date().getDate()),
                            month: +(new Date().getMonth()),
                            year: +(new Date().getFullYear()),
                            steps: 2099
                        }]
                },
                event: { "id": "event874", "name": "Mistery", "description": "Power up!", "location": { "lat": -36.73018269203475, "lng": 146.96123600006104 }, "type": 1 },
                date: new Date()
            }];
        this.TESTPOKERCARDS = [{
                id: '1',
                number: 6,
                suit: 'hearts',
                rank: '6',
                date: new Date(),
                user: {
                    id: 'wersdf234',
                    username: 'Lionel',
                    firstname: 'Lionel',
                    lastname: 'Hickey',
                    displayname: 'Lionel',
                    avatar: '',
                    auth: {
                        provider: __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit,
                        accessToken: 'token',
                        refreshToken: 'refresh',
                        expires: new Date()
                    },
                    steps: [{
                            date: new Date(),
                            day: +(new Date().getDate()),
                            month: +(new Date().getMonth()),
                            year: +(new Date().getFullYear()),
                            steps: 2099
                        }]
                },
                event: { "id": "event259", "name": "Poker Challenge", "description": "Collect here", "location": { "lat": -36.73723333556389, "lng": 146.97067737579346 }, "type": 2 }
            }];
        // all cards that can be claimed
        this.POKERCARDS = [
            { number: 1, suit: 'hearts', class: 'rank-a', rank: 'A' },
            { number: 2, suit: 'hearts', class: 'rank-2', rank: '2' },
            { number: 3, suit: 'hearts', class: 'rank-3', rank: '3' },
            { number: 4, suit: 'hearts', class: 'rank-4', rank: '4' },
            { number: 5, suit: 'hearts', class: 'rank-5', rank: '5' },
            { number: 6, suit: 'hearts', class: 'rank-6', rank: '6' },
            { number: 7, suit: 'hearts', class: 'rank-7', rank: '7' },
            { number: 8, suit: 'hearts', class: 'rank-8', rank: '8' },
            { number: 9, suit: 'hearts', class: 'rank-9', rank: '9' },
            { number: 10, suit: 'hearts', class: 'rank-10', rank: '10' },
            { number: 11, suit: 'hearts', class: 'rank-j', rank: 'J' },
            { number: 12, suit: 'hearts', class: 'rank-q', rank: 'Q' },
            { number: 13, suit: 'hearts', class: 'rank-k', rank: 'K' },
            { number: 1, suit: 'diamonds', class: 'rank-a', rank: 'A' },
            { number: 2, suit: 'diamonds', class: 'rank-2', rank: '2' },
            { number: 3, suit: 'diamonds', class: 'rank-3', rank: '3' },
            { number: 4, suit: 'diamonds', class: 'rank-4', rank: '4' },
            { number: 5, suit: 'diamonds', class: 'rank-5', rank: '5' },
            { number: 6, suit: 'diamonds', class: 'rank-6', rank: '6' },
            { number: 7, suit: 'diamonds', class: 'rank-7', rank: '7' },
            { number: 8, suit: 'diamonds', class: 'rank-8', rank: '8' },
            { number: 9, suit: 'diamonds', class: 'rank-9', rank: '9' },
            { number: 10, suit: 'diamonds', class: 'rank-10', rank: '10' },
            { number: 11, suit: 'diamonds', class: 'rank-j', rank: 'J' },
            { number: 12, suit: 'diamonds', class: 'rank-q', rank: 'Q' },
            { number: 13, suit: 'diamonds', class: 'rank-k', rank: 'K' },
            { number: 1, suit: 'spades', class: 'rank-a', rank: 'A' },
            { number: 2, suit: 'spades', class: 'rank-2', rank: '2' },
            { number: 3, suit: 'spades', class: 'rank-3', rank: '3' },
            { number: 4, suit: 'spades', class: 'rank-4', rank: '4' },
            { number: 5, suit: 'spades', class: 'rank-5', rank: '5' },
            { number: 6, suit: 'spades', class: 'rank-6', rank: '6' },
            { number: 7, suit: 'spades', class: 'rank-7', rank: '7' },
            { number: 8, suit: 'spades', class: 'rank-8', rank: '8' },
            { number: 9, suit: 'spades', class: 'rank-9', rank: '9' },
            { number: 10, suit: 'spades', class: 'rank-10', rank: '10' },
            { number: 11, suit: 'spades', class: 'rank-j', rank: 'J' },
            { number: 12, suit: 'spades', class: 'rank-q', rank: 'Q' },
            { number: 13, suit: 'spades', class: 'rank-k', rank: 'K' },
            { number: 1, suit: 'clubs', class: 'rank-a', rank: 'A' },
            { number: 2, suit: 'clubs', class: 'rank-2', rank: '2' },
            { number: 3, suit: 'clubs', class: 'rank-3', rank: '3' },
            { number: 4, suit: 'clubs', class: 'rank-4', rank: '4' },
            { number: 5, suit: 'clubs', class: 'rank-5', rank: '5' },
            { number: 6, suit: 'clubs', class: 'rank-6', rank: '6' },
            { number: 7, suit: 'clubs', class: 'rank-7', rank: '7' },
            { number: 8, suit: 'clubs', class: 'rank-8', rank: '8' },
            { number: 9, suit: 'clubs', class: 'rank-9', rank: '9' },
            { number: 10, suit: 'clubs', class: 'rank-10', rank: '10' },
            { number: 11, suit: 'clubs', class: 'rank-j', rank: 'J' },
            { number: 12, suit: 'clubs', class: 'rank-q', rank: 'Q' },
            { number: 13, suit: 'clubs', class: 'rank-k', rank: 'K' }
        ];
    }
    Defaults = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Defaults);
    return Defaults;
}());



/***/ }),

/***/ "../../../../../src/app/provider/distance.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DistanceProvider = (function () {
    function DistanceProvider() {
    }
    DistanceProvider.prototype.getMeters = function (pos1, pos2) {
        return (this.getDistanceFromLatLonInKm(pos1.lat, pos1.lng, pos2.lat, pos2.lng) * 1000);
    };
    DistanceProvider.prototype.getKilometers = function (pos1, pos2) {
        return this.getDistanceFromLatLonInKm(pos1.lat, pos1.lng, pos2.lat, pos2.lng);
    };
    DistanceProvider.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    DistanceProvider.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    DistanceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DistanceProvider);
    return DistanceProvider;
}());



/***/ }),

/***/ "../../../../../src/app/provider/fitbit.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitbitProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__ = __webpack_require__("../../../../../src/app/interface/user.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FitbitProvider = (function () {
    function FitbitProvider(http) {
        this.http = http;
        this.scope = [];
        //this.client = new FitbitClient('22CGY6', '3e94747028c020bece22aa395baac816');
        this.redirect_uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].fitbitApiUrl;
        this.scope = ['activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight'];
    }
    FitbitProvider.prototype.getUserInfo = function (userAuth) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].fitbitRestApi + '/profile.json';
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                Authorization: 'Bearer ' + userAuth.accessToken
            });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getUserInfo error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next({
                    id: resp.user.firstName + resp.user.lastName,
                    username: resp.user.displayName,
                    displayname: resp.user.displayName,
                    firstname: resp.user.firstName,
                    lastname: resp.user.lastName,
                    avatar: resp.user.avatar150,
                    auth: userAuth,
                    steps: []
                });
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    FitbitProvider.prototype.getTodaySteps = function (userAuth) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var today = new Date();
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].fitbitRestApi + '/activities/date/'
                + today.getFullYear() + '-'
                + (today.getMonth() + 1) + '-'
                + today.getDate() + '.json';
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                Authorization: 'Bearer ' + userAuth.accessToken
            });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getTodaySteps error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next({
                    date: today,
                    day: today.getDate(),
                    month: today.getMonth(),
                    year: today.getFullYear(),
                    steps: +resp.summary.steps
                });
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    FitbitProvider.prototype.auth = function () {
        var _this = this;
        // skip fitbit authentication process and pretend its happen
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiURL + '/fitbit/redirect';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getRedirect error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(resp.url);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
        // var authorization_uri = this.client.getAuthorizationUrl(this.redirect_uri, this.scope);
        // return authorization_uri;
    };
    FitbitProvider.prototype.getTokens = function (code) {
        var _this = this;
        // fake token collection        
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiURL + '/fitbit/auth/' + code;
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getTokens error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next({
                    provider: __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit,
                    accessToken: resp.token.access_token,
                    refreshToken: resp.token.refresh_token,
                    expires: resp.token.expires_in
                });
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    FitbitProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], FitbitProvider);
    return FitbitProvider;
}());



/***/ }),

/***/ "../../../../../src/app/provider/health.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__ = __webpack_require__("../../../../../src/app/interface/user.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitbit_provider__ = __webpack_require__("../../../../../src/app/provider/fitbit.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FitbitProvider } from './stub/fitbit.stub.provider'; // ! stub

var HealthFactory = (function () {
    function HealthFactory(fitbit) {
        this.fitbit = fitbit;
    }
    HealthFactory.prototype.getAuth = function (authProvider) {
        switch (authProvider) {
            case __WEBPACK_IMPORTED_MODULE_1__interface_user_interface__["a" /* IUserAuthProvider */].Fitbit:
                return this.fitbit;
            default:
        }
    };
    HealthFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fitbit_provider__["a" /* FitbitProvider */]])
    ], HealthFactory);
    return HealthFactory;
}());



/***/ }),

/***/ "../../../../../src/app/provider/pokercard.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerCardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokerCardProvider = (function () {
    function PokerCardProvider(defaults) {
        this.defaults = defaults;
    }
    PokerCardProvider.prototype.getNewCard = function (taken, user, e) {
        var remaining = this.defaults.POKERCARDS.filter(function (pc) { return !taken.find(function (t) { return t.number == pc.number && t.suit == pc.suit; }); });
        var idx = Math.floor(Math.random() * (remaining.length));
        return {
            id: user.username + new Date().toISOString(),
            number: remaining[idx].number,
            suit: remaining[idx].suit,
            rank: remaining[idx].rank,
            date: new Date(),
            user: user,
            event: e
        };
    };
    PokerCardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__defaults_provider__["a" /* Defaults */]])
    ], PokerCardProvider);
    return PokerCardProvider;
}());



/***/ }),

/***/ "../../../../../src/app/provider/storage/achievement.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AchievementStorage = (function () {
    function AchievementStorage(http) {
        this.http = http;
    }
    AchievementStorage.prototype.add = function (achievement) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/achievement';
            _this.http.post(url, achievement)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'add error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(true);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    AchievementStorage.prototype.get = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/achievement';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'get error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(resp.filter(function (a) { return a.user.id = user.id; }));
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    AchievementStorage.prototype.getAll = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/achievement';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'get error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(resp);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    AchievementStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], AchievementStorage);
    return AchievementStorage;
}());



/***/ }),

/***/ "../../../../../src/app/provider/storage/poker.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PokerStorage = (function () {
    function PokerStorage(http) {
        this.http = http;
    }
    PokerStorage.prototype.add = function (card) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/poker';
            _this.http.post(url, card)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'add error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(true);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    PokerStorage.prototype.getAll = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/poker';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'get error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(resp);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    PokerStorage.prototype.getUsers = function (user, date) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/poker';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'get error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(resp.filter(function (p) { return _this.isSameDate(new Date(p.date), new Date()) && p.user.id === user.id; }));
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    PokerStorage.prototype.isSameDate = function (date, compare) {
        console.log('date');
        if (date.getDate() === compare.getDate() &&
            date.getMonth() === compare.getMonth() &&
            date.getFullYear() === compare.getFullYear()) {
            return true;
        }
        return false;
    };
    PokerStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], PokerStorage);
    return PokerStorage;
}());



/***/ }),

/***/ "../../../../../src/app/provider/storage/user.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Defaults } from '../../defaults.provider';




var UserStorage = (function () {
    function UserStorage(http) {
        this.http = http;
    }
    UserStorage.prototype.add = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/user';
            _this.http.post(url, user)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getUserInfo error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(true);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    UserStorage.prototype.update = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + '/rest/api/user/' + user.id;
            _this.http.put(url, user)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(err.json().err) || 'getUserInfo error'; })
                .subscribe(function (resp) {
                // return IUserStep
                ob.next(true);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    UserStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], UserStorage);
    return UserStorage;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.html":
/***/ (function(module, exports) {

module.exports = "<grapple-view>\r\n    <div view-head flex row>\r\n        <div flex column center grow>\r\n            <h4 flex row>\r\n                <span *ngIf=\"!activeMap\">Map Builder</span>\r\n                <i class=\"material-icons\" *ngIf=\"activeMap\">add_location</i>\r\n                <span *ngIf=\"activeMap\">{{activeMap.name}}</span>\r\n            </h4>\r\n        </div>\r\n        <div flex column center end class=\"pad-w-10px\">\r\n            <button *ngIf=\"editMode\" class=\"primary\" (click)=\"saveMap()\">Save Map</button>\r\n        </div>        \r\n    </div>\r\n    <div flex column center grow view-body>\r\n        <!-- Views -->\r\n        <mat-tab-group viewGroup>\r\n            <!-- Selection -->\r\n            <mat-tab>\r\n                <div flex column center grow>\r\n                    <h1 flex row center>Map Selection</h1>\r\n                    <div flex row center>\r\n                        <div class=\"map-tables mat-elevation-z8\">\r\n                            <mat-table #table [dataSource]=\"dataSource\">\r\n                                <!-- Name Column -->\r\n                                <ng-container matColumnDef=\"name\">\r\n                                    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let map\">\r\n                                        <a (click)=\"mapEdit(map)\">{{map.name}}</a>\r\n                                    </mat-cell>\r\n                                </ng-container>\r\n                            \r\n                                <!-- Weight Column -->\r\n                                <ng-container matColumnDef=\"description\">\r\n                                    <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let map\"> {{map.description}} </mat-cell>\r\n                                </ng-container>\r\n                            \r\n                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                            </mat-table>\r\n                        </div>\r\n                    </div>                    \r\n                </div>\r\n            </mat-tab>\r\n            <!-- Edit -->\r\n            <mat-tab>\r\n                <div flex column center grow>\r\n                    <map-maker [map]=\"maps[selectedMap]\" *ngIf=\"editMode\"></map-maker>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>  \r\n</grapple-view>"

/***/ }),

/***/ "../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[view-head] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  [view-head] h4 {\n    margin: 0 0 0 20px; }\n    [view-head] h4 i {\n      font-size: 36px; }\n\n[view-body] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\nmat-progress-bar {\n  max-width: 400px; }\n\n.unpack {\n  font-size: 140px;\n  margin: 60px 0 10px 0;\n  color: #7a7a7a; }\n\ni.super {\n  font-size: 100px; }\n\ni.primary {\n  color: #4c49d6; }\n\n.pad-10 {\n  padding: 10px; }\n\n.pad-100 {\n  padding: 100px; }\n\n.map-tables {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 900px;\n  margin: 50px 0; }\n  .map-tables a {\n    color: #398ff1;\n    cursor: pointer; }\n    .map-tables a:hover {\n      text-decoration: underline; }\n\nmap-maker {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapBuilderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapBuilderViewComponent = (function () {
    function MapBuilderViewComponent(defaults) {
        this.defaults = defaults;
        // title: string = 'Bright fitbit apple watch';
        // zoom: number = 12;
        // lat: number = 51.678418;
        // lng: number = 7.809007;
        this.ready = false;
        this.selectedMap = 0;
        this.editMode = false;
        this.displayedColumns = ['name', 'description'];
        this.maps = defaults.TESTMAPS;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatTableDataSource */](this.maps);
    }
    MapBuilderViewComponent.prototype.ngOnInit = function () {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     //do_something(position.coords.latitude, position.coords.longitude);
        //     this.lat = position.coords.latitude;
        //     this.lng = position.coords.longitude;
        // });
        this.ready = true;
    };
    MapBuilderViewComponent.prototype.mapEdit = function (map) {
        var _this = this;
        var index = this.maps.findIndex(function (m) { return m.id === map.id; });
        this.selectedMap = index;
        this.viewGroup.selectedIndex = 1;
        this.activeMap = map;
        window.setTimeout(function () {
            _this.editMode = true;
        });
    };
    MapBuilderViewComponent.prototype.saveMap = function () {
        var _this = this;
        this.defaults.TESTMAPS = this.maps;
        this.viewGroup.selectedIndex = 0;
        this.activeMap = undefined;
        window.setTimeout(function () {
            _this.editMode = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material_tabs__["a" /* MatTabGroup */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_tabs__["a" /* MatTabGroup */]
        // title: string = 'Bright fitbit apple watch';
        // zoom: number = 12;
        // lat: number = 51.678418;
        // lng: number = 7.809007;
        )
    ], MapBuilderViewComponent.prototype, "viewGroup", void 0);
    MapBuilderViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            styles: [__webpack_require__("../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.scss")],
            template: __webpack_require__("../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_defaults_provider__["a" /* Defaults */]])
    ], MapBuilderViewComponent);
    return MapBuilderViewComponent;
}());

// just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// } 


/***/ }),

/***/ "../../../../../src/app/views/client/home/home.view.html":
/***/ (function(module, exports) {

module.exports = "<grapple-view>\r\n    <div flex column center grow view-body>\r\n        <!-- <map-viewer [map]=\"map\" [user]=\"testUser\" flex grow></map-viewer>\r\n        <div class=\"profile\" flex column center>\r\n            <div flex row center>\r\n                <img src=\"./assets/hogs.png\" />\r\n            </div>            \r\n            <label class=\"mt-60px\">Lionel</label>\r\n            <label flex row center>\r\n                <span>10,344</span>\r\n                <span>15,664</span>                \r\n            </label>\r\n            <ul flex row>\r\n                <li fx-1>home</li>\r\n                <li fx-1>leaders</li>\r\n                <li fx-1>chat</li>\r\n                <li fx-1>collects</li>\r\n            </ul>\r\n        </div> -->\r\n\r\n\r\n        <!-- Views -->\r\n        <mat-tab-group viewGroup>\r\n            <!-- Home -->\r\n            <mat-tab>\r\n                <!-- <div flex column center grow>\r\n                    <label>User: <span>{{user | json}}</span></label>\r\n                    <label>Position: <span>{{position | json}}</span></label>\r\n                </div> -->\r\n                <div flex column center grow tab-body *ngIf=\"user && position\">\r\n                    <map-viewer [map]=\"map\" [position]=\"position\" [user]=\"user\" flex grow></map-viewer>                    \r\n                    \r\n                    <div class=\"profile\" flex column center>\r\n                        <div flex row>\r\n                            <img src=\"{{user.avatar}}\" (click)=\"account()\" />\r\n                        </div>            \r\n                        \r\n                        <div flex row center>\r\n                            <label flex row start fx-1 class=\"primary\">\r\n                                \r\n                                <span>{{steps}}</span>                                \r\n                            </label>             \r\n                            <label flex row end fx-1 class=\"secondary\">                                \r\n                                \r\n                                <span>{{bonus}}</span>                \r\n                            </label>             \r\n                        </div>           \r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <!-- Leaders -->\r\n            <mat-tab>\r\n                <div flex column center grow>\r\n                    <h3>Leaders</h3>\r\n                    <div flex column grow>\r\n                        <leader-list></leader-list>\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <!-- Chat -->\r\n            <mat-tab>\r\n                <div flex column center grow>\r\n                    <h3>Chat</h3>                    \r\n                </div>\r\n            </mat-tab>\r\n            <!-- Poker -->\r\n            <mat-tab>\r\n                <div flex column center grow *ngIf=\"user\">\r\n                    <h3>Poker Cards</h3>                    \r\n                    <poker-cards [user]=\"user\" grow></poker-cards>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n        <!-- Menu -->\r\n        <nav flex column center>            \r\n            <ul flex row>\r\n                <li fx-1 (click)=\"viewGroup.selectedIndex = 0\">\r\n                    <i class=\"material-icons\" [class.active]=\"viewGroup.selectedIndex == 0\">directions_walk</i>\r\n                </li>\r\n                <li fx-1 (click)=\"viewGroup.selectedIndex = 1\">\r\n                    <i class=\"material-icons\" [class.active]=\"viewGroup.selectedIndex == 1\">grade</i>\r\n                </li>\r\n                <li fx-1 (click)=\"position = {lat: -36.737236559795434, lng: 146.970594227314}\">\r\n                    <i class=\"material-icons\" [class.active]=\"viewGroup.selectedIndex == 2\">chat_bubble</i>\r\n                </li>\r\n                <li fx-1 (click)=\"gotoCards()\">\r\n                    <i class=\"material-icons\" [class.active]=\"viewGroup.selectedIndex == 3\">content_copy</i>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>  \r\n</grapple-view>"

/***/ }),

/***/ "../../../../../src/app/views/client/home/home.view.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "map-viewer {\n  width: 100%;\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n[view-body] {\n  position: relative;\n  overflow: hidden; }\n\n[tab-body] {\n  position: relative;\n  height: calc(100vh - 50px);\n  overflow: hidden; }\n\n.profile {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background-color: #e7e7e7; }\n  .profile img {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    top: -50%;\n    border-radius: 50%;\n    border: solid 4px #fff;\n    box-shadow: 0 0 12px -3px;\n    left: calc(50% - 54px); }\n  .profile label {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 30px;\n    padding: 24px; }\n    .profile label.primary {\n      background-color: #56a8f1;\n      color: #eee; }\n    .profile label.secondary {\n      background-color: #5661f1;\n      color: #eee; }\n    .profile label small {\n      font-size: 12px;\n      letter-spacing: 1px; }\n      .profile label small.primary {\n        color: #56a8f1; }\n      .profile label small.secondary {\n        color: #5661f1; }\n\nnav {\n  min-height: 50px !important; }\n  nav ul {\n    background-color: #e7e7e7;\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n    nav ul li {\n      margin: 0;\n      text-align: center;\n      padding: 10px; }\n      nav ul li i {\n        color: rgba(51, 51, 51, 0.5);\n        font-size: 26px; }\n        nav ul li i.active {\n          color: #56a8f1; }\n\n.mt-100px {\n  margin-top: 100px; }\n\n.mt-60px {\n  margin-top: 60px; }\n\n.mt-70px {\n  margin-top: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/client/home/home.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_user_cards_cards_component__ = __webpack_require__("../../../../../src/app/component/user/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_dialogs_account_account_component__ = __webpack_require__("../../../../../src/app/component/dialogs/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_health_factory__ = __webpack_require__("../../../../../src/app/provider/health.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_storage_user_storage__ = __webpack_require__("../../../../../src/app/provider/storage/user.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_achievement_provider__ = __webpack_require__("../../../../../src/app/provider/achievement.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__provider_defaults_provider__ = __webpack_require__("../../../../../src/app/provider/defaults.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { UserStorage } from '../../../provider/stub/storage/user.stub.storage'; // ! stub

// import { AchievementsProvider } from '../../../provider/stub/achievements.stub.provider'; // ! stub


var HomeViewComponent = (function () {
    function HomeViewComponent(healthFactory, userStorage, achievements, router, activatedRoute, defaults, dialog) {
        var _this = this;
        this.healthFactory = healthFactory;
        this.userStorage = userStorage;
        this.achievements = achievements;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.defaults = defaults;
        this.dialog = dialog;
        // @ViewChild(MapViewerComponent) mapView: MapViewerComponent;
        this.ready = false;
        this.steps = 0;
        this.bonus = 0;
        this.testUser = { lat: -36.73018081106022, lng: 146.96111261844635 }; // TODO: remove
        this.position = this.testUser;
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.position = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
        }, function (err) {
            console.error(err);
        }, {
            timeout: 10000
        });
        this.watchLoc = navigator.geolocation.watchPosition(function (pos) {
            _this.position = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
        });
        this.map = this.defaults.TESTMAPS[0]; // replace with actual map
        this.map.origin = this.testUser; // replace          
    }
    HomeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the user
        this.activatedRoute.params.subscribe(function (params) {
            // this.access_token = params['access_token'];
            // var provider = params['provider'];            
            _this.loadUser();
        });
        // this.viewGroup.selectChange.subscribe(index => {
        //     if(index = 0) {
        //         this.sync();
        //     }
        // });
    };
    HomeViewComponent.prototype.gotoCards = function () {
        this.viewGroup.selectedIndex = 3;
        this.pokerCards.sync();
    };
    HomeViewComponent.prototype.account = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__component_dialogs_account_account_component__["a" /* AccountComponent */], {
            data: {
                logout: function () {
                    localStorage.clear();
                    _this.router.navigateByUrl('/');
                    _this.dialog.closeAll();
                }
            }
        });
    };
    HomeViewComponent.prototype.loadUser = function () {
        var _this = this;
        var user = localStorage.getItem('user');
        if (!user) {
            this.router.navigateByUrl('/');
            return;
        }
        this.user = JSON.parse(user);
        this.healthProvider = this.healthFactory.getAuth(this.user.auth.provider);
        this.sync().subscribe(function (u) {
            _this.user = u;
            window.setTimeout(function () {
                // let mapClient = document.querySelector('[tab-body]');
                // let mapView = document.querySelector('map-viewer');
                // (<any>mapView).style.height = mapClient.clientHeight + 'px';
                _this.ready = true;
            });
            _this.getSteps();
            _this.userStorage.update(u).subscribe(function (result) {
                if (!result) {
                    // error
                }
            });
        });
    };
    HomeViewComponent.prototype.sync = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (ob) {
            __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].forkJoin([_this.healthProvider.getUserInfo(_this.user.auth), _this.healthProvider.getTodaySteps(_this.user.auth)])
                .subscribe(function (u) {
                var user = u[0];
                // update todays steps
                var found = false;
                user.steps.forEach(function (s) {
                    if (_this.isSameDate(s.date, new Date())) {
                        s = u[1];
                        found = true;
                    }
                });
                if (!found)
                    user.steps.push(u[1]);
                ob.next(user);
            }, function (err) {
                ob.error(err);
            }, function () {
                ob.complete();
            });
        });
    };
    HomeViewComponent.prototype.getSteps = function () {
        var _this = this;
        var steps = this.user.steps.find(function (s) { return _this.isSameDate(s.date, new Date()); });
        if (steps) {
            this.achievements.get(this.user, new Date()).subscribe(function (ach) {
                _this.steps = steps.steps;
                _this.bonus = _this.achievements.calculateBonus(_this.steps, ach);
            });
        }
    };
    HomeViewComponent.prototype.isSameDate = function (date, compare) {
        if (date.getDate() === compare.getDate() &&
            date.getMonth() === compare.getMonth() &&
            date.getFullYear() === compare.getFullYear()) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabGroup */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabGroup */])
    ], HomeViewComponent.prototype, "viewGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__component_user_cards_cards_component__["a" /* CardsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__component_user_cards_cards_component__["a" /* CardsComponent */])
    ], HomeViewComponent.prototype, "pokerCards", void 0);
    HomeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            styles: [__webpack_require__("../../../../../src/app/views/client/home/home.view.scss")],
            template: __webpack_require__("../../../../../src/app/views/client/home/home.view.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__provider_health_factory__["a" /* HealthFactory */],
            __WEBPACK_IMPORTED_MODULE_8__provider_storage_user_storage__["a" /* UserStorage */],
            __WEBPACK_IMPORTED_MODULE_9__provider_achievement_provider__["a" /* AchievementsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_10__provider_defaults_provider__["a" /* Defaults */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]])
    ], HomeViewComponent);
    return HomeViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/client/landing/landing.view.html":
/***/ (function(module, exports) {

module.exports = "<grapple-view>\r\n    <div flex column center grow view-body>\r\n        <div class=\"page\" flex column center grow>\r\n            <div flex row center>\r\n                <i class=\"material-icons star\">stars</i>\r\n            </div>\r\n            <h3 flex row center>Bright Allstars</h3>    \r\n            <div class=\"buttons\" flex column center>\r\n                <button class=\"primary\" (click)=\"fitbit()\">I'm with FitBit</button>\r\n                <button class=\"primary\" (click)=\"apple()\">I'm with Apple</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</grapple-view>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/client/landing/landing.view.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[view-body] {\n  background: url(" + __webpack_require__("../../../../../src/assets/yosemite.jpg") + ");\n  background-size: cover; }\n\n.page {\n  background-color: rgba(83, 83, 83, 0.59); }\n\n.buttons {\n  padding: 50px 10px; }\n\n.star {\n  font-size: 90px;\n  color: #eeeeee9e;\n  border-radius: 50%;\n  margin: 20px; }\n\nh3 {\n  font-weight: 300;\n  letter-spacing: 3px;\n  text-align: center;\n  color: rgba(238, 238, 238, 0.67); }\n\nbutton {\n  margin: 10px 0;\n  padding: 20px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/client/landing/landing.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_fitbit_provider__ = __webpack_require__("../../../../../src/app/provider/fitbit.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FitbitProvider } from '../../../provider/stub/fitbit.stub.provider'; // ! stub
 // ! stub
var LandingViewComponent = (function () {
    function LandingViewComponent(fitbitProvider, router) {
        this.fitbitProvider = fitbitProvider;
        this.router = router;
    }
    LandingViewComponent.prototype.ngOnInit = function () {
    };
    LandingViewComponent.prototype.fitbit = function () {
        this.fitbitProvider.auth().subscribe(function (url) {
            window.location.href = url;
        });
    };
    LandingViewComponent.prototype.apple = function () {
    };
    LandingViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            styles: [__webpack_require__("../../../../../src/app/views/client/landing/landing.view.scss")],
            template: __webpack_require__("../../../../../src/app/views/client/landing/landing.view.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__provider_fitbit_provider__["a" /* FitbitProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LandingViewComponent);
    return LandingViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/client/setup/setup.view.html":
/***/ (function(module, exports) {

module.exports = "<grapple-view>\r\n    <div flex column center grow view-body>\r\n        <h3>Loading User</h3>\r\n        <mat-progress-bar mode=\"indeterminate\" class=\"primary\"></mat-progress-bar>\r\n    </div>\r\n</grapple-view>         "

/***/ }),

/***/ "../../../../../src/app/views/client/setup/setup.view.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[view-body] {\n  padding: 50px; }\n\nh3 {\n  text-align: center;\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/client/setup/setup.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_health_factory__ = __webpack_require__("../../../../../src/app/provider/health.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_storage_user_storage__ = __webpack_require__("../../../../../src/app/provider/storage/user.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupViewComponent = (function () {
    function SetupViewComponent(healthFactory, userStorage, router, activatedRoute) {
        this.healthFactory = healthFactory;
        this.userStorage = userStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SetupViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.code = this.getParameterByName('code');
        this.activatedRoute.params.subscribe(function (params) {
            var provider = +params['provider'];
            _this.healthProvider = _this.healthFactory.getAuth(provider);
            var token = localStorage.getItem('tokens');
            if (token) {
                _this.getUserAndForward(JSON.parse(token));
                return;
            }
            _this.healthProvider.getTokens(_this.code).subscribe(function (tokens) {
                localStorage.setItem('tokens', JSON.stringify(tokens));
                _this.getUserAndForward(tokens);
            });
        });
    };
    SetupViewComponent.prototype.getUserAndForward = function (tokens) {
        var _this = this;
        this.healthProvider.getUserInfo(tokens).subscribe(function (user) {
            // create new user
            _this.userStorage.add(user).subscribe(function (result) {
                // set localstorage and navigate
                localStorage.setItem('user', JSON.stringify(user));
                _this.router.navigateByUrl('/home');
            }, function (err) {
                _this.router.navigateByUrl('/');
            });
        });
    };
    SetupViewComponent.prototype.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    SetupViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            styles: [__webpack_require__("../../../../../src/app/views/client/setup/setup.view.scss")],
            template: __webpack_require__("../../../../../src/app/views/client/setup/setup.view.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__provider_health_factory__["a" /* HealthFactory */],
            __WEBPACK_IMPORTED_MODULE_3__provider_storage_user_storage__["a" /* UserStorage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SetupViewComponent);
    return SetupViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ViewBar -->\r\n<nav flex column center>\r\n    <section flex row>\r\n        <ng-content select=\"[view-head]\"></ng-content>\r\n    </section>\r\n</nav>\r\n<!-- ViewContent -->\r\n<ng-content select=\"[view-body]\"></ng-content>"

/***/ }),

/***/ "../../../../../src/app/views/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nnav {\n  background-color: #fff;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ViewComponent = (function () {
    function ViewComponent() {
    }
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'grapple-view',
            styles: [__webpack_require__("../../../../../src/app/views/view.component.scss")],
            template: __webpack_require__("../../../../../src/app/views/view.component.html")
        })
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/view.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRoute; });
/* unused harmony export viewRouting */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_mapbuilder_mapbuilder_view__ = __webpack_require__("../../../../../src/app/views/admin/mapbuilder/mapbuilder.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_home_home_view__ = __webpack_require__("../../../../../src/app/views/client/home/home.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_setup_setup_view__ = __webpack_require__("../../../../../src/app/views/client/setup/setup.view.ts");




var ViewRoute = [
    { path: 'admin/maps', component: __WEBPACK_IMPORTED_MODULE_1__admin_mapbuilder_mapbuilder_view__["a" /* MapBuilderViewComponent */] },
    { path: 'oauth2/:provider', component: __WEBPACK_IMPORTED_MODULE_3__client_setup_setup_view__["a" /* SetupViewComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__client_home_home_view__["a" /* HomeViewComponent */] }
];
var viewRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(ViewRoute);


/***/ }),

/***/ "../../../../../src/assets/yosemite.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "yosemite.894ce2586d5c9aa3bd61.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiURL: 'http://192.168.15.178:4000',
    homeURL: 'http://192.168.15.178:5200/home',
    fitbitApiUrl: 'http://192.168.15.178:5200/oauth2/0',
    fitbitRestApi: 'https://api.fitbit.com/1/user/-',
    appleApiUrl: 'http://localhost:3000/oauth2/1'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map