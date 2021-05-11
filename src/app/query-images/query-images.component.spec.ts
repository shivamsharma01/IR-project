import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryImagesComponent } from './query-images.component';

describe('QueryImagesComponent', () => {
  let component: QueryImagesComponent;
  let fixture: ComponentFixture<QueryImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
