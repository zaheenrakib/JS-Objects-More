const numbers = [45,65,23,98,19];

// for(let i = 0; i < numbers.length;i++){
//     const number = numbers [i];
//     console.log(number);
// }
 
// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1,name:'xiami phone One night',price:1900},
    {id:2,name:'xiami phone ',price:1900},
    {id:3,name:'xiami phone One night',price:1900},
    {id:4,name:'xiami hone One night',price:1900},
    {id:5,name:'xiami phone One ',price:1900},
    {id:6,name:'xiami One night',price:1900},
    {id:7,name:'xiami One night',price:1900},
    {id:8,name:'xiami Phone night',price:1900},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (product , search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchedProducts(products,'xiami');
console.log(result);