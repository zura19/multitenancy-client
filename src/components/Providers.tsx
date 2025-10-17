import { Toaster } from "@/components/ui/sonner";
import store from "@/lib/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
interface props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: props) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
          <Toaster />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
