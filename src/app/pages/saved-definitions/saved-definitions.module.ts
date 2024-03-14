import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SavedDifinitionsComponent } from "./saved-difinitions/saved-difinitions.component";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FilterDefinitionsPipe } from "./pipes/filter-definitions.pipe";
import { HighlightSearchPipe } from "./pipes/highlight-search.pipe";
import { DefinitionItemComponent } from "./definition-item/definition-item.component";
import { SavedDefinitionsRoutingModule } from "./saved-definitions-routing.module";

@NgModule({
    declarations: [
        SavedDifinitionsComponent,
        DefinitionItemComponent,
        FilterDefinitionsPipe,
        HighlightSearchPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        SavedDefinitionsRoutingModule,
    ],
})
export class SavedDefinitionsModule {}
