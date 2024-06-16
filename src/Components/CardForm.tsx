import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import useGetAllRoutes from '../hooks/useGetAllRoutes'
import usePostTicket from '@/hooks/usePostTicket'
import RouteProps from '@/types/Route'
import useGetPrice from '@/hooks/useGetPrice'

export default function CardForm () {
  const { data: Routes } = useGetAllRoutes()
  const { price, handlePlaceEndChange, handlePlaceStartChange } = useGetPrice()
  const { OnSubmit, register } = usePostTicket()

  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 dark:border-[hsl(176,61%,19%)]'>
        <h1 className='mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center'>Comprar tiquete</h1>
        <form onSubmit={OnSubmit} className='space-y-6'>
          <div className='col-span-2 sm:col-span-1'>
            <label
              htmlFor='placeStart'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Lugar de salida
            </label>
            <select
              id='placeStart'
              {...register('placeStart')}
              onChange={handlePlaceStartChange}
              required
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none'
            >
              <option> Selecione lugar de salida </option>
              {Routes && Routes.data && Routes.data.map((route: RouteProps) => (
                <option key={route.id} value={route.id}>
                  {route.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <label
              htmlFor='placeEnd'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Lugar de llegada
            </label>
            <select
              id='placeEnd'
              {...register('placeEnd')}
              onChange={handlePlaceEndChange}
              required
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none'
            >
              <option> Selecione lugar de llegada </option>
              {Routes && Routes.data && Routes.data.map((route: RouteProps) => (
                <option key={route.id} value={route.id}>
                  {route.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='date' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Selecione la fecha
              </Label>
              <Input
                data-cy='date'
                {...register('date')}
                id='date' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='date'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='time' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Selecione la hora
              </Label>
              <Input
                data-cy='time'
                {...register('time')}
                id='time' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='time'
              />
            </div>
          </div>
          <div className='flex'>
            <div>
              <h1 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Precio del tiquete
              </h1>
              <p>
                ₡ {price}
              </p>
            </div>
            <section className='flex ml-10 mt-2 justify-end'>
              <button
                data-cy='submit'
                type='submit'
                className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Comprar
              </button>
            </section>
          </div>
        </form>
      </div>
    </div>
  )
}
