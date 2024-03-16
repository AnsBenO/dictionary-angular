import { Component, OnDestroy, OnInit } from "@angular/core";

import { Theme } from "./types/Theme.enum";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
    theme!: Theme;
    $destroy: Subject<void> = new Subject();

    saveThemeToLocalStorage() {
        localStorage.setItem("theme", this.theme);
    }

    showLoader: boolean = false;

    constructor(private router: Router) {
        router.events.pipe(takeUntil(this.$destroy)).subscribe(event => {
            if (event instanceof NavigationStart) {
                this.showLoader = true;
            } else if (event instanceof NavigationEnd) {
                this.showLoader = false;
            }
        });
    }
    ngOnDestroy(): void {
        this.$destroy.next();
        this.$destroy.complete();
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
