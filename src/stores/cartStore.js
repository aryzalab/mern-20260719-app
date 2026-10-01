import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        totalPrice: 0,

        addToCart: (product) => {
          const products = get().products;
          const totalPrice = get().totalPrice;

          const existingProduct = products.find(
            (item) => item._id == product._id,
          );

          if (existingProduct) {
            // increase quantity of existing product
            set({
              products: products.map((item) => {
                // existing product
                if (item._id == product._id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }

                return item;
              }),
              totalPrice: totalPrice + product.price,
            });
          } else {
            // adding new product to cart
            set({
              products: [...products, { ...product, quantity: 1 }],
              totalPrice: totalPrice + product.price,
            });
          }
        },
        removeFromCart: (product) => {
          // remove the product
          const products = get().products;
          const totalPrice = get().totalPrice;

          set({
            products: products.filter((item) => item._id != product._id),
            totalPrice: totalPrice - product.price * product.quantity,
          });
        },
        increaseQuantity: (product) => {
          const products = get().products;
          const totalPrice = get().totalPrice;

          const currentProduct = products.find(
            (item) => item._id == product._id,
          );

          if (currentProduct.quantity >= 10) return;

          set({
            products: products.map((item) => {
              // existing product
              if (item._id == product._id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }

              return item;
            }),
            totalPrice: totalPrice + product.price,
          });
        },
        decreaseQuantity: (product) => {
          const products = get().products;
          const totalPrice = get().totalPrice;

          const currentProduct = products.find(
            (item) => item._id == product._id,
          );

          if (currentProduct.quantity <= 1) return;

          set({
            products: products.map((item) => {
              // existing product
              if (item._id == product._id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }

              return item;
            }),
            totalPrice: totalPrice - product.price,
          });
        },
        clearCart: () => {
          set({
            products: [],
            totalPrice: 0,
          });
        },
      }),
      {
        name: "zustand:cart-storage",
      },
    ),
  ),
);

export default useCartStore;
