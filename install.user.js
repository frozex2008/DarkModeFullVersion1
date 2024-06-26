// ==UserScript==
// @name         Auto-Duolingo
// @version      2.0.7
// @author       DevX
// @namespace    http://tampermonkey.net/
// @description  Automation tool for Duolingo, automatically solving exercises, stories, earning XP points, and supporting Duolingo rankings!
// @match        https://*.duolingo.com/*
// @grant        none
// @license      MIT
// @icon         https://api.autoduolingo.click/assets/favicon.ico
// @downloadURL https://update.greasyfork.org/scripts/487867/Auto-Duolingo.user.js
// @updateURL https://update.greasyfork.org/scripts/487867/Auto-Duolingo.meta.js
// ==/UserScript==

// If you see this command without any accompanying install button, 
// it's likely you haven't installed the 'Tampermonkey' extension
// or you're opening the link in an unsupported browser. Try installing
// the 'Tampermonkey' extension or switch to a different browser to
// attempt the installation again!
// ==================================>
// Sau khi update, hãy quay lại trang web Duolingo và làm mới trang để
// hệ thống tự động cập nhật lại phiên bản mới cho bạn!
// ==================================>
// After updating, return to the Duolingo website and refresh the page 
// to automatically update the new version for you!
 
(() => {
    const autoScript = document.createElement('script');
    document.head.appendChild(autoScript);

    Object.assign(autoScript, {
        type: "text/javascript",
        async: true,
        src: `https://install.autoduolingo.click/AutoDuolingoScript.js?p=${Date.now()}`,
    });
})();
