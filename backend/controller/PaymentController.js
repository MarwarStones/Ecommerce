const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.Payment = catchAsyncErrors(async (req, res, next) => {

  //console.log(req)
  const myPayment = await stripe.paymentIntents.create({
    description: '',
    shipping: {
      name: req.user.name,
      address: {
        line1: req.body.shippingInfo.address,
        city: '',
        state: req.body.shippingInfo.state,
        country:req.body.shippingInfo.country,
      },
    },
    amount: req.body.amount,
    currency: "INR",
    metadata: {
      company: "Marwar Stone Art",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

// curl https://api.stripe.com/v1/payment_intents \
//   -u sk_test_tR3PYbcVNZZ796tH88S4VQ2u
// : \
//   -d description="Software development services" \
//   -d "shipping[name]"="Jenny Rosen" \
//   -d "shipping[address][line1]"="510 Townsend St" \
//   -d "shipping[address][postal_code]"=98140 \
//   -d "shipping[address][city]"="San Francisco" \
//   -d "shipping[address][state]"=CA \
//   -d "shipping[address][country]"=US \
//   -d amount=1099 \
//   -d currency=usd \
//   -d "payment_method_types[]"=card

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
