import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};


const YoutubeVideo = ({ videoId }) => {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-md">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube video"
      ></iframe>
    </div>
  );
};


const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div id="Others">
      <div class="flex flex-col md:flex-row items- w-full px-5 py-10 md:px-10 md:py-10 2xl:px-20 gradient-bg-transactions">
    <div class="md:w-1/2 md:mr-8">
        <YoutubeVideo videoId={'A7sbpFvkEe0'} />
    </div>
    <div class="md:w-1/2 text-left text-white m-4">
        <h4 class="text-lg font-bold">How To Setup MetaMask Wallet Desktop Version | A Beginner’s Guide</h4>
        <p class="mt-2">Dalam video ini, kami akan memandu Anda melalui proses langkah demi langkah untuk mengatur Dompet MetaMask versi desktop. MetaMask adalah dompet kripto yang populer dan aman, dan panduan ini akan membantu Anda memahami cara menggunakannya dengan mudah. Apakah Anda baru mengenal dunia kripto atau ingin mengetahui lebih lanjut tentang penggunaan MetaMask, video ini cocok untuk Anda. Jangan lewatkan!</p>
    </div>
</div>
    </div>
  );
};

export default Transactions;
