import React, { useState, useCallback, useEffect } from 'react'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { debounce } from "lodash";
import { getSearchResult } from './api';
import { transformSearchResult } from './util';

export interface IWikiSearchText {
    name: string;
    pageId: string;
}

const AutoComplete = () => {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<IWikiSearchText[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setWikiText] = useState("");

    useEffect(() => {
        if (searchText === "") {
            return;
        }
        setLoading(true);
        getSearchResult(searchText)
            .then((res) => {
                setOptions(transformSearchResult(res));
                setLoading(false);
            });

    }, [searchText]);

    const setSearchText = useCallback(
        debounce((text) => setWikiText(text), 500),
        []
    );

    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: "50%" }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Asynchronous"
                    variant="outlined"
                    onChange={(event) => setSearchText(event.target.value)}
                    InputProps={{
                        ...params.InputProps,

                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

export default AutoComplete;
