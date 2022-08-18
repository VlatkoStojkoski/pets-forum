import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

export const Poison: React.FC<IconProps> = (props) => {
	return (
		<Icon viewBox='0 0 44 44' {...props}>
			<defs>
				<linearGradient
					id='poison__a'
					x1='-0.008'
					y1='0.5'
					x2='0.952'
					y2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#f8f6f7' />
					<stop offset='0.179' stopColor='#f8f6f7' />
					<stop offset='1' stopColor='#e7e6f5' />
				</linearGradient>
				<linearGradient
					id='poison__b'
					x1='-0.127'
					y1='0.5'
					x2='1.185'
					y2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#bbec6c' />
					<stop offset='0.586' stopColor='#78a91f' />
					<stop offset='1' stopColor='#02905d' />
				</linearGradient>
				<linearGradient
					id='poison__c'
					x1='-3.435'
					y1='0.5'
					x2='3.119'
					y2='0.5'
					xlinkHref='#poison__b'
				/>
				<linearGradient
					id='poison__d'
					x1='-3.473'
					y1='0.5'
					x2='5.63'
					y2='0.5'
					xlinkHref='#poison__b'
				/>
				<linearGradient
					id='poison__e'
					x1='-0.008'
					y1='0.5'
					x2='0.952'
					y2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#f8f6f7' />
					<stop offset='1' stopColor='#d1ceeb' />
				</linearGradient>
				<linearGradient
					id='poison__f'
					x1='-0.047'
					y1='0.5'
					x2='1.46'
					y2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#feb237' />
					<stop offset='1' stopColor='#fd6930' />
				</linearGradient>
				<linearGradient
					id='poison__g'
					x1='-0.016'
					x2='1.048'
					xlinkHref='#poison__a'
				/>
				<linearGradient
					id='poison__h'
					x1='-2.294'
					x2='1.822'
					xlinkHref='#poison__e'
				/>
				<linearGradient
					id='poison__i'
					x1='0.033'
					y1='0.5'
					x2='1.123'
					y2='0.5'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#fff9df' />
					<stop offset='0.593' stopColor='#ffe177' />
					<stop offset='1' stopColor='#feb237' />
				</linearGradient>
				<linearGradient
					id='poison__j'
					x1='-1.556'
					y1='0.5'
					x2='0.949'
					y2='0.5'
					xlinkHref='#poison__i'
				/>
			</defs>
			<g transform='translate(-0.035 -0.035)'>
				<rect
					width='44'
					height='44'
					rx='10'
					transform='translate(0.035 0.035)'
					fill='currentColor'
				/>
				<g transform='translate(9.027 5.966)'>
					<path
						d='M70.447,94.75V92H57.88v2.75a5.26,5.26,0,0,1-1.887,4.036l-2.454,2.051a6.044,6.044,0,0,0-1.887,6.459l2.941,9.308a2.372,2.372,0,0,0,2.262,1.657H71.472a2.372,2.372,0,0,0,2.262-1.657l2.941-9.308a6.044,6.044,0,0,0-1.887-6.459l-2.454-2.051A5.26,5.26,0,0,1,70.447,94.75Z'
						transform='translate(-51.371 -86.22)'
						fill='url(#poison__a)'
					/>
					<g transform='translate(2.666 10.775)'>
						<path
							d='M113.986,243.826a2.023,2.023,0,0,0-3.407-1.2,5.288,5.288,0,0,1-6.487.69l-4.468-2.788a3.42,3.42,0,0,0-4.157.376,5.282,5.282,0,0,0-1.4,5.475l2.43,7.7a1.884,1.884,0,0,0,1.774,1.348h11.342a1.884,1.884,0,0,0,1.774-1.348l2.43-7.7A5.429,5.429,0,0,0,113.986,243.826Z'
							transform='translate(-93.811 -235.693)'
							fill='url(#poison__b)'
						/>
						<circle
							cx='2.026'
							cy='2.026'
							r='2.026'
							transform='translate(11.354 3.219)'
							fill='url(#poison__c)'
						/>
						<ellipse
							cx='1.459'
							cy='1.459'
							rx='1.459'
							ry='1.459'
							transform='translate(7.569)'
							fill='url(#poison__d)'
						/>
					</g>
					<path
						d='M173.756,107.3l-2.941,9.307a2.373,2.373,0,0,1-2.262,1.657h-2.514A2.373,2.373,0,0,0,168.3,116.6l2.941-9.307a6.043,6.043,0,0,0-1.887-6.459L166.9,98.786a5.262,5.262,0,0,1-1.272-1.569,4.428,4.428,0,0,0-3.91-2.353H154.96c0-.038,0-.076,0-.114V92h12.567v2.75c0,.038,0,.077,0,.114a5.26,5.26,0,0,0,1.885,3.922l2.454,2.051A6.043,6.043,0,0,1,173.756,107.3Z'
						transform='translate(-148.452 -86.22)'
						fill='url(#poison__e)'
					/>
					<path
						d='M168.967,4.99H158.3l-.727-2.68A1.831,1.831,0,0,1,159.341,0h8.586a1.831,1.831,0,0,1,1.767,2.31Z'
						transform='translate(-150.841)'
						fill='url(#poison__f)'
					/>
					<g transform='translate(4.638 3.536)'>
						<path
							d='M139.739,56.288H126.966a1.768,1.768,0,0,0,0,3.536h12.773a1.768,1.768,0,0,0,0-3.536Z'
							transform='translate(-125.198 -56.288)'
							fill='url(#poison__g)'
						/>
						<path
							d='M319.152,56.288h-2.514a1.768,1.768,0,0,1,0,3.536h2.514a1.768,1.768,0,0,0,0-3.536Z'
							transform='translate(-304.611 -56.288)'
							fill='url(#poison__h)'
						/>
					</g>
					<path
						d='M197.735,317.741a.459.459,0,0,1-.1-.587,4.083,4.083,0,1,0-7.072.006.456.456,0,0,1-.108.582,1.008,1.008,0,0,0-.441.76c0,.512.557.97,1.435,1.278v.527a.628.628,0,0,0,.628.628h.582a.628.628,0,0,1,1.256,0h.582a.628.628,0,0,1,1.256,0h.582a.628.628,0,0,0,.628-.628V319.7c.751-.3,1.216-.728,1.216-1.2A1.008,1.008,0,0,0,197.735,317.741Zm-5.942-1.421a1.26,1.26,0,1,1,1.851-.5A1.365,1.365,0,0,1,191.794,316.32Zm3.138,1.627a.339.339,0,0,1-.153.3,1.432,1.432,0,0,1-1.371,0,.339.339,0,0,1-.153-.3,1.943,1.943,0,0,1,.548-1.4h0a.422.422,0,0,1,.58,0h0a1.943,1.943,0,0,1,.549,1.4h0Zm1.46-1.627a1.26,1.26,0,1,1,.788-1.748A1.365,1.365,0,0,1,196.392,316.32Z'
						transform='translate(-181.3 -291.491)'
						fill='url(#poison__i)'
					/>
					<path
						d='M246.946,317.741a.452.452,0,0,1-.11-.579,4.083,4.083,0,0,0-4.316-6.055,4.073,4.073,0,0,1,3.132,2.859,1.152,1.152,0,0,1,.74.605,1.358,1.358,0,0,1-.752,1.73,4.06,4.06,0,0,1-.37.852.469.469,0,0,0,.116.6,1,1,0,0,1,.43.751c0,.39-.323.749-.865,1.034a.665.665,0,0,0-.351.59v.181a.625.625,0,0,1-.133.386.626.626,0,0,0,.495.242h.582a.628.628,0,0,0,.628-.628V319.7c.751-.3,1.216-.728,1.216-1.2A1.008,1.008,0,0,0,246.946,317.741Z'
						transform='translate(-230.511 -291.491)'
						fill='url(#poison__j)'
					/>
				</g>
			</g>
		</Icon>
	);
};
