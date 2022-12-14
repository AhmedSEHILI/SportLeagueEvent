import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Notfound(props) {
    
    const router = useRouter();
    const [count, setCount] = useState(15);


    useEffect(() => {
        setTimeout(() => {
            // router.push('/');
            setCount((count) => count - 1);
        }, 1000);
        if (count === 0) router.push('/');
    })

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#01032A]">
            <h3 className="font-bold text-white">This page is not ready</h3>
            <h3 className="font-bold text-white text-center w-[80%] md:w-fit">You will be redirected to the main page in {count} seconds</h3>
            <h3 className="py-7 text-sm text-white">with best regards / ESMS team 17 </h3>
            <div className="sm:w-[200px] sm:h-[200px] w-[30%] h-[30%]">
            <img src="/cse.svg" alt="" />
            </div>

        </div>
    );
}

export default Notfound;