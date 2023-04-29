import useGetListings from '@/api/hooks/getListings'
import ProductCard from './product/ProductCard'
import { useState } from 'react'

const Home = () => {
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const { listings } = useGetListings({ page: page, pageSize: itemsPerPage })

  return (
    <>
      <main className="flex flex-col items-center bg-gray-600 min-h-screen">
        <div className="flex flex-col w-[40rem]">
          <select
            defaultValue={2}
            className="text-black w-20"
            onChange={(e) => setItemsPerPage(+e.target.value)}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          {/* PAGINATION */}
          <div className="flex gap-4 self-start">
            <PaginationButton
              pageActive={page === 1}
              onClick={() => setPage(1)}
              pageNum={1}
            />
            <PaginationButton
              pageActive={page === 2}
              onClick={() => setPage(2)}
              pageNum={2}
            />
            <PaginationButton
              pageActive={page === 3}
              onClick={() => setPage(3)}
              pageNum={3}
            />
          </div>

          <ul className="flex flex-col gap-4 py-4 ">
            {listings &&
              listings.map((e: any) => {
                return <ProductCard product={e} key={e.id} />
              })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home

const PaginationButton = ({ onClick, pageActive, pageNum }) => {
  return (
    <button
      className={
        pageActive ? 'bg-gray-200 w-6 h-6 text-black rounded-full' : 'w-6 h-6'
      }
      onClick={onClick}
    >
      {pageNum}
    </button>
  )
}
