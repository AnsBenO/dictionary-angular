import { Component, OnInit } from "@angular/core";

import { Theme } from "./types/Theme.enum";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

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

    showLoader: boolean = false;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.showLoader = true;
            } else if (event instanceof NavigationEnd) {
                this.showLoader = false;
            }
        });
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
