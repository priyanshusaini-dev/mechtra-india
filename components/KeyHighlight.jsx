import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false
});


const KeyHighlight = () => {
    const [num, setNum] = React.useState(331231);

    return (
        <section className='flex w-full justify-center py-8 mt-11 mb-12 px-2 bg-[#0c203d83] '>
            <div className='flex flex-col justify-center items-center w-[100%] md:w-[80%] flex-wrap'>
                <div className="text-center my-7 py-3 w-72 flex flex-col justify-center items-center border-y-[1px] border-slate-600">
                    <h1 className='text-4xl font-libre'>KEY HIGHLIGHT</h1>
                </div>
                <div className="flex flex-row justify-center flex-wrap gap-[8rem]">
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>Annual turnover of</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={1243}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute bottom-1 right-9 text-xl'>mn</span>
                        </div>
                        <h6>as on 31st March, 2022</h6>
                        
                    </div>
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>Employees strength of</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={100}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute translate-y-[10%] right-[73px] text-4xl'>+</span>
                        </div>
                        <h6>as on 31st March, 2022</h6>
                        
                    </div>
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>In the year</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={2021}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute translate-y-[10%] right-[73px] text-4xl'></span>
                        </div>
                        <h6>Commenced its operations</h6>
                        
                    </div>
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>Manufacturing facilities in</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={1}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute translate-y-[10%] right-[73px] text-4xl'></span>
                        </div>
                        <h6>Countries</h6>
                        
                    </div>
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>Operations across</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={12}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute translate-y-[10%] right-[73px] text-4xl'></span>
                        </div>
                        <h6>plants globally</h6>
                        
                    </div>
                    <div className='border-b-[2px] pb-2 px-4 border-slate-600'>
                        <h3>R & D Centers across</h3>
                        <div className="flex flex-row relative my-2">
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={10}
                            fontStyle={{ fontSize: 40 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers><span className='absolute translate-y-[10%] right-[73px] text-4xl'>+</span>
                        </div>
                        <h6>Globally</h6>
                        
                    </div>


                </div>
            </div>
        </section>
    )
}

export default KeyHighlight