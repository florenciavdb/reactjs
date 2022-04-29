const products = [
    { 
       id: 1,
       name: 'MC / T-shirt',
       description1: 'Short sleeve T-shirt',
       description2: 'Fabric: Frosted jersey (100% Cotton)',
       description3: 'Cut: Regular',
       price: 3000,
       image: 'https://www.cristobalcolon.com/fullaccess/item20235foto91239.jpg',
       category: 'Men',
       sizes: ["XS", "S", "M", "L", "XL"],
       stock: 10
    },

    { 
       id: 2,
       name: 'T Shirt2',
       description1: 'Short sleeve T-shirt',
       description2: 'Fabric: Frosted jersey (100% Cotton)',
       description3: 'Cut: Regular',
       price: 4000,
       image: 'https://www.cristobalcolon.com/fullaccess/item20960foto93904.jpg',
       category: 'Men',
       sizes: ["S", "M", "L"],
       stock: 15
    },

    { 
       id: 3,
       name: 'T Shirt3',
       description1: 'Short sleeve T-shirt',
       description2: 'Fabric: Frosted jersey (100% Cotton)',
       description3: 'Cut: Regular',
       price: 5000,
       image: 'https://www.cristobalcolon.com/fullaccess/item20537foto92196.jpg',
       category: 'Men',
       sizes: ["XS", "S", "M", "L", "XL"],
       stock: 14
    },

    { 
     id: 4,
     name: 'T Shirt4',
     description1: 'Short sleeve T-shirt',
     description2: 'Fabric: Frosted jersey (100% Cotton)',
     description3: 'Cut: Regular',
     price: 6000,
     image: 'https://www.cristobalcolon.com/fullaccess/item20922foto93799.jpg',
     category: 'Men',
     sizes: ["S", "M", "L"],
     stock: 18
  },

  { 
    id: 5,
    name: 'Batik / T-Shirt',
    description1: 'Short sleeve T-shirt',
    description2: 'Fabric: Frosted jersey (100% Cotton)',
    description3: 'Cut: Regular',
    price: 3000,
    image: 'http://www.cristobalcolon.com/fullaccess/item21130foto94517.jpg',
    category: 'Women',
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 10
 },

 { 
    id: 6,
    name: 'Over The Rainbow / T-shirt',
    description1: 'Short sleeve T-shirt',
    description2: 'Fabric: Frosted jersey (100% Cotton)',
    description3: 'Cut: Regular',
    price: 4000,
    image: 'https://www.cristobalcolon.com/fullaccess/item21068foto94287.jpg',
    category: 'Women',
    sizes: ["S", "M", "L"],
    stock: 15
 },

 { 
    id: 7,
    name: 'Procces Print / T-Shirt',
    description1: 'Short sleeve T-shirt',
    description2: 'Fabric: Frosted jersey (100% Cotton)',
    description3: 'Cut: Regular',
    price: 5000,
    image: 'https://www.cristobalcolon.com/fullaccess/item20835foto93512.jpg',
    category: 'Women',
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 14
 },

 { 
    id: 8,
    name: 'Cracker / T-Shirt',
    description1: 'Short sleeve T-shirt',
    description2: 'Fabric: Frosted jersey (100% Cotton)',
    description3: 'Cut: Regular',
    price: 6000,
    image: 'https://www.cristobalcolon.com/fullaccess/item20853foto93588.jpg',
    category: 'Women',
    sizes: ["S", "M", "L"],
    stock: 18
}
]

export default products;

export const getItems = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const filteredProducts = products.filter((product) => product.category === categoryId)
        setTimeout(() => {
            if (categoryId) {
                resolve(filteredProducts);
            } else {
            resolve(products);
            }
        }, 1000);
    });
}

export const getItem = (id) => {
    return new Promise ((resolve, reject) => {
        const selectedProduct = products.find ((product) => product.id === Number(id));
        setTimeout(() => {
            resolve(selectedProduct);
        }, 1000);
    });
};

