/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivateDataService } from './private-data.service';

describe('Service: PrivateData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateDataService]
    });
  });

  it('should ...', inject([PrivateDataService], (service: PrivateDataService) => {
    expect(service).toBeTruthy();
  }));
});
