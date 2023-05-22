// import React from "react";
// import { resolvePath } from "react-router-dom";

// const Table = () => {
//   let turn = 'red';
//   let stopEvent = false;
//   document.querySelector("#red").style.marginLeft = "0vmin";
//   document.querySelector("#red").style.marginTop = "0vmin";
//   document.querySelector("#blue").style.marginLeft = "0vmin";
//   document.querySelector("#blue").style.marginTop = "0vmin";
//   boxNumbers();

//   document.addEventListener("keydown", async (e) => {
//     if (e.keyCode == "83" && !stopEvent) {
//       stopEvent = true;
//       let diceNum = roll();
//       await new Promise((resolve) => setTimeout(resolve, 400));
//       await run(diceNum);
//       await new Promise((resolve) => setTimeout(resolve, 400));
//       changeTurn();
//       stopEvent = false;
//     }
//   });

//   function changeTurn(){
//     if(turn=='blue'){
//       document.querySelector(`#p_turn`).innerHTML =
//       "Red player's turn" = turn 'red';
//     }else if(turn=='red'){
//       document.querySelector(`#p_turn`).innerHTML =
//       "Blue player's turn" = turn 'blue';
//   }

//   function run(diceNum) {
//     return new Promise(async (resolve, reject) => {
//       for (i = 1; i <= diceNum; i++) {
//         let direction = getDirection();
//         move(direction);
//       }
//       resolve();
//     });
//   }

//   function move(direction) {
//     return new Promise(async (resolve, reject) => {
//       if (direction == "up") {
//         document.querySelector(`#${turn}`).style.marginTop =
//           String(marginTop() - 9.8) + "vmin";
//       } else if (direction == "right") {
//         document.querySelector(`#${turn}`).style.marginLeft =
//           String(marginLeft() + 9.8) + "vmin";
//       } else if (direction == "left") {
//         document.querySelector(`#${turn}`).style.marginLeft =
//           String(marginLeft() - 9.8) + "vmin";
//       }
//       await new Promise((resolve) => setTimeout(resolve, 400));
//       resolve();
//     });
//   }

//   function getDirection() {
//     let direction;
//     if (
//       (marginLeft() == 88.2 && ((marginTop() * 10) % (-19.6 * 10)) / 10 == 0) ||
//       (marginLeft() == 0 && ((marginTop() * 10) % (-19.6 * 10)) / 10 != 0)
//     ) {
//       direction = "up";
//     } else if (((marginTop() * 10) % (-19.6 * 10)) / 10 == 0) {
//       direction = "right";
//     } else {
//       direction = "left";
//     }
//   }

//   function marginLeft() {
//     return Number(
//       document.querySelector(`#${turn}`).style.marginLeft.split(`v`)[0]
//     );
//   }
//   function marginTop() {
//     return Number(
//       document.querySelector(`#${turn}`).style.marginTop.split(`v`)[0]
//     );
//   }

//   function roll() {
//     return new Promise(async (resolve, reject) => {
//       let diceNum = Math.floor(Math.random() * 6) + 1;
//       let values = [
//         [0, -360],
//         [-180, -350],
//         [-18, -270],
//         [0, -90],
//         [270, 180],
//         [90, 90],
//       ];
//       new Audio(""), play();
//       document.querySelector("#cube_inner").getElementsByClassName.transform =
//         "rotateX(360deg) rotateY(360deg)";
//       await new Promise((resolve) => setTimeout(resolve, 750));
//       document.querySelector(
//         "#cube_inner"
//       ).getElementsByClassName.transform = `rotateX(${
//         values[diceNum - 1][0]
//       }deg) rotateY(${values[diceNum - 1][1]}deg)`;
//       await new Promise((resolve) => setTimeout(resolve, 750));
//       resolve(diceNum);
//     });
//   }

//   function boxNumbers() {
//     let boxes = document.querySelectorAll(".box");
//     boxes.forEach((box, i) => {
//       if (
//         String(i).length == 1 ||
//         (String(i).length == 2 && Number(String(i)[0])) % 2 == 0
//       ) {
//         box.innerHTML = 100 - i;
//       } else {
//         box.innerHTML =
//           Number(`${9 - Number(String(i)[0])}${String(i)[1]}`) + 1;
//       }
//     });
//   }

//   return (
//     <>
//       <div id="main">
//         <div className="player" id='red'></div>
//         <div className="player" id='blue'></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//         <div className="box"></div>
//       </div>

// <div id="side">
//   <p id='p_turn'>Red player's turn</p>
//   <div id='cube_outer'>
// <div id='cube_inner'>
//   <div className='front'><img src="" alt="" /></div>
//   <div className='back'><img src="" alt="" /></div>
//   <div className='left'><img src="" alt="" /></div>
//   <div className='right'><img src="" alt="" /></div>
//   <div className='top'><img src="" alt="" /></div>
//   <div className='bottom'><img src="" alt="" /></div>
// </div>
//   </div>
// </div>

//     </>
//   );
// };

// export default Table;
