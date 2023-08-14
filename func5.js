`5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)


Input: 'George Raymond Richard Martin'
Output: 'GRRM'`;

let text = "George Raymond Richard Martin";

let tosplit = text.split(" ");
let tomap = tosplit.map((word) => word[0]);
let newjoin = tomap.join("");
console.log(newjoin);
