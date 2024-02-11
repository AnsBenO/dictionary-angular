import { Component, HostListener } from "@angular/core";
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

    hideDropdown(event: Event) {
        // Stop event propagation
        event.stopPropagation();
        this.isHidden = !this.isHidden;
    }

    @HostListener("document:click", ["$event"])
    @HostListener("document:touchstart", ["$event"])
    handleOutsideClick(event: Event) {
        const navigationElement = document.querySelector(
            ".dropdown_menu.active"
        );

        if (
            navigationElement &&
            !navigationElement.contains(event.target as Node)
        ) {
            this.isHidden = true;
        }
    }
}
