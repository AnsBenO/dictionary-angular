import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDifinitionsComponent } from './saved-difinitions.component';

describe('SavedDifinitionsComponent', () => {
  let component: SavedDifinitionsComponent;
  let fixture: ComponentFixture<SavedDifinitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedDifinitionsComponent]
    });
    fixture = TestBed.createComponent(SavedDifinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
