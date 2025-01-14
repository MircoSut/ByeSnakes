"use client";

import React, { useState } from "react";
import JSZip from "jszip";
import { AiOutlineUpload } from "react-icons/ai";

export default function FollowerAnalysis() {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [nonRicambiati, setNonRicambiati] = useState([]);
  const [error, setError] = useState(null);

  // Funzione per il caricamento del file ZIP e parsing dei dati
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const zip = new JSZip();
      const content = await zip.loadAsync(file);

      // Cerca e leggi i file followers_1.html e following.html
      const followersFile = content.file(
        "connections/followers_and_following/followers_1.html"
      );
      const followingFile = content.file(
        "connections/followers_and_following/following.html"
      );

      if (!followersFile || !followingFile) {
        setError(
          "I file followers_1.html e following.html non sono presenti nel file ZIP."
        );
        return;
      }

      // Leggi il contenuto dei file HTML
      const followersText = await followersFile.async("text");
      const followingText = await followingFile.async("text");

      // Estrai gli utenti da ciascun file
      const parsedFollowers = parseHTMLForUsers(followersText);
      const parsedFollowing = parseHTMLForUsers(followingText);

      // Aggiorna lo stato con i dati estratti
      setFollowers(parsedFollowers);
      setFollowing(parsedFollowing);

      // Trova gli utenti che segui ma che non ti seguono
      const notFollowedBack = parsedFollowing.filter(
        (user) => !parsedFollowers.includes(user)
      );
      setNonRicambiati(notFollowedBack);
      setError(null); // Rimuovi eventuali errori passati
    } catch (err) {
      console.error("Errore nel caricamento del file:", err);
      setError("Errore nel caricamento del file ZIP.");
    }
  };

  // Funzione per estrarre i nomi utenti dal file HTML
  const parseHTMLForUsers = (html) => {
    const users = [];
    const regex =
      /<a[^>]+href="https:\/\/www\.instagram\.com\/([^"]+)"[^>]*>([^<]+)<\/a>/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
      users.push(match[1]); // Inserisce il nome utente dalla URL
    }

    return users;
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-4  pt-4 pb-12 md:pb-20 dark:text-white">
      <div className="flex flex-col items-center rounded-2xl">
        {/* Custom Upload Button */}
        <label
          htmlFor="fileUpload"
          className="flex items-center justify-center w-60 h-14 px-6 py-3 text-xl font-semibold text-white bg-green-500 rounded-full shadow-md cursor-pointer hover:shadow-lg border-white hover:border-black border-2"
        >
          <AiOutlineUpload className="mr-2 text-3xl font-semibold text-black" />
          Upload ZIP File
        </label>

        <input
          id="fileUpload"
          type="file"
          accept=".zip"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Description Text */}
        <p className="mt-4 text-gray-900 dark:text-white text-center font-semibold text-lg max-w-sm text-balance">
          Choose a ZIP file with your followers and following data.
        </p>
        <p className="text-center max-w-sm text-balance">
          For Android hold the file and click select on the top right
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col items-center justify-center text-black">
        <div className="">
          <h3 className="text-2xl font-bold text-green-500">
            🐍Snakes🐍 ({nonRicambiati.length})
          </h3>
          <ul className="list-disc pl-8">
            {nonRicambiati.map((user, index) => (
              <li key={index}>🐍{user}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-between items-start pt-4">
          <div className="pr-2">
            <h3 className="text-lg font-semibold dark:text-white">
              Followers ({followers.length})
            </h3>
            {/* <ul className="list-disc pl-4">
              {followers.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              Following ({following.length})
            </h3>
            {/* <ul className="list-disc pl-4">
              {following.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
