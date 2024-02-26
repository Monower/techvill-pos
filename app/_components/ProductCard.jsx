const ProductCard = ({ product }) => {
    return (
        <div className="group relative border rounded">
            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                    src={product.image}
                    className="w-full h-[8em] object-center object-cover"
                    alt={product.title}
                />
            </div>
            <div className="mt-4 flex justify-between p-1">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    );
};
export default ProductCard