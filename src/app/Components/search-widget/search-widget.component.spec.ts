import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWIdgetComponent } from './search-widget.component';

describe('SearchWIdgetComponent', () => {
  let component: SearchWIdgetComponent;
  let fixture: ComponentFixture<SearchWIdgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWIdgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWIdgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
