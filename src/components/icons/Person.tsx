import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';


export const Person: React.FC<IconProps> = (props) => {
	return (
		<Icon viewBox='0 0 44 44' {...props}>
			<g id='Icon4' transform='translate(-282 -340)'>
				<rect
					id='Background'
					width='44'
					height='44'
					rx='10'
					transform='translate(282 340)'
					fill='currentColor'
				/>
				<path
					id='user'
					d='M13.86,0a13.86,13.86,0,1,0,13.86,13.86A13.86,13.86,0,0,0,13.86,0Zm0,4.144A4.584,4.584,0,1,1,9.276,8.73,4.585,4.585,0,0,1,13.86,4.145Zm0,19.951a10.172,10.172,0,0,1-6.624-2.443,1.954,1.954,0,0,1-.686-1.485,4.623,4.623,0,0,1,4.646-4.622h5.334a4.617,4.617,0,0,1,4.639,4.622,1.949,1.949,0,0,1-.685,1.484A10.168,10.168,0,0,1,13.857,24.1Z'
					transform='translate(289.863 348.146)'
					fill='#fff'
				/>
			</g>
		</Icon>
	);
};
