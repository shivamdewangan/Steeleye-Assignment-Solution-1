const Search = ({ searchText, onChange }) => {
  return <input type="text" placeholder="Search by ID" value={searchText} onChange={onChange} />
}

export default Search
