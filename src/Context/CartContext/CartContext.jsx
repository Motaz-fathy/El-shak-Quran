
import  { createContext, useEffect, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const CartStore = createContext()


// eslint-disable-next-line react/prop-types
const   CartStoreProvider = ({ children }) => {


//__________________   Shopping Cart   _________________________________________________________________________________________________________________________________________

  //  intainal State to  ShoppingCart :-
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    console.log(cartItem);


  // Function To add Product to Shopping Cart :-
    const addToCart = (item) => {
        setCartItem((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                // If the item already exists in the cart, do nothing :-
                return prevCart;
            } else {
                // If the item Not exists in the cart :-
                // Add the new item to the cart :-
                const updatedCart = [...prevCart, { ...item, quantity: 1}];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    };



    // Function to calculate the total price
    // const calculateTotalPrice = (items) => {
    //     return items.reduce((total, item) => total + item.price, 0);
    // };

    const calculateTotalPrice = (cartItems) => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.price) || 0;
            return total + itemPrice;
        }, 0);
    };
    
    


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem]);








    return (
        <CartStore.Provider value={{
            cartItem,
            addToCart,
            calculateTotalPrice,
        }}>
            {children}
        </CartStore.Provider>
    );
}


export default  CartStoreProvider ;

