import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TugashkPage } from './tugashk.page';

describe('TugashkPage', () => {
  let component: TugashkPage;
  let fixture: ComponentFixture<TugashkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugashkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TugashkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
