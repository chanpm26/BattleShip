(()=>{"use strict";function e(e,t){for(let n=0;n<e.gameBoard.board.length;n++){let a=document.createElement("div");if(a.classList.add("gameSquare"),a.classList.add(e.playerName),a.setAttribute("data-id",n),t.appendChild(a),""!=e.gameBoard.board[n]){let e=document.createElement("img");e.src="/dist/ship.png",a.appendChild(e)}}}function t(){location.reload()}function n(e){document.getElementById("message").textContent=e}const a=()=>{let e=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],t=[],n=[],a=0;return{board:e,sunkShips:a,successfulAttacks:n,missedAttacks:t,placeShip:function(t,n,a){let i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const i=e=>(e=parseInt(e),!!n.includes(e)&&(a.push(e),!0)),o=function(e){return t==a.length?(e=!0,this.sunkStatus=e,e):(e=!1,this.sunkStatus=e,e)};return{nameOfShip:e,length:t,coordinates:n,whereHit:a,sunkStatus:arguments.length>4&&void 0!==arguments[4]&&arguments[4],hit:i,isSunk:o}}(t,n,a);a.forEach((t=>{e[t].push(i)}))},receiveAttack:function(i){if(""!=e[i]){n.push(i);let t=e[i][0].hit(i),o=e[i][0].isSunk();return 1==o&&(a+=1),{attackStatus:t,shipStatus:o}}return t.push(i),!1},report:function(){return e.map((e=>{if(""!=e)return e[0].isSunk(),1==e[0].sunkStatus})).includes(!1)?"There are still alive ships":"All ships have sunk!"}}},i=function(e,t){return{playerName:e,sendAttack:function(e,t){let n="valid";return(e.missedAttacks.includes(t)||null!=e.successfulAttacks&&e.successfulAttacks.includes(t))&&(n="notValid"),"valid"==n?e.receiveAttack(t):"notvalid"},gameBoard:a()}};let o=i("playerOne");o.gameBoard.placeShip("carrier",5,[1,2,3,4,5]),o.gameBoard.placeShip("battleship",4,[40,41,42,43]),o.gameBoard.placeShip("submarine",3,[57,58,59]),o.gameBoard.placeShip("cruiser",3,[27,28,29]),o.gameBoard.placeShip("destroyer",2,[99,98]);let r=i("playerTwo");function s(e,t,n){e==o?(t.style.pointerEvents="none",n.style.pointerEvents="auto"):e==r&&(n.style.pointerEvents="none",t.style.pointerEvents="auto")}r.gameBoard.placeShip("carrier",5,[81,82,83,84,85]),r.gameBoard.placeShip("battleship",4,[63,64,65,66]),r.gameBoard.placeShip("submarine",3,[22,32,42]),r.gameBoard.placeShip("cruiser",3,[57,58,59]),r.gameBoard.placeShip("destroyer",2,[79,89]);let d="";function c(e,t,a,i){let o=e.sendAttack(t.gameBoard,i);if("notvalid"==o)return n("That move is not valid. Please pick another tile."),"notvalid";1==o.attackStatus?(a.style.backgroundColor="green",n("")):0==o&&(a.style.backgroundColor="red",n("")),1==o.shipStatus&&n("A ship becomes feast for the fishes!"),d=function(e){return"All ships have sunk!"==e.gameBoard.report()}(t)}function l(e,t,n){if(s(e,t,n),Array.from(document.getElementsByClassName("gameSquare")).forEach((a=>{a.addEventListener("click",(function(){let i=a.getAttribute("data-id");e==o&&"notvalid"!=c(e,r,a,i)&&(s(e=r,t,n),l(e,t,n))}))})),e==r){let r=(a=0,i=99,a=Math.ceil(a),i=Math.floor(i),Math.floor(Math.random()*(i-a)+a)),d=document.querySelector(`[data-id="${r}"]`);setTimeout((()=>{"notvalid"!=c(e,o,d,r)&&s(e=o,t,n)}),700)}var a,i}const u=document.getElementById("boardOne"),m=document.getElementById("boardTwo"),p=document.getElementById("prepareButton"),h=document.getElementById("beginButton"),g=document.getElementById("playerOneName"),f=document.getElementById("newGameButton");let B=document.getElementById("playerName"),v=o,y="";B.addEventListener("input",(function(){y=B.value})),p.addEventListener("click",(function(){!function(){document.getElementById("welcomeScreenContainer").classList.add("hidden"),document.getElementById("selectScreenContainer").classList.remove("hidden");const e=document.getElementById("selectBoard");for(let t=0;t<100;t++){let t=document.createElement("div");e.appendChild(t)}}(),function(e,t){e.textContent=""!=t?t:"Anonymous Challenger's Board"}(g,y),e(o,u),e(r,m)})),h.addEventListener("click",(function(){document.getElementById("selectScreenContainer").classList.add("hidden"),document.getElementById("mainContainer").classList.remove("hidden")})),h.addEventListener("click",(function(){l(v,u,m),Array.from(document.getElementsByClassName("gameSquare")).forEach((e=>{e.addEventListener("click",(function(){1==d&&function(e){document.getElementById("mainContainer").classList.add("hidden");const n=document.getElementById("gameOverContainer");let a=document.createElement("p");a.innerText=`The game is over. ${e} has won!`,n.appendChild(a);const i=document.createElement("button");i.textContent="Start New Game",i.classList.add("newgame"),i.onclick=t,n.appendChild(i)}(v==o?g.textContent:"Computer")}))}))})),f.onclick=t})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0UsR0FDN0JYLEVBQWdCcUQsRUFBV0ksR0FDM0J6RCxFQUFnQnNELEVBQVdJLEVBQzVCLElBRUQyQixFQUFZYixpQkFBaUIsU0FBUyxXSHBCTmpFLFNBQVNjLGVBQ3JDLHlCQUVvQlosVUFBVUMsSUFBSSxVQUNkSCxTQUFTYyxlQUFlLGlCQUNoQ1osVUFBVWlGLE9BQU8sU0dpQmhDLElBRURMLEVBQVliLGlCQUFpQixTQUFTLFdBQ3BDSixFQUFTWixFQUFlQyxFQUFVQyxHQUNoQlcsTUFBTUMsS0FBSy9ELFNBQVNnRSx1QkFBdUIsZUFDakQ5QixTQUFTTyxJQUNuQkEsRUFBS3dCLGlCQUFpQixTQUFTLFdBQ00sR0FBZlgsR0hNMUIsU0FBc0JMLEdBQ0VqRCxTQUFTYyxlQUFlLGlCQUNoQ1osVUFBVUMsSUFBSSxVQUM1QixNQUFNb0YsRUFBb0J2RixTQUFTYyxlQUFlLHFCQUNsRCxJQUFJMEUsRUFBb0J4RixTQUFTQyxjQUFjLEtBQy9DdUYsRUFBa0JDLFVBQWEscUJBQW9CeEMsYUFDbkRzQyxFQUFrQmpGLFlBQVlrRixHQUM5QixNQUFNUixFQUFnQmhGLFNBQVNDLGNBQWMsVUFDN0MrRSxFQUFjakUsWUFBYyxpQkFDNUJpRSxFQUFjOUUsVUFBVUMsSUFBSSxXQUM1QjZFLEVBQWNVLFFBQVVqRixFQUN4QjhFLEVBQWtCakYsWUFBWTBFLEVBQy9CLENHaEJTVyxDQURFMUMsR0FBaUJILEVBQ05pQyxFQUFjaEUsWUFFZCxXQUdsQixHQVJELEdBVUgsSUFFRGlFLEVBQWNVLFFBQVVqRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2hvd1NlbGVjdGlvblNjcmVlbigpIHtcbiAgY29uc3Qgd2VsY29tZVNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwid2VsY29tZVNjcmVlbkNvbnRhaW5lclwiXG4gICk7XG4gIHdlbGNvbWVTY3JlZW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3Qgc2VsZWN0U2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJzZWxlY3RTY3JlZW5Db250YWluZXJcIlxuICApO1xuICBzZWxlY3RTY3JlZW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgY29uc3Qgc2VsZWN0Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdEJvYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZWN0Qm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93R2FtZUJvYXJkKCkge1xuICBjb25zdCBzZWxlY3RTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInNlbGVjdFNjcmVlbkNvbnRhaW5lclwiXG4gICk7XG4gIHNlbGVjdFNjcmVlbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXIsIGJvYXJkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmdhbWVCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJnYW1lU3F1YXJlXCIpO1xuICAgIGdhbWVTcXVhcmUuY2xhc3NMaXN0LmFkZChwbGF5ZXIucGxheWVyTmFtZSk7XG4gICAgZ2FtZVNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGkpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdhbWVTcXVhcmUpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW2ldICE9IFwiXCIpIHtcbiAgICAgIGxldCBzaGlwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBzaGlwSWNvbi5zcmMgPSBcIi9kaXN0L3NoaXAucG5nXCI7XG4gICAgICBnYW1lU3F1YXJlLmFwcGVuZENoaWxkKHNoaXBJY29uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUGxheWVyTmFtZShwbGF5ZXIsIHBsYXllck5hbWUpIHtcbiAgaWYgKHBsYXllck5hbWUgIT0gXCJcIikge1xuICAgIHBsYXllci50ZXh0Q29udGVudCA9IHBsYXllck5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyLnRleHRDb250ZW50ID0gXCJBbm9ueW1vdXMgQ2hhbGxlbmdlcidzIEJvYXJkXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dHYW1lT3ZlcihjdXJyZW50UGxheWVyKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3QgZ2FtZU92ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpO1xuICBsZXQgZGlzcGxheVdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGlzcGxheVdpbm5lclRleHQuaW5uZXJUZXh0ID0gYFRoZSBnYW1lIGlzIG92ZXIuICR7Y3VycmVudFBsYXllcn0gaGFzIHdvbiFgO1xuICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5V2lubmVyVGV4dCk7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBOZXcgR2FtZVwiO1xuICBuZXdHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdnYW1lXCIpO1xuICBuZXdHYW1lQnV0dG9uLm9uY2xpY2sgPSBuZXdHYW1lO1xuICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2hvd01lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xuICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlR2FtZUJvYXJkLFxuICBzaG93U2VsZWN0aW9uU2NyZWVuLFxuICBzaG93R2FtZUJvYXJkLFxuICBhZGRQbGF5ZXJOYW1lLFxuICBuZXdHYW1lLFxuICBzaG93R2FtZU92ZXIsXG4gIHNob3dNZXNzYWdlLFxufTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKFxuICBuYW1lT2ZTaGlwLFxuICBsZW5ndGgsXG4gIGNvb3JkaW5hdGVzID0gW10sXG4gIHdoZXJlSGl0ID0gW10sXG4gIHN1bmtTdGF0dXMgPSBmYWxzZVxuKSA9PiB7XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBudW1iZXIgPSBwYXJzZUludChudW1iZXIpXG4gICBpZiAoY29vcmRpbmF0ZXMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICB3aGVyZUhpdC5wdXNoKG51bWJlcik7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoc3Vua1N0YXR1cykge1xuICAgIGlmIChsZW5ndGggPT0gd2hlcmVIaXQubGVuZ3RoKSB7XG4gICAgICBzdW5rU3RhdHVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vua1N0YXR1cyA9IHN1bmtTdGF0dXNcbiAgICAgIHJldHVybiBzdW5rU3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgc3Vua1N0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuc3Vua1N0YXR1cyA9IHN1bmtTdGF0dXNcbiAgICByZXR1cm4gc3Vua1N0YXR1cztcbiAgfX07XG4gIHJldHVybiB7IG5hbWVPZlNoaXAsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIHdoZXJlSGl0LCBzdW5rU3RhdHVzLCBoaXQsIGlzU3VuayB9O1xufTtcblxuXG4vL2dhbWVCb2FyZCBpcyAxMHgxMFxuXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11cbiAgXVxuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdXG4gIGxldCBzdWNjZXNzZnVsQXR0YWNrcyA9IFtdXG4gIGxldCBzdW5rU2hpcHMgPSAwXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lT2ZTaGlwLCBsZW5ndGgsIGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShuYW1lT2ZTaGlwLCBsZW5ndGgsIGNvb3JkaW5hdGVzKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0ucHVzaChuZXdTaGlwKVxuICAgIH0pXG4gICAgfVxuICA7XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICBpZiAoYm9hcmRbbnVtYmVyXSAhPSBcIlwiKSB7XG4gICAgICBzdWNjZXNzZnVsQXR0YWNrcy5wdXNoKG51bWJlcik7XG4gICAgICBsZXQgYXR0YWNrU3RhdHVzID0gYm9hcmRbbnVtYmVyXVswXS5oaXQobnVtYmVyKTtcbiAgICAgIGxldCBzaGlwU3RhdHVzID0gYm9hcmRbbnVtYmVyXVswXS5pc1N1bmsoKVxuICAgICAgaWYgKHNoaXBTdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICBzdW5rU2hpcHMgKz0gMVxuICAgICAgfVxuICAgICAgcmV0dXJuIHthdHRhY2tTdGF0dXMsIHNoaXBTdGF0dXN9XG4gICAgfSBlbHNlIHsgICAgICBcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaChudW1iZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBcbiAgfTtcbiAgY29uc3QgcmVwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNoZWNrU3RhdHVzID0gYm9hcmQubWFwKCh0aWxlKSA9PiB7XG4gICAgICBpZiAodGlsZSAhPSAnJykge1xuICAgICAgICB0aWxlWzBdLmlzU3VuaygpXG4gICAgICBpZiAodGlsZVswXS5zdW5rU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgICBpZiAoY2hlY2tTdGF0dXMuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICByZXR1cm4gXCJUaGVyZSBhcmUgc3RpbGwgYWxpdmUgc2hpcHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiQWxsIHNoaXBzIGhhdmUgc3VuayFcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQsIHN1bmtTaGlwcywgc3VjY2Vzc2Z1bEF0dGFja3MsIG1pc3NlZEF0dGFja3MsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgcmVwb3J0IH07XG59O1xuXG4vL3BsYXllciBGYWN0b3J5XG5cblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIHBsYXllclR5cGUpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpOyAgIFxuICAgIGNvbnN0IHNlbmRBdHRhY2sgPSBmdW5jdGlvbihib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgICAgbGV0IGF0dGFja1N0YXR1cyA9ICd2YWxpZCdcbiAgICAgIGlmIChib2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhdHVzID0gJ25vdFZhbGlkJ1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLnN1Y2Nlc3NmdWxBdHRhY2tzICE9IHVuZGVmaW5lZCAmJiBib2FyZC5zdWNjZXNzZnVsQXR0YWNrcy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgIGF0dGFja1N0YXR1cyA9ICdub3RWYWxpZCdcbiAgICAgICB9XG4gICAgICAgaWYgKGF0dGFja1N0YXR1cyA9PSAndmFsaWQnKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ25vdHZhbGlkJ1xuICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtwbGF5ZXJOYW1lLCBzZW5kQXR0YWNrLCBnYW1lQm9hcmR9XG59XG5cbmV4cG9ydCB7IGdhbWVCb2FyZEZhY3RvcnksIHBsYXllckZhY3RvcnksIHNoaXBGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBwbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgc2hvd01lc3NhZ2UgfSBmcm9tICcuL2RvbSdcblxubGV0IHBsYXllck9uZSA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXJPbmVcIiwgXCJwZXJzb25cIik7XG5wbGF5ZXJPbmUuZ2FtZUJvYXJkLnBsYWNlU2hpcChcImNhcnJpZXJcIiwgNSwgWzEsIDIsIDMsIDQsIDVdKTtcbnBsYXllck9uZS5nYW1lQm9hcmQucGxhY2VTaGlwKFwiYmF0dGxlc2hpcFwiLCA0LCBbNDAsIDQxLCA0MiwgNDNdKTtcbnBsYXllck9uZS5nYW1lQm9hcmQucGxhY2VTaGlwKFwic3VibWFyaW5lXCIsIDMsIFs1NywgNTgsIDU5XSk7XG5wbGF5ZXJPbmUuZ2FtZUJvYXJkLnBsYWNlU2hpcChcImNydWlzZXJcIiwgMywgWzI3LCAyOCwgMjldKTtcbnBsYXllck9uZS5nYW1lQm9hcmQucGxhY2VTaGlwKFwiZGVzdHJveWVyXCIsIDIsIFs5OSwgOThdKTtcblxubGV0IHBsYXllclR3byA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXJUd29cIiwgXCJDb21wdXRlclwiKTtcbnBsYXllclR3by5nYW1lQm9hcmQucGxhY2VTaGlwKFwiY2FycmllclwiLCA1LCBbODEsIDgyLCA4MywgODQsIDg1XSk7XG5wbGF5ZXJUd28uZ2FtZUJvYXJkLnBsYWNlU2hpcChcImJhdHRsZXNoaXBcIiwgNCwgWzYzLCA2NCwgNjUsIDY2XSk7XG5wbGF5ZXJUd28uZ2FtZUJvYXJkLnBsYWNlU2hpcChcInN1Ym1hcmluZVwiLCAzLCBbMjIsIDMyLCA0Ml0pO1xucGxheWVyVHdvLmdhbWVCb2FyZC5wbGFjZVNoaXAoXCJjcnVpc2VyXCIsIDMsIFs1NywgNTgsIDU5XSk7XG5wbGF5ZXJUd28uZ2FtZUJvYXJkLnBsYWNlU2hpcChcImRlc3Ryb3llclwiLCAyLCBbNzksIDg5XSk7XG5cbmZ1bmN0aW9uIGRpc2FibGVTZWxmQ2xpY2tzKGN1cnJlbnRQbGF5ZXIsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJPbmUpIHtcbiAgICBib2FyZE9uZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgYm9hcmRUd28uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyVHdvKSB7XG4gICAgYm9hcmRUd28uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGJvYXJkT25lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcihvcHBvc2luZ1BsYXllcikge1xuICBsZXQgcmVwb3J0ID0gb3Bwb3NpbmdQbGF5ZXIuZ2FtZUJvYXJkLnJlcG9ydCgpO1xuICBpZiAocmVwb3J0ID09IFwiQWxsIHNoaXBzIGhhdmUgc3VuayFcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0dhbWVTdGF0dXMoZ2FtZVN0YXR1cykge1xuICByZXR1cm4gZ2FtZVN0YXR1cztcbn1cblxubGV0IGdhbWVTdGF0dXMgPSBcIlwiO1xuXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlcyhtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSArIG1pbilcbn1cblxuXG5mdW5jdGlvbiBwbGF5R2FtZUhlbHBlcihjdXJyZW50UGxheWVyLCBvcHBvc2luZ1BsYXllciwgdGlsZSwgc3F1YXJlKSB7XG4gIGxldCBhdHRhY2sgPSBjdXJyZW50UGxheWVyLnNlbmRBdHRhY2sob3Bwb3NpbmdQbGF5ZXIuZ2FtZUJvYXJkLCBzcXVhcmUpO1xuICBpZiAoYXR0YWNrID09IFwibm90dmFsaWRcIikge1xuICAgIHNob3dNZXNzYWdlKCdUaGF0IG1vdmUgaXMgbm90IHZhbGlkLiBQbGVhc2UgcGljayBhbm90aGVyIHRpbGUuJyk7XG4gICAgcmV0dXJuICdub3R2YWxpZCdcbiAgfVxuICBpZiAoYXR0YWNrLmF0dGFja1N0YXR1cyA9PSB0cnVlKSB7XG4gICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgc2hvd01lc3NhZ2UoJycpXG4gIH0gZWxzZSBpZiAoYXR0YWNrID09IGZhbHNlKSB7XG4gICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIHNob3dNZXNzYWdlKCcnKVxuICB9XG4gIGlmIChhdHRhY2suc2hpcFN0YXR1cyA9PSB0cnVlKSB7XG4gICAgc2hvd01lc3NhZ2UoXCJBIHNoaXAgYmVjb21lcyBmZWFzdCBmb3IgdGhlIGZpc2hlcyFcIik7XG4gIH1cbiAgZ2FtZVN0YXR1cyA9IGdhbWVPdmVyKG9wcG9zaW5nUGxheWVyKTtcbn1cblxuXG5mdW5jdGlvbiBwbGF5R2FtZShjdXJyZW50UGxheWVyLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgZGlzYWJsZVNlbGZDbGlja3MoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZVNxdWFyZVwiKSk7XG4gIGNvb3JkaW5hdGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc3F1YXJlID0gdGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyT25lKSB7XG4gICAgICAgIGxldCBtb3ZlID0gcGxheUdhbWVIZWxwZXIoY3VycmVudFBsYXllciwgcGxheWVyVHdvLCB0aWxlLCBzcXVhcmUpO1xuICAgICAgICBpZiAobW92ZSAhPSAnbm90dmFsaWQnKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgICAgIGRpc2FibGVTZWxmQ2xpY2tzKGN1cnJlbnRQbGF5ZXIsIGJvYXJkT25lLCBib2FyZFR3byk7XG4gICAgICAgIHBsYXlHYW1lKGN1cnJlbnRQbGF5ZXIsIGJvYXJkT25lLCBib2FyZFR3bylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJUd28pIHtcbiAgICBsZXQgcmFuZG9tU3F1YXJlID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoMCwgOTkpXG4gICAgbGV0IHJhbmRvbVRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cmFuZG9tU3F1YXJlfVwiXWApXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGV0IG1vdmUgPSBwbGF5R2FtZUhlbHBlcihjdXJyZW50UGxheWVyLCBwbGF5ZXJPbmUsIHJhbmRvbVRpbGUsIHJhbmRvbVNxdWFyZSk7XG4gICAgaWYgKG1vdmUgIT0gJ25vdHZhbGlkJykge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgZGlzYWJsZVNlbGZDbGlja3MoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKTtcbiAgICB9XG4gIH0sIDcwMClcbn19XG5cbmV4cG9ydCB7XG4gIHBsYXllck9uZSxcbiAgcGxheWVyVHdvLFxuICBwbGF5R2FtZSxcbiAgZ2FtZU92ZXIsXG4gIGNoZWNrR2FtZVN0YXR1cyxcbiAgZ2FtZVN0YXR1c1xufVxuIiwiaW1wb3J0IHtcbiAgY3JlYXRlR2FtZUJvYXJkLFxuICBzaG93U2VsZWN0aW9uU2NyZWVuLFxuICBzaG93R2FtZUJvYXJkLFxuICBhZGRQbGF5ZXJOYW1lLFxuICBuZXdHYW1lLFxuICBzaG93R2FtZU92ZXIsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtcbiAgcGxheWVyT25lLFxuICBwbGF5ZXJUd28sXG4gIHBsYXlHYW1lLFxuICBjaGVja0dhbWVTdGF0dXMsXG4gIGdhbWVTdGF0dXMsXG59IGZyb20gXCIuL2dhbWVsb2dpY1wiO1xuXG5jb25zdCBib2FyZE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRPbmVcIik7XG5jb25zdCBib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRUd29cIik7XG5jb25zdCBwcmVwYXJlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXBhcmVCdXR0b24nKVxuY29uc3QgYmVnaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlZ2luQnV0dG9uXCIpO1xuY29uc3QgcGxheWVyT25lTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyT25lTmFtZVwiKTtcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVCdXR0b25cIik7XG5sZXQgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJOYW1lXCIpO1xubGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG5cbmxldCBwbGF5ZXJOYW1lID0gXCJcIjtcbnBsYXllck5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xufSk7XG5cbnByZXBhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgc2hvd1NlbGVjdGlvblNjcmVlbigpO1xuICBhZGRQbGF5ZXJOYW1lKHBsYXllck9uZU5hbWUsIHBsYXllck5hbWUpO1xuICBjcmVhdGVHYW1lQm9hcmQocGxheWVyT25lLCBib2FyZE9uZSk7XG4gIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXJUd28sIGJvYXJkVHdvKTtcbn0pO1xuXG5iZWdpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBzaG93R2FtZUJvYXJkKCk7XG59KVxuXG5iZWdpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBwbGF5R2FtZShjdXJyZW50UGxheWVyLCBib2FyZE9uZSwgYm9hcmRUd28pO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnYW1lU3F1YXJlXCIpKTtcbiAgY29vcmRpbmF0ZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjaGVja0dhbWVTdGF0dXMoZ2FtZVN0YXR1cykgPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJPbmUpIHtcbiAgICAgICAgICBzaG93R2FtZU92ZXIocGxheWVyT25lTmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0dhbWVPdmVyKFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcblxubmV3R2FtZUJ1dHRvbi5vbmNsaWNrID0gbmV3R2FtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVHYW1lQm9hcmQiLCJwbGF5ZXIiLCJib2FyZCIsImkiLCJnYW1lQm9hcmQiLCJsZW5ndGgiLCJnYW1lU3F1YXJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicGxheWVyTmFtZSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic2hpcEljb24iLCJzcmMiLCJuZXdHYW1lIiwibG9jYXRpb24iLCJyZWxvYWQiLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiZ2FtZUJvYXJkRmFjdG9yeSIsIm1pc3NlZEF0dGFja3MiLCJzdWNjZXNzZnVsQXR0YWNrcyIsInN1bmtTaGlwcyIsInBsYWNlU2hpcCIsIm5hbWVPZlNoaXAiLCJjb29yZGluYXRlcyIsIm5ld1NoaXAiLCJ3aGVyZUhpdCIsImhpdCIsIm51bWJlciIsInBhcnNlSW50IiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNTdW5rIiwic3Vua1N0YXR1cyIsInRoaXMiLCJzaGlwRmFjdG9yeSIsImZvckVhY2giLCJjb29yZGluYXRlIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1N0YXR1cyIsInNoaXBTdGF0dXMiLCJyZXBvcnQiLCJtYXAiLCJ0aWxlIiwicGxheWVyRmFjdG9yeSIsInBsYXllclR5cGUiLCJzZW5kQXR0YWNrIiwidW5kZWZpbmVkIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiZGlzYWJsZVNlbGZDbGlja3MiLCJjdXJyZW50UGxheWVyIiwiYm9hcmRPbmUiLCJib2FyZFR3byIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImdhbWVTdGF0dXMiLCJwbGF5R2FtZUhlbHBlciIsIm9wcG9zaW5nUGxheWVyIiwic3F1YXJlIiwiYXR0YWNrIiwiYmFja2dyb3VuZENvbG9yIiwiZ2FtZU92ZXIiLCJwbGF5R2FtZSIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0QXR0cmlidXRlIiwicmFuZG9tU3F1YXJlIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVRpbGUiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsInByZXBhcmVCdXR0b24iLCJiZWdpbkJ1dHRvbiIsInBsYXllck9uZU5hbWUiLCJuZXdHYW1lQnV0dG9uIiwicGxheWVyTmFtZUlucHV0IiwidmFsdWUiLCJyZW1vdmUiLCJzZWxlY3RCb2FyZCIsInNob3dTZWxlY3Rpb25TY3JlZW4iLCJhZGRQbGF5ZXJOYW1lIiwiZ2FtZU92ZXJDb250YWluZXIiLCJkaXNwbGF5V2lubmVyVGV4dCIsImlubmVyVGV4dCIsIm9uY2xpY2siLCJzaG93R2FtZU92ZXIiXSwic291cmNlUm9vdCI6IiJ9