(()=>{"use strict";function e(e,t){for(let n=0;n<e.gameBoard.board.length;n++){let a=document.createElement("div");if(a.classList.add("gameSquare"),a.classList.add(e.playerName),a.setAttribute("data-id",n),t.appendChild(a),""!=e.gameBoard.board[n]){let e=document.createElement("img");e.src="/dist/ship.png",a.appendChild(e)}}}const t=()=>{let e=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],t=[],n=[],a=[];return{board:e,listOfShips:t,missedAttacks:n,placeShip:function(n,a,o){let s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const o=e=>(e=parseInt(e),!!n.includes(e)&&(a.push(e),!0));return{nameOfShip:e,length:t,coordinates:n,whereHit:a,sunkStatus:arguments.length>4&&void 0!==arguments[4]&&arguments[4],hit:o,isSunk:function(e){return t==a.length}}}(n,a,o);return o.forEach((t=>e[t].push(s))),t.push(s),e},receiveAttack:function(t){return""!=e[t]?(a.push(t),{attackStatus:e[t][0].hit(t),shipStatus:e[t][0].isSunk()}):(n.push(t),!1)},report:function(){return t.map((e=>1==e.sunkStatus)).includes(!1)?"There are still alive ships":"All ships have sunk!"}}},n=function(e,n){return{playerName:e,sendAttack:function(e,t){let n="valid";return e.missedAttacks.includes(t)||null!=e.successfulAttacks&&e.successfulAttacks.includes(t)?(n="notValid",n):"valid"==n?e.receiveAttack(t):void alert("Your move has already been picked. Please choose another one.")},gameBoard:t()}};let a=n("playerOne");a.gameBoard.placeShip("five",5,[1,2,3,4,5]),a.gameBoard.placeShip("four",4,[40,41,42,43]),a.gameBoard.placeShip("three",3,[57,58,59]),a.gameBoard.placeShip("two",5,[99,98]);let o=n("playerTwo");function s(e,t,n){e==a?(t.style.pointerEvents="none",n.style.pointerEvents="auto"):e==o&&(n.style.pointerEvents="none",t.style.pointerEvents="auto")}o.gameBoard.placeShip("five",5,[81,82,83,84,85]),o.gameBoard.placeShip("four",4,[63,64,65,66]),o.gameBoard.placeShip("three",3,[22,32,42]),o.gameBoard.placeShip("two",5,[79,89]);const i=document.getElementById("boardOne"),r=document.getElementById("boardTwo"),l=document.getElementById("begin-button"),c=document.getElementById("playerOneName");let d=document.getElementById("player-name"),u=a,p="";d.addEventListener("input",(function(){p=d.value})),l.addEventListener("click",(function(){!function(){const e=document.getElementById("welcomeScreenContainer"),t=document.getElementById("main-container");e.classList.add("hidden"),t.classList.remove("hidden")}(),function(e,t){e.textContent=""!=t?t:"Anonymous Challenger"}(c,p),e(a,i),e(o,r),function(e,t,n){s(e,t,n),Array.from(document.getElementsByClassName("gameSquare")).forEach((i=>{i.addEventListener("click",(function(){let r=i.getAttribute("data-id");if(e==a){let l=a.sendAttack(o.gameBoard,r);1==l.attackStatus?i.style.backgroundColor="green":i.style.backgroundColor="red",1==l.shipStatus&&console.log("A ship becomes feast for the fishes"),s(e=o,t,n)}else if(e==o){let l=o.sendAttack(a.gameBoard,r);1==l.attackStatus?i.style.backgroundColor="green":i.style.backgroundColor="red",1==l.shipStatus&&console.log("The waves will strip this ship to its bones..."),s(e=a,t,n)}}))}))}(u,i,r)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrQixNQUVSLEdBQXJCRCxFQUFPbkMsWUFDVHFDLFFBQVFDLElBQUksa0RBR2QzQixFQURBQyxFQUFnQkgsRUFDaUJJLEVBQVVDLEVBQzVDLENBQ0YsR0EzQkQsR0ErQkgsQ0N4Q0N5QixDQUFTM0IsRUFBZUMsRUFBVUMsRUFDbkMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gc2hvd0dhbWVCb2FyZCgpe1xuICAgIGNvbnN0IHdlbGNvbWVTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZVNjcmVlbkNvbnRhaW5lcicpXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpXG4gICAgd2VsY29tZVNjcmVlbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXIsIGJvYXJkKXtcbiAgICBmb3IgKGxldCBpPTA7IGk8cGxheWVyLmdhbWVCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZ2FtZVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dhbWVTcXVhcmUnKVxuICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQocGxheWVyLnBsYXllck5hbWUpXG4gICAgICAgIGdhbWVTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZVNxdWFyZSlcbiAgICAgICAgaWYgKHBsYXllci5nYW1lQm9hcmQuYm9hcmRbaV0gIT0gXCJcIikge1xuICAgICAgICAgICAgbGV0IHNoaXBJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgIHNoaXBJY29uLnNyYyA9ICcvZGlzdC9zaGlwLnBuZydcbiAgICAgICAgICAgIGdhbWVTcXVhcmUuYXBwZW5kQ2hpbGQoc2hpcEljb24pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBsYXllck5hbWUocGxheWVyLCBwbGF5ZXJOYW1lKSB7XG4gICAgaWYgKHBsYXllck5hbWUgIT0gXCJcIikge1xuICAgIHBsYXllci50ZXh0Q29udGVudCA9IHBsYXllck5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudGV4dENvbnRlbnQgPSBcIkFub255bW91cyBDaGFsbGVuZ2VyXCJcbiAgICB9XG59XG5cblxuZXhwb3J0IHtjcmVhdGVHYW1lQm9hcmQsIHNob3dHYW1lQm9hcmQsIGFkZFBsYXllck5hbWUgfSIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKFxuICBuYW1lT2ZTaGlwLFxuICBsZW5ndGgsXG4gIGNvb3JkaW5hdGVzID0gW10sXG4gIHdoZXJlSGl0ID0gW10sXG4gIHN1bmtTdGF0dXMgPSBmYWxzZVxuKSA9PiB7XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBudW1iZXIgPSBwYXJzZUludChudW1iZXIpXG4gICBpZiAoY29vcmRpbmF0ZXMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICB3aGVyZUhpdC5wdXNoKG51bWJlcik7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoc3Vua1N0YXR1cykge1xuICAgIGlmIChsZW5ndGggPT0gd2hlcmVIaXQubGVuZ3RoKSB7XG4gICAgICBzdW5rU3RhdHVzID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdW5rU3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgc3Vua1N0YXR1cyA9IGZhbHNlO1xuICAgIHJldHVybiBzdW5rU3RhdHVzO1xuICB9fTtcbiAgcmV0dXJuIHsgbmFtZU9mU2hpcCwgbGVuZ3RoLCBjb29yZGluYXRlcywgd2hlcmVIaXQsIHN1bmtTdGF0dXMsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5cbi8vZ2FtZUJvYXJkIGlzIDEweDEwXG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSxcbiAgICBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXVxuICBdXG4gIGxldCBsaXN0T2ZTaGlwcyA9IFtdO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdXG4gIGxldCBzdWNjZXNzZnVsQXR0YWNrcyA9IFtdXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lT2ZTaGlwLCBsZW5ndGgsIGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShuYW1lT2ZTaGlwLCBsZW5ndGgsIGNvb3JkaW5hdGVzKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT5cbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdLnB1c2gobmV3U2hpcCkpXG4gICAgbGlzdE9mU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICBpZiAoYm9hcmRbbnVtYmVyXSAhPSBcIlwiKSB7XG4gICAgICBzdWNjZXNzZnVsQXR0YWNrcy5wdXNoKG51bWJlcik7XG4gICAgICBsZXQgYXR0YWNrU3RhdHVzID0gYm9hcmRbbnVtYmVyXVswXS5oaXQobnVtYmVyKTtcbiAgICAgIGxldCBzaGlwU3RhdHVzID0gYm9hcmRbbnVtYmVyXVswXS5pc1N1bmsoKVxuICAgICAgcmV0dXJuIHthdHRhY2tTdGF0dXMsIHNoaXBTdGF0dXN9XG4gICAgfSBlbHNlIHsgICAgICBcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaChudW1iZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBcbiAgfTtcbiAgY29uc3QgcmVwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNoZWNrU3RhdHVzID0gbGlzdE9mU2hpcHMubWFwKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rU3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrU3RhdHVzLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIFwiVGhlcmUgYXJlIHN0aWxsIGFsaXZlIHNoaXBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIkFsbCBzaGlwcyBoYXZlIHN1bmshXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkLCBsaXN0T2ZTaGlwcywgbWlzc2VkQXR0YWNrcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCByZXBvcnQgfTtcbn07XG5cbi8vcGxheWVyIEZhY3RvcnlcblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikgKyBtaW4pXG59XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBwbGF5ZXJUeXBlKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTsgICBcbiAgICBjb25zdCBzZW5kQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICAgIGxldCBhdHRhY2tTdGF0dXMgPSAndmFsaWQnXG4gICAgICBpZiAoYm9hcmQubWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgIGF0dGFja1N0YXR1cyA9ICdub3RWYWxpZCdcbiAgICAgICAgICByZXR1cm4gYXR0YWNrU3RhdHVzXG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmQuc3VjY2Vzc2Z1bEF0dGFja3MgIT0gdW5kZWZpbmVkICYmIGJvYXJkLnN1Y2Nlc3NmdWxBdHRhY2tzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgYXR0YWNrU3RhdHVzID0gJ25vdFZhbGlkJ1xuICAgICAgICAgIHJldHVybiBhdHRhY2tTdGF0dXNcbiAgICAgICB9XG4gICAgICAgaWYgKGF0dGFja1N0YXR1cyA9PSAndmFsaWQnKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIllvdXIgbW92ZSBoYXMgYWxyZWFkeSBiZWVuIHBpY2tlZC4gUGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS5cIilcbiAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7cGxheWVyTmFtZSwgc2VuZEF0dGFjaywgZ2FtZUJvYXJkfVxufVxuXG5leHBvcnQgeyBnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXJGYWN0b3J5LCBzaGlwRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgcGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlGdW5jdGlvbnNcIjtcblxubGV0IHBsYXllck9uZSA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXJPbmVcIiwgXCJwZXJzb25cIilcbnBsYXllck9uZS5nYW1lQm9hcmQucGxhY2VTaGlwKCdmaXZlJywgNSwgWzEsIDIsIDMsIDQsIDVdKVxucGxheWVyT25lLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ2ZvdXInLCA0LCBbNDAsIDQxLCA0MiwgNDNdKVxucGxheWVyT25lLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ3RocmVlJywgMywgWzU3LCA1OCwgNTldKVxucGxheWVyT25lLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ3R3bycsIDUsIFs5OSwgOThdKVxuXG5sZXQgcGxheWVyVHdvID0gcGxheWVyRmFjdG9yeShcInBsYXllclR3b1wiLCBcIkNvbXB1dGVyXCIpXG5wbGF5ZXJUd28uZ2FtZUJvYXJkLnBsYWNlU2hpcCgnZml2ZScsIDUsIFs4MSwgODIsIDgzLCA4NCwgODVdKVxucGxheWVyVHdvLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ2ZvdXInLCA0LCBbNjMsIDY0LCA2NSwgNjZdKVxucGxheWVyVHdvLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ3RocmVlJywgMywgWzIyLCAzMiwgNDJdKVxucGxheWVyVHdvLmdhbWVCb2FyZC5wbGFjZVNoaXAoJ3R3bycsIDUsIFs3OSwgODldKVxuXG5mdW5jdGlvbiBkaXNhYmxlU2VsZkNsaWNrcyhjdXJyZW50UGxheWVyLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyT25lKSB7XG4gIGJvYXJkT25lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcbiAgYm9hcmRUd28uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xufSBlbHNlIGlmIChjdXJyZW50UGxheWVyID09IHBsYXllclR3bykge1xuICBib2FyZFR3by5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gIGJvYXJkT25lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbn1cbn1cblxuZnVuY3Rpb24gcGxheUdhbWUoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKSB7XG5cbiAgZGlzYWJsZVNlbGZDbGlja3MoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKVxubGV0IGNvb3JkaW5hdGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZVNxdWFyZVwiKSk7XG5jb29yZGluYXRlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHNxdWFyZSA9IHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09IHBsYXllck9uZSkge1xuICAgICAgICBsZXQgYXR0YWNrID0gcGxheWVyT25lLnNlbmRBdHRhY2socGxheWVyVHdvLmdhbWVCb2FyZCwgc3F1YXJlKTtcbiAgICAgICAgaWYgKGF0dGFjay5hdHRhY2tTdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0YWNrLnNoaXBTdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQSBzaGlwIGJlY29tZXMgZmVhc3QgZm9yIHRoZSBmaXNoZXNcIilcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvICBcbiAgICAgICAgZGlzYWJsZVNlbGZDbGlja3MoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyID09IHBsYXllclR3bykge1xuICAgICAgICBsZXQgYXR0YWNrID0gcGxheWVyVHdvLnNlbmRBdHRhY2socGxheWVyT25lLmdhbWVCb2FyZCwgc3F1YXJlKVxuICAgICAgICBpZiAoYXR0YWNrLmF0dGFja1N0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRhY2suc2hpcFN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgd2F2ZXMgd2lsbCBzdHJpcCB0aGlzIHNoaXAgdG8gaXRzIGJvbmVzLi4uXCIpXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZVxuICAgICAgICBkaXNhYmxlU2VsZkNsaWNrcyhjdXJyZW50UGxheWVyLCBib2FyZE9uZSwgYm9hcmRUd28pXG4gICAgICB9IFxuICAgIH0pO1xuICB9KTtcblxuICBcbn1cblxuXG5cbmV4cG9ydCB7cGxheWVyT25lLCBwbGF5ZXJUd28sIHBsYXlHYW1lfSIsImltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCwgc2hvd0dhbWVCb2FyZCwgYWRkUGxheWVyTmFtZSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28sIHBsYXlHYW1lIH0gZnJvbSBcIi4vZ2FtZWxvZ2ljXCI7XG5cbmNvbnN0IGJvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZE9uZVwiKTtcbmNvbnN0IGJvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFR3b1wiKTtcbmNvbnN0IGJlZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZWdpbi1idXR0b25cIik7XG5jb25zdCBwbGF5ZXJPbmVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJPbmVOYW1lXCIpO1xubGV0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLW5hbWVcIik7XG5sZXQgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcblxubGV0IHBsYXllck5hbWUgPSBcIlwiO1xucGxheWVyTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gIHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG59KTtcblxuYmVnaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgc2hvd0dhbWVCb2FyZCgpO1xuICBhZGRQbGF5ZXJOYW1lKHBsYXllck9uZU5hbWUsIHBsYXllck5hbWUpO1xuICBjcmVhdGVHYW1lQm9hcmQocGxheWVyT25lLCBib2FyZE9uZSk7XG4gIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXJUd28sIGJvYXJkVHdvKTtcbiAgcGxheUdhbWUoY3VycmVudFBsYXllciwgYm9hcmRPbmUsIGJvYXJkVHdvKVxufSk7XG5cblxuIl0sIm5hbWVzIjpbImNyZWF0ZUdhbWVCb2FyZCIsInBsYXllciIsImJvYXJkIiwiaSIsImdhbWVCb2FyZCIsImxlbmd0aCIsImdhbWVTcXVhcmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwbGF5ZXJOYW1lIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzaGlwSWNvbiIsInNyYyIsImdhbWVCb2FyZEZhY3RvcnkiLCJsaXN0T2ZTaGlwcyIsIm1pc3NlZEF0dGFja3MiLCJzdWNjZXNzZnVsQXR0YWNrcyIsInBsYWNlU2hpcCIsIm5hbWVPZlNoaXAiLCJjb29yZGluYXRlcyIsIm5ld1NoaXAiLCJ3aGVyZUhpdCIsImhpdCIsIm51bWJlciIsInBhcnNlSW50IiwiaW5jbHVkZXMiLCJwdXNoIiwic3Vua1N0YXR1cyIsImlzU3VuayIsInNoaXBGYWN0b3J5IiwiZm9yRWFjaCIsImNvb3JkaW5hdGUiLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrU3RhdHVzIiwic2hpcFN0YXR1cyIsInJlcG9ydCIsIm1hcCIsInNoaXAiLCJwbGF5ZXJGYWN0b3J5IiwicGxheWVyVHlwZSIsInNlbmRBdHRhY2siLCJ1bmRlZmluZWQiLCJhbGVydCIsInBsYXllck9uZSIsInBsYXllclR3byIsImRpc2FibGVTZWxmQ2xpY2tzIiwiY3VycmVudFBsYXllciIsImJvYXJkT25lIiwiYm9hcmRUd28iLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJnZXRFbGVtZW50QnlJZCIsImJlZ2luQnV0dG9uIiwicGxheWVyT25lTmFtZSIsInBsYXllck5hbWVJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsIndlbGNvbWVTY3JlZW5Db250YWluZXIiLCJtYWluQ29udGFpbmVyIiwicmVtb3ZlIiwic2hvd0dhbWVCb2FyZCIsInRleHRDb250ZW50IiwiYWRkUGxheWVyTmFtZSIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0aWxlIiwic3F1YXJlIiwiZ2V0QXR0cmlidXRlIiwiYXR0YWNrIiwiYmFja2dyb3VuZENvbG9yIiwiY29uc29sZSIsImxvZyIsInBsYXlHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==