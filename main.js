// ==UserScript==
// @name         OspreyClient
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
                title: 'Osprey Client',
                parentElement: document.body,
                left: 0,
                height: 375,
                width: 203,
                movable: true,
                resizeable: true,
                html: `
                <div class='geofs-stopKeyboardPropagation' id="winmain" style="z-index: 201;">
                    <button id="flightmod" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Flight Module</button>
                    <br>
                    <button id="removeAds" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Ad Remover</button>
                    <br>
                    <button id="combat" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Combat Module</button>
                    <br>
                    <br>
                    <p style="margin: 0px">Reset Remover</p>
                    <button id="rdisable" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">DISABLED</button>
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
                if (rkEnabled) {
                    document.getElementById("rdisable").innerHTML = "ENABLED";
                    rkEnabled = false;
                } else {
                    document.getElementById("rdisable").innerHTML = "DISABLED";
                    rkEnabled = true;
                }
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
                    if (rkEnabled) {
                        if (typeof enabled != "undefined") {
                            if (o.which == 82) {
                                return;
                            } else {
                                e(o);
                            }
                        } else {
                            e(o);
                        }
                    }
                    enabled = !0;
                };
                $(document).on("keydown", controls.keyDown);
            }
            adRemover.onclick = function() {
                document.querySelector("body > div.geofs-adbanner.geofs-adsense-container").parentElement.removeChild(document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"));
                document.getElementById("removeAds").innerHTML = "Ad Remover (REMOVED)";
            }
            combat.onclick = function() {
                console.log("hello world");
                loadCombatMod();
            }

        }
        function loadflightmod() {
            const jsFrame = new JSFrame();
            const flightmodFrame = jsFrame.create({
                title: 'Flight Module',
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
            const jsFrame = new JSFrame();
            const combatmodFrame = jsFrame.create({
                title: 'Combat Module',
                parentElement: document.body,
                left: 0,
                height: 375,
                width: 203,
                movable: true,
                resizeable: true,
                html: `
                    <div class='geofs-stopKeyboardPropagation'>
                        <p style="margin: 0px">Inject Counter Keys</p>
                        <button id="counterKeys" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">DISABLED</button>
                        <br></br>
                        <button id="flares" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">FLARES</button>
                        <button id="chaffs" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">CHAFFS</button>
                        <button id="evade" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">EVADE</button>
                    </div>
                `
            });
            combatmodFrame.show();
            combatmodFrame.htmlElement.parentElement.parentElement.style.zIndex = "204";
            let countersEnabled = false;
            $("#counterKeys").on("click", function() {
                if (countersEnabled) {
                    countersEnabled = false;
                    console.log("off");
                } else {
                    countersEnabled = true;
                    console.log("on")
                }
                var o = setInterval(function() {
                    window.geofs &&
                    geofs.aircraft &&
                    geofs.aircraft.instance &&
                    geofs.aircraft.instance.object3d &&
                    (
                        clearInterval(o),
                        function() {
                            window.enabled = void 0;
            
                            /*Makes sure you can't press shift + s in the chat and say flares.*/
                            $(document).off("keydown");
                            $(document).on("keydown", ".geofs-stopKeyboardPropagation",
                                function(e) {
                                    e.stopImmediatePropagation();
                                }
                            );
                            $(document).on("keydown", ".address-input",
                                function(e) {
                                    e.stopImmediatePropagation();
                                }
                            );
                            /*Flare*/
                            controls.sayFlares = !1;
                            controls.setters.sayFlares = {
                                label: "Say Flares",
                                set: function() {
                                    if (enabled) {
                                        multiplayer.chatMessage = "flares";
                                    }
                                }
                            };
            
                            /*Chaff*/
                            controls.sayChaff = !1;
                            controls.setters.sayChaff = {
                                label: "Say Chaff",
                                set: function() {
                                    if (enabled) {
                                        multiplayer.chatMessage = "chaff";
                                    }
                                }
                            };
            
                            /*Evade*/
                            controls.sayEvade = !1;
                            controls.setters.sayEvade = {
                                label: "Say Evade",
                                set: function() {
                                    if (enabled) {
                                        multiplayer.chatMessage = "evade";
                                    }
                                }
                            };
                            var e = controls.keyDown;
                            if (countersEnabled) {
                                controls.keyDown = function(o) {
                                    if (typeof enabled != "undefined") {
                                        if (o.which == 50) {
                                            if (o.altKey) {
                                                enabled = !0;
                                                controls.setters.sayFlares.set();
                                            } else {
                                                controls.throttle = (o.keyCode - 48) / 9;
                                                enabled = !1;
                                                controls.sayFlares = !1;
                                            }
                                        } else if ("undefined" != typeof enabled && (o.which == 49 || o.which == 51)) {
                                            if (o.altKey) {
                                                enabled = !0;
                                                controls.setters.sayChaff.set();
                                            } else {
                                                controls.throttle = (o.keyCode - 48) / 9;
                                                enabled = !1;
                                                controls.sayChaff = !1;
                                            }
                                        } else if ("undefined" != typeof enabled && o.which == 52) {
                                            if (o.altKey) {
                                                enabled = !0;
                                                controls.setters.sayEvade.set();
                                            } else {
                                                controls.throttle = (o.keyCode - 48) / 9;
                                                enabled = !1;
                                                controls.sayEvade = !1;
                                            }
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
                            
                        });
                        $("#flares").click(function(){
                            multiplayer.chatMessage = "flares";
                        });
                        $("#chaff").click(function(){
                            multiplayer.chatMessage = "chaff";
                        });
                        $("#evade").click(function(){
                            multiplayer.chatMessage = "evade";
                        });
                }, 100);
                if (countersEnabled) {
                    document.getElementById("counterKeys").innerHTML = "ENABLED";
                } else {
                    document.getElementById("counterKeys").innerHTML = "DISABLED";
                }

            })
        }
        loadMain();
    }
})();