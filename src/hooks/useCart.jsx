import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
