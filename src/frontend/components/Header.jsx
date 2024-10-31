import { Button } from '../shadcn/button';
import { Link } from 'react-router-dom';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/frontend/shadcn/select"
  

function Header() {
    return (
        <header className="relative w-full bg-secondary-color flex justify-between items-center px-10 py-2">
            <div className='flex items-center gap-6'>
                <h1 className='text-white font-bold text-2xl uppercase'>bookworm</h1>
            </div>
            <div className='flex gap-2'>
                <Button asChild className='font-bold bg-transparent text-sm hover:bg-primary-color'>
                    <Link to='/'>Login</Link>
                </Button>

                <Button asChild className='font-bold text-sm bg-primary-color hover:bg-transparent'>
                    <Link to='/signup'>Register</Link>
                </Button>
            </div>
        </header>
    );
}

export default Header;
