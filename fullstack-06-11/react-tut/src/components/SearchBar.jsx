
// eslint-disable-next-line react/prop-types
const SearchBar = ({setSearch, handleSearch}) => {
  return (
    <div className='flex w-full gap-4'>
      <input onChange={(e)=>{setSearch(e.target.value)}} type='text' placeholder='Search...' className='p-2 border border-gray-300 rounded-md w-full' />
      <button onClick={handleSearch} className='py-2 px-4  bg-blue-500 text-white rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar