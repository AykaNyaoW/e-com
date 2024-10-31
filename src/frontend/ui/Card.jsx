import { Button } from '../shadcn/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../shadcn/dialog"  

function Card({ content, title, price }) {
    return(
        <div className='w-[200px] shadow-md '>
            <div className='relative w-[200px] h-[200px]'>
                <img src={content} alt="bookItems" className='w-[200px] h-[200px] object-cover'/>
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
                <Dialog>
                    <DialogTrigger className="w-full">
                        <Button className="w-full h-[35px] flex rounded-none bg-primary-color hover:bg-primary-shade">
                            Add to cart
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <div>
                                <div className="flex flex-row w-full items-start gap-4">
                                    {/* Image container with fixed square aspect ratio */}
                                    <div className="w-[200px] aspect-square">
                                        <img src={content} alt="bookItems" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col mr-6 w-[200px]">
                                        <DialogTitle className="text-left m-0 p-0">{title}</DialogTitle>
                                        <div>
                                            <h1 className='text-xl font-bold text-red-500 mt-2'>{price}</h1>
                                        </div>
                                        <Button>
                                            Add to cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}

export default Card