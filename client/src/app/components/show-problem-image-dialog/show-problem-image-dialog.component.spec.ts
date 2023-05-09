import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ShowProblemImageDialogComponent } from './show-problem-image-dialog.component';

describe('ShowProblemImageDialogComponent', () => {
  let component: ShowProblemImageDialogComponent;
  let fixture: ComponentFixture<ShowProblemImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProblemImageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProblemImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
