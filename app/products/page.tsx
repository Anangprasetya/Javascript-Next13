import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

type Product = {
    id: number;
    title: string;
    price: number;
};

async function getDataProduct() {
    const res = await fetch("http://localhost:5000/products",{
        cache: "no-store",
      });
    return res.json();
}

export default async function ProductList() {
    const products: Product[] = await getDataProduct();

    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddProduct />
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((data_product, index) => (
                        <tr key={data_product.id}>
                            <td>{index + 1}</td>
                            <td>{data_product.title}</td>
                            <td>{data_product.price}</td>
                            <td className="flex">
                                <div className="mr-1">
                                    oke edit
                                </div>
                                <DeleteProduct {...data_product}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
