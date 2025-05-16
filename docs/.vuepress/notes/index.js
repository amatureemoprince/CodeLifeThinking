import { defineNotesConfig } from 'vuepress-theme-plume'
import about from "./about.js";
import Java from "./Java.js";
import csBasic from "./cs-basic.js";
import math from "./math.js";
import ai from "./ai.js"

export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [
        about,
        Java,
        csBasic,
        math,
        ai,
    ]
})