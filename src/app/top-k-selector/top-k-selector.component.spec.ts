import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopKSelectorComponent } from './top-k-selector.component';

describe('TopKSelectorComponent', () => {
  let component: TopKSelectorComponent;
  let fixture: ComponentFixture<TopKSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopKSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopKSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
