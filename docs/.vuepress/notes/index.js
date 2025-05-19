import { defineNotesConfig } from 'vuepress-theme-plume'
import about from "./about.js";
import Java from "./Java.js";
import csBasic from "./cs-basic.js";
import math from "./math.js";
import ai from "./ai.js"
import english from "./english.js";
import postgraduateProcess from "./more/postgraduate-process.js";
export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [
        about,
        Java,
        csBasic,
        math,
        ai,
        postgraduateProcess,
        english,
    ]
})