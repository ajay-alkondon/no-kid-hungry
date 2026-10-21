import { StripePaymentIntentRequestBody, StripePaymentIntentResponse } from "@/helpers/types";
import AWS from 'aws-sdk';



const lambda = new AWS.Lambda();

export const createPaymentIntentClientSecret = async ({
  amount,
  currency,
}: StripePaymentIntentRequestBody): Promise<StripePaymentIntentResponse> => {
  const params = {
    FunctionName: 'sos-react-native-payment-intent', // replace with your Lambda function name
    InvocationType: 'RequestResponse', // or 'Event' for async invocation
    Payload: JSON.stringify({
      amount,
      currency,
    }), // payload to send to the Lambda function
  };

  try {
    const response = await lambda.invoke(params).promise();
    const { clientSecret, customer } = JSON.parse(response.Payload);

    if (!clientSecret || !customer) {
      const errorMessage = "Could not get clientSecret or customer from Stripe";

      throw new Error(errorMessage);
    }

    return { clientSecret, customer };
  } catch (error) {
    return {
      clientSecret: null,
      customer: null,
    };
  }
};