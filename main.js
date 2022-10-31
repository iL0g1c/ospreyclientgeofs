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
    let red = "#FF0000";
    let green = "#00FF00";

    //loads jsframe
    let a = document.createElement("script");
    a.src = "https://riversun.github.io/jsframe/jsframe.js";
    document.head.appendChild(a);

    window.onload = function() {
        function inject() {
            //creates starting window.
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
                    <button id="combat" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">Combat Module</button>
                    <br>
                    <br>
                    <p style="margin: 0px">Reset Remover</p>
                    <button id="rdisable" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px; backgroundColor=green">DISABLED</button>
                    <br>
                    <br>
                    <p style="margin: 0px">Ad Remover</p>
                    <button id="removeAds" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">INJECT</button>
                </div>`
            });
    
            //displays it
            mainFrame.setName("Main Frame");
            mainFrame.show();
            mainFrame.htmlElement.parentElement.parentElement.style.zIndex = "202";
    
            //loads window elements
            document.getElementById("rdisable").style.backgroundColor = red;
            document.getElementById("removeAds").style.backgroundColor = red;
            let flightmod = document.getElementById("flightmod");
            let resetKiller = document.getElementById("rdisable");
            let adRemover = document.getElementById("removeAds");
            let combat = document.getElementById("combat");
            let rkEnabled = false;
    
            //Programs all buttons with click results
            flightmod.onclick = function() {
                loadFlightMod();
            }
            resetKiller.onclick = function() {
                if (rkEnabled) {
                    document.getElementById("rdisable").style.backgroundColor = red;
                    document.getElementById("rdisable").innerHTML = "DISABLED";
                    rkEnabled = false;
                } else {
                    document.getElementById("rdisable").style.backgroundColor = green;
                    document.getElementById("rdisable").innerHTML = "ENABLED";
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
                document.getElementById("removeAds").style.backgroundColor = green;
                document.querySelector("body > div.geofs-adbanner.geofs-adsense-container").parentElement.removeChild(document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"));
                document.getElementById("removeAds").innerHTML = "REMOVED";
            }
            combat.onclick = function() {
                loadCombatMod();
            };
    
        }
        function loadFlightMod() {
            //Loads new window for flight module.
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
                        <br>
                        <br>
                        <p style="margin: 0px">Stealth</p>
                        <button id="stealth" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">DISABLED</button>
                    </div>`
            });
            document.getElementById("stealth").style.backgroundColor = red;
            document.getElementById('ceiling').value = geofs.aircraft.instance.setup.zeroThrustAltitude;
            flightmodFrame.show();
            flightmodFrame.htmlElement.parentElement.parentElement.style.zIndex = "203";
            let stealthEnabled = false;
            let speed
            let maxRPM = geofs.aircraft.instance.setup.maxRPM;
            let desiredPos = [52.8456078, -.5376166, 179.02169805221382],
                    disguisePos = !1,
                    desiredPlaneId = 4,
                    disguisePlane = !1,
                    desiredGroundContact = !0,
                    disguiseGroundContact = !1,
                    desiredAirSpeed = 0,
                    disguiseAirSpeed = !1;
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
            $('#stealth').on("click", function() {
                //AutoStealthMode %cDeveloped by %cS.H.I.E.L.D. Research & Development
                if (stealthEnabled) {
                    document.getElementById("stealth").style.backgroundColor = red;
                    disguisePos = !1, disguisePlane = !1, disguiseGroundContact = !1, disguiseAirSpeed = !1;
                    stealthEnabled = false;
                    document.getElementById('stealth').innerHTML = "DISABLED";
                } else {
                    document.getElementById("stealth").style.backgroundColor = green;
                    disguisePos = !0, disguisePlane = !0, disguiseGroundContact = !0, disguiseAirSpeed = !0
                    stealthEnabled = true;
                    document.getElementById('stealth').innerHTML = "ENABLED";
                }
                multiplayer.sendUpdate = function() {
                    try {
                        if (!multiplayer.lastRequest && !flight.recorder.playing) {
                            var e = geofs.aircraft.instance,
                                i = Date.now();
                            let l, d, n;
                            multiplayer.lastRequestTime = i, l = disguisePos ? desiredPos : e.llaLocation, d = disguiseGroundContact ? desiredGroundContact : e.groundContact, n = disguiseAirSpeed ? Math.round(desiredAirSpeed) : Math.round(geofs.animation.values.kias);
                            var t = $.merge($.merge([], l), e.htr),
                                r = V3.scale(xyz2lla(e.rigidBody.getLinearVelocity(), l), .001),
                                s = $.merge(r, e.htrAngularSpeed),
                                a = {
                                    gr: d,
                                    as: n
                                };
                            let c;
                            e.liveryId && (a.lv = e.liveryId), c = disguisePlane ? desiredPlaneId : e.aircraftRecord.id;
                            var o = {
                                acid: geofs.userRecord.id,
                                sid: geofs.userRecord.sessionId,
                                id: multiplayer.myId,
                                ac: c,
                                co: t,
                                ve: s,
                                st: a,
                                ti: multiplayer.getServerTime(),
                                m: multiplayer.chatMessage,
                                ci: multiplayer.chatMessageId
                            };
                            multiplayer.flightSharing.status && multiplayer.flightSharing.peer && (o.st.sh = {
                                pe: multiplayer.flightSharing.peer.acid
                            }, multiplayer.flightSharing.control && (o.st.sh.ct = [controls.rawPitch, controls.roll, controls.yaw, controls.throttle, controls.gear.position, controls.flaps.position, controls.airbrakes.position], o.st.sh.ve = geofs.aircraft.instance.rigidBody.getLinearVelocity().concat(geofs.aircraft.instance.rigidBody.getAngularVelocity()), o.st.sh.st = [geofs.aircraft.instance.engine.on])), multiplayer.chatMessage = "", multiplayer.lastRequest = geofs.ajax.post(geofs.multiplayerHost + "/update", o, multiplayer.updateCallback, multiplayer.errorCallback)
                        }
                    } catch (e) {
                        geofs.debug.error(e, "multiplayer.sendUpdate")
                    }
                }
            });
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
                        <br>
                        <br>
                        <p style="margin: 0px">Countermeasure GUI</p>
                        <button id="flares" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">FLARES</button>
                        <button id="chaffs" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">CHAFFS</button>
                        <button id="evade" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">EVADE</button>
                        <br>
                        <br>
                        <p style="margin: 0px">Panic Buttons</p>
                        <button id="haul" style="border-radius:0; border-width: 1px; height: 24px; margin-left: 0px;">HAUL A**</button>
    
                    </div>
                `
            });
            document.getElementById("counterKeys").style.backgroundColor = red;
            document.getElementById("haul").style.backgroundColor = red;
            combatmodFrame.show();
            combatmodFrame.htmlElement.parentElement.parentElement.style.zIndex = "204";
            let countersEnabled = false;
            $("#counterKeys").on("click", function() {
                if (countersEnabled) {
                    document.getElementById("counterKeys").style.backgroundColor = red;
                    document.getElementById("counterKeys").innerHTML = "DISABLED";
                    countersEnabled = false;
                } else {
                    document.getElementById("counterKeys").style.backgroundColor = green;
                    document.getElementById("counterKeys").innerHTML = "ENABLED";
                    countersEnabled = true;
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
            
                            /*Flares*/
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
                            controls.keyDown = function(o) {
                                console.log(countersEnabled);
                                if (countersEnabled) {
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
                                }
                            };
                            /*used to be if statement for the instruments. May need to put back.*/
                            enabled = !0;
                            $(document).on("keydown", controls.keyDown);
                        }()
                        );
                }, 100);
                $("#flares").click(function(){
                    multiplayer.chatMessage = "flares";
                });
                $("#chaff").click(function(){
                    multiplayer.chatMessage = "chaff";
                });
                $("#evade").click(function(){
                    multiplayer.chatMessage = "evade";
                });

            });
            $("#haul").on("click", function(){
                geofs.aircraft.instance.setup.maxRPM = 1000000;
            });
        }
        inject();
    } 
})();