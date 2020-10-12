import cartReducer, {
  addItemToCart,
  decreaseItemInCart,
  increaseItemInCart,
  removeItemFromCart,
} from './cartSlice';

describe('cart reducer', () => {
  it('should handle initial state', () => {
    // @ts-ignore
    expect(cartReducer(undefined, {})).toEqual([]);
  });

  it('should handle add item to cart', () => {
    const actual = cartReducer(
      [],
      addItemToCart({
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
      })
    );
    expect(actual).toEqual([
      {
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
        quantity: 1,
      },
    ]);
  });

  it('should increase quantity of cartItem when calling addItemToCart', () => {
    const actual = cartReducer(
      [
        {
          id: 16,
          title: 'Fallout 76',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
          availability: true,
          price: 105.0,
          currency: 'PLN',
          quantity: 1,
        },
      ],
      addItemToCart({
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
      })
    );
    expect(actual).toEqual([
      {
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
        quantity: 2,
      },
    ]);
  });

  it('should remove cartItem', () => {
    const actual = cartReducer(
      [
        {
          id: 16,
          title: 'Fallout 76',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
          availability: true,
          price: 105.0,
          currency: 'PLN',
          quantity: 1,
        },
        {
          id: 17,
          title: 'Battlefield V',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
          availability: true,
          price: 39.99,
          currency: 'PLN',
          quantity: 2,
        },
      ],
      removeItemFromCart(16)
    );
    expect(actual).toEqual([
      {
        id: 17,
        title: 'Battlefield V',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
        availability: true,
        price: 39.99,
        currency: 'PLN',
        quantity: 2,
      },
    ]);
  });

  it('should increase quantity of cartItem when calling increaseItemInCart', () => {
    const actual = cartReducer(
      [
        {
          id: 16,
          title: 'Fallout 76',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
          availability: true,
          price: 105.0,
          currency: 'PLN',
          quantity: 1,
        },
        {
          id: 17,
          title: 'Battlefield V',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
          availability: true,
          price: 39.99,
          currency: 'PLN',
          quantity: 2,
        },
      ],
      increaseItemInCart(16)
    );
    expect(actual).toEqual([
      {
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
        quantity: 2,
      },
      {
        id: 17,
        title: 'Battlefield V',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
        availability: true,
        price: 39.99,
        currency: 'PLN',
        quantity: 2,
      },
    ]);
  });

  it('should decrease quantity of cartItem', () => {
    const actual = cartReducer(
      [
        {
          id: 17,
          title: 'Battlefield V',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
          availability: true,
          price: 39.99,
          currency: 'PLN',
          quantity: 2,
        },
      ],
      decreaseItemInCart(17)
    );
    expect(actual).toEqual([
      {
        id: 17,
        title: 'Battlefield V',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
        availability: true,
        price: 39.99,
        currency: 'PLN',
        quantity: 1,
      },
    ]);
  });

  it('should remove cartItem when decreasing quantity if quantity of item is equal to 1', () => {
    const actual = cartReducer(
      [
        {
          id: 16,
          title: 'Fallout 76',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
          availability: true,
          price: 105.0,
          currency: 'PLN',
          quantity: 2,
        },
        {
          id: 17,
          title: 'Battlefield V',
          cover:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
          availability: true,
          price: 39.99,
          currency: 'PLN',
          quantity: 1,
        },
      ],
      decreaseItemInCart(17)
    );
    expect(actual).toEqual([
      {
        id: 16,
        title: 'Fallout 76',
        cover:
          'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yc4.jpg',
        availability: true,
        price: 105.0,
        currency: 'PLN',
        quantity: 2,
      },
    ]);
  });
});
