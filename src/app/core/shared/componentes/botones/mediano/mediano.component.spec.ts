import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianoComponent } from './mediano.component';

describe('MedianoComponent', () => {
  let component: MedianoComponent;
  let fixture: ComponentFixture<MedianoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedianoComponent]
    });
    fixture = TestBed.createComponent(MedianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
