import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { HttpClientModule } from "@angular/common/http";
import { fakeServerProvider } from "./fake-server/fake-server.provider";
import { EffectsModule } from "@ngrx/effects";
import { OrderService } from "./store/order/order.service";
import { reducers, effects } from "./store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    OrderModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [fakeServerProvider, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
