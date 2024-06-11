import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { WordData } from 'src/app/types/Definitions.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  difinitionsData!: WordData[] | null;
  isSubmitted: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(public searchService: SearchService) {}

  handleSearchSubmit(formValue: string) {
    this.searchService
      .getDefinitions(formValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe((difinitions) => (this.difinitionsData = difinitions));
    this.isSubmitted = true;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
