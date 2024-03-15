import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ToggleComponent } from "./app-components/toggle/toggle.component";
import { NavigationComponent } from "./app-components/navigation/navigation.component";
import { LoaderComponent } from "./app-components/loader/loader.component";

@NgModule({
    declarations: [AppComponent, ToggleComponent, NavigationComponent],
    providers: [],

    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        LoaderComponent,
    ],
})
export class AppModule {}
