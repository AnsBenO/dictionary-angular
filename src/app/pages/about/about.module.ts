import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, FontAwesomeModule],
})
export class AboutModule {}
