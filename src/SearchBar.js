import React,{useState} from "react"; 

const SearchBar =() => {
const [query, setQuery] = useState("");

const search = (e) => {
    e.preventDefault(e)
    setQuery(e.target.value)
}
    return(
        <input type="text" 
        placeholder="search anything" onChange={search} value={query}/>
    )
}

export default SearchBar;