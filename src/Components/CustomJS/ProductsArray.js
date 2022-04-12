const ProductsArray = [
{
    id: 1,
    name: "Product 1",
    price: 5000,
    description: "Product 1 Description",
    image: ' https://via.placeholder.com/300',
    category: "Category 1", 
    stock: 5,
},
{
    id: 2,
    name: "Product 2",
    price: 6000,
    description: "Product 2 Description",
    image: ' https://via.placeholder.com/300',
    category: "Category 2",
    stock: 10,
},
{
    id: 3,
    name: "Product 3",
    price: 7000,
    description: "Product 3 Description",
    image: ' https://via.placeholder.com/300',
    category: "Category 3",
    stock: 20,
},
{
    id: 4,
    name: "Product 4",
    price: 8000,
    description: "Product 4 Description",
    image: ' https://via.placeholder.com/300',
    category: "Category 4",
    stock: 30,
},
];
export default ProductsArray;

const ProductsArraySextaEntrega = {
    id: 6,
    name: "Product 6",
    price: 72000,
    description: "Product 6 Description",
    image: ' https://via.placeholder.com/300',
    category: "Category 6",
    stock: 20,};

export const Productis =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ProductsArraySextaEntrega);
        }, 2000);
    });}