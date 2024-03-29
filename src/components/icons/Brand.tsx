import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';


export const Brand: React.FC<IconProps> = (props) => {
	return (
		<Icon viewBox='0 0 512 512' {...props}>
			<defs>
				<linearGradient
					id='linear-gradient'
					x1='0.5'
					x2='0.5'
					y2='1'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#965a50' />
					<stop offset='1' stopColor='#4b2d28' />
				</linearGradient>
				<clipPath id='clipPath'>
					<path
						id='paw'
						d='M-30.677,186.649c-7.65-6.374-11.529-16.039-11.529-28.728,0-26.121,11.625-55.752,31.1-79.264C10.556,52.5,37.94,38.093,66,38.093S121.446,52.5,143.111,78.657c19.473,23.512,31.1,53.143,31.1,79.264,0,12.509-3.9,22.1-11.6,28.5-16.189,13.461-44.216,8.259-68.943,3.668-10.58-1.965-20.576-3.82-27.665-3.82-8.213,0-18.869,1.955-30.151,4.024-12.911,2.369-26.051,4.779-37.886,4.779C-13.157,195.069-23.125,192.941-30.677,186.649ZM176.058,89.492c-9.241-3.471-16.091-11.37-19.286-22.24-2.892-9.834-2.425-21.14,1.311-31.837,4.572-13.09,13.365-23.484,24.122-28.517a30.3,30.3,0,0,1,23.637-1.334c9.24,3.47,16.09,11.369,19.285,22.239,2.892,9.834,2.425,21.141-1.31,31.837h0c-4.573,13.089-13.365,23.483-24.123,28.517a32.2,32.2,0,0,1-13.636,3.132A28.38,28.38,0,0,1,176.058,89.492ZM-67.691,88.157C-78.448,83.123-87.24,72.729-91.813,59.639h0c-3.736-10.7-4.2-22-1.311-31.837,3.2-10.869,10.045-18.768,19.286-22.239A30.315,30.315,0,0,1-50.2,6.9c10.757,5.034,19.549,15.428,24.122,28.517,3.736,10.7,4.2,22,1.312,31.837-3.2,10.87-10.044,18.769-19.287,22.24a28.376,28.376,0,0,1-10,1.8A32.187,32.187,0,0,1-67.691,88.157ZM83.042,16.019C75.76,5.283,71.75-8.816,71.75-23.681s4.011-28.964,11.292-39.7c7.927-11.686,19.277-18.389,31.142-18.389s23.215,6.7,31.142,18.389c7.282,10.735,11.291,24.836,11.291,39.7s-4.01,28.964-11.291,39.7c-7.927,11.687-19.277,18.389-31.142,18.389S90.969,27.706,83.042,16.019Zm-96.365,0C-20.6,5.282-24.614-8.816-24.614-23.682s4.01-28.964,11.291-39.7C-5.4-75.067,5.954-81.77,17.819-81.77s23.215,6.7,31.142,18.389c7.282,10.736,11.291,24.836,11.292,39.7s-4.01,28.964-11.292,39.7c-7.926,11.687-19.276,18.39-31.142,18.39S-5.4,27.706-13.323,16.018Z'
						transform='translate(189.998 199.446)'
					/>
				</clipPath>
				<linearGradient
					id='linear-gradient-2'
					x1='0.5'
					x2='0.5'
					y2='1'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#d4bc95' />
					<stop offset='1' stopColor='#f5dcb4' />
				</linearGradient>
			</defs>
			<circle
				id='container'
				cx='256'
				cy='256'
				r='256'
				fill='url(#linear-gradient)'
			/>
			<g id='colored_paw' data-name='colored paw' clipPath='url(#clipPath)'>
				<rect
					id='background'
					width='322'
					height='277'
					transform='translate(95 118)'
					fill='url(#linear-gradient-2)'
				/>
			</g>
		</Icon>
	);
};
