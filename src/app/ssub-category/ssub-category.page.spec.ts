import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SsubCategoryPage } from './ssub-category.page';

describe('SsubCategoryPage', () => {
  let component: SsubCategoryPage;
  let fixture: ComponentFixture<SsubCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SsubCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
