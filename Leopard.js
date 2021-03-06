// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_BLABLABLA");

// const product = stripe.products.create({
//   name: 'Leopard T-Skjorte',
//   type: 'good',
//   attributes: ['gender', 'color', 'size'],
//   description: 'Super awesome, one-of-a-kind t-shirt',
// });

var stripe = require('stripe')('sk_test_BLABLABLA');

(async function() {
  const sku33 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Small' }
  });
  const sku34 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Medium' }
  });

  const sku35 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Large' }
  });
  const sku36 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku37 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Small' }
  });
  const sku38 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Medium' }
  });

  const sku39 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Large' }
  });
  const sku40 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Extra Large' }
  });

  //Above is Female. Below is Male.

  const sku41 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Small' }
  });
  const sku42 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Medium' }
  });

  const sku43 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Large' }
  });
  const sku44 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku45 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Small' }
  });
  const sku46 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Medium' }
  });

  const sku47 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Large' }
  });
  const sku48 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Extra Large' }
  });
})();
