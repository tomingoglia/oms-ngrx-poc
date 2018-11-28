import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuideListComponent } from "../guide/guide-list/guide-list.component";
import { MaterialModule } from "@app/shared/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [GuideListComponent],
  declarations: [GuideListComponent]
})
export class GuideModule {}
