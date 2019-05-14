
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"logo{ height: ",[0,200],"; width: ",[0,200],"; padding-top: ",[0,50],"; padding-left: 35%; }\n.",[1],"login{ width:100%; height:100%; background-size: contain; position: flex; z-index:3000 ; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-top: ",[0,80],"; }\n.",[1],"login-xy{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"login-txt{ color: #C8C7CC; font-size: ",[0,35],"; }\n.",[1],"line{ width:70%; height:1px; border-top:solid black 1px; margin-left: 15%; }\n.",[1],"forgot-psd{ color: black; width: 80%; text-align: right; margin-bottom: ",[0,30],"; }\n.",[1],"button{ width: 60%; }\n",],undefined,{path:"./pages/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      