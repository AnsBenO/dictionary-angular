import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SavedDifinitionsComponent } from "./saved-difinitions/saved-difinitions.component";

const routes: Routes = [
    {
        path: "",
        component: SavedDifinitionsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SavedDefinitionsRoutingModule {}
