import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/SMP_Desktop_1x_2._CB669743293_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="01"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
            price={799}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
          />
          <Product
            id="02"
            title="The Boy, the Mole, the Fox and the Horse"
            price={699}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81PdkxXJObL.jpg"
          />
          <Product
            id="09"
            title="Forgiving What You Can't Forget"
            price={2099}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81BfEN90D2L.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="03"
            title="The Four Winds"
            price={419}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81AW1GNZlPL.jpg"
          />
          <Product
            id="04"
            title="The Midnight Library"
            price={799}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81J6APjwxlL.jpg"
          />
          <Product
            id="05"
            title="A Promised Land"
            price={1299}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91+NBrXG-PL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="06"
            title="Life After Death"
            price={1699}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61j2VPcGbKL.jpg"
          />
          <Product
            id="07"
            title="The Intelligent Investor: The Definitive Book on Value Investing"
            price={489}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91+t0Di07FL.jpg"
          />
          <Product
            id="08"
            title="Beyond Order: 12 More Rules for Life"
            price={619}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71mUs3rW9TL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
