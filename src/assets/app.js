import logo from './logo2.png'
import bg_image from './home_page_bg_image.jpg'
import cross_icon from './cross_icon.png'
import facebook_icon from './facebook_icon.png'
import play_icon from './play_icon.png'
import resume_icon from './resume_icon.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import linkedin_icon from './linkedin_icon.png'
import twitter_icon from './twitter_icon.png'

import alan from './alan.jpg'
import bala_subrahmanyam from './bala_subrahmanyam.jpeg'
import charlie from './charlie.jpg'
import justin from './Justin.jpg'
import shawn from './shawn_mendes.jpg'
import taylor from './taylor.jpg'
import imagine_dragons from './Imagine_dragons.jpg'
import selena from './selena_gomez.jpg'
import billie from './billie_eilish.jpg'


import alan_alone2 from './alan_alone2.mp3'
import alan_ignite from './alan_ignite.mp3'
import alan_alone from './alan_alone.mp3'
import alan_faded from './alan_faded.mp3'
import alan_darkside from './alan_darkside.mp3'

import bala_asha_pasham from './bala_asha_pasham.mp3'
import bala_gandhapugali from './bala_gandhapugali.mp3'
import bala_jabillikosam from './bala_jabillikosam.mp3'
import bala_nuvvasthanante from './bala_nuvvasthanante.mp3'
import bala_premaleka from './bala_premaleka.mp3'

import charlie_attention from './charlie_attention.mp3'
import charlie_coldplay from './charlie_coldplay.mp3'
import charlie_dangerous from './charlie_dangerous.mp3'
import charlie_doneforme from './charlie_doneforme.mp3'
import charlie_howlong from './charlie_howlong.mp3'
import charlie_seeyouagain from './charlie_seeyouagain.mp3'

import dragons_believer from './dragons_believer.mp3'
import dragons_bones from './dragons_bones.mp3'
import dragons_demons from './dragons_demons.mp3'
import dragons_sharks from './dragons_sharks.mp3'
import dragons_thunder from './dragons_thunder.mp3'

import justin_baby from './justin_baby.mp3'
import justin_holy from './justin_holy.mp3'
import justin_letmeloveyou from './justin_letmeloveyou.mp3'
import justin_loveyourself from './justin_loveyourself.mp3'
import justin_sorry from './justin_sorry.mp3'

import shawn_mercy from './shawn_mercy.mp3'
import shawn_neverbealone from './shawn_neverbealone.mp3'
import shawn_senorita from './shawn_senorita.mp3'
import shawn_youth from './shawn_youth.mp3'

import taylor_blankspace from './taylor_blankspace.mp3'
import taylor_cruelsummer from './taylor_cruelsummer.mp3'
import taylor_fearless from './taylor_fearless.mp3'
import taylor_lovestory from './taylor_lovestory.mp3'
import taylor_readyforit from './taylor_readyforit.mp3'
import taylor_shakeitoff from './taylor_shakeitoff.mp3'

export const assets = {
  logo,
  bg_image,
  cross_icon,
  facebook_icon,
  play_icon,
  resume_icon,
  search_icon,
  profile_icon,
  linkedin_icon,
  twitter_icon
}

export const artist_list = [
  {name: "Alan Walker", image: alan},
  {name: "Bala Subrahmanyam", image: bala_subrahmanyam},
  {name: "Charlie Puth", image: charlie},
  {name: "Imagine Dragons", image: imagine_dragons},
  {name: "Justin Bieber", image: justin},
  {name: "Shawn Mendes", image: shawn},
  {name: "Taylor Swift", image: taylor},
  {name: "Billie Eilish", image: billie},
  {name: "Selena Gomez", image: selena}
]

