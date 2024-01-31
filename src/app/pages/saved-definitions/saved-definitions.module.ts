import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SavedDifinitionsComponent } from "./saved-difinitions/saved-difinitions.component";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [SavedDifinitionsComponent],
    imports: [CommonModule, FormsModule, FontAwesomeModule],
})
export class SavedDefinitionsModule {}
