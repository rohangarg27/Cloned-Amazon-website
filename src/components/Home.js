import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Arundhati/J24_PC_Teaser_Header_Unrec_Prime_R1.jpg" className="home-image" />

                <div className="home-row">
                    <Product 
                        id = {122322}
                        title="OnePlus Pad Go 28.85cm (11.35 inch) 2.4K 7:5 Ratio ReadFit Eye Care LCD Display, Dolby Atmos Quad Speakers,Wi-Fi Only, 8GB RAM 128 GB ROM Expandable Up-to 1TB, Twin Mint Colour" 
                        price = {19999}
                        image="https://m.media-amazon.com/images/I/51oj5gE7P+L._SX679_.jpg"
                        rating={4}

                    />
                    <Product 
                        id = {122323}

                        title="ASUS [Smartchoice] ROG Strix G16, 16'40.64cm FHD+ 165Hz, 13th Gen Intel Core i7-13650HX, Gaming Laptop(16GB DDR5/1TB SSD/NVIDIA GeForce RTX 4060 /Win 11/MSO 21/Eclipse Gray/2.50 Kg), G614JV-N3474WS" 
                        price = {139990}
                        image="https://m.media-amazon.com/images/I/71WChkpECLL._SX679_.jpg"
                        rating={4}
                       

                    />
                </div>

                <div className="home-row">
                <Product 
                        id = {122325}
                        title="Apple iPhone 16 Plus (256 GB) - Black(Coming Soon)" 
                        price = {99900}
                        image="https://m.media-amazon.com/images/I/61EscGf8mYL._SX679_.jpg"
                        rating={4}
                        
                        
                />
                <Product 
                        id = {122326}
                        title="Apple iPad Pro 11″ (4th Generation): with M2 chip, Liquid Retina Display, 1TB, Wi-Fi 6E + 5G Cellular, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Silver" 
                        price = {164900}
                        image="https://m.media-amazon.com/images/I/81S05k6p0xL._SX679_.jpg"
                        rating={5}

                    />
                <Product 
                        id = {122321}
                        title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)" 
                        price = {57990}
                        image="https://m.media-amazon.com/images/I/81MRU+3RJLL._SX522_.jpg"
                        rating={3}
                        

                    />
                </div>

                <div className="home-row">
                    <Product 
                        id = {122327}
                        title="LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCU, Scarlet Charm, Base stand with drawer)" 
                        price = {17690}
                        image="https://m.media-amazon.com/images/I/71FZCdi1GeL._SX679_.jpg"
                        rating={5}


                    />
                </div>
            </div>
        </div>
    )
}

export default Home;


