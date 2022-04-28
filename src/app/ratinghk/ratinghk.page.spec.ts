import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatinghkPage } from './ratinghk.page';

describe('RatinghkPage', () => {
  let component: RatinghkPage;
  let fixture: ComponentFixture<RatinghkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatinghkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatinghkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
