import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-violet-300 shadow-md w-full'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6'>
                <Link to='/'>
                    <h1 className='font-bold text-lg sm:text-xl flex items-center'>
                        <span className='text-slate-600'>FIND</span>
                        <span className='text-slate-900'>dEAL</span>
                    </h1>
                </Link>
                <ul className='hidden sm:flex gap-6'>
                    <li>
                        <Link to='/' className='text-slate-800 hover:text-white font-medium'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/listing' className='text-slate-800 hover:text-white font-medium'>
                            Listing
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='text-slate-800 hover:text-white font-medium'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog' className='text-slate-800 hover:text-white font-medium'>
                            Blog
                        </Link>
                    </li>
                </ul>
                <form className='relative flex items-center'>
                    <input
                        className='bg-slate-200 p-2 pl-4 pr-10 rounded-full focus:outline-none w-32 sm:w-56'
                        type='text'
                        placeholder='Search'
                    />
                    <button
                        type='submit'
                        className='absolute right-2 bg-transparent text-slate-800 focus:outline-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-4.35-4.35m1.56-5.44a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z'
                            />
                        </svg>
                    </button>
                </form>
                <ul className='ml-6'>
                    <li>
                        <Link to='/login'>
                           <button className='bg-white px-2 py-1 rounded-xl text-slate-800 hover:bg-yellow-200 hover:text-violet-600 font-semibold'>Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
