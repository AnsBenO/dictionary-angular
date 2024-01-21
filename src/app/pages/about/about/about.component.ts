import { Component } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"],
})
export class AboutComponent {
    linkedIn = faLinkedin as IconProp;
    gitHub = faGithub as IconProp;
}
