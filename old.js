// ==UserScript==
// @name         Air-Superiority Script
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Follow Other GeoFS Players Automatically
// @author       Colonel Nichola Joseph "Nick" Fury, S.H.I.E.L.D  R & D - GeoFS MRP (UN)
// @match        https://www.geo-fs.com/geofs.php
// @match        https://www.legacy.geo-fs.com/geofs.php
// @icon         https://www.google.com/s2/favicons?domain=geo-fs.com
// @grant        none
// ==/UserScript==
(function() {
    let TerroristKeys = [];
    let BasesList = [];
    'use strict';

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    function getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
    }
    let s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/jsframe.js/lib/jsframe.min.js";
    document.head.appendChild(s);
    let t = document.createElement("script");
    t.src = "https://html2canvas.hertzen.com/dist/html2canvas.js";
    document.head.appendChild(t);
    document.body.onload = function() {
        try {
            document.querySelector("body > div.geofs-adbanner.geofs-adsense-container").parentElement.removeChild(document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"));
        } catch (e) {
            console.log("Error 1");
        }
        console.log("hello");
        setTimeout(function() {

            // AutoPatrol
            let example_path = [{
                "lat": 38.150106424731966,
                "lng": 21.426005629851662
            }, {
                "lat": 38.240439549044645,
                "lng": 21.476238144893973
            }, {
                "lat": 38.204058551403435,
                "lng": 21.542247839804084
            }, {
                "lat": 38.160578566267525,
                "lng": 21.60662907636606
            }, {
                "lat": 38.207271823648746,
                "lng": 21.66844779723924
            }, {
                "lat": 38.266321593039756,
                "lng": 21.7274122549928
            }, {
                "lat": 38.29188127466142,
                "lng": 21.74755039641947
            }, {
                "lat": 38.30750837220172,
                "lng": 21.71049192115899
            }, {
                "lat": 38.34413801995387,
                "lng": 21.744805324177953
            }, {
                "lat": 38.34952317146857,
                "lng": 21.801079305129043
            }, {
                "lat": 38.37213643516034,
                "lng": 21.831961367846105
            }, {
                "lat": 38.39958590062794,
                "lng": 21.883431472374546
            }];

            function flapsDown() {
                controls.setters.setFlapsDown.set();
            }

            function flapsUp() {
                controls.setters.setFlapsUp.set();
            }


            function headTo(hdg, alt, climb) {
                if (controls.autopilot.on) {
                    controls.autopilot.setHeading(hdg);
                    controls.autopilot.setAltitude(alt);
                    controls.autopilot.setClimbrate(climb);
                } else {
                    controls.setters.toggleAutoPilot.set();
                    controls.autopilot.setHeading(hdg);
                    controls.autopilot.setAltitude(alt);
                    controls.autopilot.setClimbrate(climb);
                }
            }

            function turnToCoordinate(co) {
                let loc_B = co;
                let loc_A = geofs.aircraft.instance.llaLocation;
                let y = loc_B[1] - loc_A[1];
                let x = loc_B[0] - loc_A[0];
                let z = loc_B[2] - loc_A[2];
                let direction = Math.atan2(y, x) * 180 / Math.PI;
                let direction2 = Math.atan2(Math.abs(x) + Math.abs(y), z);
                // console.log(direction+"degrees");
                headTo(direction, controls.autopilot.altitude, controls.autopilot.climbrate);
            }

            function TPToNearestAirportForPatrol(co) {
                geofs.flyTo([co[0], co[1], 10000, 0]);
                let nearestRunway = geofs.runways.getNearestRunway(geofs.aircraft.instance.llaLocation);
                geofs.flyTo([nearestRunway.location[0], nearestRunway.location[1], nearestRunway.location[2], nearestRunway.heading]);
                controls.autopilot.turnOff();
                return nearestRunway.heading;
            }

            function takeOff(heading) {
                flapsDown();
                flapsDown();
                controls.autopilot.turnOn();
                controls.autopilot.setAltitude(10000);
                controls.autopilot.setHeading(heading);
                controls.autopilot.setClimbrate(6000);
                controls.autopilot.setKias(1000);
                setTimeout(function() {
                    flapsUp();
                    flapsUp();
                    controls.setters.setGear.set();
                }, 10000);
            }

            function landImmediately() {
                runway = Object.values(geofs.runways.nearRunways)[0];
                heading = runway.heading;

                flapsDown();
                flapsDown();
                controls.autopilot.turnOn();
                controls.setters.setGear.set();
                controls.setters.setAirbrakes.set();
                controls.setters.toggleParkingBrake.set();
                headTo(heading, 100000, 6000);
                controls.autopilot.setKias(0);
            }

            var patrolInterval;
            var point = 1;
            var d;
            // controls.autopilot.definition.maxBankAngle = 90;
            // controls.autopilot.definition.maxPitchAngle = 70;
            // controls.autopilot.definition.maxClimbrate = 30000;

            function startPatrol(path) {
                point = 1;
                let heading = TPToNearestAirportForPatrol([path[0].lat, path[0].lng]);
                let pLoc = path[point];
                geofs.resetFlight();
                takeOff(heading);
                d = getDir(pLoc);
                setTimeout(function() {
                    patrolInterval = setInterval(function() {
                        let loc = geofs.aircraft.instance.llaLocation;
                        let dist = getDist(loc[0], loc[1], pLoc.lat, pLoc.lng);
                        // console.log(dist);
                        turnToCoordinate([pLoc.lat, pLoc.lng]);
                        // console.log(d);
                        if (dist < 1) {
                            // console.log("Section "+point+" Finished");
                            point++;
                            // console.log("Turning to Section "+point+"!");
                            d = getDir(path[point]);
                            pLoc = path[point];
                        }
                        if (point == path.length - 1) {
                            // console.log("Patrol done!");
                            turnToCoordinate([path[point].lat, path[point].lng]);
                            landImmediately();
                            clearInterval(interval);
                        }
                    }, 500);
                }, 10000);
            }

            function stopPatrol() {
                clearInterval(patrolInterval);
            }

            function getDir(loc) {
                if (geofs.aircraft.instance.llaLocation[0] < loc.lat && geofs.aircraft.instance.llaLocation[1] < loc.lng) {
                    return "ne";
                }
                if (geofs.aircraft.instance.llaLocation[0] < loc.lat && geofs.aircraft.instance.llaLocation[1] > loc.lng) {
                    return "nw";
                }
                if (geofs.aircraft.instance.llaLocation[0] > loc.lat && geofs.aircraft.instance.llaLocation[1] < loc.lng) {
                    return "se";
                }
                if (geofs.aircraft.instance.llaLocation[0] > loc.lat && geofs.aircraft.instance.llaLocation[1] > loc.lng) {
                    return "sw";
                }
            }

            function toRad(Value) {
                return Value * Math.PI / 180;
            }

            function getDist(lat1, lon1, lat2, lon2) {
                var R = 6371; // km
                var dLat = toRad(lat2 - lat1);
                var dLon = toRad(lon2 - lon1);
                var lat1 = toRad(lat1);
                var lat2 = toRad(lat2);

                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d;
            }

            function getGamePath() {
                return geofs.api.map.flightPath._latlngs;
            }

            console.log("%cAutoPatrol " + "%cDeveloped by " + "%cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");
            // SimplyFollow
            var data, followInterval;
            geofs.data;
            geofs.Targets;
            let interestingPlayers;
            multiplayer.startMapUpdate = function() {
                var a = function(b) {
                    multiplayer.setNbUsers(b.userCount);
                    if (b && b.users) {
                        data = b;
                        geofs.data = data;
                        let interestingPlayersUnformatted = [];
                        interestingPlayers = [];
                        for (let user in data.users) {
                            if (data.users[user].cs != "Foo" && data.users[user].cs != "ChatLogger" && data.users[user].cs != "") {
                                interestingPlayersUnformatted[interestingPlayersUnformatted.length] = data.users[user];
                            }
                        }
                        for (let user of interestingPlayersUnformatted) {
                            let newFormattedPlayer = {
                                callsign: user.cs,
                                direction: Math.trunc(fixAngle360(user.co[3])),
                                longitude: user.co[0],
                                latitude: user.co[1],
                                altitude: user.co[2] * METERS_TO_FEET,
                                aircraft: geofs.aircraftList[user.ac].name,
                                airSpeed: user.st.as,
                                isOnGround: user.st.gr,
                                id: user.id
                            }
                            interestingPlayers[interestingPlayers.length] = newFormattedPlayer;
                        }
                        geofs.Targets = interestingPlayers;
                        for (let target of geofs.Targets) {
                            for (let key of TerroristKeys) {
                                if (target.callsign.includes(key)) {
                                    let div = document.createElement("div");
                                    div.innerText = "Possible Terrorist Organization Member Spotted: " + target.callsign;
                                    div.style.fontFamily = "monospace";
                                    div.style.position = "absolute";
                                    div.style.top = "0px";
                                    div.style.left = "50%";
                                    div.style.transform = "translateX(-50%)";
                                    div.style.zIndex = 10000;
                                    div.style.backgroundColor = "red";
                                    div.style.borderColor = "black";
                                    div.style.color = "black";
                                    div.style.padding = "50px";
                                    div.style.borderRadius = "28px";
                                    document.body.appendChild(div);
                                    setTimeout(function() {
                                        document.body.removeChild(div);
                                    }, 5000);
                                }
                            }
                        }
                        b.users.sort(function(q, z) {
                            q = q.cs.toLowerCase();
                            z = z.cs.toLowerCase();
                            return q > z ? 1 : q < z ? -1 : 0
                        });
                        for (var c = $(".geofs-player-list"), d = c.is(":visible"), e = 0, f = "", g = 0, k = b.users.length; g < k; g++) {
                            var m = b.users[g],
                                n = m.id;
                            if (multiplayer.myId != n) {
                                var x = multiplayer.users[n] || new multiplayer.User(m);
                                x.update(m, !0);
                                d && ("Foo" == x.callsign ? e++ : f += '<li data-player="' + n + '">' + x.callsign + " (" + x.aircraftName + ")</li>")
                            }
                        }
                        d && (0 < e && (f += "<li>    ...and " + e + " Foos</li>"),
                            c.html(f))
                    }
                };
                clearInterval(multiplayer.mapInterval);
                multiplayer.mapInterval = setInterval(function() {
                    geofs.ajax.post(geofs.multiplayerHost + "/map", {
                        id: multiplayer.myId,
                        gid: geofs.userRecord.schoolid
                    }, a);
                }, multiplayer.mapUpdatePeriod);
                geofs.ajax.post(geofs.multiplayerHost + "/map", {
                    id: multiplayer.myId,
                    gid: geofs.userRecord.schoolid
                }, a);
            };
            multiplayer.startMapUpdate();

            function getUserByCallsign(callsign) {
                for (const [key, value] of Object.entries(multiplayer.users)) {
                    if (multiplayer.users[key].callsign == callsign) {
                        return multiplayer.users[key];
                    }
                }
                return false;
            }

            function getAS(callsign) {
                return getUserByCallsign(callsign).st.as;
            }

            function getDirectionOfUser(callsign) {
                return getUserByCallsign(callsign).lastUpdate.co[3];
            }

            function getDist(lat1, lon1, lat2, lon2) {
                var R = 6371; // km
                var dLat = toRad(lat2 - lat1);
                var dLon = toRad(lon2 - lon1);
                var lat1 = toRad(lat1);
                var lat2 = toRad(lat2);

                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d;
            }

            function toRad(Value) {
                return Value * Math.PI / 180;
            }

            function getDistanceToUser(callsign) {
                let user = getUserByCallsign(callsign);
                let loc_B = user.lastUpdate.co;
                // console.log("Target Coordinates: "+loc_B[0]+" Longitude, "+loc_B[1]+" Latitude, "+loc_B[2]+" Altitude.")
                let loc_A = geofs.aircraft.instance.llaLocation;
                // console.log("Local Coordinates: "+loc_A[0]+" Longitude, "+loc_A[1]+" Latitude, "+loc_A[2]+" Altitude.")
                // let vel_B = getAS(callsign);
                // let vel_A = geofs.aircraft.instance.velocityScalar;
                let distance_A_B = getDist(loc_A[1], loc_A[0], loc_B[1], loc_B[0]);
                console.log("Distance to Target: " + distance_A_B + " meters");
                return distance_A_B;
            }

            function headTo(hdg, alt, climb) {
                if (controls.autopilot.on) {
                    controls.autopilot.setHeading(hdg);
                    controls.autopilot.setAltitude(alt);
                    controls.autopilot.setClimbrate(climb);
                } else {
                    controls.setters.toggleAutoPilot.set();
                    controls.autopilot.setHeading(hdg);
                    controls.autopilot.setAltitude(alt);
                    controls.autopilot.setClimbrate(climb);
                }
            }

            function turnTo(callsign) {
                let user = getUserByCallsign(callsign);
                let loc_B = user.lastUpdate.co;
                let loc_A = geofs.aircraft.instance.llaLocation;
                let y = loc_B[1] - loc_A[1];
                let x = loc_B[0] - loc_A[0];
                let z = loc_B[2] - loc_A[2];
                // let direction = (((loc_B[0]-loc_A[0])/(loc_B[1]-loc_A[1]))*45);
                // let direction = Math.atan2((loc_A[0]*loc_B[1])-(loc_A[1]*2),(loc_A[0]*loc_B[0])+(loc_A[1]*loc_B[1]));
                let direction = Math.atan2(y, x) * 180 / Math.PI;
                let direction2 = Math.atan2(Math.abs(x) + Math.abs(y), z);
                console.log(direction);
                let c = (z > 0) ? 6000 : -6000;
                headTo(direction, loc_B[2] * 3.281, c);
            }

            function simplyFollow(callsign) {
                followInterval = setInterval(function() {
                    turnTo(callsign);
                }, 500);
            }

            function stopFollow() {
                clearInterval(followInterval);
            }
            console.log("%cSimplyFollow " + "%cDeveloped by " + "%cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");
            // AutoPilotPerformanceBoost
            function BoostAutoPilotPerformance() {
                controls.autopilot.definition.maxBankAngle = 90;
                controls.autopilot.definition.maxPitchAngle = 70;
                controls.autopilot.definition.maxClimbrate = 30000;
            }
            console.log("%cAutoPilotPerformanceBoost " + "%cDeveloped by " + "%cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");
            // AutoAttack
            function say(msg) {
                multiplayer.setChatMessage(msg);
            }

            function rdm(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            function choice(array) {
                return array[Math.floor(Math.random() * array.length)];
            }

            function CheckCounters(foxCode, callsign) {
                var miss = 0;
                let F = ['chaf', 'flar', 'eva'];
                for (let x = 0; x <= 4; x += 1) {
                    let msg = document.querySelector("#geofs-ui-3dview > div.geofs-canvas-mouse-overlay > div.geofs-chat-messages.geofs-authenticated").children[x].innerText.toLowerCase();
                    console.log(msg);
                    if (msg.includes(F[foxCode]) && msg.includes(callsign.toLowerCase())) {
                        return false;
                    }
                }
                return true;
            }



            function counters(code, callsign) {
                if (code == 0 || code == 2) {
                    let a = CheckCounters(0, callsign);
                    if (a) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (code == 1) {
                    let b = CheckCounters(1, callsign);
                    if (b) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (code == 3) {
                    let c = CheckCounters(2, callsign);
                    console.log(c);
                    if (c) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }



            var FOX_1_missiles = ["aim-7 sparrow", "aim-9c sidewinder", ];
            var FOX_2_missiles = ["aim-9 sidewinder", "aim-92 stinger", "aim-132 asraam"];
            var FOX_3_missiles = ["aim-120 amraam"];

            let missiles = [FOX_1_missiles, FOX_2_missiles, FOX_3_missiles];
            let FOXNecessary = true;

            function attack(target, abbreviation) {
                // say("Engaging " + target + ".")
                setTimeout(function() {
                    let m_or_g = rdm(0, 1);
                    if (m_or_g == 0) {
                        let FOX = rdm(0, 2);
                        let random_missile = choice(missiles[FOX]);
                        let lockType = rdm(0, 3);
                        switch (lockType) {
                            case 0:
                                say(random_missile + " locked on " + target);
                                break;
                            case 1:
                                say("locking " + random_missile + " on " + target);
                                break;
                            case 2:
                                say(random_missile + " locked on " + abbreviation);
                                break;
                            case 3:
                                say("locking " + random_missile + " on " + abbreviation);
                                break;
                        }
                        setTimeout(function() {
                            if (FOXNecessary == true) {
                                let awayType = rdm(0, 7);
                                switch (awayType) {
                                    case 0:
                                        say("FOX-" + (FOX + 1).toString() + " away");
                                        break;
                                    case 1:
                                        say("fox-" + (FOX + 1).toString() + " away");
                                        break;
                                    case 2:
                                        say("FOX " + (FOX + 1).toString() + " away");
                                        break;
                                    case 3:
                                        say("fox " + (FOX + 1).toString() + " away");
                                        break;
                                    case 4:
                                        say("away FOX-" + (FOX + 1).toString() + "");
                                        break;
                                    case 5:
                                        say("away fox-" + (FOX + 1).toString() + "");
                                        break;
                                    case 6:
                                        say("away FOX " + (FOX + 1).toString() + "");
                                        break;
                                    case 7:
                                        say("away fox  " + (FOX + 1).toString() + "");
                                        break;
                                }
                                setTimeout(function() {
                                    let C = counters(FOX, target);
                                    if (C) {
                                        let hitType = rdm(0, 2);
                                        switch (hitType) {
                                            case 0:
                                                say("HIT");
                                                break;
                                            case 1:
                                                say("Hit");
                                                break;
                                            case 2:
                                                say("hit");
                                                break;
                                        }
                                    } else {
                                        let missType = rdm(0, 2);
                                        switch (missType) {
                                            case 0:
                                                say("MISS");
                                                break;
                                            case 1:
                                                say("Miss");
                                                break;
                                            case 2:
                                                say("miss");
                                                break;
                                        }
                                    }
                                }, 5000);
                            } else {
                                say("away")
                                setTimeout(function() {
                                    let C = counters(FOX, target);
                                    if (C) {
                                        let hitType = rdm(0, 2);
                                        switch (hitType) {
                                            case 0:
                                                say("HIT");
                                                break;
                                            case 1:
                                                say("Hit");
                                                break;
                                            case 2:
                                                say("hit");
                                                break;
                                        }
                                    } else {
                                        let missType = rdm(0, 2);
                                        switch (missType) {
                                            case 0:
                                                say("MISS");
                                                break;
                                            case 1:
                                                say("Miss");
                                                break;
                                            case 2:
                                                say("miss");
                                                break;
                                        }
                                    }
                                }, 6500);
                            }
                        }, 600);
                    } else {
                        let gunsType = rdm(0, 9);
                        switch (gunsType) {
                            case 0:
                                say("Guns, Guns, Guns on " + target);
                                break;
                            case 1:
                                say("Guns Guns Guns on " + target);
                                break;
                            case 2:
                                say("guns, guns, guns on " + target);
                                break;
                            case 3:
                                say("guns guns guns on " + target);
                                break;
                            case 4:
                                say("Guns, Guns on " + target);
                                break;
                            case 5:
                                say("Guns Guns on " + target);
                                break;
                            case 6:
                                say("guns, guns on " + target);
                                break;
                            case 7:
                                say("guns guns on " + target);
                                break;
                            case 8:
                                say("Guns on " + target);
                                break;
                            case 9:
                                say("guns on " + target);
                                break;
                            case 10:
                                say("Guns, Guns, Guns on " + abbreviation);
                                break;
                            case 11:
                                say("Guns Guns Guns on " + abbreviation);
                                break;
                            case 12:
                                say("guns, guns, guns on " + abbreviation);
                                break;
                            case 13:
                                say("guns guns guns on " + abbreviation);
                                break;
                            case 14:
                                say("Guns, Guns on " + abbreviation);
                                break;
                            case 15:
                                say("Guns Guns on " + abbreviation);
                                break;
                            case 16:
                                say("guns, guns on " + abbreviation);
                                break;
                            case 17:
                                say("guns guns on " + abbreviation);
                                break;
                            case 18:
                                say("Guns on " + abbreviation);
                                break;
                            case 19:
                                say("guns on " + abbreviation);
                                break;
                        }
                        setTimeout(function() {
                            let C = counters(2, target);
                            if (C) {
                                let hitType = rdm(0, 2);
                                switch (hitType) {
                                    case 0:
                                        say("HIT");
                                        break;
                                    case 1:
                                        say("Hit");
                                        break;
                                    case 2:
                                        say("hit");
                                        break;
                                }
                            } else {
                                let missType = rdm(0, 2);
                                switch (missType) {
                                    case 0:
                                        say("MISS");
                                        break;
                                    case 1:
                                        say("Miss");
                                        break;
                                    case 2:
                                        say("miss");
                                        break;
                                }
                            }
                        }, 5000);
                    }
                }, 600);
            }

            function deployCounter(Type) {
                switch (Type) {
                    case 0:
                        let chaffTypes = ["Chaffs", "chaffs", "Chaff", "chaff"];
                        let chaffType = rdm(0, 3);
                        say(chaffTypes[chaffType]);
                        break;
                    case 1:
                        let flareTypes = ["Flares", "flares", "Flare", "flare"];
                        let flareType = rdm(0, 3);
                        say(flareTypes[flareType]);
                        break;
                    case 2:
                        let evadeTypes = ["evasive", "evade", "Evasive", "Evade"];
                        let evadeType = rdm(0, 3);
                        say(evadeTypes[evadeType]);
                        break;
                }
            }
            console.log("%cAutoAttack " + "%cDeveloped by " + "%cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");
            // AutoStealthMode
            let desiredPos = [52.8456078, -.5376166, 179.02169805221382],
                disguisePos = !1,
                desiredPlaneId = 4,
                disguisePlane = !1,
                desiredGroundContact = !0,
                disguiseGroundContact = !1,
                desiredAirSpeed = 0,
                disguiseAirSpeed = !1;

            function activateStealthMode() {
                disguisePos = !0, disguisePlane = !0, disguiseGroundContact = !0, disguiseAirSpeed = !0
            }

            function disactivateStealthMode() {
                disguisePos = !1, disguisePlane = !1, disguiseGroundContact = !1, disguiseAirSpeed = !1
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
            }, console.log("%cAutoStealthMode %cDeveloped by %cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");

            // AutoBomb
            function bomb(ICAO, runway, bomb, isGuided) {
                say("Arming " + bomb + ".");
                setTimeout(function() {
                    if (isGuided) {
                        say("Locking " + bomb + " on " + ICAO + " runway " + runway + ".");
                    }
                    setTimeout(function() {
                        say("Dropping " + bomb + " on " + ICAO + " runway " + runway + ".");
                        setTimeout(function() {
                            say("Away.");
                            setTimeout(function() {
                                say("Hit.");
                            }, 1000);
                        }, 500);
                    }, 500);
                }, 500);
            }
            console.log("%cAutoBomb " + "%cDeveloped by " + "%cS.H.I.E.L.D. Research & Development", "font-weight: bold;color: red;", "font-weight: normal;", "font-weight: bolder;color:black;background-color: white;");

            //            var SFFrame;
            //            function startSimplyFollow() {
            //                const jsFrame = new JSFrame();
            //                SFFrame = jsFrame.create({
            //                    title: 'SimplyFollow',
            //                    parentElement: document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"),
            //                    left: getWidth()-300+100, top: 0, width: 200, height: 105,
            //                    movable: true,
            //                    resizable: true,
            //                    html: '<div id="winCont"><p style="font-size: 10px; margin-bottom: 0px; margin-left: 0px; margin-top: 0px;">Callsign: </p><input type="name" id="CSIn" style="margin-left: 0px;border-radius: 0; border-width: 1px; height: 20px;"/><button id="FollowBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: -1px;">Follow</button></div><br><button id="StopBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 10px;">Stop</button>'
            //                });
            //                SFFrame.show();
            //                let FollowBtn = document.getElementById("FollowBTN");
            //                let StopBtn = document.getElementById("StopBTN");
            //                let CallsignIn = document.getElementById("CSIn");
            //                let callsign;
            //                FollowBtn.onclick = function () {
            //                    callsign = CallsignIn.value;
            //                    if (callsign) {
            //                        StopBtn.style.visibility = "visible";
            //                        simplyFollow(callsign);
            //                    } else {
            //                        alert("ERROR: No Callsign Selected");
            //                    }
            //                }
            //                StopBtn.onclick = function () {
            //                    stopFollow()
            //                    StopBtn.style.visibility = "hidden";
            //                }
            //                StopBtn.style.visibility = "hidden";
            //            }
            //            var APFrame;
            //            function startAutoPatrol() {
            //                const jsFrame = new JSFrame();
            //                APFrame = jsFrame.create({
            //                    title: 'AutoPatrol',
            //                    parentElement: document.querySelector("body > div.geofs-adbanner.geofs-adsense-container"),
            //                    left: getWidth()-300, top: 0, width: 100, height: 80,
            //                    movable: true,
            //                    resizable: true,
            //                    html: '<div id="winCont"><button id="PatrolBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: -1px;">Start Patrol</button></div><button id="StopBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Stop</button>'
            //                });
            //                APFrame.show();
            //                let PatrolBtn = document.getElementById("PatrolBTN");
            //                let StopBtn = document.getElementById("StopBTN");
            //                PatrolBtn.onclick = function () {
            //                    startPatrol(getGamePath());
            //                    StopBtn.style.visibility = "visible";
            //                }
            //                StopBtn.onclick = function () {
            //                    stopPatrol();
            //                    StopBtn.style.visibility = "hidden";
            //                }
            //                StopBtn.style.visibility = "hidden";
            //            }
            //            startSimplyFollow();
            //            startAutoPatrol();
            geofs.currentTargetIndex = 0;

            function startAutoPatrolFollowEngageAndCounterUtilityWithStealth() {
                let APFEACUWSFrame;
                const jsFrame = new JSFrame();
                APFEACUWSFrame = jsFrame.create({
                    title: 'APFEACUWS',
                    parentElement: document.body,
                    left: 0,
                    height: 375,
                    width: 203,
                    movable: true,
                    resizable: true,
                    html: `
                    <div id="winCont" style="z-index: 201;">
                        <p style="margin: 0px">Patrols</p>
                        <button id="PatrolBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Start</button>
                        <button id="StopPatrolBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Stop</button>
                        <br/>
                        <input id="CallsignIN" placeholder="Callsign" style="width: 100%;margin: 0;-webkit-box-sizing: border-box;"/>
                        <input id="AbbreviationIN" placeholder="Abbreviation" style="width: 100%;margin: 0;-webkit-box-sizing: border-box;"/>
                        <button id="StartFollowBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Start Follow</button>
                        <button id="StopFollowBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Stop Follow</button>
                        <br/>
                        <button id="EngageBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Engage</button>
                        <button id="DisEngageBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Disengage</button>
                        <br/>
                        <button id="AttackBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Attack</button>
                        <br/>
                        <button id="FlaresBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Flares</button>
                        <button id="ChaffsBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Chaffs</button>
                        <button id="EvadeBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Evade</button>
                        <input id="icaoIN" placeholder="ICAO" style="width: 100%;margin: 0;-webkit-box-sizing: border-box;"/>
                        <input id="runwayIN" placeholder="Runway" style="width: 100%;margin: 0;-webkit-box-sizing: border-box;"/>
                        <input id="bombIN" placeholder="Bomb" style="width: 100%;margin: 0;-webkit-box-sizing: border-box;"/>
                        <button id="GuidedBombBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Bomb(Guided)</button>
                        <button id="UnguidedBombBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Bomb(Unguided)</button>
                        <br/><button id="EnableStealthModeBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Enabe Stealth</button>
                        <button id="DisableStealthModeBTN" style="border-radius: 0; border-width: 1px; height: 24px; margin-left: 0px;">Disable Stealth</button>
                    </div>'`
                });
                APFEACUWSFrame.show();
                APFEACUWSFrame.htmlElement.parentElement.parentElement.style.zIndex = "202";
                let StartPatrolBtn = document.getElementById("PatrolBTN");
                let StopPatrolBtn = document.getElementById("StopPatrolBTN");
                let CallsignIn = document.getElementById("CallsignIN");
                let AbbreviationIn = document.getElementById("AbbreviationIN");
                let IcaoIn = document.getElementById("icaoIN");
                let RunwayIn = document.getElementById("runwayIN");
                let BombIn = document.getElementById("bombIN");
                setTimeout(function() {
                    controls.keyDown = function(a) {
                        switch (a.which) {
                            case geofs.preferences.keyboard.keys["Toggle Autopilot"].keycode:
                                controls.setters.toggleAutoPilot.set();
                                break;
                            case geofs.preferences.keyboard.keys["Bank left"].keycode:
                                controls.states.left = !0;
                                a.returnValue = !1;
                                controls.keyboard.override = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Bank right"].keycode:
                                controls.states.right = !0;
                                a.returnValue = !1;
                                controls.keyboard.override = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Pitch down"].keycode:
                                controls.states.up = !0;
                                a.returnValue = !1;
                                controls.keyboard.override = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Pitch up"].keycode:
                                controls.states.down = !0;
                                a.returnValue = !1;
                                controls.keyboard.override = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Steer left"].keycode:
                                controls.states.rudderLeft = !0;
                                a.returnValue = !1;
                                controls.keyboard.overrideRudder = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Steer right"].keycode:
                                controls.states.rudderRight = !0;
                                a.returnValue = !1;
                                controls.keyboard.overrideRudder = !0;
                                break;
                            case geofs.preferences.keyboard.keys["Increase throttle"].keycode:
                            case geofs.preferences.keyboard.keys.PgUp.keycode:
                                controls.states.increaseThrottle = !0;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Decrease throttle"].keycode:
                            case geofs.preferences.keyboard.keys.PgDwn.keycode:
                                controls.states.decreaseThrottle = !0;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys.Brakes.keycode:
                                controls.setters.setBrakes.set();
                                break;
                            case geofs.preferences.keyboard.keys["Parking brake"].keycode:
                                controls.setters.toggleParkingBrake.set();
                                break;
                            case geofs.preferences.keyboard.keys["Engine switch (on/off)"].keycode:
                                geofs.aircraft.instance.engine.on ? geofs.aircraft.instance.stopEngine() : geofs.aircraft.instance.startEngine();
                                break;
                            case geofs.preferences.keyboard.keys["Gear toggle (up/down)"].keycode:
                                controls.setters.setGear.set();
                                break;
                            case geofs.preferences.keyboard.keys["Lower flaps"].keycode:
                                controls.setters.setFlapsDown.set();
                                break;
                            case geofs.preferences.keyboard.keys["Raise flaps"].keycode:
                                controls.setters.setFlapsUp.set();
                                break;
                            case geofs.preferences.keyboard.keys["Airbrake toggle (on/off)"].keycode:
                                controls.setters.setAirbrakes.set();
                                break;
                            case geofs.preferences.keyboard.keys["Optional Animated Part toggle (on/off)"].keycode:
                                controls.setters.setOptionalAnimatedPart.set();
                                break;
                            case geofs.preferences.keyboard.keys["Elevator trim up"].keycode:
                                controls.setters.setElevatorTrimUp.set();
                                break;
                            case geofs.preferences.keyboard.keys["Elevator trim down"].keycode:
                                controls.setters.setElevatorTrimDown.set();
                                break;
                            case geofs.preferences.keyboard.keys["Elevator trim neutral"].keycode:
                                controls.setters.setElevatorTrimNeutral.set();
                                break;
                            case 13:
                                controls.recenter();
                                break;
                            case 17:
                                controls.controlKeyPressed = !0;
                                break;
                            case 27:
                                flight.recorder.playing && (flight.recorder.exitPlayback(),
                                    a.preventDefault());
                                break;
                            case 86:
                                flight.recorder.enterPlayback();
                                break;
                            case 83:
                                audio.toggleMute();
                                break;
                            case 80:
                                geofs.togglePause();
                                break;
                            case 67:
                                geofs.camera.cycle();
                                break;
                            case 78:
                                ui.panel.toggle(".geofs-map-list");
                                break;
                            case 79:
                                ui.panel.toggle(".geofs-preference-list");
                                break;
                            case 9:
                                geofs.flyToCamera();
                                break;
                            case 72:
                                instruments.toggle();
                                break;
                            case 77:
                                controls.setMode("mouse");
                                break;
                            case 75:
                                controls.setMode("keyboard");
                                break;
                            case 74:
                                controls.setMode("joystick");
                                break;
                            case 81:
                                controls.controlKeyPressed && (geofs.camera.animations.orbitHorizontal.active = !geofs.camera.animations.orbitHorizontal.active);
                                break;
                            case 82:
                                geofs.resetFlight();
                                break;
                            case 87:
                                controls.controlKeyPressed && (geofs.camera.animations.orbitVertical.active = !geofs.camera.animations.orbitVertical.active);
                                break;
                            case 97:
                                geofs.camera.setRotation(45);
                                break;
                            case 98:
                                geofs.camera.setRotation(0);
                                break;
                            case 99:
                                geofs.camera.setRotation(-45);
                                break;
                            case 100:
                                geofs.camera.setRotation(90);
                                break;
                            case 101:
                                geofs.camera.setToNeutral();
                                break;
                            case 102:
                                geofs.camera.setRotation(-90);
                                break;
                            case 103:
                                geofs.camera.setRotation(135);
                                break;
                            case 104:
                                geofs.camera.setRotation(180);
                                break;
                            case 105:
                                geofs.camera.setRotation(-135)
                                break;
                            case 190:
                                geofs.currentTargetIndex++;
                                CallsignIn.value = geofs.Targets[geofs.currentTargetIndex].callsign;
                                break;
                            case 188:
                                geofs.currentTargetIndex--;
                                CallsignIn.value = geofs.Targets[geofs.currentTargetIndex].callsign;
                                break;
                        }
                        48 <= a.keyCode && 57 >= a.keyCode && (controls.throttle = (a.keyCode - 48) / 9)
                    };
                    controls.keyUp = function(a) {
                        switch (a.which) {
                            case geofs.preferences.keyboard.keys["Bank left"].keycode:
                                controls.states.left = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Bank right"].keycode:
                                controls.states.right = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Pitch down"].keycode:
                                controls.states.up = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Pitch up"].keycode:
                                controls.states.down = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Steer left"].keycode:
                                controls.states.rudderLeft = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Steer right"].keycode:
                                controls.states.rudderRight = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Increase throttle"].keycode:
                            case geofs.preferences.keyboard.keys.PgUp.keycode:
                                controls.states.increaseThrottle = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Decrease throttle"].keycode:
                            case geofs.preferences.keyboard.keys.PgDwn.keycode:
                                controls.states.decreaseThrottle = !1;
                                a.returnValue = !1;
                                break;
                            case geofs.preferences.keyboard.keys["Elevator trim up"].keycode:
                                controls.setters.setElevatorTrimUp.unset();
                                break;
                            case geofs.preferences.keyboard.keys["Elevator trim down"].keycode:
                                controls.setters.setElevatorTrimDown.unset();
                                break;
                            case geofs.preferences.keyboard.keys.Brakes.keycode:
                                controls.setters.setBrakes.unset();
                                break;
                            case 17:
                                controls.controlKeyPressed = !1;
                                break;
                            case 84:
                                ui.chat.showInput()
                        }
                    };
                    $(document).on("keydown", controls.keyDown).on("keyup", controls.keyUp);
                }, 2000);
                let StartFollowBtn = document.getElementById("StartFollowBTN");
                let StopFollowBtn = document.getElementById("StopFollowBTN");
                let EngageBtn = document.getElementById("EngageBTN");
                let DisengageBtn = document.getElementById("DisEngageBTN");
                let AttackBtn = document.getElementById("AttackBTN");
                let FlaresBtn = document.getElementById("FlaresBTN");
                let ChaffsBtn = document.getElementById("ChaffsBTN");
                let EvadeBtn = document.getElementById("EvadeBTN");
                let GuidedBombBtn = document.getElementById("GuidedBombBTN");
                let UnguidedBombBtn = document.getElementById("UnguidedBombBTN");
                let EnableStealthModeBtn = document.getElementById("EnableStealthModeBTN");
                let DisableStealthModeBtn = document.getElementById("DisableStealthModeBTN");
                let callsign;
                let engaged = false;
                let stealth = false;
                let red = "#FF0000";
                let green = "#00FF00";
                StartPatrolBtn.onclick = function() {
                    BoostAutoPilotPerformance();
                    startPatrol(getGamePath());
                    StopPatrolBtn.style.visibility = "visible";
                };
                StopPatrolBtn.onclick = function() {
                    stopPatrol();
                    StopPatrolBtn.style.visibility = "hidden";
                };
                StopPatrolBtn.style.visibility = "hidden";
                StartFollowBtn.onclick = function() {
                    callsign = CallsignIn.value;
                    if (callsign) {
                        StopFollowBtn.style.visibility = "visible";
                        BoostAutoPilotPerformance();
                        simplyFollow(callsign);
                    } else {
                        alert("ERROR: No Callsign Selected");
                    }
                };
                StopFollowBtn.onclick = function() {
                    stopFollow()
                    StopFollowBtn.style.visibility = "hidden";
                };
                StopFollowBtn.style.visibility = "hidden";
                EngageBtn.onclick = function() {
                    if (!engaged) {
                        engaged = true;
                        EngageBtn.style.backgroundColor = green;
                    }
                };
                DisengageBtn.onclick = function() {
                    if (engaged) {
                        engaged = false;
                        EngageBtn.style.backgroundColor = "#F5F5F5";
                    }
                };
                AttackBtn.onclick = function() {
                    callsign = CallsignIn.value;
                    let abbreviation = AbbreviationIn.value;
                    if (callsign) {
                        if (engaged) {
                            attack(callsign, abbreviation ? abbreviation : callsign);
                            AttackBtn.style.backgroundColor = green;
                            setTimeout(function() {
                                AttackBtn.style.backgroundColor = "#F5F5F5";
                            }, 1000);
                        } else {
                            AttackBtn.style.backgroundColor = red;
                            setTimeout(function() {
                                AttackBtn.style.backgroundColor = "#F5F5F5";
                            }, 1000);
                        }
                    } else {
                        AttackBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            AttackBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                ChaffsBtn.onclick = function() {
                    if (engaged) {
                        deployCounter(0);
                    } else {
                        ChaffsBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            ChaffsBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                FlaresBtn.onclick = function() {
                    if (engaged) {
                        deployCounter(1);
                    } else {
                        FlaresBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            FlaresBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                EvadeBtn.onclick = function() {
                    if (engaged) {
                        deployCounter(2);
                    } else {
                        EvadeBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            EvadeBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                GuidedBombBtn.onclick = function() {
                    if (engaged) {
                        if (IcaoIn.value && RunwayIn.value && BombIn.value) {
                            bomb(IcaoIn.value, RunwayIn.value, BombIn.value, true);
                        } else {
                            BombBtn.style.backgroundColor = red;
                            setTimeout(function() {
                                BombBtn.style.backgroundColor = "#F5F5F5";
                            }, 1000);
                        }
                    } else {
                        BombBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            BombBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                UnguidedBombBtn.onclick = function() {
                    if (engaged) {
                        if (IcaoIn.value && RunwayIn.value && BombIn.value) {
                            bomb(IcaoIn.value, RunwayIn.value, BombIn.value, false);
                        } else {
                            BombBtn.style.backgroundColor = red;
                            setTimeout(function() {
                                BombBtn.style.backgroundColor = "#F5F5F5";
                            }, 1000);
                        }
                    } else {
                        BombBtn.style.backgroundColor = red;
                        setTimeout(function() {
                            BombBtn.style.backgroundColor = "#F5F5F5";
                        }, 1000);
                    }
                };
                EnableStealthModeBtn.onclick = function() {
                    if (!stealth) {
                        stealth = true;
                        activateStealthMode();
                        EnableStealthModeBtn.style.backgroundColor = green;
                    }
                };
                DisableStealthModeBtn.onclick = function() {
                    if (stealth) {
                        stealth = false;
                        disactivateStealthMode();
                        EnableStealthModeBtn.style.backgroundColor = "#F5F5F5";
                    }
                };
            }
            startAutoPatrolFollowEngageAndCounterUtilityWithStealth();
            const screenshotTarget = document.body;

            html2canvas(screenshotTarget).then((canvas) => {
                const base64image = canvas.toDataURL("image/png");
                window.location.href = base64image;
            });
        }, 2000);
    };

})();