// src/pages/_app.tsx
import type { NextPage } from 'next';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { withTRPC } from '@trpc/next';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import type { AppType, NextComponentType } from 'next/dist/shared/lib/utils';
import React from 'react';
import superjson from 'superjson';

import NavigationBar from '../components/NavigationBar';
import type { AppRouter } from '../server/router';
import theme from '../styles/theme';

const MyApp: AppType = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	const FullComponent = () =>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Box bg='bg' minH='100vh' minW='100%'>
				<NavigationBar />
				<Box py='5'>
					<Component {...pageProps} />
				</Box>
			</Box>
		</ChakraProvider>;

	return (
		<SessionProvider session={session}>
			{(Component as NextComponentType & { auth: boolean }).auth ? (
				<Auth>
					<FullComponent />
				</Auth>
			) : (
				<FullComponent />
			)}
		</SessionProvider>
	);
};

const Auth: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const { data: session, status } = useSession();
	const isUser = !!session?.user;
	React.useEffect(() => {
		if (status === 'loading') return;
		if (!isUser) signIn();
	}, [isUser, status]);

	if (isUser) {
		return children;
	}

	// Session is being fetched, or no user.
	// If no user, useEffect() will redirect.
	return <></>;
};

export type ProtectedNextPage = NextPage & { auth: true };

const getBaseUrl = () => {
	if (typeof window !== undefined) return ''; // browser should use relative url
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
	config() {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = `${getBaseUrl()}/api/trpc`;

		return {
			url,
			transformer: superjson,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		};
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: false,
})(MyApp);
