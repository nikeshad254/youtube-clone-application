import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="from"
      onSubmit={() => {}}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: 'none', mr: {sm: 5} }}
    >
        <input type="text" className="search-bar" placeholder="search here" value="" onChange={()=>{}} />
        <IconButton>
            <Search />
        </IconButton>

    </Paper>
  );
};

export default SearchBar;
