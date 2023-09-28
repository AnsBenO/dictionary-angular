import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Theme } from "src/app/types/Theme.enum";

@Component({
    selector: "app-toggle",
    templateUrl: "./toggle.component.html",
    styleUrls: ["./toggle.component.css"],
})
export class ToggleComponent implements OnInit {
    ngOnInit(): void {
        this.updateLabel();
    }
    @Input() theme!: Theme;
    @Output() themeChange = new EventEmitter<Theme>();

    label!: string;

    handleClick() {
        const updatedTheme =
            this.theme === Theme.light ? Theme.dark : Theme.light;
        this.theme = updatedTheme;
        this.updateLabel();
        this.themeChange.emit(updatedTheme);
    }

    updateLabel() {
        this.label = this.theme !== Theme.light ? "DARK MODE" : "LIGHT MODE";
    }
}
