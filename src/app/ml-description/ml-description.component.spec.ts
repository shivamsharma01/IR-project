import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlDescriptionComponent } from './ml-description.component';

describe('MlDescriptionComponent', () => {
  let component: MlDescriptionComponent;
  let fixture: ComponentFixture<MlDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
