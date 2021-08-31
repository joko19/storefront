import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Template Runshop</title>
        <meta name="description" content="Template for Storefront and Private Order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className=" mt-24 text-3xl font-extrabold">
          Template Runshop
        </h1>
        <div className="mt-8 flex  lg:flex-shrink-0  justify-center ">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/storefront"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Store Front
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/private-order"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Private Order
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
