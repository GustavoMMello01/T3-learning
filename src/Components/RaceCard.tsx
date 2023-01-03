import React from "react";
import Link from "next/link";

export const RaceCard = ({ raceImageSrc, raceName, href, isOpponent = false } : { raceImageSrc: string, raceName: string, href: string, isOpponent?: boolean}) => {

  const buttonStyle = isOpponent ? `hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800` : `hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;

  return(
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={raceImageSrc} alt="" />
        </a>
        <main className="flex flex-col items-center justify-center gap-8 mt-2 mb-2">
          <a href="#">
            {raceName}
          </a>
          <Link href={href}
             className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none` + buttonStyle}
          >
            Read more
          </Link>
        </main>
      </div>
  )
}