import ProductCard from "./ProductCard";

const Products = ({ setCart }) => {
    return (
        <section className="lg:w-1/2">
            <form action="#" className="w-full bg-white shadow-lg pl-6 py-2 mb-5 mx-2 lg:mx-0">
                <div className="flex items-center space-x-3">
                    <label htmlFor="search">
                        <svg className="w-5 h-5 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </label>
                    <input type="search" name="search" id="search" placeholder="Search Products..." className="w-full focus:outline-none focus:ring-0 " />
                </div>
            </form>
            <div className="px-6 pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
                    <div className="text-slate-700 font-medium p-2 border-2 border-gray-500 text-[14px] rounded w-full lg:w-auto">
                        All Categories
                    </div>
                    <div className="text-slate-700 font-medium p-2 border-2 border-gray-500 text-[14px] rounded w-full lg:w-auto">
                        Men
                    </div>
                    <div className="text-slate-700 font-medium p-2 border-2 border-gray-500 text-[14px] rounded w-full lg:w-auto">
                        Women
                    </div>
                    <div className="text-slate-700 font-medium p-2 border-2 border-gray-500 text-[14px] rounded w-full lg:w-auto">
                        Children
                    </div>
                    <div className="text-slate-700 font-medium p-2 border-2 border-gray-500 text-[14px] rounded w-full lg:w-auto">
                        Electronics
                    </div>
                    <div>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className=""><svg className="w-6 h-6 fill-slate-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg></label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <ProductCard setCart={setCart} product={{
                    id: 1,
                    title: "Product 1",
                    href: "#",
                    image: "/product1.webp",
                    price: 10.00,
                    color: "Gray",
                    size: "XXL",
                    inStock: true
                }} />
                <ProductCard setCart={setCart} product={{
                    id: 2,
                    title: "Product 2",
                    href: "#",
                    image: "/product1.webp",
                    price: 20.00,
                    color: "Gray",
                    size: "XXL",
                    inStock: true
                }} />
                <ProductCard setCart={setCart} product={{
                    id: 3,
                    title: "Product 3",
                    href: "#",
                    image: "/product1.webp",
                    price: 30.00,
                    color: "Gray",
                    size: "XXL",
                    inStock: true
                }} />
            </div>
        </section>
    );
};

export default Products;