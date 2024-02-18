import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { take } from "rxjs";
@Component({
    selector: "app-search-form",
    templateUrl: "./search-form.component.html",
    styleUrls: ["./search-form.component.css"],
})
export class SearchFormComponent implements OnInit {
    magnifying = faMagnifyingGlass;
    wordQuery = "";
    @Output() searchSubmit = new EventEmitter<string>();

    constructor(private route: ActivatedRoute) {}

    public handleSubmit(searchValue: { query: string }) {
        if (searchValue.query.trim() !== "") {
            this.searchSubmit.emit(searchValue.query);
        }
    }

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe(params => {
            if (params["search"]) {
                this.wordQuery = params["search"];
                this.searchSubmit.emit(params["search"]);
            }
        });
    }
}
