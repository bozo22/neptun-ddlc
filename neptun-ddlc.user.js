// ==UserScript==
// @name         Neptun-ddlc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @icon         https://www.google.com/s2/favicons?domain=elte.hu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_right.jpg")';
    document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_mid.jpg")';
    document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_left.jpg")';
})();
