import {searchItemsError, searchItemsSuccess } from './../actions/search.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, map, switchMap } from "rxjs/operators";
import { MercadolibreService } from "src/app/services/mercado-libre.service";
import { searchActions } from "../actions/search.actions";
import { of } from 'rxjs';

@Injectable()
export class SearchEffect {

  constructor(
    private actions$: Actions,
    private mercadoLibreService: MercadolibreService,
  ) {}

  searchItems = createEffect(() => 
    this.actions$.pipe(
      ofType<any>(searchActions.searchItems),
      switchMap((action) => this.mercadoLibreService.findProducts(action.query).pipe(
        map(res => searchItemsSuccess({search: { query: res.query, items: res.results}})),
        catchError((err) => of(searchItemsError({query: err.query})))
      ))
  ))
}