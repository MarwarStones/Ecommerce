
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constans/CartConstans";
  import axios from "axios";
  
  // Add to Cart ---Product
  export const addItemsToCart = (id, quantity, user) => async (dispatch, getState) => {
  
    const { data } = await axios.get(`/api/v2/product/${id}`);
    
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    let new_data = {
      productName : data.product.name,
      quantity,
      productImage : data.product.images[0].url,
      productPrice: data.product.price,
      userId : user._id,
      productId: data.product._id,
      Stock: data.product.Stock,
    };


    
    const res = await axios.post('/api/v2/addToCart', new_data);
    console.log(res);
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  // REMOVE FROM CART ---Product
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };


  // SAVE SHIPPING INFO 
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };