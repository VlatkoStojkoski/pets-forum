import { Button } from '@chakra-ui/react';
import { getCsrfToken, getProviders, getSession, useSession } from 'next-auth/react';
import React from 'react';

import type { ProtectedNextPage } from './_app';

const Profile: ProtectedNextPage = () => {
	const { data: session } = useSession();
	const [data, setData] = React.useState<any>({});

	return <>
		{
			session?.user ?
				<pre>{JSON.stringify(session?.user, null, 2)}</pre> :
				<p>Loading...</p>
		}
		<Button onClick={async () => {
			setData({
				providers: await getProviders(),
				csrfToken: await getCsrfToken(),
				session: await getSession(),
			});
		}}>Get data</Button>
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</>;
};

Profile.auth = true;

export default Profile;
