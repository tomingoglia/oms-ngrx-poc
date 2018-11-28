import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { OrderListComponent } from "./order-list.component";
import { MaterialModule } from "@app/shared/material";
import { StoreModule } from "@ngrx/store";
import { reducers } from "@app/store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";

describe("OrderListComponent", () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        SharedModule,
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

  it("should render title in a h1 tag and then expect the first order with a product", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain("Orders");
    expect(compiled.querySelector("button").textContent).toContain(
      "Add New Order"
    );
    expect(compiled.querySelector(".mat-typography").textContent).toBe(
      "OrdersAdd New Order"
    );
  }));
});
