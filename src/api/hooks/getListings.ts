import useSWR from 'swr'
import axios from 'redaxios'

const useGetListings = ({ page = 1, pageSize = 3 }) => {
  const { data } = useSWR(
    `http://localhost:4000/v1/listings?page=${page}&page_size=${pageSize}`,
    axios,
    { revalidateOnFocus: false }
  )
  console.log('data:::', data)
  return {
    listings: data?.data.listings,
  }
}

export default useGetListings
