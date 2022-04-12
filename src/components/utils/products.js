const products = [
    { 
       id: 1,
       name: 'MC T-Shirt / QuickSilver',
       description: 'Short sleeve T-shirt <br> Fabric: Frosted jersey (100% Cotton)- Cut: Regular',
       price: '$3.000',
       image: 'https://www.cristobalcolon.com/fullaccess/item20235foto91239.jpg',
       category: 'Men',
       size: 'XS, S, M, L, XL',
       stock: 10
    },

    { 
       id: 2,
       name: 'T Shirt2',
       price: '$4.000',
       image: 'https://www.cristobalcolon.com/fullaccess/item20960foto93904.jpg',
       category: 'Men',
       size: 'XS, S, M, L, XL',
       stock: 15
    },

    { 
       id: 3,
       name: 'T Shirt3',
       price: '$5.000',
       image: 'https://www.cristobalcolon.com/fullaccess/item20537foto92196.jpg',
       category: 'Men',
       size: 'XS, S, M, L, XL',
       stock: 14
    },

    { 
     id: 4,
     name: 'T Shirt4',
     price: '$6.000',
     image: 'https://www.cristobalcolon.com/fullaccess/item20922foto93799.jpg',
     category: 'Men',
     size: 'XS, S, M, L, XL',
     stock: 18
  }
]

const product = { 
       id: 1,
       name: 'MC T-Shirt / QuickSilver',
       description: 'Short sleeve T-shirt/n Fabric: Frosted jersey (100% Cotton)- Cut: Regular',
       price: '$3.000',
       image: 'https://www.cristobalcolon.com/fullaccess/item20235foto91239.jpg',
       category: 'Men',
       size: 'XS, S, M, L, XL',
       stock: 10
    }

export const getItems = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export const getItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
}

