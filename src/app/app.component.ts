import { Component, OnInit } from "@angular/core";

import { Theme } from "./types/Theme.enum";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    theme!: Theme;

    saveThemeToLocalStorage() {
        localStorage.setItem("theme", this.theme);
    }

    ngOnInit(): void {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            this.theme = savedTheme as Theme;
        } else {
            this.theme = Theme.light;
        }
    }
}
