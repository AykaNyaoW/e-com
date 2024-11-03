import { useState } from "react"
import { Button } from '../shadcn/button';
import { Minus, Plus } from 'lucide-react';
import { useEffect } from "react";

function Quantity({quantity}) {
    const [number, setNumber] = useState(1); // initial value of item

    const updateQuantity = (value) => {
        setNumber((prevState) => Math.max(1, prevState + value)); // Ensure it doesn't go below 1
    };

    useEffect(() => {
        quantity(number);
    }, [number, quantity]);

    return (
        <div className='flex gap-10 items-center w-10'>
            <Button onClick={() => updateQuantity(-1)}
                className="w-full h-[35px] rounded-none bg-primary-color hover:bg-primary-shade">
                <Minus/>
            </Button>
            <p className="text-lg font-bold">{number}</p>
            <Button onClick={() => updateQuantity(1)}
                className="w-full h-[35px] rounded-none bg-primary-color hover:bg-primary-shade">
                <Plus/>
            </Button>
        </div>
    );
}

export default Quantity;
