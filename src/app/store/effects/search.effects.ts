import { searchItemsError, searchItemsSuccess } from './../actions/search.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from 'rxjs';

import { searchActions } from "../actions/search.actions";
import { MercadolibreService } from '../../services/mercado-libre.service';

@Injectable()
export class SearchEffects {

  constructor(
    private actions$: Actions,
    private mercadoLibreService: MercadolibreService,
  ) { }

  searchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>(searchActions.searchItems),
      switchMap(action => this.mercadoLibreService.findProducts(action.query).pipe(
        map(res => searchItemsSuccess({ search: { query: res.query, items: res.results } })),
        catchError(err => of(searchItemsError({ query: action.query })))
      ))
    ));
}
