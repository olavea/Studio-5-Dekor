// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_BLABLABLA");

// const product = stripe.products.create({
//   name: 'Katt T-Skjorte',
//   type: 'good',
//   attributes: ['gender', 'color', 'size'],
//   description: 'Super awesome, one-of-a-kind t-shirt',
// });

var stripe = require('stripe')('sk_test_BLABLABLA');

(async function() {
  const sku1 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Small' }
  });
  const sku2 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Medium' }
  });

  const sku3 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Large' }
  });
  const sku4 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku5 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Small' }
  });
  const sku6 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Medium' }
  });

  const sku7 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Large' }
  });
  const sku8 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Female', color: 'White', size: 'Extra Large' }
  });

  //Above is Female. Below is Male.

  const sku9 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Small' }
  });
  const sku10 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Medium' }
  });

  const sku11 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Large' }
  });
  const sku12 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'Black', size: 'Extra Large' }
  });

  //Above is Black. Below is White.

  const sku13 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Small' }
  });
  const sku14 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Medium' }
  });

  const sku15 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 500 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Large' }
  });
  const sku16 = await stripe.skus.create({
    currency: 'nok',
    inventory: { type: 'finite', quantity: 400 },
    price: 368,
    product: 'prod_DjG2X8FbDObdvg',
    attributes: { gender: 'Male', color: 'White', size: 'Extra Large' }
  });
})();
