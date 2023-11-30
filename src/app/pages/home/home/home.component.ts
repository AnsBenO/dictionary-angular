import { Component } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { WordData } from "src/app/types/Definitions.interface";
import { Theme } from "src/app/types/Theme.enum";
import { SearchService } from "../services/search.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    title = "dictionary-angular";
    difinitionsData!: WordData[] | null;
    theme!: Theme;
    isSubmitted: boolean = false;
    private destroy$ = new Subject<void>();

    constructor(public searchService: SearchService) {}
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

    handleSearchSubmit(formValue: string) {
        this.searchService
            .getDefinitions(formValue)
            .pipe(takeUntil(this.destroy$))
            .subscribe(difinitions => (this.difinitionsData = difinitions));
        this.isSubmitted = true;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
