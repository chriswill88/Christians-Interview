const SearchBar = ({setSearchWord}: {setSearchWord: any}) => {
    return (
        <form>
        <label>
            Search: <input name="query" onChange={(inp) => {
                setSearchWord(inp.target.value.toLowerCase())
            }}/>
        </label>
        </form>
    );

}

export default SearchBar;