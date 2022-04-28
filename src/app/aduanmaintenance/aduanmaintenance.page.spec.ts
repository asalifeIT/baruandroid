import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanmaintenancePage } from './aduanmaintenance.page';

describe('AduanmaintenancePage', () => {
  let component: AduanmaintenancePage;
  let fixture: ComponentFixture<AduanmaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanmaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanmaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
