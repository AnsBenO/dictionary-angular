import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: "app-notification",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./notification.template.html",
    styleUrls: ["./notification.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
    @Input() message!: string;
}
