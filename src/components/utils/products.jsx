const products = [
    { 
       id: 1,
       name: 'T Shirt1',
       price: '$3.000',
       image: require("../../img/Men/MenTshirt1.png")
    },

    { 
       id: 2,
       name: 'T Shirt2',
       price: '$4.000',
       image: require("../../img/Men/MenTshirt2.png")
    },

    { 
       id: 3,
       name: 'T Shirt3',
       price: '$5.000',
       image: require("../../img/Men/MenTshirt3.png")
    },

    { 
     id: 4,
     name: 'T Shirt4',
     price: '$6.000',
     image: require("../../img/Men/MenTshirt4.png")
  }
]

const product = [
    { 
       id: 1,
       name: 'T Shirt1',
       price: '$3.000',
       image: require("../../img/Men/MenTshirt1.png")
    }
]

export const bringItems = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export const bringItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
}