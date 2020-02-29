import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaFlatDrawerComponent } from './schema-flat-drawer.component';

describe('SchemaFlatDrawerComponent', () => {
  let component: SchemaFlatDrawerComponent;
  let fixture: ComponentFixture<SchemaFlatDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaFlatDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaFlatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
