import React from "react"
import { FaSearch } from "react-icons/fa"

function SearchBox() {
  return (
    <div className="flex items-center w-full ml-2">
      <FaSearch className="-mr-6 z-10" />
      <input
        type="search"
        name="search"
        id="search"
        className="w-full rounded-lg pl-8 pr-2 py-2 bg-primary-800 focus:outline-none placeholder:text-primary-200"
        placeholder="Search razer.com"
      />
    </div>
  )
}

export default SearchBox
