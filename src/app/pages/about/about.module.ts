import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutRoutingModule } from "./about-routing.module";

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, FontAwesomeModule, AboutRoutingModule],
})
export class AboutModule {}
