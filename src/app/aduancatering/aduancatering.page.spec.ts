import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduancateringPage } from './aduancatering.page';

describe('AduancateringPage', () => {
  let component: AduancateringPage;
  let fixture: ComponentFixture<AduancateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduancateringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduancateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
