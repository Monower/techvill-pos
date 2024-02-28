'use client'
import { useState, useEffect } from "react";

const Item = ({ name, price, setTotal }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setTotal((prev) => { 
            console.log(prev + price * count);
            return prev + (price * count)
        })
    }, [count])
    return (
        <div className="w-full p-2 border  flex justify-between rounded  text-gray-500 font-medium">
            <span>
                { name }
            </span>
            <span>
                ${parseFloat( price ).toFixed(2)}
            </span>
            <span className="flex items-center space-x-2">
                <button onClick={() => { 
                    if(count > 1) setCount(count - 1)
                }}>
                    <svg className="w-6 h-6 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>
                </button>
                <span>
                    { count }
                </span>
                <button onClick={() => setCount(count + 1)}>
                    <svg className="w-6 h-6 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                </button>
            </span>
            <span>
                ${parseFloat(price * count).toFixed(2) }
            </span>
        </div>
    )
};

export default Item;