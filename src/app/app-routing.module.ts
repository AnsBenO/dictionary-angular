import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about/about.component";
import { SavedDifinitionsComponent } from "./pages/saved-definitions/saved-difinitions/saved-difinitions.component";
import { HomeComponent } from "./pages/home/home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "saved-definitions", component: SavedDifinitionsComponent },
    { path: "about", component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
