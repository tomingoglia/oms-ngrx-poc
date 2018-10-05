import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule
} from "@angular/material";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule {}
