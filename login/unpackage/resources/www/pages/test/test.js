
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"img{ width: ",[0,200],"; height: ",[0,200],"; margin-left: 20%; }\n",],undefined,{path:"./pages/test/test.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/test/test.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      