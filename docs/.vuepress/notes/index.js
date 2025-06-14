import { defineNotesConfig } from 'vuepress-theme-plume'
import about from "./about.js";
import Java from "./Java.js";
import csBasic from "./cs-basic.js";
import postgraduate from "./postgraduate.js";
import more from "./more/more.js";
import gaoWuJianLing from "./gao-wu-jian-ling.js";

export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [
        about,
        Java,
        csBasic,
        more,
        gaoWuJianLing,
        postgraduate
    ]
})