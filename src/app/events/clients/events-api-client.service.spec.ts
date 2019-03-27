import { TestBed } from '@angular/core/testing';

import { EventsApiClientService } from './events-api-client.service';

describe('EventsApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsApiClientService = TestBed.get(EventsApiClientService);
    expect(service).toBeTruthy();
  });
});
