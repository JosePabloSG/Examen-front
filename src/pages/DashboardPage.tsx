import Nav from '@/Components/Nav'
import { Dashboard } from '@/Components/dashboard'
import { Input } from '@/Components/ui/input'
import useGetAllRoutes from '@/hooks/useGetAllRoutes'
import useGetInforByRange from '@/hooks/useGetInforByRange'
import RouteProps from '@/types/Route'
import { Label } from '@radix-ui/react-label'

export default function DashboardPage () {
  const { data: Routes } = useGetAllRoutes()
  const { register, handlePlaceEndChange, handlePlaceStartChange, handleStartDateChange, handleEndDateChange } = useGetInforByRange()

  return (
    <div>
      <Nav />
      <div className=''>
        <div className='flex justify-center items-center mt-10'>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-teal-900 dark:border-[#134e4a]'>
            <h1 className='mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center'>Buscar informacion</h1>
            <form className='space-y-6'>
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
                  Lugar de entrada
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
                  <Label htmlFor='startDate' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Selecione fecha inicio
                  </Label>
                  <Input
                    {...register('startDate')}
                    onChange={handleStartDateChange}
                    id='startDate' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='date'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='endDate' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Selecione fecha final
                  </Label>
                  <Input
                    {...register('endDate')}
                    onChange={handleEndDateChange}
                    id='endDate' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900' type='date'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}
