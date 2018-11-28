import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GuideListComponent } from "./guide-list.component";
import { MaterialModule } from "@app/shared/material";
import { StoreModule } from "@ngrx/store";
import { reducers } from "@app/store";
import { SharedModule } from "@app/shared/shared.module";

describe("GuideListComponent", () => {
  let component: GuideListComponent;
  let fixture: ComponentFixture<GuideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [GuideListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
