
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"screen{ width: 100vh; height: 100vw; position: absolute; left: 50%; top: 50%; overflow: hidden; transform: translate3d(-50%,-50%,0) rotate(90deg); -webkit-transform: translate3d(-50%,-50%,0) rotate(90deg); margin: auto; background: #09BB07; }\n",],undefined,{path:"./pages/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      