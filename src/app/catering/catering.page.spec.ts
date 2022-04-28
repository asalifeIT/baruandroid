import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CateringPage } from './catering.page';

describe('cateringPage', () => {
  let component: CateringPage;
  let fixture: ComponentFixture<CateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(cateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
