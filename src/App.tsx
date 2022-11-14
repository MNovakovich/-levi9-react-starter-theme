import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import { ProductProvider } from "context/product/ProductProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import { HomePage, ExamplePage, NotFoundPage, CartPage } from "pages";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { themeSetup } from "theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeSetup}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CounterProvider>
          <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/example" element={<ExamplePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </CartProvider>
          </ProductProvider>
        </CounterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
