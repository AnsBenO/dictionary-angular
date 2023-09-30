import { Component, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { SearchService } from "./services/search.service";
import { WordData } from "./types/Definitions.interface";
import { Subject } from "rxjs/internal/Subject";
import { Theme } from "./types/Theme.enum";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy, OnInit {
    difinitionsData!: WordData[] | null;
    theme!: Theme;
    isSubmitted: boolean = false;
    private ngUnsubscribe = new Subject<void>();

    constructor(
        public searchService: SearchService,
        private renderer: Renderer2
    ) {}
    private saveThemeToLocalStorage(theme: string) {
        localStorage.setItem("theme", theme);
    }

    public applyTheme(theme: Theme) {
        this.renderer.setAttribute(
            document.querySelector("main"),
            "data-theme",
            this.theme.toString()
        );

        this.saveThemeToLocalStorage(theme);
    }

    ngOnInit(): void {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            this.theme = savedTheme as Theme;
            this.applyTheme(savedTheme);
        } else {
            this.theme = Theme.light;
        }
    }

    switchTheme(theme: Theme) {
        this.theme = theme;
        this.applyTheme(theme);
    }
    handleSearchSubmit(formValue: string) {
        this.searchService
            .getDefinitions(formValue)
            .subscribe(difinitions => (this.difinitionsData = difinitions));
        this.isSubmitted = true;
    }
    title = "dictionary-angular";
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
