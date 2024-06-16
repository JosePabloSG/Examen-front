import Nav from '@/Components/Nav'
import { Input } from '@/Components/ui/input'
import useGetAllRoutes from '@/hooks/useGetAllRoutes'
import RouteProps from '@/types/Route'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'

export default function DashboardPage () {
  const { data: Routes } = useGetAllRoutes()
  const { register, handleSubmit } = useForm()
  const OnSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div>
      <Nav />
      <div className='flex justify-center items-center mt-10'>
        <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 dark:border-[#134e4a]'>
          <h1 className='mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center'>Buscar informacion</h1>
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
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none'
              >
                <option> Selecione lugar de salida </option>
                {Routes && Routes.data && Routes.data.map((route: RouteProps) => (
                  <option key={route.id} value={route.id}>
                    {route.Ruta}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-span-2 sm:col-span-1'>
              <label
                htmlFor='placeEnd'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Lugar de entrada
              </label>
              <select
                id='placeEnd'
                {...register('placeEnd')}
                required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 appearance-none'
              >
                <option> Selecione lugar de llegada </option>
                {Routes && Routes.data && Routes.data.map((route: RouteProps) => (

                  <option key={route.id} value={route.id}>
                    {route.Ruta}
                  </option>
                ))}
              </select>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='startDate' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Selecione fecha inicio
                </Label>
                <Input
                  {...register('startDate')}
                  id='startDate' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='date'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='endDate' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Selecione fecha final
                </Label>
                <Input
                  {...register('endDate')}
                  id='endDate' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='date'
                />
              </div>
            </div>
            <section className='flex gap-2 mt-2 justify-end'>
              <button
                data-cy='submit'
                type='submit'
                className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Buscar
              </button>
            </section>
          </form>
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <div>
          <h1 className=' text-2xl pr-10 font-semibold'>Precio total</h1>
          <p>10000</p>
        </div>
        <div>
          <h1 className=' text-2xl  font-semibold'>Cantidad de personas</h1>
          <p>9</p>
        </div>
      </div>
    </div>
  )
}
