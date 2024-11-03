import { Star, StarHalf } from 'lucide-react';
import { useState, useEffect} from 'react';

function StarRating() {
    const [fill, setFill] = useState(false);
    const [averageRatings, setAverageRatings] = useState(0);
    const ratings = [1, 2, 3, 3, 5, 2]; // Array for ratings

    const calculateRatings = () => {
        let total = 0;
        if (ratings === null) {
            return;
        } else {
            for (let i = 0; i < ratings.length; i++) {
                total = ratings[i] + total;
            }
            // Compute the average of ratings
            setAverageRatings(total / ratings.length);
        }
    };

    // Calculate ratings once when the component mounts
    useEffect(() => {
        calculateRatings();
    }, []);

    return(
        <div>
            <div className='inline-flex gap-4 mt-2 items-center text-base font-bold'>

                {/* Star ratings*/}
                <div className='inline-flex gap-1 items-center'>
                    <div className="inline-flex w-[80px]">
                    { Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} fill="#111" strokeWidth={0} />
                    ))}
                    </div>
                    <div>
                    <p>({averageRatings.toFixed(1)})</p>
                    </div>
                </div>
                
                {/* numbers of reviews*/}
                <div className='text-green-700'>
                    <p>200 reviews</p>
                </div>
                
                {/* number of solds*/}
                <div className='text-yellow-600'>
                    <p>300 solds</p>
                </div>
            </div>
        </div>
    )
}

export default StarRating