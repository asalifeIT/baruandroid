import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingcateringPage } from './ratingcatering.page';

describe('RatingcateringPage', () => {
  let component: RatingcateringPage;
  let fixture: ComponentFixture<RatingcateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingcateringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingcateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
