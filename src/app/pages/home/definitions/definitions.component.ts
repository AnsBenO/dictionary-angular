import { Component, Input } from "@angular/core";
import { WordData } from "src/app/types/Definitions.interface";
import {
    faVolumeHigh,
    faVolumeXmark,
    faBookmark as solidFaBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularFaBookmark } from "@fortawesome/free-regular-svg-icons";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: "app-definitions",
    templateUrl: "./definitions.component.html",
    styleUrls: ["./definitions.component.css"],
})
export class DefinitionsComponent {
    @Input() definitionsData!: WordData[];
    isPlaying: boolean = false;
    volumeXmark = faVolumeXmark;
    volumeHigh = faVolumeHigh;
    solidSave = solidFaBookmark;
    regularSave = regularFaBookmark as IconProp;

    toggleAudio() {
        this.isPlaying = !this.isPlaying;
    }

    saveToLocalStorage(definition: string): void {
        const savedDefinitionsString = localStorage.getItem("savedDefinitions");
        let savedDefinitions: SavedDefinition[] = savedDefinitionsString
            ? JSON.parse(savedDefinitionsString)
            : [];

        const existingIndex = savedDefinitions.findIndex(
            def => def.word === definition
        );

        if (existingIndex !== -1) {
            savedDefinitions.splice(existingIndex, 1);
        } else {
            const savedDefinition: SavedDefinition = {
                word: definition,
                savedAt: new Date(),
            };
            savedDefinitions.push(savedDefinition);
        }

        localStorage.setItem(
            "savedDefinitions",
            JSON.stringify(savedDefinitions)
        );
    }

    isWordSaved(word: string): boolean {
        const savedDefinitionsString = localStorage.getItem("savedDefinitions");
        const savedDefinitions: SavedDefinition[] = savedDefinitionsString
            ? JSON.parse(savedDefinitionsString)
            : [];

        return savedDefinitions.some(definition => definition.word === word);
    }
}
