import { Component, OnInit } from "@angular/core";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
@Component({
    selector: "app-saved-difinitions",
    templateUrl: "./saved-difinitions.component.html",
    styleUrls: ["./saved-difinitions.component.css"],
})
export class SavedDifinitionsComponent implements OnInit {
    savedDefinitions: SavedDefinition[] = [];
    xmark = faXmark;
    search = faSearch;

    constructor(private router: Router) {}

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

    searchDefinitions(word: string): void {
        if (word.trim() === "") {
            this.loadSavedDefinitions();
        } else {
            this.savedDefinitions = this.savedDefinitions.filter(definition =>
                definition.word.toLowerCase().includes(word.toLowerCase())
            );
        }
    }

    removeDefinition(word: string): void {
        this.savedDefinitions = this.savedDefinitions.filter(
            definition => definition.word.toLowerCase() !== word.toLowerCase()
        );
        localStorage.setItem(
            "savedDefinitions",
            JSON.stringify(this.savedDefinitions)
        );
    }

    navigateToRootWithQuery(word: string): void {
        this.router.navigate(["/"], { queryParams: { search: word } });
    }
}
