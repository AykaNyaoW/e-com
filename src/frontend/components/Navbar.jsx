import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/frontend/shadcn/select"
import { Search } from 'lucide-react';
import { Button } from '../shadcn/button';
import { ShoppingCart } from 'lucide-react';

function Navbar() {
    return(
        <nav className="absolute w-full flex px-10 py-2 justify-center">
            <div className="flex gap-2 items-center w-[550px]">
                <Select>
                    <SelectTrigger className="w-[200px] font-bold border-black border-2 text-black">
                        <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="adventure">Adventure</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="philosophy">Philosophy</SelectItem>
                    </SelectContent>
                </Select>
                <div className="relative w-full flex">
                    <input type="text" placeholder='Search'className="border-black border-2 rounded-full px-4 w-full h-10"/>
                    <div className="absolute inset-y-2 flex right-3 item-center">
                        <Search />
                    </div>
                </div>
                <div>
                    <Button>
                        <ShoppingCart/>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar