import { Component, OnInit } from "@angular/core";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
@Component({
    selector: "app-saved-difinitions",
    templateUrl: "./saved-difinitions.component.html",
    styleUrls: ["./saved-difinitions.component.css"],
})
export class SavedDifinitionsComponent implements OnInit {
    savedDefinitions: SavedDefinition[] = [];
    searchTerm: string = "";
    xmark = faXmark;
    ngOnInit(): void {
        this.loadSavedDefinitions();
    }

    loadSavedDefinitions(): void {
        const savedDefinitionsString = localStorage.getItem("savedDefinitions");
        if (savedDefinitionsString) {
            this.savedDefinitions = JSON.parse(savedDefinitionsString);
        }
    }

    searchDefinitions(): void {
        if (this.searchTerm.trim() === "") {
            this.loadSavedDefinitions();
        } else {
            this.savedDefinitions = this.savedDefinitions.filter(definition =>
                definition.word
                    .toLowerCase()
                    .includes(this.searchTerm.toLowerCase())
            );
        }
    }

    removeDefinition(word: string): void {}
}
