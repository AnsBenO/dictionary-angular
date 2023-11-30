import { Component } from "@angular/core";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
    xMark = faXmark;
    bars = faBars;
    isHidden: boolean = true;

    handleClick() {
        this.isHidden = !this.isHidden;
    }
}
