import type {NextPage} from 'next';
import Head from 'next/head';

import {Header,Main} from "../components";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>trycode</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h-screen w-full">
                <Header/>
                <Main/>
            </main>
        </>
    )
}

export default Home;
