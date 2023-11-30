import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AboutModule } from "./pages/about/about.module";
import { SavedDefinitionsModule } from "./pages/saved-definitions/saved-definitions.module";
import { HomeModule } from "./pages/home/home.module";
import { HttpClientModule } from "@angular/common/http";
import { ToggleComponent } from "./app-components/toggle/toggle.component";
import { NavigationComponent } from "./app-components/navigation/navigation.component";

@NgModule({
    declarations: [AppComponent, ToggleComponent, NavigationComponent],
    providers: [],

    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HomeModule,
        AboutModule,
        SavedDefinitionsModule,
    ],
})
export class AppModule {}
