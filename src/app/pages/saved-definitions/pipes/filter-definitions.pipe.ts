import { Pipe, PipeTransform } from "@angular/core";
import { SavedDefinition } from "src/app/types/SavedDefinition.interface";

@Pipe({
    name: "filterDefinitions",
})
export class FilterDefinitionsPipe implements PipeTransform {
    transform(items: SavedDefinition[], searchText: string): SavedDefinition[] {
        if (!items || !searchText) {
            return items.sort((a, b) => a.word.localeCompare(b.word));
        }

        searchText = searchText.toLowerCase();

        return items
            .filter(item => item.word.toLowerCase().includes(searchText))
            .sort((a, b) => {
                // Calculate the position of the search term in item.word
                const positionA = a.word.toLowerCase().indexOf(searchText);
                const positionB = b.word.toLowerCase().indexOf(searchText);

                // Sort based on the position (ascending order)
                return positionA - positionB;
            });
    }
}
