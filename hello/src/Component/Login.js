/** @format */

import React,{useState} from 'react';
import Logo from '/Dsolve assignment/hello/src/images/Logo.png';
import Minilogo from '/Dsolve assignment/hello/src/images/Minilogo.png';
function Login() {
	

	const [num, setNum] = useState('')

	return (
		<>
			<div className='center'>
				<div className='header'>
					<div className='flex'>
						<div className='logo'>
							<img
								src={Logo}
								alt='logo'
							/>
						</div>
						<div>
							<img
								src={Minilogo}
								alt='minilogo'
							/>
							<span className='head'>
								<h3 className='arrow'>
									{' '}
									<a
										className='arrow2'
										href=''>
										&#x2190;{' '}
									</a>
									LOGIN
								</h3>
							</span>

							<h6 className='l2'>Enter Your Phone Number to Proceed</h6>

							<input
								className='field'
								type='text'
								placeholder='Phone Number'
								name='PhoneNumber'
								onChange={(e) => {
									setNum(e.target.value);
								}}
							/>

							<button className='btn'>Continue</button>
							<footer className='footer'>
								By clicking, I accept the{' '}
								<span>
									<a
										href=''
										className='footer2'>
										{' '}
										Terms & Conditions & Privacy Policy
									</a>
								</span>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</>
	);
	}


export default Login;
