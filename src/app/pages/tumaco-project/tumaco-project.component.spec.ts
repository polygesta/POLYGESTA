import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumacoProjectComponent } from './tumaco-project.component';

describe('TumacoProjectComponent', () => {
  let component: TumacoProjectComponent;
  let fixture: ComponentFixture<TumacoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TumacoProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TumacoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
