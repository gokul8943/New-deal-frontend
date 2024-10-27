import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-200 to-violet-300  shadow-md w-full z-10'>
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
                <ul>
                    
                </ul>
                <ul className='ml-6'>
                    <li>
                        <Link to='/user/login'>
                           <button className='bg-gradient-to-r from-indigo-200 to-lime-500 px-2 py-1 rounded-xl text-slate-800  hover:text-violet-600 font-semibold'>Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
