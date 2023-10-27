import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DefinitionsComponent } from "./components/definitions/definitions.component";
import { ToggleComponent } from "./components/toggle/toggle.component";
import { MessageComponent } from "./components/message/message.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        DefinitionsComponent,
        ToggleComponent,
        MessageComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
