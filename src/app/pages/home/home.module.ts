// home.module.ts

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { DefinitionsComponent } from "./definitions/definitions.component";
import { MessageComponent } from "./message/message.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchFormComponent } from "./search-form/search-form.component";
import { FormsModule } from "@angular/forms";
import { SearchService } from "./services/search.service";

@NgModule({
    declarations: [
        HomeComponent,
        SearchFormComponent,
        MessageComponent,
        DefinitionsComponent,
    ],
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    providers: [SearchService],
})
export class HomeModule {}
