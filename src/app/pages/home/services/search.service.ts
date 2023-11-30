import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {
    BehaviorSubject,
    Observable,
    catchError,
    finalize,
    map,
    of,
} from "rxjs";
import { WordData } from "src/app/types/Definitions.interface";
@Injectable({
    providedIn: "root",
})
export class SearchService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}
    private isLoadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.isLoadingSubject.asObservable();
    public getDefinitions(query: string): Observable<WordData[] | null> {
        this.isLoadingSubject.next(true);

        return this.http.get<WordData[]>(`${this.apiUrl}/${query}`).pipe(
            map((response: any) => {
                if (
                    "title" in response &&
                    response.title === "No Definitions Found"
                ) {
                    return null;
                }
                return response as WordData[];
            }),
            catchError(_error => {
                return of(null);
            }),
            finalize(() => {
                this.isLoadingSubject.next(false);
            })
        );
    }
}
