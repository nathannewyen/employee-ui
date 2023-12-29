import React from 'react';
import Button from '@mui/material/Button';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="home-page">
            <h1>JPMorgan Chase</h1>
            <h3>
                Welcome, user...
            </h3>
            <div>
                <div>Employee Dashboard</div>
                <Button variant="contained">Browse</Button>
            </div>
        </div>
    )
}

export default Home;