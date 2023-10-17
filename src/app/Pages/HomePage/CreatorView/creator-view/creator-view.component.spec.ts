import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorViewComponent } from './creator-view.component';

describe('CreatorViewComponent', () => {
  let component: CreatorViewComponent;
  let fixture: ComponentFixture<CreatorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorViewComponent]
    });
    fixture = TestBed.createComponent(CreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
