import { throwError as observableThrowError, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Guide } from "./guide.model";
import { GuideDetail } from "../guide-detail/guide-detail.model";

@Injectable()
export class GuideService {
  constructor(private http$: HttpClient) {}

  getGuides(): Observable<Array<Guide>> {
    return this.http$
      .get<Array<Guide>>(`/guide`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  addGuide(guide: Guide): Observable<Guide> {
    return this.http$
      .post<Guide>(`/guide/add`, guide)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  getGuideLegacy(): Observable<Guide> {
    return this.http$
      .get<Guide>(`/guide-legacy`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  getGuideDetailLegacy(): Observable<Array<GuideDetail>> {
    return this.http$
      .get<Array<GuideDetail>>(`/guide-detail-legacy`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

  changeQuantity(guideDetail: any): Observable<GuideDetail> {
    return this.http$
      .post<GuideDetail>(`/guide-detail/update`, guideDetail)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }
}
