import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule {}
