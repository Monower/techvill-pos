const Payment = (prop) => {
    return (
        <section className="w-1/2 p-6">
            <div className="flex items-center justify-between border py-4 px-6 mb-4">
                <h3 className="font-medium text-[18px] text-gray-500">Order Amount</h3>
                <h3 className="font-medium text-[26px] text-slate-900">$5005.50</h3>
            </div>
            <div className="border flex">
                <div className="flex flex-col border-r w-[30%]">
                    <button>
                        Cash
                    </button>
                    <button>
                        Card
                    </button>
                    <button>
                        On Account
                    </button>
                    <button>
                        Cheque
                    </button>
                </div>
                <div className="w-[70%] min-h-[70vh] flex flex-col justify-between">
                    asdasd
                    <div>
                        <button onClick={() => prop.setPayment(false)}>
                            Cancel
                        </button>
                        <button>
                            Complete Payment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;