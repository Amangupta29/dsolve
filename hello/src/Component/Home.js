/** @format */

import React from 'react';
import Logo from '/Dsolve assignment/hello/src/images/Logo.png';
import Minilogo from '/Dsolve assignment/hello/src/images/Minilogo.png';
import Dia from '/Dsolve assignment/hello/src/images/Dia.png';
import './Home.css';
const Home = () => {
	return (
		<div className='center'>
			<div className='home'>
				<div className='logo1'>
					<img style={{width:'220px'}}
						src={Logo}
						alt='logo'
					/>

					<div className='minilogo'>
						<img
							src={Minilogo}
							alt='minilogo'
						/>
					</div>
				</div>
				<div className='img'>
					<img
						src={Dia}
						alt='Dia'
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
