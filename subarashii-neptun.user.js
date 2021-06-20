// ==UserScript==
// @name         subarashii-neptun
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  gigantikus anime csöcsök
// @author       You
// @downloadURL    https://github.com/bozo22/subarashii-neptun/releases/latest/download/subarashii-neptun.user.js
// @updateURL      https://github.com/bozo22/subarashii-neptun/releases/latest/download/subarashii-neptun.user.js
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function get_skin() {
        for (let i = document.styleSheets.length - 1; i >= 0; i--) {
            let style = document.styleSheets[i].href
            if (style) {
                if (style.includes("Skin_Neptun_Pink")) {
                    return "ddlc"
                }
                else if (style.includes("Skin_Neptun_GFX")) {
                    return "eva"
                }
                else if (style.includes("Skin_Neptun_Orange")) {
                    return "naruto"
                }
                else if (style.includes("Skin_Neptun_NewYork")) {
                    return "lain"
                }
                else if (style.includes("Skin_Neptun_Lime")) {
                    return "touhou"
            }
            }
        }
    }

    let skin = get_skin()

    switch(skin) {
        case "ddlc":
            document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/ddlc/header_right.jpg")';
            document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/header_mid.jpg")';
            document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/ddlc/header_left.jpg")';
            break
        case "eva":
            document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/eva/header_right.jpg")';
            document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/header_mid.jpg")';
            document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/eva/header_left.jpg")';
            break
        case "naruto":
            document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/naruto/header_right.jpg")';
            document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/header_mid.jpg")';
            document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/naruto/header_left.jpg")';
            break
        case "lain":
            document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/lain/header_right.jpg")';
            document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/header_mid.jpg")';
            document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/lain/header_left.jpg")';
            break
        case "touhou":
            document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/touhou/header_right.jpg")';
            document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/header_mid.jpg")';
            document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/subarashii-neptun/main/images/touhou/header_left.jpg")';
            break
    }


    //Neptun PowerUp kompatibilitás
    $("#panHeader, #panCloseHeader").show();
    $("#span_changeproject").parent().show();
    
})();