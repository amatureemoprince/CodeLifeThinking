import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const javaNotes = defineNoteConfig({
  dir: 'Java',
  link: '/java/',
  sidebar: "auto"
},)

const aboutNotes = defineNoteConfig({
  dir: 'about',
  link: '/about/',
  sidebar: [
    {
      text: 'Java', link: '/java/'
    },
    {
      text: 'JavaScript', link: '/js/'
    },
  ]
})



export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [aboutNotes, javaNotes],
})
