import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "../Components/Card";
import { NextPage } from "next";


const FindBuilds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Find Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center text-white text-black dark:text-white gap-4">
        <h1>Select the order</h1>

        <ul className="grid grid-cols-3 gap-4">
          <li>
            <Card imageSrc={"./fraunhofer.jpg"}></Card>
          </li>
          <li>
            <Card imageSrc={"./fraunhofer.jpg"}></Card>
          </li>
          <li>
            <Card imageSrc={"./fraunhofer.jpg"}></Card>
          </li>
        </ul>

        <Link href="/Submit">Submit Build</Link>
        <Link href="/builds">View Builds</Link>
        <Link href="/builds">View Builds</Link>

      </main>
    </>
  )
}

export default FindBuilds;