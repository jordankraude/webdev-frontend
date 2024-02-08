import Head from 'next/head';

export default function FAQ() {
  return (
    <main className='h-screen'>
      <Head>
        <script async src="https://cse.google.com/cse.js?cx=a26b74444bd3a40d0"></script>
      </Head>
      <h1>FAQ</h1>
      <div className="gcse-search"></div>
    </main>
  );
}