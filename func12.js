`12. Barcha products narxlari yig'indisi topilsin. (reduce)`

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


 const totalPrice = products.reduce((acc, product) => {
   return acc + product.price;
 }, 0);
 console.log(totalPrice);