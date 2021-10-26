import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cold, hot } from 'jest-marbles';

import * as searchAction from '../actions/search.actions';
import { MercadolibreService } from '../../services/mercado-libre.service';
import { SearchEffects } from './search.effects';
import { HttpErrorResponse } from '@angular/common/http';

class MockMercadoLibreService {
  findProducts = jest.fn();
}

const error = new HttpErrorResponse({ status: 404 });

describe('Search effects', () => {
  let actions$: Observable<Action>;
  let effects: SearchEffects;
  let mercadoLibreService: MockMercadoLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockActions(() => actions$),
        { provide: MercadolibreService, useClass: MockMercadoLibreService },
      ]
    });
    effects = TestBed.inject(SearchEffects);
    mercadoLibreService = TestBed.inject<unknown>(MercadolibreService) as MockMercadoLibreService;
  });

  describe('searchItems$ effect', () => {
    const query = 'carro';
    const action = searchAction.searchItems({ query });

    it('should dispatch searchItemsSuccess action', () => {
      // GIVEN
      const response$ = cold('-b|', { b: { query, results: [] } });
      mercadoLibreService.findProducts.mockReturnValue(response$)
      const completion = searchAction.searchItemsSuccess({ search: { query, items: [] } });
      const expected$ = cold('--c', { c: completion });

      // WHEN
      actions$ = hot('-a', { a: action });

      // THEN
      expect(effects.searchItems$).toBeObservable(expected$);
    });

    it('should dispatch searchItemsError action', () => {
      // GIVEN
      const response$ = cold('-#|', { query }, error);
      mercadoLibreService.findProducts.mockReturnValue(response$);
      const completion = searchAction.searchItemsError({ query });
      const expected$ = cold('--c', { c: completion });

      // WHEN
      actions$ = hot('-a', { a: action });

      // THEN
      expect(effects.searchItems$).toBeObservable(expected$);
    });

  });
});
