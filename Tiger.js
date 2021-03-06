// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_BLABLABLA");

// const product = stripe.products.create({
//   name: 'Tiger T-Skjorte',
//   type: 'good',
//   attributes: ['gender', 'color', 'size'],
//   description: 'Super awesome, one-of-a-kind t-shirt',
// });

var stripe = require('stripe')('sk_test_BLABLABLA');

(async function() {
  const sku17 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Small' }
  });
  const sku18 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Medium' }
  });

  const sku19 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Large' }
  });
  const sku20 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku21 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Small' }
  });
  const sku22 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Medium' }
  });

  const sku23 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Large' }
  });
  const sku24 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Extra Large' }
  });

  //Above is Female. Below is Male.

  const sku25 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Small' }
  });
  const sku26 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Medium' }
  });

  const sku27 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Large' }
  });
  const sku28 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku29 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Small' }
  });
  const sku30 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Medium' }
  });

  const sku31 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Large' }
  });
  const sku32 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Extra Large' }
  });
})();
