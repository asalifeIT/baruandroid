import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingmaintenancePage } from './ratingmaintenance.page';

describe('RatingmaintenancePage', () => {
  let component: RatingmaintenancePage;
  let fixture: ComponentFixture<RatingmaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingmaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingmaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
