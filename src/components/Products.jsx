import Product from "./Product";

const products = [
  {
    id: 1,

    name: "Pizza",

    urlImage:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?crop=entropy&fit=crop&h=800&q=60&px=&s=04bbf61ed0e83065e5f9ed259709126f&w=800",

    price: 0.01,
  },

  {
    id: 2,

    name: "Vegan salad bowl",

    urlImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&fit=crop&h=800&q=60&px=&s=901c488550cc208d8be0e5ae4a7e4523&w=800",

    price: 0.01,
  },
  {
    id: 3,
    name: "Pesto Pasta",
    urlImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDBE8MHxwaG90b$80&fn=crop&entropy=true&q=80&fit=crop&w=1748",
    price: 0.01,
  },
  {
    id: 4,
    name: "Udon Salad",
    urlImage:
      "https://images.unsplash.com/photo-1498601761256-9e93c6f5c181?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672",
    price: 0.01,
  },
  {
    id: 5,
    name: "Premium Food",
    urlImage:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDM3ODR8MHwxfHBob3Rv%20by1wYWdlfHx8fHx8fDE4fHx8&auto=format&fit=crop&w=588",
    price: 0.01,
  },
  {
    id: 6,
    name: "Cool Drink",
    urlImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
    price: 0.01,
  },
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <div className="grid">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
