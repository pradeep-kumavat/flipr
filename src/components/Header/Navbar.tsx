'use client'
import Link from 'next/link';
import logo from "../../../public/images/4.svg"
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter()
  const hideAuthButtons = pathname === '/login' || pathname === '/signup' || pathname === '/admin' || pathname === '/admin/investments';
  const showLogoutButton = pathname === '/admin/investments' || pathname === '/admin';

  const logout = async () => {
    try {
        await axios.get('/api/logout')
        router.push('/')
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}

  return (
    <>
    <div>
    <nav className="flex justify-between items-center py-6 px-56 bg-white">
      <div className="text-4xl font-bold text-custom-green t">
        <Link href="/">
        <Image src={logo} alt='logo' width={180}></Image>
        </Link>
      </div>
      <ul className="flex space-x-8 text-black text-sm font-bold">
        <li>
          <Link href="#">
            <p className="hover:text-custom-green">Investment Opportunities</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className="hover:text-custom-green">How it works</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className="hover:text-custom-green">About us</p>
          </Link>
        </li>
      </ul>
      {!hideAuthButtons && (<div className="flex space-x-4">
        <Link href="/login">
          <p className="px-7 py-3 bg-green-700 border rounded text-primary hover:bg-green-800">LOGIN</p>
        </Link>
        <Link href="/signup">
          <p className="px-7 py-3 bg-white border rounded text-black hover:bg-gray-100">REGISTER</p>
        </Link>
      </div>)}

      {showLogoutButton && (<div className="items-center">
        <Link href="#" onClick={logout}>
          <p className="px-7 py-3 bg-green-700 border rounded text-primary hover:bg-green-800">LOGOUT</p>
        </Link>
      </div>)}
    </nav>
    </div>
    </>
  );
}

