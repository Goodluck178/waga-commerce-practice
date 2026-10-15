import React, { createContext, useState, useEffect } from "react";

export type CartItem = {
  packageType: string[];
  quantity: number;
  address: string;
  gender: string;
  total: number;
};

type CartContextType = {
  cart: CartItem[];
  paidHistory: CartItem[];
  cartCount: number; // NEW — used for badges
  addToCart: (item: CartItem) => void;
  deleteItem: (index: number) => void;
  editItem: (index: number, updatedItem: CartItem) => void;
  payNow: () => void;
  clearHistory: () => void;
};

//tells u the kind of data ur app shares globally so other files can import it
export const CartContext = createContext<CartContextType>({
  cart: [],
  paidHistory: [],
  cartCount: 0, //  NEW
  addToCart: () => {},
  deleteItem: () => {},
  editItem: () => {},
  payNow: () => {},
  clearHistory: () => {},
}); //prevent crash & components calls useContext safely

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]); // cart counts
  const [paidHistory, setPaidHistory] = useState<CartItem[]>([]);//order history track

  // LOAD FROM LOCAL STORAGE (UE-> only runs once on component mount/ no persist )retrieves data
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedHistory = localStorage.getItem("paidHistory");

    if (savedCart !== null) {
      setCart(JSON.parse(savedCart)); //checks whether something was saved in local Storage,if yes. 
                                      //convert it to javascript and load it into cart
    }

    if (savedHistory !== null) {
      setPaidHistory(JSON.parse(savedHistory));
    }
  }, []); 
  // loads your saved purchase history from localStorage making it persistent
  // nb converts string  into a real array/object  & Updates your React state with the real purchase history
  // [](mount effect) Run this effect only once, when the component first loads

  // SAVE CART (watches the cart/persist)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // SAVE HISTORY
  useEffect(() => {
    localStorage.setItem("paidHistory", JSON.stringify(paidHistory));
  }, [paidHistory]);

  const addToCart = (item: CartItem) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };  

  const deleteItem = (index: number) => {
    const newCart = cart.slice();
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const editItem = (index: number, updatedItem: CartItem) => {
    const newCart = cart.slice();
    newCart[index] = updatedItem;
    setCart(newCart);
  };

  //moves all items from the cart into the paidHistory, then clears the cart. It’s the “checkout” logic of your app.
  const payNow = () => {
    const newHistory = [...paidHistory, ...cart]; //check out
    setPaidHistory(newHistory);
    setCart([]);
  };

  const clearHistory = () => {
    setPaidHistory([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        paidHistory,
        cartCount: cart.length, // ALWAYS UPDATED provider calculates count
        addToCart,
        deleteItem,
        editItem,
        payNow,
        clearHistory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
