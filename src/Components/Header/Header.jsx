import React from 'react';
import './header.scss';
import {TextField, createMuiTheme, ThemeProvider, MenuItem} from "@material-ui/core";
import categories from '../../data/Category';

const Header = ({setCategory, category, word, setWord,lightMode}) => {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : '#fff'
            },
            type: lightMode ? "light" : "dark",
        }
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className="header">
           <span className="title">{word ? word : "Find Word"}</span>
           <div className="inputs">
               <ThemeProvider theme={darkTheme}>
                   <TextField className="search" label="Search for a word"
                   value={word}
                   onChange={(e) => setWord(e.target.value)}
                   />

                   <TextField 
                   className="select"
                   select
                   label="Language"
                   value={category}
                   onChange={(e) => handleChange(e.target.value)}
                   helperText="Please Select your language">
                       
                    {categories.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))};
                       
                   </TextField>
               </ThemeProvider>
                        
           </div>
           
        </div>
    )
}

export default Header;
