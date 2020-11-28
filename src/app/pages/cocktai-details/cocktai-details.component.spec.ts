import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaiDetailsComponent } from './cocktai-details.component';

describe('CocktaiDetailsComponent', () => {
  let component: CocktaiDetailsComponent;
  let fixture: ComponentFixture<CocktaiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktaiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
