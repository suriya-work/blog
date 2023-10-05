import React from 'react'
import { Link } from 'react-router-dom'
import { DataBlog } from '../../data/DataBlog'
import { LuCalendarDays } from 'react-icons/lu';
import { GrFormView } from 'react-icons/gr';
const Card = () => {
    return (
        <div className='container  mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
                {
                    DataBlog.map((data) => {
                        return (
                            <div key={data.id} className='w-[400px] h-auto lg:flex lg:text-start flex flex-col justify-center items-center text-center'>
                                <img className='w-[320px] h-[200px]  rounded-[20px]' src={data.imaga} alt="" />
                                <h2 className='text-[24px] font-bold w-[300px] mt-4'>{data.title}</h2>
                                <p className='text-[#929191] text-[14px] w-[300px] mt-4'>{data.description}</p>
                                <div className='border border-t-1 w-[75%] mt-3'></div>
                                <div className='flex ml-10 items-center mt-4 gap-4'>
                                    <div className='flex'>
                                        <LuCalendarDays size={20} />
                                        <span className='ml-2 text-[14px] text-[#929191]'>
                                            2023/23/6
                                        </span>
                                    </div>
                                    <div className='flex'>
                                        <GrFormView size={28} />
                                        <span className='mt-1 text-[14px] text-[#929191]'>
                                            10K Viewers
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-[310px] h-[40px]  border-[2px] rounded-[20px] hover:bg-[#00a3ff] hover:text-[#fff]'>
                                        <Link to="#" className='text-[14px]'>Read More</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Card
