import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TgsmaintenancePage } from './tgsmaintenance.page';

describe('TgsmaintenancePage', () => {
  let component: TgsmaintenancePage;
  let fixture: ComponentFixture<TgsmaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgsmaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TgsmaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
