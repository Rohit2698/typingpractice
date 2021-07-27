import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const Homepage = () => {
    const history = useHistory();
    return (
        <div>
            <Button onClick={() => history.push("/typingtest")}>Move to typing master</Button>
        </div>
    )
}

export default Homepage;
