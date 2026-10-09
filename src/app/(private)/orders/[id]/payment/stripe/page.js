"use client";

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "@/config/config";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { confirmOrder, payViaStripe } from "@/api/private/orders";
import { ORDERS_ROUTE } from "@/constants/routes";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "@/components/Spinner";

function CheckoutForm() {
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const orderId = params.id;

  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  async function initStripePayment() {
    setLoading(true);

    try {
      const response = await payViaStripe(orderId);

      const clientSecret = response.data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (
        result &&
        result.paymentIntent &&
        result?.paymentIntent?.status == "succeeded"
      ) {
        toast.success("Order confirmed");

        await confirmOrder(orderId, {
          status: "SUCCESS",
        }).then(() => {
          router.replace(ORDERS_ROUTE);
        });
      } else {
        toast.error(result.error.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col gap-4 max-w-xl mx-auto p-8 rounded-lg shadow-md">
        <Image
          src="/assets/images/stripe.webp"
          alt="Stripe Logo"
          width={200}
          height={100}
          className="mx-auto mb-4"
        />
        <div className="border border-gray-300 p-4 rounded-md">
          <CardElement />
        </div>
        <button
          onClick={initStripePayment}
          className="flex gap-2  items-center justify-center w-full bg-primary text-white py-2 rounded-md"
        >
          Submit {loading && <Spinner className="w-6 h-6 fill-primary" />}
        </button>
      </div>
    </section>
  );
}

const StripePaymentPage = () => {
  const stripePromise = loadStripe(config.stripeKey);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePaymentPage;
