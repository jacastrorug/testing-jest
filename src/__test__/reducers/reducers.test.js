import { act } from 'react-test-renderer';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers TESTING', () => {
  test('Retornar estado inicial', () => {
    expect(reducer({ a: 1 }, '')).toEqual({ a: 1 });
  });

  test('AADD_TO_CART', () => {
    const initialState = { cart: [] };
    const action = {
      type: 'ADD_TO_CART',
      payload: ProductMock,
    };

    const expected = { cart: [...initialState.cart, action.payload] };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
