import { TestBed } from '@angular/core/testing';

import { TiposEmerService } from './tipos-emer.service';

describe('TiposEmerService', () => {
  let service: TiposEmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposEmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
