// ==UserScript==
// @name         GeoClient
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  The one and only hacked client for GeoFS
// @author       Osprey
// @match        https://www.geo-fs.com/geofs.php?v=3.3
// @match        https://legacy.geo-fs.com/geofs.php
// @icon         https://www.google.com/s2/favicons?domain=geo-fs.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let a = document.createElement("script");
    a.src = "https://riversun.github.io/jsframe/jsframe.js";
    document.head.appendChild(a);
    window.onload = function() {
        function loadMain() {
            const jsFrame = new JSFrame();
            const mainFrame = jsFrame.create({
                title: 'main',
                parentElement: document.body,
                left: 0,
                height: 375,
                width: 203,
                movable: true,
                resizeable: true,
                html: `
                <div class='geofs-stopKeyboardPropagation' id="winmain" style="z-index: 201;">
                    <button id="entityspeed" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Speed</button>
                </div>`
            });
            mainFrame.show();
            mainFrame.htmlElement.parentElement.parentElement.style.zIndex = "202";

            let entitySpeed = document.getElementById("entityspeed");
            entitySpeed.onclick = function () {
                loadEntitySpeed();
            }
        }
        function loadEntitySpeed() {
            const jsFrame = new JSFrame();
            const entitySpeedFrame = jsFrame.create({
                title: 'entity speed',
                parentElement: document.body,
                left: 0,
                height: 375,
                width: 203,
                movable: true,
                resizeable: true,
                html: `
                    <div class='geofs-stopKeyboardPropagation'>
                    <p style="margin: 0px">Max RPM (% of normal)</p>
                    <input id='speedBox' type='text' value='100'>
                    <input id='speedSlider' type='range' min='0' max='1000' value='100' step='10'>
                </div>`
            });
            entitySpeedFrame.show();
            entitySpeedFrame.htmlElement.parentElement.parentElement.style.zIndex = "203";
            let speed
            let maxRPM = geofs.aircraft.instance.setup.maxRPM;
            $("#speedSlider").on("change", function(){
                speed = document.getElementById("speedSlider").value;
                document.getElementById("speedBox").value = speed;
                geofs.aircraft.instance.setup.maxRPM = maxRPM * speed/100;
            });
            $('#speedBox').on("keypress", function(e){
                if(e.which == 13){
                    speed = document.getElementById("speedBox").value;
                    document.getElementById("speedSlider").value = speed;
                    geofs.aircraft.instance.setup.maxRPM = maxRPM * speed/100;
                }
            });
        }
        loadMain();
    }
})();