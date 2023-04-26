import Navbar from "@/components/Menu/Navbar";
import CartProvider from "@/context/Cart";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
}
