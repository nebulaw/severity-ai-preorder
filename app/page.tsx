"use client";

import { useState } from "react";
//import { GraphQLClient, gql, request } from "graphql-request";
// import { z } from "zod";

// const countQuery = gql`
//   query getPreorderCount {
//     getPreorderCount
//   }
// `;
//
// const preorderMutation = gql`
//   mutation addPreorder($email: String!) {
//     addPreorder(email: $email) {
//       id
//     }
//   }
// `;
//
// interface QueryData {
//   getPreorderCount: number;
// }
//
// const formValuesSchema = z.object({
//   email: z.string().email(),
// })


export default function Home() {
  const [preorderCount, setPreorderCount] = useState<number>(203);
  const [sent, setSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    if (sent) {
      setMessage("თქვენი ელ. ფოსტა უკვე დარეგისტრირებულია!");
    } else {
      setMessage("თქვენ წარმატებით დარეგისტრირდით!");
      setSent(true);
      setPreorderCount(preorderCount + 1);
    }
  }

  // async function addPreorder(formData: FormData) {
  //   const formValues = {} as Record<string, string | object>;
  //   for (const [key, value] of [...formData.entries()]) {
  //     if (key.includes("ACTION_ID")) continue;
  //     formValues[key] = value.valueOf();
  //   }
  //
  //   const parsed = await formValuesSchema.parseAsync(formValues);
  //
  //   const graphQLClient = new GraphQLClient(`https://severity-ai-xi.vercel.app/api/graphql`);
  //   await graphQLClient.request(preorderMutation, parsed);
  // }
  //
  // async function getPreorderCount() {
  //   const data = await request<QueryData>(`https://severity-ai-xi.vercel.app/api/graphql`, countQuery);
  //   return data.getPreorderCount;
  // }
  //
  // getPreorderCount().then((count) => preorderCount !== count && setPreorderCount(count));

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8 pb-20 gap-4 sm:gap-16 text-white bg-[url(/bg-pattern.png)] bg-cover bg-no-repeat bg-center">


      <nav className="flex flex-col-reverse sm:flex-row items-center justify-center w-full p-4 sm:p-6 rounded-xl z-40">
        <a className="text-gray-300 w-full text-center sm:w-1/3 hover:text-white transition-colors hover:cursor-pointer text-base sm:text-lg sm:flex justify-start" href="mailto:severityai@gmail.com">
          severityai@gmail.com
        </a>
        <div className="text-gray-100 w-full sm:w-1/3 flex justify-center font-bold text-2xl sm:text-3xl text-center">
          Severity AI
        </div>
       <div className="text-gray-100 w-full sm:w-1/3 font-bold text-xl sm:text-2xl text-center hidden sm:flex justify-end">
          <button className="text-white bg-white bg-opacity-10 hover:bg-opacity-20 font-medium border border-gray-500 py-2 px-4 rounded-lg transition-colors">
            დაიწყე
          </button>
        </div>
      </nav>

      <main className="flex flex-col gap-4 sm:gap-8 items-center justify-center h-full">
        <div className="font-bold text-gray-100 mb-4 sm:mb-10 border border-gray-500 py-2 px-4 rounded-xl bg-black bg-opacity-20 text-center">
          AI-Powered Application Security Tool
        </div>
        <div className="text-4xl sm:text-6xl font-bold text-gray-300 max-w-[800px] text-center px-4 sm:px-8 sm:leading-snug">
          დაიცავი შენი ბიზნესი კიბერ შეტევებისგან
        </div>
        <div className="font-extralight text-gray-400 max-w-[800px] text-center text-sm sm:text-base mb-8 sm:mb-16 px-4">
          ყველასათვის ხელმისაწვდომი, ხელოვნურ ინტელექტზე დაფუძნებული კოდის ანალიზის ხელსაწყო.
        </div>
        <div>
          <div className="text-gray-100 text-sm font-bold mb-4 sm:mb-6 text-center shadow drop-shadow-lg">
            <span className="">{preorderCount}</span> ადამიანი ელოდება ჩვენს პროდუქტს
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="შეიყვანე შენი მეილი..."
              className="input input-bordered w-full sm:w-auto rounded-lg p-2 bg-[#373737] border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4"
              required
            />
            <button onClick={handleSubmit} className="btn btn-block bg-[#f1f1f1] hover:bg-white text-black border-none rounded-lg py-2 px-4 transition-colors w-full sm:w-auto mt-2 sm:mt-0">
              გაგზავნა
            </button>
          </div>
          <div className="text-gray-100 text-sm font-bold mt-4 sm:mt-6 text-center">
            {message}
          </div>
        </div>
      </main>
    </div>
  );
}

