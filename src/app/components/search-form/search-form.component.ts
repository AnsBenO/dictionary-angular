import { Component, EventEmitter, Output } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
@Component({
    selector: "app-search-form",
    templateUrl: "./search-form.component.html",
    styleUrls: ["./search-form.component.css"],
})
export class SearchFormComponent {
    magnifying = faMagnifyingGlass;
    @Output() searchSubmit = new EventEmitter<string>();

    public handleSubmit(searchValue: { query: string }) {
        if (searchValue.query.trim() !== "") {
            this.searchSubmit.emit(searchValue.query);
        }
    }
}
