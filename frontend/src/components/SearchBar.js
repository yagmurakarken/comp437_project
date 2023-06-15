import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "./searchBar.css"

function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="search-bar-container">
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
                className="search-bar"
            />
        </div>
    );
}
export default SearchBar;
