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
                    <button id="flightmod" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Flight Module</button>
                    <button id="rdisable" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Reset Remover (DISABLED)</button>
                    <button id="removeAds" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Ad Remover</button>
                    <button id="combat" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Combat Module</button>
                </div>`
            });
            mainFrame.show();
            mainFrame.htmlElement.parentElement.parentElement.style.zIndex = "202";

            let flightmod = document.getElementById("flightmod");
            let resetKiller = document.getElementById("rdisable");
            let adRemover = document.getElementById("removeAds");
            let combat = document.getElementById("combat");
            let rkEnabled = false;
            flightmod.onclick = function () {
                loadflightmod();
            }
            resetKiller.onclick = function() {
                if (!rkEnabled) {
                    document.getElementById("rdisable").innerHTML = "Reset Remover (LOCKED)";
                    window.enabled = void 0;
                    $(document).off("keydown");
                    $(document).on("keydown", ".geofs-stopKeyboardPropagation",
                        function (e) {
                            e.stopImmediatePropagation();
                        }
                    );
                    $(document).on("keydown", ".address-input",
                        function (e) {
                            e.stopImmediatePropagation();
                        }
                    );
                    var e = controls.keyDown;
                    controls.keyDown = function (o) {
                        if (typeof enabled != "undefined") {
                            if (o.which == 82) {
                                return;
                            } else {
                                e(o);
                            }
                        } else {
                            e(o);
                        }
    
                    };
                    enabled = !0;
                    $(document).on("keydown", controls.keyDown);
                }
            }
            adRemover.onclick = function() {
                document.querySelector("body > div.geofs-adbanner.geofs-adsense-container").parentElement.removeChild(document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"));
                document.getElementById("removeAds").innerHTML = "Ad Remover (REMOVED)";
            }
            combat.onclick = function() {
                loadCombatMod();
            }

        }
        function loadflightmod() {
            const jsFrame = new JSFrame();
            const flightmodFrame = jsFrame.create({
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
                        <br></br>
                        <p style="margin: 0px">Flight Ceiling (feet)</p>
                        <input id='ceiling' type='text' value=0>
                    </div>`
            });
            document.getElementById('ceiling').value = geofs.aircraft.instance.setup.zeroThrustAltitude;
            flightmodFrame.show();
            flightmodFrame.htmlElement.parentElement.parentElement.style.zIndex = "203";
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
            $('#ceiling').on("keypress", function(e) {
                if(e.which == 13) {
                    geofs.aircraft.instance.setup.zeroThrustAltitude = parseInt(document.getElementById('ceiling').value);
                    console.log(geofs.aircraft.instance.setup.zeroThrustAltitude);
                }
            })
        }
        function loadCombatMod() {
            
        }
        loadMain();
    }
})();