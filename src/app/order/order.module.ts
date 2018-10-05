import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderListComponent } from "./order-list/order-list.component";
import { MaterialModule } from "../material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [OrderListComponent],
  declarations: [OrderListComponent]
})
export class OrderModule {}
