import React from 'react'
import Logo from '/Dsolve assignment/hello/src/images/Logo.png';
import Minilogo from '/Dsolve assignment/hello/src/images/Minilogo.png';


function Verify({num}) {

    
  return (
    <div>
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
									<a className='arrow2' href=''>&#x2190; </a>Verify Details
								</h3>
							</span>

                          <h6 className='l2'>OTP sent to{num}</h6>


							<input
								className='field'
								type='text'
								placeholder='Enter OTP'
                              name='PhoneNumber'
                             
							/>

							<button className='btn'>Verify And Proceed </button>
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
    </div>
  )
}

export default Verify;
