'use client'

const User = () => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="w-full p-2 bg-indigo-100 flex justify-between rounded mb-3" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <span className="flex items-center space-x-2">
                    <svg className="w-6 h-6 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                    <span className="text-indigo-600 font-medium">
                        Steve Jobs
                    </span>
                </span>
                <span>
                    <svg className="w-6 h-6 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                </span>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-center text-[20px] font-semibold">Add New Customer</h3>
                    <form action="#" className="w-full flex flex-col justify-center space-y-5 px-4">
                        <input type="text" placeholder="Name" className="border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 py-0.5 text-[14px]" />
                        <input type="text" placeholder="Email" className="border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 py-0.5 text-[14px]" />
                        <input type="text" placeholder="Phone" className="border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 py-0.5 text-[14px]" />
                        <select name="currency" id="currency" className="border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 py-0.5  bg-white text-gray-400 cursor-pointer text-[14px]">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="inr">INR</option>
                            <option value="gbp">BDT</option>
                        </select>
                        <input type="text" placeholder="TAX ID" className="border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 py-0.5 text-[14px]" />
                        <div>
                            <button className="inline-flex items-center space-x-2 text-[14px] text-blue-600 font-semibold">
                                <span>
                                    <svg className="w-4 h-4 fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                                </span>
                                <span>
                                    Add More Details
                                </span>
                            </button>
                        </div>
                        <button className="btn btn-secondary">
                            Update
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    )
};

export default User;