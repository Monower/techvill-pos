'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    const [active, setActive] = useState('taxon');
    return (
        <section className=" flex flex-col lg:flex-row justify-between lg:items-center pb-3 px-2 lg:px-0 gap-3 lg:gap-0">
            <div className="">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="cursor-pointer">
                        <svg className="w-6 h-7  fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </label>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-3">
                        {/* Sidebar content here */}
                        <div className="flex flex-col">
                            <div className="flex justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div>
                                <p className="text-[12px]">Location:</p>
                                <p className="text-[18px] font-medium">Los Angeles, California</p>
                            </div>
                        </div>
                        <li className="bg-base-300 p-1">
                            <Link
                                href={'#'}
                            >
                                <span>
                                    <svg className="w-4 h-4 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" /></svg>
                                </span>
                                <span>
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className="bg-base-300 p-1">
                            <Link
                                href={'#'}
                            >
                                <span>
                                    <svg className="w-4 h-4 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                </span>
                                <span>
                                    Location
                                </span>
                            </Link>
                        </li>
                        <li className="bg-base-300 p-1">
                            <Link
                                href={'#'}
                            >
                                <span>
                                    <svg className="w-4 h-4 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z" /></svg>
                                </span>
                                <span>
                                    POS Invoices
                                </span>
                            </Link>
                        </li>
                        <li className="bg-base-300 p-1">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="" onClick={() => document.getElementById('setting').showModal()}>
                                <span>
                                    <svg className="w-4 h-4 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                                </span>
                                <span>
                                    Setting
                                </span>
                            </button>
                            <dialog id="setting" className="modal flex justify-center items-center">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg text-center">Setting</h3>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex">
                                            <button className={`w-full  font-semibold p-2 ${active == 'taxon' && 'bg-indigo-100 text-indigo-600 border-b border-indigo-600'}`}
                                            onClick={() => setActive('taxon')}
                                            >
                                                Tax On
                                            </button>
                                            <button className={`w-full  font-semibold p-2 ${active == 'taxtype' && 'bg-indigo-100 text-indigo-600 border-b border-indigo-600'}`}
                                            onClick={() => setActive('taxtype')}>
                                                Tax Type
                                            </button>
                                        </div>
                                        <div className="flex flex-col">
                                            {
                                                active == 'taxon' && (
                                                    <>
                                                        <div className="form-control">
                                                            <label className="label cursor-pointer justify-start gap-4">
                                                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                                <span className="label-text">After Discount</span>

                                                            </label>
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label cursor-pointer justify-start gap-4">
                                                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                                                                <span className="label-text">Before Discount</span>

                                                            </label>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                active == 'taxtype' && (
                                                    <>
                                                        <div className="form-control">
                                                            <label className="label cursor-pointer justify-start gap-4">
                                                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                                <span className="label-text">type 1</span>

                                                            </label>
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label cursor-pointer justify-start gap-4">
                                                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                                                                <span className="label-text">type 2</span>

                                                            </label>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        </li>

                    </ul>
                </div>
            </div>

            <button className="flex items-center space-x-2 bg-indigo-100 py-2 px-3 rounded font-medium group hover:bg-indigo-600 shadow-md">
                <svg className="w-5 h-5 fill-indigo-600 group-hover:fill-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
                <span className="text-indigo-600 text-[14px] group-hover:text-indigo-100">
                    Note
                </span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-100 py-2 px-3 rounded font-medium group hover:bg-indigo-600 shadow-md">
                <svg className="w-5 h-5 fill-indigo-600 group-hover:fill-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                <span className="text-indigo-600 text-[14px] group-hover:text-indigo-100">
                    Shipping
                </span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-100 py-2 px-3 rounded font-medium group hover:bg-indigo-600 shadow-md">
                <svg className="w-5 h-5 fill-indigo-600 group-hover:fill-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                <span className="text-indigo-600 text-[14px] group-hover:text-indigo-100">
                    Hold Orders
                </span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-100 py-2 px-3 rounded font-medium group hover:bg-indigo-600 shadow-md">
                <svg className="w-5 h-5 fill-indigo-600 group-hover:fill-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                <span className="text-indigo-600 text-[14px] group-hover:text-indigo-100">
                    New Item
                </span>
            </button>
        </section>
    )
};

export default Navbar;