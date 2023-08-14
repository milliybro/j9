`9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)`

let products = [
   {
     id: 6,
     name: "Smarthpone",
     price: 12000,
     rating: 4.5,
     discount: 20,
   },
   {
     id: 2,
     name: "Acer",
     price: 10000,
     rating: 4.3,
     discount: 10,
   },
   {
     id: 1,
     name: "Mac book",
     price: 17000,
     rating: 4.7,
     discount: 40,
   },
   {
     id: 4,
     name: "HP",
     price: 21000,
     rating: 4.1,
     discount: 30,
   },
   {
     id: 5,
     name: "Dell",
     price: 35000,
     rating: 4.9,
     discount: 30,
   },
 ];

 products.sort((a, b)=> a.id-b.id)
 console.log(products,` id bo'yicha sortlandi`);

//  products.sort((a, b)=> a.name-b.name)
//  console.log(products,` name bo'yicha sortlandi`);

//  products.sort((a, b)=> a.price-b.price)
//  console.log(products,` price bo'yicha sortlandi`);

// products.sort((a, b)=> a.rating-b.rating)
// console.log(products,` rating bo'yicha sortlandi`);

// products.sort((a, b)=> a.discount-b.discount)
// console.log(products,` discount bo'yicha sortlandi`);