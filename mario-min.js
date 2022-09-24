const EeCss = `<style> #character {background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgAgMAAAD4XRf/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTEHYPQAAAPy1qCNymdgAAAABdFJOUwBA5thmAAABS0lEQVQoz73SMWrDMBTGcaFNziW6OCQuJKexSJzFY0mgZ9AlLApdtKQoLxCvoQX7Kl6aIUO6hgxSv2eH0BPU8PPwx9jWk4T4t0v6v/wQp/quYGGIlf5riDIn19NkoOmjKsjfOTgMcROc2kSn6t7woay+MJO1X8z2cV5fHJshzh5xH6+sqWMHpyH+tFfWNrGDk5AkxCjU3Sjsz/Nb7ZmY5kbI9mzAJZEMvIkqL0VSh54cLGS+LIVae5ECfnwCpdSIKWaQrounVNsGjMp3eGoVTdXaY7WrDuCUDkO08ftow/YVSrWKDqMMDtG9x90LwxyOItPUbdvP7jk2RyabcBUJ3boMktBYJokcIrkMUiLN1BI7gGjAfyCwNL/HMZG1CLaPBdZOJMaUIciCTXNCxPpTrxbWCM/wft7NhVBalRPMliXEhwI3SdI8Dgw+9AspBeVZWNT6gwAAAABJRU5ErkJggg==');
background-size:cover;
display:block;
position:absolute;
width:1em;
height:2em;
font-size:1em;
transition:bottom 40ms, left 40ms;
transform: translateX(-50%);
}
.champ{
  background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTP+bOx6EFf///4C0fXYAAAABdFJOUwBA5thmAAAASUlEQVQIHQXBsQ2CYBQGwOPLs4fOOM0fJ4CCfRiGPWQZaVjAggh3PEbRP0V7S8dSZdszjEelijSmoHKetm6G1+e/cl3CTyDa1w3ybw7Wo9ISXQAAAABJRU5ErkJggg==');
  animation:spawn 200ms;
}
#ground *{
  background-size:cover;
}
#character.mini{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQAgMAAADbiZG6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTEHYPQAAAPy1qCNymdgAAAABdFJOUwBA5thmAAAAsUlEQVQY0zXPMQ7CMAwF0K9shXMUQRdOQ9RmyswJGH2JRoipC1Lw0hVVglyDsXsHJtaCDSHSs74tRZaB/6s6FaXEX9M6ErMEq4HMbufFHTl40w8kjsiBllMaxQM5iKfSwTeMJjGJDjnIN1nQv72UGdoUTUMKxtXYOEeVtVGhsAE3G3wKU1AyYCTHh3Riq2DmAVuerivmWsG89ljwxbfSKLmlRslnH5g6BXBE6Vtay9HqA7L2bkgxJZbtAAAAAElFTkSuQmCC');
  height:1em;
}
#ground i,#ground b,#ground #character{
  image-rendering: pixelated;
}
.bloc1{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAJUExURQAAANtfIdxfIayOCPwAAAAhSURBVAjXY2AAAc3Q0AwGxdBQDwbR0NAQ0giwNrABIAAAYZsPW2MsjHAAAAAASUVORK5CYII=');
}
.brick{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAGUExURcRVHQMDA838lrQAAAAXSURBVAjXY2RkYGIAIcb/DIwCSGwc4gBVagQ3EPBgcgAAAABJRU5ErkJggg==');
}
.piece{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTP+bOwUFBctPD08gUHsAAAABdFJOUwBA5thmAAAAJElEQVQI12NgAAPRDCARGgUk4oEEY+m0BmIIhqgomDawAUAAAH/ZECaxtEsCAAAAAElFTkSuQmCC');
}
.guess{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExUReOHK/+xKwAAAAMDA81ONYEAAAA+SURBVAjXYzjAwMDMIBoaGs4gGxpaziDqwBrOIMrVCCQ4nWBEJhOQCNECEapAInQpiCUK5cqGLi2HGPAfCABU+xKUfHpTTwAAAABJRU5ErkJggg==');
}
#ground .pipe{
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwAgMAAAANwpD8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURUdwTAUFBYPTEwCrAALXRhQAAAABdFJOUwBA5thmAAAAQUlEQVQY02MIhQKGrFVgsJKh/teq/0DwlyHr16rX//+/ewll/F5JfRG47awQOoCBbf2qXf//75oAZbybMCqCLAIAnmMNGaCNw9cAAAAASUVORK5CYII=');
  width:2em;
  height:3em;
}
#character.mirror {transform:translateX(-50%) scaleX(-1)}
.walk {animation:walk 400ms infinite steps(1, end)}
.walk.mini {animation-duration:300ms}
.jump {background-position-x:-3em;animation:none}
.snip {background-position-x:-4em;animation:none}
.enterPipe{
  animation:enterPipe 2s forwards;
}
@keyframes enterPipe{
  from{
    margin-bottom:0;
  }to{
    margin-bottom:-2em;
  }
}
@keyframes spawn {
  from{
    opacity:0;
    transform:translateY(100%)
  }
  to{
    opacity:1;
    transform:translateY(0)
  }
}
@keyframes walk {
    0% {background-position-x:-1em}
    25% {background-position-x:-2em}
    50% {background-position-x:-1em}
    75% {background-position-x:0em}
}
@keyframes bump {
  0%{
    margin-bottom:0;
  }
  70%{
    margin-bottom:.2em;
  }
  100%{
    margin-bottom:0;
  }
}
#ground i {
  content: "O";
  display: block;
  width: 0.9em;
  height: 0.9em;
  margin:0.05em;
  position: absolute;
}
.bump{
  animation:bump 100ms;
}
#ground b {
    display: block;
    width: 1em;
    height: 1em;
    position: absolute;
    z-index:2;
}
#ground {    position: absolute;
    font-size:32px;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    background: #53aeff;
    align-items: self-end;
    /*pointer-events: none;*/
    overflow: hidden;
  }
  </style>`;
