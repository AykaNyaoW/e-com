import { Button } from '../shadcn/button';
import { Link } from 'react-router-dom';
import { Settings, Bell } from 'lucide-react';
  

function Header() {
    return (
        <header className="relative w-full bg-primary-color flex justify-between items-center px-10 py-2">
            <div className='flex items-center gap-6'>
                <h1 className='text-white font-bold text-2xl uppercase'>bookworm</h1>
            </div>
            <div className='flex gap-2'>

                {/* for settings and notifications buttons */}
                <div>
                    <Button className='bg-transparent hover:bg-primary-shade'>
                        <Bell />
                    </Button>
                    <Button className='bg-transparent hover:bg-primary-shade'>
                        <Settings />
                    </Button>
                </div>

                {/* for login and signup buttons */}
                <div className='flex gap-1'>
                    <Button asChild className='font-bold bg-transparent text-sm hover:bg-primary-shade'>
                        <Link to='/login'>Login</Link>
                    </Button>

                    <Button asChild className='font-bold text-sm text-primary-color bg-secondary-color hover:bg-secondary-shade'>
                        <Link to='/signup'>Register</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
