"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('angular2-google-maps/core');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
//# sourceMappingURL=main.js.map