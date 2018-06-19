import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesidebarComponent } from './pagesidebar.component';

describe('PagesidebarComponent', () => {
  let component: PagesidebarComponent;
  let fixture: ComponentFixture<PagesidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
