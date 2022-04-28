import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HousekeepingPage } from './housekeeping.page';

describe('HousekeepingPage', () => {
  let component: HousekeepingPage;
  let fixture: ComponentFixture<HousekeepingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousekeepingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HousekeepingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
