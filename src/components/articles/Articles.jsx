import React from 'react'
import blog from "../../../public/images/blod.jpg";
const Articles = () => {
    return (
        <div className='container mx-auto'>
            {/* <div className='border border-t-1 w-[95%] m-auto mt-[3rem]'></div> */}
        
            <h1 className='borderArticles text-[28px] text-[#000] font-extrabold text-center mt-10'>Articles</h1>

            <div className='bg-[#b8d9ec] h-auto pb-5 w-[95%] m-auto rounded-[30px] mt-10'>
                <div className='pt-5'>
                    <img className='w-[80px] h-[80px] m-auto  rounded-full' src={blog} alt="" />
                </div>
                <h1 className='text-[#000] text-[28px] font-extrabold text-center pt-12'>
                    Artificial Intelligenc Beyond Imgainations
                </h1>
                <p className='text-center md:w-[900px] m-auto font-bold pt-5 text-[14px] text-[#94a3b8] '><span  className='text-[#000] font-bold text-[16px]'>Lorem ipsum, dolor</span> sit amet consectetur adipisicing elit. Quas vitae, <span  className='text-[#000] font-bold text-[16px]'>fugit repellendus </span>distinctio ex non obcaecati itaque vel dignissimos suscipit enim ducimus praesentium libero dolor nobis! Unde ad voluptatem cupiditate.</p>

            </div>

        </div>
    )
}

export default Articles
