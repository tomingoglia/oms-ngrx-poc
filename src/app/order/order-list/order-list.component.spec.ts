import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrderListComponent } from "./order-list.component";
import { MaterialModule } from "../../material";
import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "../../store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("OrderListComponent", () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [OrderListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should render title in a h1 tag and then expect the first order with a product", async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain("Orders");
  //   expect(
  //     compiled.querySelector("div.mat-typography").querySelector("p")
  //       .textContent
  //   ).toBe("Name: Tom's Product 2");
  // }));
});
