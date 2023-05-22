import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ChooseLevel from "../ChooseLevel";
import ChoosePlayer from "../ChoosePlayer";
import ChooseBidak from "../ChooseBidak";
import PlayBoardEasy from "../PlayBoardEasy";
import PlayBoardMedium from "../PlayBoardMedium";
import PlayBoardHard from "../PlayBoardHard";
import Playingpages from "./Playingpages";

const MainUser = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playing" element={<Playingpages />} />
          <Route path="/contoh" element={<PlayBoardMedium />} />
        </Routes>
      </div>
    </>
  );
};

export default MainUser;
