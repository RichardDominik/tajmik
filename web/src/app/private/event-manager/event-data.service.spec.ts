/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventDataService } from './event-data.service';

describe('Service: EventData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDataService]
    });
  });

  it('should ...', inject([EventDataService], (service: EventDataService) => {
    expect(service).toBeTruthy();
  }));
});
