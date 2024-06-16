import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className=' bg-slate-400 border-gray-20'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-400  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
            <Link to='/'>
              <p className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Crear tiquete</p>
            </Link>
            <Link to='/dashboard'>
              <p className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Lista tiquete</p>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
