import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanhkPage } from './aduanhk.page';

describe('AduanhkPage', () => {
  let component: AduanhkPage;
  let fixture: ComponentFixture<AduanhkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanhkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanhkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
