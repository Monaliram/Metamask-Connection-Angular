import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskConnectComponent } from './metamask-connect.component';

describe('MetamaskConnectComponent', () => {
  let component: MetamaskConnectComponent;
  let fixture: ComponentFixture<MetamaskConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamaskConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetamaskConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
