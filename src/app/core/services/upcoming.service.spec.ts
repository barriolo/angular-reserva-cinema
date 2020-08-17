import { TestBed, async } from '@angular/core/testing';

import { UpcomingService } from './upcoming.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UpcomingService', () => {
  let httpMock: HttpTestingController;
  let service: UpcomingService;
  beforeEach( async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UpcomingService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(UpcomingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
