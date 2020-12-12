import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestitestComponent } from '../app/components/testitest/testitest.component';

describe('TestitestComponent', () => {
  let component: TestitestComponent;
  let fixture: ComponentFixture<TestitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestitestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(TestitestComponent).toBeTruthy();
  });
});
