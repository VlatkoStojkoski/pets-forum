import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';


export const Rocket: React.FC<IconProps> = (props) => {
	return (
		<Icon viewBox='0 0 45 45' {...props}>
			<defs>
				<linearGradient
					id='rocket__linear-gradient'
					x1='0.5'
					y1='1'
					x2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#addcff' />
					<stop offset='0.503' stopColor='#eaf6ff' />
					<stop offset='1' stopColor='#eaf6ff' />
				</linearGradient>
				<linearGradient
					id='rocket__linear-gradient-2'
					x1='0.5'
					y1='1'
					x2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#00c0ff' />
					<stop offset='1' stopColor='#00c0ff' />
				</linearGradient>
			</defs>
			<g id='Icon3' transform='translate(-202 -340)'>
				<rect
					id='Background'
					width='45'
					height='45'
					rx='10'
					transform='translate(202 340)'
					fill='currentColor'
				/>
				<g id='rocket'>
					<g id='question' transform='translate(215.058 349.042)'>
						<g id='Group_40' data-name='Group 40' transform='translate(0 0)'>
							<g id='Group_39' data-name='Group 39' transform='translate(0)'>
								<path
									id='Path_90'
									data-name='Path 90'
									d='M67.921,19.328h6.152V8.562H67.921ZM75.534,5.486A20.141,20.141,0,0,0,71.52.2a.8.8,0,0,0-1.046,0,20.144,20.144,0,0,0-4.014,5.29l4.575,1.538ZM65.06,17.021h-.215A3.849,3.849,0,0,0,61,20.866V25.48a.769.769,0,1,0,1.538,0,2.31,2.31,0,0,1,2.307-2.307h1.03L67.091,22.1,65.82,17.671A.769.769,0,0,0,65.06,17.021Zm9.013,4.614H67.921a.769.769,0,0,0-.769.769V25.48a.769.769,0,0,0,.769.769h6.152a.769.769,0,0,0,.769-.769V22.4A.769.769,0,0,0,74.073,21.635Zm3.076-4.614h-.215a.769.769,0,0,0-.76.65L74.9,22.1l1.215,1.072h1.03a2.31,2.31,0,0,1,2.307,2.307.769.769,0,1,0,1.538,0V20.866A3.849,3.849,0,0,0,77.149,17.021Z'
									transform='translate(-61 0)'
									fill='url(#rocket__linear-gradient)'
								/>
							</g>
						</g>
						<g
							id='Group_42'
							data-name='Group 42'
							transform='translate(3.069 5.486)'
						>
							<g id='Group_41' data-name='Group 41'>
								<path
									id='Path_91'
									data-name='Path 91'
									d='M132.331,107h-9.074a19.58,19.58,0,0,0-2.153,12.427,20.567,20.567,0,0,0,1.569,5.26h10.243a20.568,20.568,0,0,0,1.569-5.26A19.58,19.58,0,0,0,132.331,107Zm-4.537,13.073a.769.769,0,1,1,.769-.769A.762.762,0,0,1,127.794,120.073Zm1.154-4.922a.776.776,0,0,0-.385.661v.415a.769.769,0,0,1-1.538,0v-.415a2.338,2.338,0,0,1,1.154-2,.776.776,0,0,0,.385-.661.769.769,0,0,0-1.538,0,.769.769,0,1,1-1.538,0,2.307,2.307,0,0,1,4.614,0A2.338,2.338,0,0,1,128.947,115.152Z'
									transform='translate(-120.866 -107)'
									fill='url(#rocket__linear-gradient-2)'
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</Icon>
	);
};
