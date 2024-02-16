import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";

@Component({
    selector: "app-definition-item",
    templateUrl: "./definition-item.template.html",
    styleUrls: ["./definition-item.component.css"],
})
export class DefinitionItemComponent {
    @Input() savedWord!: SavedDefinition;
    @Input() searchInput!: string;
    @Output() onRemove = new EventEmitter<SavedDefinition>();

    xmark = faXmark;
    search = faSearch;
    constructor(private router: Router) {}

    removeDefinition(): void {
        this.onRemove.emit(this.savedWord);
    }

    navigateToRootWithQuery(word: string): void {
        this.router.navigate(["/"], { queryParams: { search: word } });
    }
}