/*
{ box: [0, 4] },
  { box: [1, 4] },
  { box: [2, 4] },
  { box: [8, 2] },
  */
const jsonMap = [
  { piece: [9, 1] },
  { piece: [8, 1] },
  { piece: [4, 0] },
  { piece: [11, 3] },
  { piece: [1, 5] },
  { piece: [2, 5] },
  { box: [0, 4] },
  { box: [1, 4] },
  { box: [2, 4] },
  { box: [8, 2] },
  { box: [7, 0] },
  { box: [10, 2] },
  { box: [11, 2] },
  { box: [13, 3] },
  { box: [13, 4] },
  { box: [13, 5] },
  { box: [13, 6] },
  { brick: [13, 2] },
  { brick: [14, 2] },
  { brick: [15, 2] },
  { guess: [12, 2] },
  { pipe: [16, -1] },
];
const { createApp } = Vue;
const EeIDElement = "body";
const EeElement = document.querySelector(EeIDElement);
const Eeground = document.createElement("div");
Eeground.setAttribute("id", "ground");
Eeground.innerHTML = '<span id="character"></span>';
EeElement.appendChild(Eeground);
EeElement.style.position = "relative";
document.body.style.minHeight = "100vh";
document.body.insertAdjacentHTML("beforeend", EeCss);

