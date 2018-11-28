import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "@app/shared/material";
import { OrderModule } from "@app/modules/order/order.module";
import { ProductModule } from "@app/modules/product/product.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "@app/store";
import { GuideModule } from "@app/modules/guide/guide.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        OrderModule,
        GuideModule,
        ProductModule,
        StoreModule.forRoot({}),
        StoreModule.forRoot(reducers)
      ],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
