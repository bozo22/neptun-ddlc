// ==UserScript==
// @name         Neptun-ddlc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hallgato1.neptun.elte.hu/*
// @match        https://hallgato3.neptun.elte.hu/*
// @icon         https://www.google.com/s2/favicons?domain=elte.hu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.main_header_r').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_right.jpg")';
    document.querySelector('.main_header_m').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_mid.jpg")';
    document.querySelector('.main_header_l').style.background='url("https://raw.githubusercontent.com/bozo22/neptun-ddlc/main/images/header_left.jpg")';
})();
