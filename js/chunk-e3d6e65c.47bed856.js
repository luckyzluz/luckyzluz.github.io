(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3d6e65c"],{"0e8c":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");var r=n("bc3a"),u=n.n(r),c=u.a.create();c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var o=c;function i(e){return new Promise((function(t){o.request({url:e,method:"get"}).then((function(e){t(e)}))}))}},"61e3":function(e,t,n){"use strict";var r=n("ecc2"),u=n.n(r);u.a},"9be6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"jiexi"}},[n("input",{ref:"getmusic",attrs:{type:"text",value:"175262056",placeholder:"输入酷我链接"}}),n("button",{on:{click:function(t){return e.funmusic()}}},[e._v("解析")]),n("br"),n("audio",{attrs:{src:e.mlink,controls:"controls"}},[e._v(" Your browser does not support the audio element. ")])])},u=[],c=n("0e8c"),o={data:function(){return{mlink:""}},methods:{funmusic:function(){var e=this,t=/^\d{9}$/;t.test(this.$refs.getmusic.value)?(console.log(this.$refs.getmusic.value),Object(c["a"])("/url?format=mp3&rid=".concat(this.$refs.getmusic.value,"&response=url&type=convert_url3&br=128kmp3")).then((function(t){console.log(t),console.log(t.data.url),e.mlink=t.data.url}))):alert("请输入六位纯数字ID")},initPlayer:function(){new DPlayer({live:!0,autoplay:!1,container:document.getElementById("dplayer"),video:{url:m3u8url,pic:picUrl,type:"customHls",customType:{customHls:function(e,t){var n=new Hls;n.loadSource(e.src),n.attachMedia(e)}}}})}},mounted:function(){}},i=o,s=(n("61e3"),n("2877")),l=Object(s["a"])(i,r,u,!1,null,null,null);t["default"]=l.exports},ecc2:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e3d6e65c.47bed856.js.map