import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkChartComponent } from './link-chart.component';

describe('LinkChartComponent', () => {
  let component: LinkChartComponent;
  let fixture: ComponentFixture<LinkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
