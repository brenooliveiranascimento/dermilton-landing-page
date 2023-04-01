import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Content {...heroThree} />
			<Content {...heroTwo} />
			<Features />
			<Content {...heroOne} />
			<Carousel />
		</>
	);
};

export default Home;
