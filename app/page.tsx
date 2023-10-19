import Image from 'next/image'
import { DepiContainer } from '@/components/DepiContainer'

export default function Home() {

  return (
    <main className="min-h-screen p-10">
      <h1 className='text-3xl font-bold text-center'>Components</h1>
      <div className='mx-auto p-5max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 p-4'>
        <DepiContainer />
      </div>
    </main>
  )
}
