"use client";
import React, { useState, useEffect } from "react";
import MintTokenModal from "./components/Mint-token";
import TransferTokenModal from "./components/Transfer-token";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getWalletList = async() => {
    try{
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
          {
            method: "POST",
            headers: {
              client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
              client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
              "content-type": "application/json",
            }
          }
        );
        return response
    } catch (error) {
        console.log(error);
    }
}

const handleSubmit = async({data}) => {
    try {
        const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
            method: "POST",
            headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }
        );

        if (!response.ok) {
        throw new Error("Failed to create user");
        }

        const result = await response.json();
        //   console.log("User created:", result);
        const walletAddress = result.result.wallet.wallet_address;
        //   console.log("Wallet address:", walletAddress);
        // Store the wallet address in sessionStorage
        sessionStorage.setItem("walletAddress", walletAddress);

        if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
        }

        toast.success(
        `🦄 User created successfully!
        Wallet address: ${walletAddress}`,
        {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
        );
        closeModal();

    } catch (error) {
        console.log("test");
        console.error("Error creating user:", error);
        toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        // Don't send the request if there's an error
        return;
    }
};
