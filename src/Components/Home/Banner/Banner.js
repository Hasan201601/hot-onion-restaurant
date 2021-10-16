import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import banner from '../../../Images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, minHeight: '400px', backgroundPosition: 'center', objectFit: 'cover', backgroundSize: 'cover' }} className="d-flex justify-content-center align-items-center">
            <div>
                <h1>Best Food Waiting For Your Belly</h1>
                <div className="w-75 m-auto">
                    <InputGroup className="mb-3 rounded-pill">
                        <FormControl
                            placeholder="Search for your favourite food"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className="search-input rounded-pill"
                        />
                        <Button style={{ marginLeft: '-13%', zIndex: '100' }} variant="danger" id="button-addon2" className="rounded-pill">
                            Search

                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div >
    );
};

export default Banner;