import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: false,
	breakpoints: {
		xs: '25em',
		sm: '30em',
		md: '48em',
		lg: '62em',
		xl: '80em',
		'2xl': '96em',
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
	colors: {
		bg: '#fff6ee',
		bgRGB: '255, 246, 238',
		accent: {
			30: '#ebedff',
			40: '#d6dbff',
			50: '#c2c9ff',
			100: '#adb6ff',
			200: '#99a3ff',
			300: '#8591ff',
			400: '#707eff',
			500: '#5465ff',
			600: '#475aff',
			700: '#3347ff',
			800: '#1f35ff',
			900: '#0a23ff',
		},
		brand: {
			100: '#fff6ee',
			150: '#ffead5',
			200: '#ffe0c2',
			300: '#ffd6ad',
			400: '#ffcc99',
			500: '#ffc285',
			600: '#ffb870',
			700: '#ffad5c',
			800: '#ffa347',
			900: '#ff9933',
		},
		brand__brown: {
			30: '#dbc2bd',
			40: '#d4b6af',
			50: '#cda9a2',
			100: '#bf9188',
			200: '#b8847a',
			300: '#b0776d',
			400: '#a96b60',
			500: '#9f6156',
			600: '#92594f',
			700: '#855147',
			800: '#774940',
			900: '#6a4139',
		},
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: 'bold',
			},
			sizes: {
				xl: {
					h: '56px',
					fontSize: 'lg',
					px: '28px',
				},
			},
		},
	},
	shadows: {
		brown__xl:
			'0 20px 25px -5px rgba(106, 65, 57, 0.2), 0 10px 10px -5px rgba(106, 65, 57, 0.1)',
	},
});