const app = createApp({
  data() {
    return {
      gridSize: 32,
      jsonMap,
      posX: 20,
      posY: 0,
      moveX: 0,
      moveY: 0,
      vMaxX: 6,
      onFloor: false,
      onJump: false,
      canJump: true,
      character: null,
      characterTall: false,
      ground: null,
      started: false,
      deltaLag: 1,
      timeFrame: Date.now(),
      nbItem: 0,
      speedRatio: 1.2,
      noControl: false,
    };
  },
  watch: {
    noControl(bool) {
      if (bool) {
        this.character.classList.add("enterPipe");
        this.moveY = 0;
        this.moveX = 0;
      }
    },
    posX() {
      this.updatePos();
    },
    posY() {
      this.updatePos();
    },
    started(bool) {
      if (bool) {
        this.timeFrame = Date.now();
        this.refresh();
      }
    },
    moveY(val) {
      if (this.noControl) {
        this.moveY = 0;
        return;
      }
      if (val === 1) {
        this.character.classList.add("snip");
      } else {
        this.character.classList.remove("snip");
        if (val === -1) {
          this.jump();
        }
      }
    },
    moveX(val) {
      if (this.noControl) {
        this.moveX = 0;
        return;
      }
      if (!val || this.moveY === 1) {
        this.moveX = 0;
        this.character.classList.remove("walk");
      } else {
        this.character.classList.add("walk");
        if (val === -1) {
          this.character.classList.add("mirror");
        }
        if (val === 1) {
          this.character.classList.remove("mirror");
        }
      }
    },
    onFloor(bool) {
      if (bool) {
        this.character.classList.remove("jump");
        this.canJump = true;
      }
    },
    characterTall(bool) {
      if (bool) {
        this.character.classList.remove("mini");
      } else {
        this.character.classList.add("mini");
      }
    },
  },
  computed: {
    onMove() {
      return this.moveY !== 1 && this.moveX;
    },
  },
  methods: {
    start() {
      this.started = true;
    },
    pause() {
      this.started = false;
    },
    refresh() {
      this.deltaLag = (Date.now() - this.timeFrame) / 25;
      if (this.onMove)
        this.posX +=
          this.moveX * (this.vMaxX * this.deltaLag * this.speedRatio);
      this.collision();
      if (!this.onJump && !this.onFloor) {
        this.falling();
      } else {
        if (this.onJump) {
          this.posY += 8 * this.deltaLag * this.speedRatio;
        }
      }
      this.timeFrame = Date.now();
      setTimeout(() => {
        if (this.started) this.refresh();
      }, 25);
    },
    collision() {
      const pW = this.character.clientWidth;
      const pH = this.character.clientHeight * 0.8;
      const pY = this.posY;
      const pX = this.posX;
      this.ground.querySelectorAll(".item").forEach((item) => {
        const x = item.offsetLeft;
        const y = parseInt(
          item.offsetParent.offsetHeight - (item.offsetTop + item.offsetHeight)
        );
        const h = (item.clientHeight + pH) / 2;
        const w = (item.clientWidth + pW) / 2;
        if (pY + pH / 2 - y < h && pY + pH / 2 - y > -h) {
          if (pX - x < w && pX - x > 0) {
            if (item.classList.contains("champ")) {
              this.characterTall = true;
            }
            item.remove();
            return true;
          }
        }
      });
      let stillOnbox = false;
      if (pY <= 0) stillOnbox = true;
      const walks = this.onMove ? -5 : 5;
      this.ground.querySelectorAll("b").forEach((item) => {
        const x = item.offsetLeft;
        const y = parseInt(
          item.offsetParent.offsetHeight - (item.offsetTop + item.offsetHeight)
        );
        const h = (item.clientHeight) / 2;
        const w = (item.clientWidth);
        if (pY < y + h * 2 && pY > y - pH) {
          if (pX - x < w+pW/2 && pX - x > (w+pW/2)-(this.vMaxX * 2)) {
            //Right
            this.posX = x + w+pW/2;
            return;
          }
          if (pX - x > -pW/2 && pX - x < -pW/2+this.vMaxX * 2) {
            //Left
            this.posX = x - pW/2;
            return;
          }
        }
        if (pX - x < pW/3+w-walks && pX - x > -pW/3+walks) {
          if (this.onJump && pY >= y - pH && pY < y - pH + h) {
            //Up
            this.onJump = false;
            this.posY = y - pH;
            if (item.classList.contains("guess")) {
              item.classList.add("bump");
              setTimeout(() => {
                item.classList.remove("bump");
              }, 100);
              item.classList.remove("guess");
              let element = document.createElement("i");
              element.classList.value = "champ item";
              element.style.left = item.style.left;
              element.style.bottom = `${parseInt(item.style.bottom) + 1}em`;
              this.ground.appendChild(element);
            }
            if (item.classList.contains("brick")) {
              item.classList.add("bump");
              setTimeout(() => {
                item.remove();
              }, 100);
            }
            return;
          }
          if (!this.onJump && pY <= y + h * 2 && pY > y + h) {
            //Floor
            if (item.classList.contains("pipe") && this.moveY === 1) {
              this.posX=(x+w/2)
              this.noControl = true;
              this.character.classList.remove("snip");
            }
            this.posY = y + h * 2;
            stillOnbox = true;
            return;
          }
        }
      });
      if (this.posY > 0 && !this.onJump) {
        this.onFloor = stillOnbox;
      }
    },
    falling() {
      this.posY -= 7 * this.deltaLag * this.speedRatio;
      if (this.posY < 0) {
        this.posY = 0;
        this.onFloor = true;
      }
    },
    jump() {
      if (this.canJump && !this.onJump) {
        this.canJump = false;
        this.onJump = true;
        this.character.classList.add("jump");
        setTimeout(() => {
          this.onJump = false;
          this.onFloor = false;
        }, 320);
      }
    },
    updatePos() {
      this.character.style.left = `${parseInt(this.posX)}px`;
      this.character.style.bottom = `${parseInt(this.posY)}px`;
    },
    convertToObject(obj, type = "item") {
      obj.classList.add(type);
    },
    loadMap() {
      for (obj of this.jsonMap) {
        let nodeObj = null;
        switch (Object.keys(obj)[0]) {
          case "piece":
            nodeObj = document.createElement("i");
            nodeObj.classList.value = "piece";
            nodeObj.style.left = `${obj["piece"][0]}em`;
            nodeObj.style.bottom = `${obj["piece"][1]}em`;
            this.ground.appendChild(nodeObj);
            break;
          case "box":
            nodeObj = document.createElement("b");
            nodeObj.classList.value = "bloc1";
            nodeObj.style.left = `${obj["box"][0]}em`;
            nodeObj.style.bottom = `${obj["box"][1]}em`;
            this.ground.appendChild(nodeObj);
            break;
          case "guess":
            nodeObj = document.createElement("b");
            nodeObj.classList.value = "bloc1 guess";
            nodeObj.style.left = `${obj["guess"][0]}em`;
            nodeObj.style.bottom = `${obj["guess"][1]}em`;
            this.ground.appendChild(nodeObj);
            break;
          case "pipe":
            nodeObj = document.createElement("b");
            nodeObj.classList.value = "pipe";
            nodeObj.style.left = `${obj["pipe"][0]}em`;
            nodeObj.style.bottom = `${obj["pipe"][1]}em`;
            this.ground.appendChild(nodeObj);
            break;
          case "brick":
            nodeObj = document.createElement("b");
            nodeObj.classList.value = "brick";
            nodeObj.style.left = `${obj["brick"][0]}em`;
            nodeObj.style.bottom = `${obj["brick"][1]}em`;
            this.ground.appendChild(nodeObj);
            break;
        }
      }
    },
  },
  mounted() {
    let that = this;
    this.character = document.querySelector("#character");
    this.ground = document.querySelector("#ground");
    this.loadMap();
    document
      .querySelectorAll("#ground i")
      .forEach((obj) => this.convertToObject(obj));
    this.started = true;
    this.updatePos();
    if (this.characterTall) {
      this.character.classList.remove("mini");
    } else {
      this.character.classList.add("mini");
    }
    document.addEventListener("keydown", (e) => {
      switch (e.key.toLowerCase()) {
        case "z":
        case "arrowup":
          that.moveY = -1;
          break;
        case "s":
        case "arrowdown":
          that.moveY = 1;
          break;
        case "q":
        case "arrowleft":
          that.moveX = -1;
          break;
        case "d":
        case "arrowright":
          that.moveX = 1;
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key.toLowerCase()) {
        case "z":
        case "arrowup":
          if (that.moveY === -1) that.moveY = 0;
          break;
        case "s":
        case "arrowdown":
          if (that.moveY === 1) that.moveY = 0;
          break;
        case "q":
        case "arrowleft":
          if (that.moveX === -1) that.moveX = 0;
          break;
        case "d":
        case "arrowright":
          if (that.moveX === 1) that.moveX = 0;
          break;
      }
    });
  },
}).mount("#ground");
