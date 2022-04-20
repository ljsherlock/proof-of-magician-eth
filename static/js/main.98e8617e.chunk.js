(this["webpackJsonp@my-app/react-app"]=this["webpackJsonp@my-app/react-app"]||[]).push([[0],{300:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"metadataURI","type":"string"}],"name":"mintToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},301:function(e){e.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},316:function(e,t,n){},353:function(e,t){},356:function(e,t){},359:function(e,t){},363:function(e,t){},390:function(e,t){},392:function(e,t){},405:function(e,t){},407:function(e,t){},437:function(e,t){},439:function(e,t){},529:function(e,t){},530:function(e,t){},632:function(e,t,n){"use strict";n.r(t);var a,r,i,s,o,p,u,c=n(36),d=(n(316),n(654)),l=n(656),y=n(660),m=n(645),b=n(652),f=n(7),h=n.n(f),v=n(297),T=n.n(v),O=n(22),j=n(4),g=n(5),w=n(20),x=n(8),k=n(9),R=n(14),I=n(3),M=n.n(I),S=n(60),F=n(644),B=n(137),C=n(657),A=n(658),P=n(298),E=n.n(P),D=(n(339),{erc20:n(300),ownable:n(301)}),U={ceaErc20:"0x51C449b5FD5dee173658546b993Bd1680fC61a02"},J=function(){function e(){Object(j.a)(this,e),this.chunks=[],this.blob=null,this.url=null,this.mediaRecorder=null,this.stream=null,this.startRecording.bind(this),this.stopRecording.bind(this)}return Object(g.a)(e,[{key:"startRecording",value:function(){var e=Object(O.a)(M.a.mark((function e(t,n,a,r,i,s){var o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({ipfsResult:null}),e.next=4,navigator.mediaDevices.getDisplayMedia({preferCurrentTab:!0});case 4:return this.stream=e.sent,this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:"video/webm"}),o=[],this.mediaRecorder.ondataavailable=function(e){console.log("e.data",e.data),console.log("chunks",o),o.push(e.data)},console.log("recording"),console.log("this.mediaRecorder",this.mediaRecorder),this.mediaRecorder.onstop=function(){var e=new Blob(o,{type:"video/webm"});console.log(e);t(e,n,a,r,i)},this.mediaRecorder.start(),e.abrupt("return",{mediaRecorder:this.mediaRecorder,stream:this.stream});case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,i,s){return e.apply(this,arguments)}}()},{key:"stopRecording",value:function(e,t){console.log("mediaRecorder",e),e.stop(),t.getTracks().forEach((function(e){e.stop()}))}}]),e}(),N=n(15),z=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={initiated:!1,mediaRecorder:null,stream:null,blob:null,url:null},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recorder=new J,console.log("this.recorder",this.recorder),this.chunks=this.recorder.chunks,this.blob=this.recorder.blob,this.url=this.recorder.url,this.startRecording=this.recorder.startRecording,this.stopRecording=this.recorder.stopRecording;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBlob",value:function(){return this.blob}},{key:"handleStart",value:function(){var e=Object(O.a)(M.a.mark((function e(){var t,n,a,r,i,s,o,p,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.addBlobToIPFS,a=t.account,r=t.mintToken,i=t.send,s=t.ipfsResultObj,e.next=3,this.startRecording(n,a,"11",r,i,s);case 3:o=e.sent,p=o.mediaRecorder,u=o.stream,console.log("mediaRecorder",p),this.setState({mediaRecorder:p,stream:u});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleStop",value:function(){this.stopRecording(this.state.mediaRecorder,this.state.stream)}},{key:"render",value:function(){var e=this;return console.log("chunks",this.chunks),Object(N.jsxs)("div",{children:[Object(N.jsx)("video",{src:this.url}),Object(N.jsx)("button",{onClick:function(){return e.handleStart()},children:"Start Recording"}),Object(N.jsx)("button",{onClick:function(){return e.handleStop()},children:"Stop Recording"})]})}}]),n}(h.a.Component),W=z,_=n(63),q=n(84),G=q.a.div(a||(a=Object(_.a)(["\n  align-items: center;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  font-size: calc(10px + 2vmin);\n  justify-content: center;\n  margin-top: 40px;\n"]))),H=q.a.button(r||(r=Object(_.a)(["\n  background-color: white;\n  border: none;\n  border-radius: 8px;\n  color: #282c34;\n  cursor: pointer;\n  font-size: 16px;\n  margin: 0px 20px;\n  padding: 12px 24px;\n  text-align: center;\n  text-decoration: none;\n"]))),K=q.a.div(i||(i=Object(_.a)(["\n  background-color: #282c34;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh);\n"]))),L=q.a.header(s||(s=Object(_.a)(["\n  align-items: center;\n  background-color: #282c34;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  min-height: 70px;\n"]))),Q=(q.a.img(o||(o=Object(_.a)(["\n  height: 40vmin;\n  margin-bottom: 16px;\n  pointer-events: none;\n"]))),q.a.a.attrs({target:"_blank",rel:"noopener noreferrer"})(p||(p=Object(_.a)(["\n  color: #61dafb;\n  margin-top: 8px;\n"]))),n(655));Object(Q.a)(u||(u=Object(_.a)(["\n  {\n    transfers(first: 10) {\n      id\n      from\n      to\n      value\n    }\n  }\n"])));function V(){var e=Object(f.useState)(""),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),i=Object(B.a)(),s=i.account,o=i.activateBrowserWallet,p=i.deactivate,u=i.error;return Object(f.useEffect)((function(){a(r||(s?Object(C.a)(s):""))}),[s,r,a]),Object(f.useEffect)((function(){u&&console.error("Error while connecting wallet:",u.message)}),[u]),Object(N.jsxs)(H,{onClick:function(){s?p():o()},children:[""===n&&"Connect Wallet",""!==n&&n]})}var X=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).addBlobToIPFS=a.addBlobToIPFS.bind(Object(w.a)(a)),a.mintToken=a.mintToken.bind(Object(w.a)(a)),a.state={ipfsResultObj:{},minted:!1},a}return Object(g.a)(n,[{key:"mintToken",value:function(){var e=Object(O.a)(M.a.mark((function e(t,n,a){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("this.state.minted",this.state.minted),console.log("metadataURI",t),!t||!1!==this.state.minted){e.next=8;break}return e.next=5,a(n,t);case 5:return r=e.sent,console.log("tokenId",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"addBlobToIPFS",value:function(){var e=Object(O.a)(M.a.mark((function e(t,n,a,r,i){var s,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("account:",n),(s=new FormData).append("blob",t),s.append("account",n),o=this,E()({method:"post",url:"http://localhost:".concat("3002","/ipfs"),data:s,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),o.setState({ipfsResultObj:e.data});var t=r(e.data.metadataURI,n,i);console.log("Token minted. TokenId = ".concat(t))})).catch((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,i){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ipfsResultObj;return console.log("changed"),Object(N.jsx)(Y,{ipfsResultObj:e,addBlobToIPFS:this.addBlobToIPFS,mintToken:this.mintToken})}}]),n}(h.a.Component);function Y(e){var t=e.ipfsResultObj,n=e.addBlobToIPFS,a=e.mintToken,r=Object(B.a)().account,i=new S.a(U.ceaErc20,D.erc20);console.log("contract",i);var s=Object(A.a)(i,"mintToken").send;return Object(N.jsxs)(K,{children:[Object(N.jsx)(L,{children:Object(N.jsx)(V,{})}),Object(N.jsx)(G,{children:Object(N.jsx)(W,{addBlobToIPFS:n,account:r,mintToken:a,send:s,ipfsResultObj:t})})]})}var Z=X,$={readOnlyChainId:m.c.chainId,readOnlyUrls:Object(c.a)({},m.c.chainId,"https://mainnet.infura.io/v3/defba93b47f748f09fcead8282b9e58e")},ee=new d.a({cache:new l.a,uri:"https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app"});T.a.render(Object(N.jsx)(h.a.StrictMode,{children:Object(N.jsx)(b.a,{config:$,children:Object(N.jsx)(y.a,{client:ee,children:Object(N.jsx)(Z,{})})})}),document.getElementById("root"))}},[[632,1,2]]]);
//# sourceMappingURL=main.98e8617e.chunk.js.map