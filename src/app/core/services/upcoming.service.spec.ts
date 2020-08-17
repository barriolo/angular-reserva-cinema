import { TestBed } from '@angular/core/testing';

import { UpcomingService } from './upcoming.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UpcomingService', () => {
  let service: UpcomingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
      ]
    });
  });
  service = TestBed.get(UpcomingService);



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
