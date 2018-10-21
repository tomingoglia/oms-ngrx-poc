import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        OrderModule,
        ProductModule,
        StoreModule.forRoot({}),
        StoreModule.forRoot(reducers)
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'oms-ngrx-poc'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("oms-ngrx-poc");
  }));

  it("should render title in a mat-toolbar tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("mat-toolbar").textContent).toContain(
      "OMS NgRx POC"
    );
  }));
});
