import { Component, Input } from "@angular/core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
@Component({
    selector: "app-message",
    templateUrl: "./message.component.html",
    styleUrls: ["./message.component.css"],
})
export class MessageComponent {
    @Input() isSubmitted!: boolean;
    exclamation = faExclamationCircle;
}
