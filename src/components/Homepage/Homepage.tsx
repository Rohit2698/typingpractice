import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AutoComplete from '../autocomplete/AutoComplete';


const Homepage = () => {
    const history = useHistory();
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <AutoComplete />
            <Button onClick={() => history.push("/typingtest")}>Move to typing master</Button>
        </div>
    )
}

export default Homepage;
