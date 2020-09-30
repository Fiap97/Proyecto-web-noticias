import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasSemanaScreenComponent } from './noticias-semana-screen.component';

describe('NoticiasSemanaScreenComponent', () => {
  let component: NoticiasSemanaScreenComponent;
  let fixture: ComponentFixture<NoticiasSemanaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasSemanaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasSemanaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
