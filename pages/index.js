import React from 'react';
import Head from 'next/head';

import { App } from '../src/components/App';

export default function Index() {
	return <>
		<Head>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			<title>React movie app</title>
			<style jsx="true" global="true">{`
				body {
				  margin: 0;
				  background-color: #232323;
				}

				body * {
				  box-sizing: border-box;
				}

				p {
				  padding: 0;
				  margin: 0;
				}

				#app {
				  display: flex;
				  flex-direction: column;
				  min-height: 100vh;
				}
			`}</style>
		</Head>

	 	<div id="app">
	 		<App></App>
	 	</div>
 	</>
}