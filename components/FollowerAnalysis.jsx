"use client";

import React, { useState } from "react";
import JSZip from "jszip";

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
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="file"
        accept=".zip"
        onChange={handleFileUpload}
        className="mb-4 p-2 border border-gray-300"
      />

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col items-center justify-center text-black">
        <div className="p-4">
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
            <h3 className="text-lg font-semibold">
              Followers ({followers.length})
            </h3>
            {/* <ul className="list-disc pl-4">
              {followers.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold">
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
