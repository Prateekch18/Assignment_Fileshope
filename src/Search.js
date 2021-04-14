import { Button } from '@material-ui/core';

import React from 'react'
import './Search.css';
function Search() {
    return (
        <form>
            <div className="search">
                <input type="search" value="Search Here"></input>
                <Button className="btn" borderRadius={30}>Search</Button>
            </div>
        </form>
    )
}

export default Search
