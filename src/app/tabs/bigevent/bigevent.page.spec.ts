import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigeventPage } from './bigevent.page';

describe('BigeventPage', () => {
  let component: BigeventPage;
  let fixture: ComponentFixture<BigeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigeventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
