import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuinterPage } from './menuinter.page';

describe('MenuinterPage', () => {
  let component: MenuinterPage;
  let fixture: ComponentFixture<MenuinterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuinterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
