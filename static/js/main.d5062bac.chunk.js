(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{207:function(e,t){},307:function(e,t,a){"use strict";(function(e){var n=a(7),r=a.n(n),s=a(30),i=a(308),l=a(309),c=a(327),o=a(328),d=a(0),u=a.n(d),p=a(59),h=a(120),g=a(60),m=a(772),f=a(79),y=(a(650),new Intl.NumberFormat),_={game_address:"",all_rooms:[],community_cards:[],my_hand:[{},{}],player_a_hand:[{},{}],player_b_hand:[{},{}],player_a:"",player_a_bet:0,player_a_wallet:0,player_b:"",player_b_bet:0,player_b_wallet:0,stage:"",turn:"",new_room_name:"",createLoading:!1,joinLoading:!1,checkLoading:!1,callLoading:!1,raiseLoading:!1},b=function(t){Object(o.a)(n,t);var a=Object(c.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).state=Object.assign({},_,{game_address:window.location.hash.replace("#","")}),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,i,l,c,o,d,g,m=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.onhashchange=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.setState(Object.assign({},_,{game_address:window.location.hash.replace("#","")}));case 1:case"end":return e.stop()}}),e)}))),(t=localStorage.getItem("mnemonic"))||(t=h.generateMnemonic(),localStorage.setItem("mnemonic",t)),(a=localStorage.getItem("tx_encryption_seed"))?a=Uint8Array.from(JSON.parse("[".concat(a,"]"))):(a=p.EnigmaUtils.GenerateNewSeed(),localStorage.setItem("tx_encryption_seed",a)),e.next=7,p.Secp256k1Pen.fromMnemonic(t);case 7:n=e.sent,i=p.pubkeyToAddress(p.encodeSecp256k1Pubkey(n.pubkey),"secret"),l=new p.SigningCosmWasmClient("https://bootstrap.int.testnet.enigma.co",i,(function(e){return n.sign(e)}),a,{init:{amount:[{amount:"0",denom:"uscrt"}],gas:"500000"},exec:{amount:[{amount:"0",denom:"uscrt"}],gas:"500000"}}),this.setState({secretJsClient:l,myWalletAddress:i,mnemonic:t}),c=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===window.location.hash){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,l.getContracts(12);case 5:t=e.sent,m.setState({all_rooms:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("refreshAllRooms",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(c,0),setInterval(c,200),o=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==window.location.hash){e.next=2;break}return e.abrupt("return");case 2:if(m.state.player_a&&m.state.player_b){e.next=4;break}return e.abrupt("return");case 4:if(m.state.player_a===m.state.myWalletAddress||m.state.player_b===m.state.myWalletAddress){e.next=6;break}return e.abrupt("return");case 6:if(JSON.stringify(m.state.my_hand)===JSON.stringify([{},{}])){e.next=8;break}return e.abrupt("return");case 8:return t=+localStorage.getItem(m.state.game_address),e.prev=9,e.next=12,l.queryContractSmart(m.state.game_address,{get_my_hand:{secret:t}});case 12:a=e.sent,m.setState({my_hand:a}),m.state.myWalletAddress===m.state.player_a?m.setState({player_a_hand:m.state.my_hand}):m.state.myWalletAddress===m.state.player_b&&m.setState({player_b_hand:m.state.my_hand}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.log("refreshMyHand",e.t0);case 20:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(o,0),setInterval(o,200),d=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.getAccount(i);case 3:(t=e.sent)?m.setState({myWalletBalance:"(".concat(y.format(+t.balance[0].amount/1e6)," SCRT)")}):m.setState({myWalletBalance:u.a.createElement("span",null,"(No funds - Go get some at"," ",u.a.createElement("a",{href:"https://faucet.testnet.enigma.co",rel:"noopener noreferrer",target:"_blank"},"https://faucet.testnet.enigma.co"),")")}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("refreshMyWalletBalance",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(d,0),setInterval(d,2500),g=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==window.location.hash){e.next=2;break}return e.abrupt("return");case 2:if(!m.state.stage.includes("Ended")){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,l.queryContractSmart(m.state.game_address,{get_public_data:{}});case 7:0===(t=e.sent).player_a_hand.length&&(t.player_a_hand=[{},{}]),0===t.player_b_hand.length&&(t.player_b_hand=[{},{}]),m.state.myWalletAddress===t.player_a?m.setState({player_a_hand:m.state.my_hand,player_b_hand:t.player_b_hand}):m.state.myWalletAddress===t.player_b?m.setState({player_a_hand:t.player_a_hand,player_b_hand:m.state.my_hand}):m.setState({player_a_hand:t.player_a_hand,player_b_hand:t.player_b_hand}),m.setState({community_cards:t.community_cards,player_a:t.player_a,player_a_bet:t.player_a_bet,player_a_wallet:t.player_a_wallet,player_b:t.player_b,player_b_bet:t.player_b_bet,player_b_wallet:t.player_b_wallet,stage:t.stage,starter:t.starter,turn:t.turn,last_play:t.last_play}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("refreshTableState",e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(g,0),setInterval(g,200);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createRoom",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({createLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.instantiate(12,{},this.state.new_room_name);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("createRoom",e.t0);case 9:this.setState({new_room_name:"",createLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"joinRoom",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.game_address){t.next=2;break}return t.abrupt("return");case 2:return this.setState({joinLoading:!0}),(a=+localStorage.getItem(this.state.game_address))||(n=p.EnigmaUtils.GenerateNewSeed(),a=e.from(n.slice(0,8)).readUInt32BE(0)),t.prev=5,t.next=8,this.state.secretJsClient.execute(this.state.game_address,{join:{secret:a}});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),console.log("join",t.t0);case 13:localStorage.setItem(this.state.game_address,a),this.setState({joinLoading:!1});case 15:case"end":return t.stop()}}),t,this,[[5,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"fold",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({foldLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{fold:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("fold",e.t0);case 9:this.setState({foldLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"check",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({checkLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{check:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("check",e.t0);case 9:this.setState({checkLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"call",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({callLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{call:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("call",e.t0);case 9:this.setState({callLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"raise",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({raiseLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{raise:{amount:1e4}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("raise",e.t0);case 9:this.setState({raiseLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(""===window.location.hash)return u.a.createElement("div",{style:{color:"white"}},u.a.createElement(g.Table,null,u.a.createElement("div",{style:{position:"absolute",top:0,left:0,padding:10}},u.a.createElement("div",null,"You: ",this.state.myWalletAddress," ",this.state.myWalletBalance)),u.a.createElement("center",null,u.a.createElement("div",null,u.a.createElement(m.a.Input,{value:this.state.new_room_name,onChange:function(t,a){var n=a.value;return e.setState({new_room_name:n})}}),u.a.createElement(f.a,{loading:this.state.createLoading,disabled:this.state.createLoading,onClick:this.createRoom.bind(this)},"Create!")),u.a.createElement("br",null),u.a.createElement("div",null,"All rooms"),this.state.all_rooms.map((function(e,t){return u.a.createElement("div",{key:t},e.label,": ",u.a.createElement("a",{href:"#"+e.address},e.address))})))));var t=this.state.stage;t.includes("EndedWinner")?(t=t.replace("EndedWinner",""),t="Player ".concat(t," Wins!")):t.includes("EndedDraw")?t="It's a Tie!":"WaitingForPlayersToJoin"===t?t=u.a.createElement("span",null,u.a.createElement("div",null,"Waiting for players"),u.a.createElement(f.a,{loading:this.state.joinLoading,disabled:this.state.joinLoading||this.state.player_a&&this.state.player_a===this.state.myWalletAddress||this.state.player_b&&this.state.player_b===this.state.myWalletAddress,onClick:this.joinRoom.bind(this)},"Join")):t&&(t+=" betting round");var a="Player A",n="->";this.state.turn===this.state.player_b&&(a="Player B",n="<-"),a="Turn: "+a,this.state.stage&&!this.state.stage.includes("Ended")||(a="",n=""),this.state.turn||(a="",n="");var r="";return this.state.game_address&&(r="Room: "+this.state.game_address),u.a.createElement("div",{style:{color:"white"}},u.a.createElement(g.Table,null,u.a.createElement("div",{style:{position:"absolute",top:0,left:0,padding:10}},u.a.createElement("div",null,"You: ",this.state.myWalletAddress," ",this.state.myWalletBalance)),u.a.createElement("div",{style:{position:"absolute",top:0,right:0,padding:10}},u.a.createElement("a",{href:"/#"},"Return to loby")),u.a.createElement("div",{style:{position:"absolute",width:"100%",textAlign:"center"}},u.a.createElement("center",null,u.a.createElement("div",null,r),u.a.createElement("div",null,t),u.a.createElement("div",null,a),u.a.createElement("div",null,n)),u.a.createElement("br",null),this.state.community_cards.map((function(e,t){return v(e,!0,t)})),u.a.createElement("center",null,u.a.createElement("div",{style:{padding:35}},u.a.createElement("span",{style:{marginRight:250}},"Total Bet: ",y.format(this.state.player_b_bet)),u.a.createElement("span",null,"Total Bet: ",y.format(this.state.player_a_bet))))),u.a.createElement("center",null,u.a.createElement("div",{style:{position:"absolute",bottom:0,right:0,padding:10}},u.a.createElement("div",null,"Player A",this.state.player_a===this.state.myWalletAddress?" (You)":""),u.a.createElement("div",null,"Credits left: ",y.format(this.state.player_a_wallet)),u.a.createElement("div",null,this.state.player_a))),u.a.createElement(g.Hand,{style:{position:"absolute",right:"35vw"},cards:this.state.player_a_hand.map((function(e){return v(e)}))}),u.a.createElement("center",null,u.a.createElement("div",{style:{position:"fixed",bottom:0,padding:10,width:"100%",textAlign:"center"}},u.a.createElement(f.a,{loading:this.state.checkLoading,onClick:this.check.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Check"),u.a.createElement(f.a,{loading:this.state.callLoading,onClick:this.call.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Call"),u.a.createElement(f.a,{loading:this.state.raiseLoading,onClick:this.raise.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Raise"),u.a.createElement(f.a,{loading:this.state.foldLoading,onClick:this.fold.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Fold"))),u.a.createElement("center",null,u.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,padding:10}},u.a.createElement("div",null,"Player B"," ",this.state.player_b===this.state.myWalletAddress?" (You)":""),u.a.createElement("div",null,"Credits left: ",y.format(this.state.player_b_wallet)),u.a.createElement("div",null,this.state.player_b))),u.a.createElement(g.Hand,{style:{position:"absolute",left:"23vw"},cards:this.state.player_b_hand.map((function(e){return v(e)}))})))}}]),n}(u.a.Component);function v(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=e.suit,s=e.value;return e.value&&e.suit?(r=r[0],t="Two"===s?"2":"Three"===s?"3":"Four"===s?"4":"Five"===s?"5":"Six"===s?"6":"Seven"===s?"7":"Eight"===s?"8":"Nine"===s?"9":s[0],a?u.a.createElement(g.Card,{key:n,face:t,suit:r}):{face:t,suit:r}):a?u.a.createElement(g.Card,{key:n}):{}}t.a=b}).call(this,a(20).Buffer)},339:function(e,t,a){e.exports=a(771)},344:function(e,t,a){},348:function(e,t){},370:function(e,t){},372:function(e,t){},423:function(e,t){},424:function(e,t){},468:function(e,t){},470:function(e,t){},519:function(e,t){},562:function(e,t,a){var n={"./2C.png":563,"./2D.png":564,"./2H.png":565,"./2S.png":566,"./3C.png":567,"./3D.png":568,"./3H.png":569,"./3S.png":570,"./4C.png":571,"./4D.png":572,"./4H.png":573,"./4S.png":574,"./5C.png":575,"./5D.png":576,"./5H.png":577,"./5S.png":578,"./6C.png":579,"./6D.png":580,"./6H.png":581,"./6S.png":582,"./7C.png":583,"./7D.png":584,"./7H.png":585,"./7S.png":586,"./8C.png":587,"./8D.png":588,"./8H.png":589,"./8S.png":590,"./9C.png":591,"./9D.png":592,"./9H.png":593,"./9S.png":594,"./AC.png":595,"./AD.png":596,"./AH.png":597,"./AS.png":598,"./BACK.png":599,"./JC.png":600,"./JD.png":601,"./JH.png":602,"./JS.png":603,"./KC.png":604,"./KD.png":605,"./KH.png":606,"./KS.png":607,"./QC.png":608,"./QD.png":609,"./QH.png":610,"./QS.png":611,"./TC.png":612,"./TD.png":613,"./TH.png":614,"./TS.png":615,"./extra/aces.png":616,"./extra/back.png":617,"./extra/bridge-back-blue.png":618,"./extra/bridge-back-gray.png":619,"./extra/bridge-back-green.png":620,"./extra/bridge-back-purple.png":621,"./extra/bridge-back-red.png":622,"./extra/bridge-back-yellow.png":623,"./extra/bridge-backs.png":624,"./extra/honor-clubs.png":625,"./extra/honor-diamonds.png":626,"./extra/honor-hearts.png":627,"./extra/honor-spades.png":628};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=562},629:function(e,t,a){var n={"./black.png":630,"./blue.png":631,"./green.png":632,"./red.png":633,"./white.png":634};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=629},635:function(e,t,a){var n={"./burlap.png":636,"./cardboard.png":637,"./default-light.png":638,"./default.png":639,"./fabric.png":640,"./felt.png":641,"./leather.png":642,"./noise.png":643,"./paper.png":644,"./pinstripe.png":645,"./slate.png":646,"./subtle.png":647,"./suede.png":648,"./twill.png":649};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=635},771:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(57),i=a.n(s),l=(a(344),a(307));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[339,1,2]]]);
//# sourceMappingURL=main.d5062bac.chunk.js.map