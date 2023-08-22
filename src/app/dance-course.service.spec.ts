import { TestBed } from '@angular/core/testing';

import { DanceCourseService } from './dance-course.service';

describe('DanceCourseService', () => {
  let service: DanceCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanceCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
