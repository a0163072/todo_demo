import React from 'react';
import ReactDOM from 'react-dom';
import { Button ,Card} from '@material-ui/core';

function Home() {
    return (
        <div className="container">
            <Card>
                <Button color="primary" bariant="contained" href={'/example'}>Exampleに遷移</Button>    
            </Card>
        </div>
    );
};

export default Home;

