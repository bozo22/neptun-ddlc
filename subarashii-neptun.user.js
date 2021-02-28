// ==UserScript==
// @name         subarashii-neptun
// @namespace    http://tampermonkey.net/
// @version      0.4.2
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

    let skin = document.styleSheets[16].href;

    //Neptun PowerUp kompatibilitás
    $("#panHeader, #panCloseHeader").show();
    $("#span_changeproject").parent().show();

    //DDLC skin
    if (skin.includes("App_Themes/Skin_Neptun_Pink")) {
        document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/ddlc/header_right.jpg")';
        document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_mid.jpg")';
        document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/ddlc/header_left.jpg")';
    }

    //Evangelion skin
    if (skin.includes("App_Themes/Skin_Neptun_GFX")) {
        document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/eva/header_right.jpg")';
        document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_mid.jpg")';
        document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/eva/header_left.jpg")';
    }
})();
