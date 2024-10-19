import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCollectionComponent } from './get-collection.component';

describe('GetCollectionComponent', () => {
  let component: GetCollectionComponent;
  let fixture: ComponentFixture<GetCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
