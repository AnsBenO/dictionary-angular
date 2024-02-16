import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
    name: "highlightSearch",
})
export class HighlightSearchPipe implements PipeTransform {
    transform(value: string, searchText: string): string {
        if (!searchText) {
            return value;
        }
        const regex = new RegExp(searchText, "gi");
        return value.replace(regex, match => {
            return `<strong>${match}</strong>`;
        });
    }
}
