import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAreaComponent } from './json-area.component';

describe('JsonAreaComponent', () => {
  let component: JsonAreaComponent;
  let fixture: ComponentFixture<JsonAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
