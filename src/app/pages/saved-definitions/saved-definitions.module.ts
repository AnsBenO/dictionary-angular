import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SavedDifinitionsComponent } from "./saved-difinitions/saved-difinitions.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [SavedDifinitionsComponent],
    imports: [CommonModule, FormsModule],
})
export class SavedDefinitionsModule {}