export const songs_list = [
  {_id:"1",audio_name: alan_alone2,sname:"Alone pt-2", aname: "Alan Walker", play: play_icon, resume: resume_icon},
  {_id:"2",audio_name: alan_alone,sname:"Alone", aname: "Alan Walker", play: play_icon, resume: resume_icon},
  {_id:"3",audio_name: alan_darkside,sname:"Darkside", aname: "Alan Walker", play: play_icon, resume: resume_icon},
  {_id:"4",audio_name: alan_faded,sname:"Faded", aname: "Alan Walker", play: play_icon, resume: resume_icon},
  {_id:"5",audio_name: alan_ignite,sname:"Ignite", aname: "Alan Walker", play: play_icon, resume: resume_icon},

  {_id:"6",audio_name: bala_asha_pasham,sname:"Asha Pasham", aname: "Bala Subrahmanyam", play: play_icon, resume: resume_icon},
  {_id:"7",audio_name: bala_gandhapugali,sname:"Gandhapugali", aname: "Bala Subrahmanyam", play: play_icon, resume: resume_icon},
  {_id:"8",audio_name: bala_jabillikosam,sname:"Jabillikosam", aname: "Bala Subrahmanyam", play: play_icon, resume: resume_icon},
  {_id:"9",audio_name: bala_nuvvasthanante,sname:"Nuvvasthanante", aname: "Bala Subrahmanyam", play: play_icon, resume: resume_icon},
  {_id:"10",audio_name: bala_premaleka,sname:"Premaleka", aname: "Bala Subrahmanyam", play: play_icon, resume: resume_icon},

  {_id:"11",audio_name: charlie_attention,sname:"Attention", aname: "Charlie Puth", play: play_icon, resume: resume_icon},
  {_id:"12",audio_name: charlie_coldplay,sname:"Coldplay", aname: "Charlie Puth", play: play_icon, resume: resume_icon},
  {_id:"13",audio_name: charlie_dangerous,sname:"Dangerous", aname: "Charlie Puth", play: play_icon, resume: resume_icon},
  {_id:"14",audio_name: charlie_doneforme,sname:"Done For Me", aname: "Charlie Puth", play: play_icon, resume: resume_icon},
  {_id:"15",audio_name: charlie_seeyouagain,sname:"See You Again", aname: "Charlie Puth", play: play_icon, resume: resume_icon},
  {_id:"16",audio_name: charlie_howlong,sname:"How Long", aname: "Charlie Puth", play: play_icon, resume: resume_icon},

  {_id:"17",audio_name: justin_baby,sname:"Baby", aname: "Justin Bieber", play: play_icon, resume: resume_icon},
  {_id:"18",audio_name: justin_holy,sname:"Holy", aname: "Justin Bieber", play: play_icon, resume: resume_icon},
  {_id:"19",audio_name: justin_letmeloveyou,sname:"Let Me Love You", aname: "Justin Bieber", play: play_icon, resume: resume_icon},
  {_id:"20",audio_name: justin_loveyourself,sname:"Love Yourself", aname: "Justin Bieber", play: play_icon, resume: resume_icon},
  {_id:"21",audio_name: justin_sorry,sname:"Sorry", aname: "Justin Bieber", play: play_icon, resume: resume_icon},

  {_id:"22",audio_name: shawn_mercy,sname:"Mercy", aname: "Shawn Mendes", play: play_icon, resume: resume_icon},
  {_id:"23",audio_name: shawn_neverbealone,sname:"Never Be Alone", aname: "Shawn Mendes", play: play_icon, resume: resume_icon},
  {_id:"24",audio_name: shawn_senorita,sname:"Senorita", aname: "Shawn Mendes", play: play_icon, resume: resume_icon},
  {_id:"25",sname: shawn_youth,sname:"Youth", aname: "Shawn Mendes", play: play_icon, resume: resume_icon},

  {_id:"26",audio_name: taylor_blankspace,sname:"Blankspace", aname: "Taylor Swift", play: play_icon, resume: resume_icon},
  {_id:"27",audio_name: taylor_cruelsummer,sname:"Cruel Summer", aname: "Taylor Swift", play: play_icon, resume: resume_icon},
  {_id:"28",audio_name: taylor_fearless,sname:"Fearless", aname: "Taylor Swift", play: play_icon, resume: resume_icon},
  {_id:"29",audio_name: taylor_lovestory,sname:"Lovestory", aname: "Taylor Swift", play: play_icon, resume: resume_icon},
  {_id:"30",audio_name: taylor_shakeitoff,sname:"Shake It Off", aname: "Taylor Swift", play: play_icon, resume: resume_icon},
  {_id:"31",audio_name: taylor_readyforit,sname:"Ready For It", aname: "Taylor Swift", play: play_icon, resume: resume_icon},

  {_id:"32",audio_name: dragons_believer,sname:"Believer", aname: "Imagine Dragons", play: play_icon, resume: resume_icon},
  {_id:"33",audio_name: dragons_bones,sname:"Bones", aname: "Imagine Dragons", play: play_icon, resume: resume_icon},
  {_id:"34",audio_name: dragons_demons,sname:"Demons", aname: "Imagine Dragons", play: play_icon, resume: resume_icon},
  {_id:"35",audio_name: dragons_sharks,sname:"Sharks", aname: "Imagine Dragons", play: play_icon, resume: resume_icon},
  {_id:"36",audio_name: dragons_thunder,sname:"Thunder", aname: "Imagine Dragons", play: play_icon, resume: resume_icon},
]