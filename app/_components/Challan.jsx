'use client';

import { useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Item from "./Item";

const Challan = (prop) => {
    const [total, setTotal] = useState(0);
    const TAX = 25.50;
    const SHIPPING = 5.50;
    const CART_DISCOUNT = 10;
    return (<>
        <div className="lg:w-1/2 lg:border-r border-gray-500 lg:pr-4 pb-5 lg:pb-0">
            <Navbar />
            <User />
            <div className="pb-6">
                <div className="pb-6 mx-2 lg:mx-0">
                    {
                        prop?.cart?.map((item) => <Item setTotal={setTotal} key={item?.id} name={item?.title} price={item?.price} />)
                    }
                </div>
                <div className="flex justify-end pb-6 mx-2 lg:mx-0">
                    <div className="flex flex-col justify-between w-[41%] mr-2">
                        <div className="w-full flex justify-between py-2 border-y">
                            <span className="text-gray-500 text-[14px] font-medium">
                                Sub Total
                            </span>
                            <span className="text-slate-700 font-medium">
                                ${ total }
                            </span>
                        </div>
                        <div className="w-full flex justify-between py-2 border-y">
                            <span className="text-gray-500 text-[14px] font-medium">
                                TAX
                            </span>
                            <span className="text-slate-700 font-medium">
                                ${ TAX }
                            </span>
                        </div>
                        <div className="w-full flex justify-between py-2 border-y">
                            <span className="text-gray-500 text-[14px] font-medium">
                                Shipping
                            </span>
                            <span className="text-slate-700 font-medium">
                                ${ SHIPPING }
                            </span>
                        </div>
                        <div className="w-full flex justify-between py-2 border-y">
                            <span className="text-blue-600 text-[14px] font-medium">
                                Discount on Cart
                            </span>
                            <span className="text-slate-700 font-medium">
                                ${ CART_DISCOUNT }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between  bg-indigo-100 p-2 text-indigo-600 mx-2 lg:mx-0">
                    <p className="text-[13px]">Products Count ({ prop?.cart?.length })</p>
                    <div className="w-[41%] flex justify-between font-bold text-[18px]">
                        <h3>Total</h3>
                        <h3>${ total + TAX + SHIPPING - CART_DISCOUNT }</h3>
                    </div>
                </div>
            </div>
            <div className="mx-2 lg:mx-0 gap-4 lg:gap-0 flex flex-col lg:flex-row justify-between">
                <button className="text-red-500 bg-red-100  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                    <span>
                        <svg className="w-4 h-4 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
                    </span>
                    <span>
                        Cancel
                    </span>
                </button>
                <button className="text-indigo-600 bg-indigo-100  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                    <span>
                        <svg className="w-4 h-4 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16V264c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V370.2c38-20.1 64-60.1 64-106.2V160c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C332.8 77.1 311.9 64 288 64c-2.8 0-5.6 .2-8.3 .5C268.8 45.1 247.9 32 224 32c-2.8 0-5.6 .2-8.3 .5C204.8 13.1 183.9 0 160 0C124.7 0 96 28.7 96 64v64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L64 155.2l-9.4 10.5C40 181.8 32 202.8 32 224.6v12.8c0 49.6 24.2 96.1 64.8 124.5l13.8-19.7L96.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V359.9c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1l-13.1 18.7 13.1-18.7-8.9-6.2C96.6 303.1 80 271.3 80 237.4V224.6c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16V142.3 128 64z" /></svg>
                    </span>
                    <span>
                        Hold
                    </span>
                </button>
                <button className="bg-indigo-100 text-indigo-600  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                    <span>
                        <svg className="w-4 h-4 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                    </span>
                    <span>
                        Discount
                    </span>
                </button>
                <button onClick={() => prop.setPayment(true)} className="bg-indigo-100 text-indigo-600  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                    <span>
                        <svg className="w-4 h-4 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" /></svg>
                    </span>
                    <span>
                        Pay Now
                    </span>
                </button>
            </div>
        </div>
    </>);
};

export default Challan;