import { TestBed } from '@angular/core/testing';

import { SchemaFlatDrawerService } from './schema-flat-drawer.service';

describe('SchemaFlatDrawerService', () => {
  let service: SchemaFlatDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaFlatDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
