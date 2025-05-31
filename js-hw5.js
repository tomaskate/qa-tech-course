var services = {
  стрижка: '60 грн',
  гоління: '80 грн',
  'Миття голови': '100 грн',
  price: function () {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === 'string' && this[key].includes('грн')) {
        let num = parseFloat(this[key]);
        total += num;
      }
    }
    return total + ' грн';
  },
  minPrice: function () {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === 'string' && this[key].includes('грн')) {
        prices.push(parseFloat(this[key]));
      }
    }
    let min = Math.min(...prices);
    return min + ' грн';
  },
  maxPrice: function () {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === 'string' && this[key].includes('грн')) {
        prices.push(parseFloat(this[key]));
      }
    }
    let max = Math.max(...prices);
    return max + ' грн';
  },
};

// Add new service
services['Розбити скло'] = '200 грн';

// Output to console
console.log('Загальна вартість: ' + services.price());
console.log('Мінімальна ціна: ' + services.minPrice());
console.log('Максимальна ціна: ' + services.maxPrice());
