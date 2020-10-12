import menuReducer, { toggleCart } from './menuSlice';

describe('cart reducer', () => {
  it('should handle initial state', () => {
    // @ts-ignore
    expect(menuReducer(undefined, {})).toEqual({
      isCartVisible: false,
    });
  });

  it('should handle toggleCart', () => {
    const toggleTrue = menuReducer(
      {
        isCartVisible: false,
      },
      toggleCart()
    );
    const toggleFalse = menuReducer(
      {
        isCartVisible: true,
      },
      toggleCart()
    );
    expect(toggleTrue).toEqual({
      isCartVisible: true,
    });
    expect(toggleFalse).toEqual({
      isCartVisible: false,
    });
  });
});
