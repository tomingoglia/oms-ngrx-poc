import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ProductPackSizeComponent } from "./components/product-pack-size/product-pack-size.component";
import { MaterialModule } from "./material";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, MaterialModule, MaterialModule, FormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductCardComponent,
    ProductPackSizeComponent,
    ProductQuantityComponent
  ],
  declarations: [
    ProductCardComponent,
    ProductPackSizeComponent,
    ProductQuantityComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
