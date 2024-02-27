'use client'

import { useState } from "react";

const Payment = (prop) => {
    const [paymentType, setPaymentType] = useState("cash");
    return (
        <section className="lg:w-1/2 lg:p-6">
            <div className="flex items-center justify-between border py-4 px-6 mb-4">
                <h3 className="font-medium text-[18px] text-gray-500">Order Amount</h3>
                <h3 className="font-medium text-[26px] text-slate-900">$5005.50</h3>
            </div>
            <div className="lg:border flex flex-col lg:flex-row">
                <div className="flex flex-col lg:border-r lg:w-[30%]">
                    <button onClick={() => setPaymentType("cash")} className="flex items-center space-x-4 p-4">
                        <span>
                            <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                        </span>
                        <span>
                            Cash
                        </span>
                    </button>
                    <button onClick={() => setPaymentType("card")} className="flex items-center space-x-4 p-4">
                        <span>
                            <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>
                        </span>
                        <span>
                            Card
                        </span>
                        
                    </button>
                    <button onClick={() => setPaymentType("account")} className="flex items-center space-x-4 p-4">
                        
                        <span>
                            <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                        </span>
                        <span>
                            On Account
                        </span>
                    </button>
                    <button onClick={() => setPaymentType("cheque")} className="flex items-center space-x-4 p-4">
                        <span>
                            <svg className="w-5 h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>
                        </span>
                        <span>
                            Cheque
                        </span>
                    </button>
                </div>
                <div className="lg:w-[70%] lg:min-h-[70vh] flex flex-col justify-between">
                    <div className="p-6">
                        {
                            paymentType == 'cash' && (
                                <div>
                                    <input type="text" placeholder="Enter Amount" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0" />
                                </div>
                            )
                        }
                        {
                            paymentType == 'card' && (
                                <div className="flex flex-col gap-3">
                                    <input type="text" placeholder="Card Name" className="w-full p-1 text-[14px] border-b border-gray-300 rounded focus:outline-none focus:ring-0" />
                                    <input type="text" placeholder="Card Number" className="w-full p-1 text-[14px] border-b border-gray-300 rounded focus:outline-none focus:ring-0" />
                                    <input type="text" placeholder="Card Expire Date" className="w-full p-1 text-[14px] border-b border-gray-300 rounded focus:outline-none focus:ring-0" />
                                    <input type="text" placeholder="Card Secret" className="w-full p-1 text-[14px] border-b border-gray-300 rounded focus:outline-none focus:ring-0" />
                                </div>
                            )
                        }
                        
                        {
                            paymentType == 'account' && (
                                <div>
                                    <input type="text" placeholder="Account Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0" />
                                </div>
                            )
                        }

                        {
                            paymentType == 'cheque' && (
                                <div>
                                    <input type="text" placeholder="Cheque Number" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0" />
                                </div>
                            )
                        }
                        
                    </div>
                    <div className="flex justify-end gap-4">
                        <button onClick={() => prop.setPayment(false)} className="text-red-500 bg-red-100  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                            <span>
                                <svg className="w-4 h-4 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
                            </span>
                            <span>
                                Cancel
                            </span>
                        </button>
                        <button onClick={() => { 
                            alert('Payment Successful');

                            prop.setPayment(false);
                        }} className="bg-indigo-100 text-indigo-600  rounded inline-flex items-center space-x-2 p-2 shadow-md">
                            <span>
                                <svg className="w-4 h-4 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" /></svg>
                            </span>
                            <span>
                                Complete Payment
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;