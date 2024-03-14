import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./pages/home/home.module").then(m => m.HomeModule),
    },
    {
        path: "saved-definitions",
        loadChildren: () =>
            import("./pages/saved-definitions/saved-definitions.module").then(
                m => m.SavedDefinitionsModule
            ),
    },
    {
        path: "about",
        loadChildren: () =>
            import("./pages/about/about.module").then(m => m.AboutModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
