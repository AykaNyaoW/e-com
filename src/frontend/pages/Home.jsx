import banner from '../../assets/sale-shopping.jpg'
import bookItems from '../../assets/book.jpg'
import Card from '../ui/Card'
import Navbar from '../components/Navbar'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../shadcn/carousel"

function Home() {
    return (
        <div className="relative w-full">
            <Navbar className="absoulte" />
            <div>
                <img src={banner} alt="homepage" className="w-full h-[400px] object-cover" />
            </div>
            
            {/* Center Carousel */}
            <div className='px-44 mt-4'>
                <h1 className='text-xl uppercase font-bold'>popular books</h1>
            </div>
            <div className="flex justify-center my-2">
                <Carousel opts={{ align: "start" }} className="w-full max-w-screen-lg x-10">
                    <CarouselContent className=""> {/* Added gap-2 to control spacing */}
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-auto lg:basis-auto">
                                <div className="p-1 mx-2"> {/* Reduced padding and added mx-2 for consistent spacing */}
                                    <Card
                                        content={bookItems}
                                        title="Minimalist Living: Simple Steps to Declutter Your Life"
                                        price="P200"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='h-24 w-10 shadow-md hover:bg-secondary-shade'/>
                    <CarouselNext className='h-24 w-10 shadow-md hover:bg-secondary-shade'/>
                </Carousel>
            </div>
        </div>
    )
}

export default Home
