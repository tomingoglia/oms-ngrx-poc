import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { OrderModule } from "@app/modules/order/order.module";
import { ProductModule } from "@app/modules/product/product.module";
import { HttpClientModule } from "@angular/common/http";
import { fakeServerProvider } from "@app/fake-server/fake-server.provider";
import { EffectsModule } from "@ngrx/effects";
import { OrderService } from "@app/store/order/order.service";
import { reducers, effects } from "@app/store";
import { GuideModule } from "@app/modules/guide/guide.module";
import { GuideService } from "@app/store/guide/guide.service";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    OrderModule,
    GuideModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [fakeServerProvider, OrderService, GuideService],
  bootstrap: [AppComponent]
})
export class AppModule {}
