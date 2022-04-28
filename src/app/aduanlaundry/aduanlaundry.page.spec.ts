import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanlaundryPage } from './aduanlaundry.page';

describe('AduanlaundryPage', () => {
  let component: AduanlaundryPage;
  let fixture: ComponentFixture<AduanlaundryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanlaundryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanlaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
