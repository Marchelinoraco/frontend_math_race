import React, { useState } from "react";

const SnakesAndLaddersGame = () => {
  const [tog, setTog] = useState(1);
  const [p1sum, setP1Sum] = useState(0);
  const [p2sum, setP2Sum] = useState(0);

  const play = (player, psum, correction, num) => {
    let sum;

    if (psum === "p1sum") {
      let newP1Sum = p1sum + num;

      if (newP1Sum > 100) {
        newP1Sum -= num;
      }

      if (newP1Sum === 1) {
        newP1Sum = 38;
      }
      if (p1sum == 4) {
        p1sum = 14;
      }
      if (p1sum == 8) {
        p1sum = 30;
      }
      if (p1sum == 21) {
        p1sum = 42;
      }
      if (p1sum == 28) {
        p1sum = 76;
      }
      if (p1sum == 32) {
        p1sum = 10;
      }
      if (p1sum == 36) {
        p1sum = 6;
      }
      if (p1sum == 48) {
        p1sum = 26;
      }
      if (p1sum == 50) {
        p1sum = 67;
      }
      if (p1sum == 62) {
        p1sum = 18;
      }
      if (p1sum == 71) {
        p1sum = 92;
      }
      if (p1sum == 80) {
        p1sum = 99;
      }
      if (p1sum == 88) {
        p1sum = 24;
      }
      if (p1sum == 95) {
        p1sum = 56;
      }
      if (p1sum == 97) {
        p1sum = 78;
      }
      // Menambahkan penanganan posisi ular dan tangga
      // ...

      sum = newP1Sum;
      setP1Sum(newP1Sum);
    }

    if (psum === "p2sum") {
      let newP2Sum = p2sum + num;

      if (newP2Sum > 100) {
        newP2Sum -= num;
      }

      if (newP2Sum === 1) {
        newP2Sum = 38;
      }
      if (p2sum == 4) {
        p2sum = 14;
      }
      if (p2sum == 8) {
        p2sum = 30;
      }
      if (p2sum == 21) {
        p2sum = 42;
      }
      if (p2sum == 28) {
        p2sum = 76;
      }
      if (p2sum == 32) {
        p2sum = 10;
      }
      if (p2sum == 36) {
        p2sum = 6;
      }
      if (p2sum == 48) {
        p2sum = 26;
      }
      if (p2sum == 50) {
        p2sum = 67;
      }
      if (p2sum == 62) {
        p2sum = 18;
      }
      if (p2sum == 71) {
        p2sum = 92;
      }
      if (p2sum == 80) {
        p2sum = 99;
      }
      if (p2sum == 88) {
        p2sum = 24;
      }
      if (p2sum == 95) {
        p2sum = 56;
      }
      if (p2sum == 97) {
        p2sum = 78;
      }
      // Menambahkan penanganan posisi ular dan tangga
      // ...

      sum = newP2Sum;
      setP2Sum(newP2Sum);
    }

    // Update posisi pemain pada papan permainan
    // ...
  };

  const handleDiceRoll = () => {
    const num = Math.floor(Math.random() * 6) + 1;

    if (tog % 2 !== 0) {
      // Giliran Pemain 1
      setTog((prevTog) => prevTog + 1);
      play("p1", "p1sum", 0, num);
    } else {
      // Giliran Pemain 2
      setTog((prevTog) => prevTog + 1);
      play("p2", "p2sum", 55, num);
    }
  };

  return (
    <div>
      <h1>Snakes and Ladders</h1>
      {/* Komponen papan permainan */}
      {/* ... */}
      <button onClick={handleDiceRoll}>Gulir Dadu</button>
      {/* Menampilkan nilai dadu */}
      {/* ... */}
    </div>
  );
};

export default SnakesAndLaddersGame;
