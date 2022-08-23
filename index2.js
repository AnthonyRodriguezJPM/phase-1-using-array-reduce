const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

  const totals=products.reduce((total, item)=> {
    return total+=item.price
  }, 0)

  console.log(totals);