import { Component, Input } from "@angular/core";
import { WordData } from "src/app/types/Definitions.type";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

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

    toggleAudio() {
        this.isPlaying = !this.isPlaying;
    }
}
