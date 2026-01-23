"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { clearCart } from '@features/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";

export default function PaymentBanner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentStatus = searchParams.get("payment");
  const { items = [] } = useSelector((state) => state.cart || { items: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    if (paymentStatus === "success") {
      toast.success("The order is on your way!");
      router.replace(window.location.pathname);
      dispatch(clearCart(items));
    }
  }, [paymentStatus, router]);

  return null; 
}
