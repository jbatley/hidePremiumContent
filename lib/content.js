const blockedContent=".svgIcon--star";chrome.runtime.onMessage.addListener(function(a,b,c){let d=[].slice.call(document.querySelectorAll(blockedContent)).map(a=>a.closest(".streamItem"));"hide"==a.command?(hideContent(d),c({type:"hiddem"})):"show"==a.command&&(showContent(d),c({type:"showen"}))});function hideContent(a){a.forEach(a=>{a.style.display="none"})}function showContent(a){a.forEach(a=>{a.style.display="block"})}