import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderListComponent } from "./order-list/order-list.component";
import { MaterialModule } from "@app/shared/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [OrderListComponent],
  declarations: [OrderListComponent]
})
export class OrderModule {}
