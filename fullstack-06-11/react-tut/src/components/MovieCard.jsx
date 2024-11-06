
const MovieCard = ({movie}) => {

  return (
    <div className='w-1/4 p-4'>
      <div className='bg-gray-200 rounded-md p-4'>
        <img src={movie?.image?.medium} alt='movie' className='w-full rounded-md' />
        <h1 className='text-lg font-semibold mt-2'>{movie?.name}</h1>
        <p className='text-sm text-gray-600'>{movie?.language}</p>
        <hr className="h-[1.5px] bg-gray-600/50 my-2" />
        <div className="flex flex-col justify-start items-start gap-2 pl-4 mt-2">
          <p className='text-sm text-green-700'>Rating: {movie?.rating.average ?? "N/A"}</p>
          <p className='text-sm text-green-700'>Category: {movie?.type}</p>
          <p className='text-green-700 text-sm flex gap-2 justify-center items-center'>Genre: {
            movie?.genres.length !==0 ? movie?.genres.map((genre, index) => (
              <span key={index} className='text-blue-500 text-xs'>{genre} </span>
            )): "N/A"
            }</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard