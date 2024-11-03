import bookItems from '../../assets/book.jpg'
import { Button } from '../shadcn/button';
import Quantity from '../ui/Quantity';
import StarRating from '../components/StarRating';
import { MapPin, Truck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar"
import { AlertDialog, AlertDialogTrigger } from "../shadcn/alert-dialog"
import Buy from '../components/Buy';
import { useState } from 'react';


function View(image, title, price, shippingFee, location) {
    const [totalPrice, setTotalPrice] = useState(price);

    const priceQuantity = (quantity) => {
        setTotalPrice(price * quantity);
    }

    return(
        <div className='flex flex-col items-center justify-center mt-2 gap-4'>

            {/* Product details */}
            <div className='bg-secondary-shade p-6 max-w-screen-lg rounded-lg w-full'>
                <div className='flex flex-row gap-8'>
                    <img src={bookItems} alt="bookItems" className='w-[400px] h-[400px] object-cover'/>
                    <div className='flex flex-col justify-between'>

                        {/* Header */}
                        <div className='text-2xl font-semibold'>

                            {/* Products title*/}
                            <h1 className=''>Minimalist Living: Simple Steps to Declutter Your Life</h1>
                            {/* Star ratings component*/}
                            <div>
                                <StarRating/>
                            </div>
                        </div>

                        {/* products price*/}
                        <div className='text-2xl font-semibold'>
                            <h1 className=''>P{totalPrice}</h1>
                        </div>

                        {/* products description*/}
                        <div className='text-sm'>
                            <p>Description:</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        {/* Other details*/}
                        <div className='flex gap-2'>
                            <MapPin className='w-[20px]'/>
                            <p>Location:</p>
                        </div>
                        <div className='flex gap-2'>
                            <Truck className='w-[20px]'/>
                            <p>Shipping Fee: </p>
                        </div>

                        {/* Footer*/}
                        <div className='flex flex-col gap-4'>
                            {/* Quantity components*/}
                            <div className='flex flex-col gap-2'>
                                <p>Quantity: </p>
                                <Quantity quantity={priceQuantity}></Quantity>
                            </div>

                            <div className='flex gap-2'>
                                <Button className="w-full h-[35px] rounded-none bg-primary-color hover:bg-primary-shade">
                                    Add To Cart
                                </Button>

                                
                                <AlertDialog>
                                    <AlertDialogTrigger className='w-full'>
                                        <Button className="w-full h-[35px] rounded-none bg-primary-color hover:bg-primary-shade">
                                            Buy Now
                                        </Button>
                                    </AlertDialogTrigger>
                                    <Buy/>
                                </AlertDialog>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className='bg-secondary-shade p-6 max-w-screen-lg rounded-lg w-full'>
                <div className='text-2xl font-bold text-black mb-6'>
                    <h1>Reviews</h1>
                </div>

                <div className='flex gap-2 items-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h1>Profile Name</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default View