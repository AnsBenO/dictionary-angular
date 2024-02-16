import { Pipe, type PipeTransform } from "@angular/core";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";

@Pipe({
    name: "filterDefinitions",
})
export class FilterDefinitionsPipe implements PipeTransform {
    transform(items: SavedDefinition[], searchText: string): SavedDefinition[] {
        if (!items || !searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(item => {
            return item.word.toLowerCase().includes(searchText);
        });
    }
}
