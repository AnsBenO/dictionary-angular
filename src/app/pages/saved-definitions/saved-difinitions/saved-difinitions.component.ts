import { Component, OnInit } from "@angular/core";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";
@Component({
    selector: "app-saved-difinitions",
    templateUrl: "./saved-difinitions.component.html",
    styleUrls: ["./saved-difinitions.component.css"],
})
export class SavedDifinitionsComponent implements OnInit {
    savedDefinitions: SavedDefinition[] = [];

    constructor() {}

    ngOnInit(): void {
        this.loadSavedDefinitions();
    }

    loadSavedDefinitions(): void {
        const savedDefinitionsString = localStorage.getItem("savedDefinitions");
        if (savedDefinitionsString) {
            this.savedDefinitions = (
                JSON.parse(savedDefinitionsString) as SavedDefinition[]
            ).sort((a, b) => a.word.localeCompare(b.word));
        }
    }

    removeDefinition(word: SavedDefinition): void {
        this.savedDefinitions = this.savedDefinitions.filter(
            definition =>
                definition.word.toLowerCase() !== word.word.toLowerCase()
        );
        localStorage.setItem(
            "savedDefinitions",
            JSON.stringify(this.savedDefinitions)
        );
    }
}
