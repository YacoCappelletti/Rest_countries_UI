
interface FilterProps {
  filterName: string
}




const Filter:React.FC<FilterProps> = ({filterName}) => {

  

  return (
    <div className="my-[1rem]">
      <h2>{filterName}</h2>
      <form className="flex space-x-1">
        <input type="text"  name={filterName} />
        <input type="submit" value="Search" className=""  />
      </form>
    </div>
  )
}

export default Filter
