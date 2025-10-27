import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return { items: [], totalQuantity: 0, totalPrice: 0 };
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load cart from localStorage', e);
    return { items: [], totalQuantity: 0, totalPrice: 0 };
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.error('Could not save cart to localStorage', e);
  }
};

const initialState =
  typeof window !== 'undefined'
    ? loadCartFromLocalStorage()
    : { items: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, selectedSize } = action.payload;
      const itemKey = `${product.id}-${selectedSize || 'default'}`;
      
      const existingItem = state.items.find(item => 
        `${item.id}-${item.selectedSize || 'default'}` === itemKey
      );
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ 
          ...product, 
          quantity: 1, 
          selectedSize: selectedSize || null,
          itemKey //special key
        });
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      saveCartToLocalStorage(state);
    },
    
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(item => 
        `${item.id}-${item.selectedSize || 'default'}` === action.payload
      );
      
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(item => 
          `${item.id}-${item.selectedSize || 'default'}` !== action.payload
        );
      }
      saveCartToLocalStorage(state);
    },
    
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => 
        `${item.id}-${item.selectedSize || 'default'}` === action.payload
      );
      
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
      saveCartToLocalStorage(state);
    },
    
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => 
        `${item.id}-${item.selectedSize || 'default'}` === action.payload
      );
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(item => 
          `${item.id}-${item.selectedSize || 'default'}` !== action.payload
        );
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

