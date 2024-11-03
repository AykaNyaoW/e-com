import { Button } from '../shadcn/button';
import { Link } from 'react-router-dom';

function Card({ image, title, price }) {
    return(
        <div className='w-[200px] shadow-md '>
            <div className='relative w-[200px] h-[200px]'>
                <img src={image} alt="bookItems" className='w-[200px] h-[200px] object-cover'/>
                <div className='absolute bg-primary-color bottom-0 right-0 w-full text-right py-1 px-2'>
                    <h1 className='text-md font-semibold text-secondary-color'>{price}</h1>
                </div>
            </div>
            
            {/* Card Header */}
            <div className='text-md font-semibold p-2'>
                <h1>{title}</h1>
            </div>

            {/* Card Footer */}          
            <div className='w-full mt-2 flex'>
                <Button asChild className='w-full'>
                    <Link to='/view'> Add to cart</Link>
                </Button>
            </div>
        </div>
    )
}

export default Card