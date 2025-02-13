import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore';
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {
    const { authState } = useAuthStore();
    const navigate = useNavigate();


    const handleMove = () => {
        navigate('/profile')
    }
    return (
        <div className='bg-gradient-to-r from-indigo-200 to-violet-300  shadow-md w-full fixed z-20 py-5 px-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='font-bold text-lg sm:text-xl flex items-center'>
                        <span className='text-slate-600 drop-shadow-xl'>FIND</span>
                        <span className='text-slate-900 drop-shadow-xl'>dEAL</span>
                    </h1>
                </Link>
                <ul className='hidden sm:flex gap-6'>
                    <li>
                        <Link to='/' className='text-slate-800 hover:text-white font-bold drop-shadow-xl '>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/listing' className='text-slate-800 hover:text-white font-bold drop-shadow-xl'>
                            Listing
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='text-slate-800 hover:text-white font-bold drop-shadow-xl'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog' className='text-slate-800 hover:text-white font-bold drop-shadow-xl'>
                            {/* Blog */}
                        </Link>
                    </li>
                </ul>
                <ul>

                </ul>
                <ul className='ml-6'>
                    {authState.user ?
                        <li onClick={handleMove} className='flex justify-between items-center hover:cursor-pointer'>
                            <div className="h-8 w-8 rounded-full bg-white border-1 border-slate-700 shadow-lg flex justify-center items-center ">
                                <UserOutlined size={30} className="flex items-center" />
                            </div>
                            <p  className='px-2 py-1 text-slate-800 font-semibold'>{authState.user.name}</p>
                        </li> :
                        <li>
                            <Link to='/user/login'>
                                <button className='px-2 py-1 rounded-xl bg-white text-slate-800 font-semibold'>Login</button>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar
