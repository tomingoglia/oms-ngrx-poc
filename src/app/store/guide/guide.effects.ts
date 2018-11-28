import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as GuideActions from "./guide.actions";
import { of } from "rxjs";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import { GuideService } from "./guide.service";

@Injectable()
export class GuideEffects {
  constructor(private actions$: Actions, private guideService: GuideService) {}

  // Get Guides
  @Effect()
  loadGuides$ = this.actions$
    .ofType<GuideActions.Load>(GuideActions.GuideActionTypes.LOAD)
    .pipe(
      switchMap(() => {
        return this.guideService.getGuides().pipe(
          map(guide => {
            return new GuideActions.LoadSuccess(guide);
          }),
          catchError(error => of(new GuideActions.LoadFail(error)))
        );
      })
    );

  // Add Guide
  @Effect()
  createGuide$ = this.actions$
    .ofType<GuideActions.Create>(GuideActions.GuideActionTypes.CREATE)
    .pipe(
      switchMap(action => {
        return this.guideService.addGuide(action.guide).pipe(
          map(guide => {
            return new GuideActions.CreateSuccess(guide);
          }),
          catchError(error => of(new GuideActions.CreateFail(error)))
        );
      })
    );

  // get legacy guide
  @Effect()
  loadLegacyGuides$ = this.actions$
    .ofType<GuideActions.LoadLegacy>(GuideActions.GuideActionTypes.LOAD_LEGACY)
    .pipe(
      switchMap(() => {
        return this.guideService.getGuideLegacy().pipe(
          map(guide => {
            return new GuideActions.LoadLegacySuccess(guide);
          }),
          catchError(error => of(new GuideActions.LoadLegacyFail(error)))
        );
      })
    );
}
