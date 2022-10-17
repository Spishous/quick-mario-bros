class Multiplayer {
  debugMode = false;
  wss;
  /** @Param {} */
  onConnected;
  /** @Param {} */
  onDisconnected;
  /** @Param {signal:"error", details} */
  onError;
  /** @Param {signal:"login-ok", peerID, alias} */
  onLogged;
  /** @Param {} */
  onSendMsg;
  /** @Param {signal:'join-ok', room, instance, isHost: [bool]} */
  onJoinedRoom;
  /** @Param {signal:'left-ok'} */
  onLeftRoom;
  /** when room is closed or kicked from room by host
   * @Param {signal: 'room-close', details} | {signal: 'kicked', details} */
  onKicked;
  /** when a peer join room
   * @Param {signal:'peer-join', peerID, alias} */
  onPeerConnected;
  /** when a peer left room
   * @Param {signal:'peer-left', peerID, alias} */
  onPeerDisconnected;
  /** @Param "{message, peer}" */
  onMessage;
  isConnected = false;
  inConnect = false;
  isInRoom = false;
  isLogged = false;
  isHost = false;
  peerAlias = "";
  peerID = "";
  _keepAlive = null;

  constructor() {
    this.wss = [];
    this.autoReconnect = false;
    this.init();
  }
  init() {
    if (this.keepAlive) {
      clearInterval(this.keepAlive);
    }
    this.isConnected =
      this.inConnect =
      this.isInRoom =
      this.isLogged =
      this.isHost =
        false;
    this.peerList = [];
    this.roomlist = [];
    this.peerAlias = "";
    this.peerID = "";
  }
  enableDebugMode() {
    this.debugMode = true;
  }
  connect(url = "ws://localhost:8100", reconnect = false) {
    localStorage.setItem("wss-url", url);
    if (this.isConnected || this.inConnect) {
      this.wss.onerror = this.wss.onopen = this.wss.onclose = null;
      try {
        this.wss.close();
      } catch (e) {
        console.warn(e);
      }
      this.init();
      this.autoReconnect = true;
    }
    if (!this.inConnect) {
      this.wss = new WebSocket(url);
      this.init();
      this.inConnect = true;
      this.wss.onopen = () => {
        this.showDebug("WSS open");
        this.inConnect = false;
        this.isConnected = true;
        if (reconnect) {
          this.peerID = localStorage.getItem("wss-peerID");
          this.alias = localStorage.getItem("wss-alias");
          this.room = localStorage.getItem("wss-room");
          this.instance = localStorage.getItem("wss-instance");
          if (this.peerID && this.alias && this.room && this.instance) {
            this.sendData({
              signal: "reconnection",
              peerID: this.peerID,
              alias: this.alias,
              room: this.room,
              instance: this.instance,
            });
            this.isInRoom = true;
            this.isLogged = true;
          } else {
            let err = {
              signal: "error",
              details:
                "You need to be connected once before try to reconnected",
            };
            try {
              this.showDebug(err, true);
              this.onError(err);
            } catch (e) {}
          }
        } else {
          try {
            this.showDebug("Connected");
            this.onConnected();
          } catch (e) {}
        }
      };
      this.wss.onerror = (e) => {
        this.init();
        try {
          this.showDebug(e, true);
          this.onError(e);
        } catch (e) {}
      };
      this.wss.onclose = () => {
        try {
          this.showDebug("Disconnected");
          this.onDisconnected();
        } catch (e) {}
        this.init();
      };
      this.wss.onmessage = ({ data }) => {
        let isJSON,
          dataJson = {};
        try {
          dataJson = JSON.parse(data);
          isJSON = true;
        } catch (e) {
          isJSON = false;
        }
        if (isJSON) {
          switch (dataJson.signal) {
            case "login-ok":
              this.alias = dataJson.alias;
              this.peerID = dataJson.peerID;
              localStorage.setItem("wss-peerID", dataJson.peerID);
              localStorage.setItem("wss-alias", dataJson.alias);
              this.peerAlias = dataJson.alias;
              this.isLogged = true;
              this.oldPeerID = dataJson.peerID;
              try {
                this.onLogged(dataJson);
                this.showDebug(dataJson);
              } catch (e) {
                console.error(e);
              }
              break;
            case "join-ok":
              this.instance = dataJson.instance;
              this.room = dataJson.room;
              localStorage.setItem("wss-room", dataJson.room);
              localStorage.setItem("wss-instance", dataJson.instance);
              this.isInRoom = true;
              this.isHost = dataJson.isHost;
              if (!this.keepAlive) {
                this.keepAlive = setInterval(() => {
                  if (this.isInRoom) {
                    this.sendData({ message: "ping" });
                  }else{
                    clearInterval(this.keepAlive)
                  }
                }, 20000);
              }
              try {
                this.onJoinedRoom(dataJson);
                this.showDebug(dataJson);
              } catch (e) {}
              break;
            case "left-ok":
              delete this.instance;
              delete this.room;
              this.isInRoom = false;
              try {
                this.onLeftRoom(dataJson);
                this.showDebug(dataJson);
              } catch (e) {}
              break;
            case "room-list":
              this.roomlist = {
                update: Date.now(),
                list: dataJson.data,
              };
              break;
            case "peer-list":
              this.peerList = [...dataJson.list];
              this.peerList.push({
                peerID: this.peerID,
                alias: this.alias,
              });
              try {
                for(let peer of dataJson.list){
                    peer.signal='peer-join';
                    this.showDebug(peer);
                    this.onPeerConnected(peer);
                };
              } catch (e) {console.error(e);}
              break;
            case "peer-join":
              this.peerList.push({
                peerID: dataJson.peerID,
                alias: dataJson.alias,
              });
              try {
                this.showDebug(dataJson);
                this.onPeerConnected(dataJson);
              } catch (e) {}
              break;
            case "peer-left":
              for (let i = 0, l = this.peerList.length; i < l; i++) {
                if (this.peerList[i].peerID === dataJson.peerID) {
                  this.peerList.splice(i, 1);
                  break;
                }
              }
              try {
                this.showDebug(dataJson);
                this.onPeerDisconnected(dataJson);
              } catch (e) {}
              break;
            case "kicked":
            case "room-close":
              this.autoReconnect = false;
              this.isInRoom = false;
              this.peerList = [];
              try {
                this.showDebug(dataJson);
                this.onKicked(dataJson);
              } catch (e) {}
              break;
            case "error":
              try {
                this.showDebug(dataJson, true);
                this.onError(dataJson);
              } catch (e) {}
              break;
            default:
              try {
                this.showDebug(["Receive:", dataJson]);
                this.onMessage(dataJson);
              } catch (e) {}
              break;
          }
        }
      };
    }
  }
  reconnect() {
    if (!this.inConnect && !this.isConnected) {
      this.connect(localStorage.getItem("wss-url"), true);
    }
  }

  /**
   * [peerID:...,alias:...]
   * @returns {[]|*}
   */
  getPeerList() {
    return this.peerList;
  }
  getMyPeerID() {
    return this.peerID;
  }
  getMyPeerAlias() {
    return this.alias;
  }
  getMyRoom() {
    return this.room;
  }
  getMyInstance() {
    return this.instance;
  }
  getPeerAliasFromID(peerID) {
    let response = "";
    this.peerList.forEach((peer) => {
      if (peer.peerID === peerID) {
        response = peer.alias;
      }
    });
    return response;
  }
  disconnect() {
    this.autoReconnect = false;
    if (this.wss) {
      this.wss.close();
    }
    this.inConnect = false;
  }
  sendMsg(message, sendCopy = false) {
    if (this.isLogged && this.isInRoom && message !== "") {
      this.sendData({ message: message, return: sendCopy });
      try {
        this.showDebug(["Send:", message]);
        this.onSendMsg(message);
      } catch (e) {}
    }
  }
  log(Alias) {
    if (Alias !== "") {
      this.sendData({ signal: "login", alias: Alias });
    }
  }
  joinRoom(Room, Instance = 0) {
    if (Room !== "" && Instance !== "") {
      this.sendData({
        signal: "join",
        room: Room,
        instance: Instance,
      });
    } else {
      try {
        let err = {
          signal: "error",
          details: "You need to be logged before join a room",
        };
        this.showDebug(err, true);
        this.onError(err);
      } catch (e) {}
    }
  }
  leftRoom() {
    if (typeof this.isInRoom !== "undefined") {
      this.sendData({
        signal: "left",
      });
    }
  }
  sendData(array) {
    if (this.isConnected) {
      this.wss.send(JSON.stringify(array));
    }
  }
  isSupportMultiplayer() {
    return "WebSocket" in window || "MozWebSocket" in window;
  }

  /**
   * return list of current room
   * @async
   * @returns {Promise<array>}
   */
  async getListRoomPublic() {
    let that = this;
    function thread() {
      return new Promise((resolve) => {
        let interval = setInterval(function () {
          if (
            typeof that.roomlist !== "undefined" &&
            that.roomlist.update + 30 >= Date.now()
          ) {
            resolve(that.roomlist.list);
            clearInterval(interval);
          }
        }, 20);
      });
    }
    if (this.isConnected) {
      if (typeof that.roomlist === "undefined") {
        this.roomlist = [];
      }
      this.roomlist.update = 0;
      this.sendData({
        signal: "room-list",
      });
      return await thread();
    }
    return false;
  }
  debug(index) {
    this.sendData({
      signal: "debug" + index,
    });
  }
  showDebug(msg, isError = false) {
    if (this.debugMode) {
      if (isError) {
        console.error(msg);
      } else {
        console.warn(msg);
      }
    }
  }
}
