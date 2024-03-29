import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { DefinitionsComponent } from "./definitions/definitions.component";
import { MessageComponent } from "./message/message.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchFormComponent } from "./search-form/search-form.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeRoutingModule } from "./home-routing.module";
import { LoaderComponent } from "src/app/app-components/loader/loader.component";

@NgModule({
    declarations: [
        HomeComponent,
        SearchFormComponent,
        MessageComponent,
        DefinitionsComponent,
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        HomeRoutingModule,
        LoaderComponent,
    ],
    providers: [],
})
export class HomeModule {}
