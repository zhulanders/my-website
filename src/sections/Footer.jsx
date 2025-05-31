import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>User data is not tracked.</p>
            </div>
            <div className="flex gap-3">
                <a href='https://github.com/zhulanders' className='social-icon'>
                    <img src='/assets/github.svg' alt="github" className='w-6 h-6' />
                </a>
                <a href="https://www.linkedin.com/in/joshua-zhu-583538298/" className='social-icon'>
                    <img src='/assets/linkedin.svg' alt="linkedin" className='w-6 h-6' />
                </a>
                <a href='https://x.com/zhulander_' className='social-icon'>
                    <img src='/assets/twitter.svg' alt="twitter" className='w-6 h-6' />
                </a>
            </div>
            <p className='text-white-500'>© 2025 Joshua. All Rights Reserved.</p>
        </section>
    )
}

export default Footer;
