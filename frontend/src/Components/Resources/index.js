const moviesList = [
  {
    id: 1,
    title: "Iron Man",
    year: "2008",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/ironman_lob_crd_01_4.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/ironman_lob_fea_dsk_02.jpg",
    overview:
      "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. Upon returning home, he realizes the destruction his company’s weapons have caused and vows to change his legacy. As he refines his suit into a powerful piece of technology, Tony discovers that his trusted business partner has been selling weapons to terrorists. When he uncovers this nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    trailerUrl: "https://www.youtube.com/embed/KAE5ymVLmZg",
    director: "Jon Favreau",
    writer: "Mark Fergus, Hawk Ostby, Art Marcum, Matt Holloway",
    runTime: 126,
    releaseDate: "May 2, 2008",
    rating: "PG-13",
  },
  {
    id: 2,
    title: "The Incredible Hulk",
    year: "2008",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/theincrediblehulk_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1762899169/Screenshot_2025-11-12_034114_dllfn0.png",
    overview:
      "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows-cut-off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
    trailerUrl: "https://www.youtube.com/embed/xbqNb2PFKKA",
    director: "Louis Leterrier",
    writer: "Zak Penn",
    runTime: 112,
    releaseDate: "June 13, 2008",
    rating: "PG-13",
  },
  {
    id: 3,
    title: "Iron Man 2",
    year: "2010",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/ironman2_lob_crd_01_4.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/ironman2_lob_fea_dsk_02.jpg",
    overview:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailerUrl: "https://www.youtube.com/embed/wKtcmiifycU",
    director: "Jon Favreau",
    writer: "Justin Theroux",
    runTime: 124,
    releaseDate: "May 7, 2010",
    rating: "PG-13",
  },
  {
    id: 4,
    title: "Thor",
    year: "2011",
    posterImageUrl: "https://cdn.marvel.com/content/2x/thor_lob_crd_01_1.jpg",
    bannerImageUrl: "https://cdn.marvel.com/content/1x/thor_lob_fea_dsk_02.jpg",
    overview:
      "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    trailerUrl: "https://www.youtube.com/embed/JOddp-nlNvQ",
    director: "Kenneth Branagh",
    writer: "Ashley Miller, Zack Stentz, Don Payne",
    runTime: 115,
    releaseDate: "May 6, 2011",
    rating: "PG-13",
  },
  {
    id: 5,
    title: "Captain America: The First Avenger",
    year: "2011",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/captainamericathefirstavenger_lob_crd_01_0.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/captainamericathefirstavenger_lob_fea_dsk_02.jpg",
    overview:
      "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
    trailerUrl: "https://www.youtube.com/embed/JerVrbLldXw",
    director: "Joe Johnston",
    writer: "Christopher Markus, Stephen McFeely",
    runTime: 124,
    releaseDate: "July 22, 2011",
    rating: "PG-13",
  },
  {
    id: 6,
    title: "The Avengers",
    year: "2012",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/theavengers_lob_crd_03_0.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/theavengers_lob_fea_dsk_02.jpg",
    overview:
      "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
    director: "Joss Whedon",
    writer: "Joss Whedon",
    runTime: 143,
    releaseDate: "May 4, 2012",
    rating: "PG-13",
  },
  {
    id: 7,
    title: "Iron Man 3",
    year: "2013",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/ironman3_lob_crd_01_11.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/ironman3_lob_fea_dsk_02.jpg",
    overview:
      "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    trailerUrl: "https://www.youtube.com/embed/Ke1Y3P9D0Bc?si=NMguV7WO5xhAfHI9",
    director: "Shane Black",
    writer: "Drew Pearce, Shane Black",
    runTime: 130,
    releaseDate: "May 3, 2013",
    rating: "PG-13",
  },
  {
    id: 8,
    title: "Thor: The Dark World",
    year: "2013",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/thorthedarkworld_lob_crd_02.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/thorthedarkworld_lob_fea_dsk_02.jpg",
    overview:
      "In the aftermath of Marvel's Thor and Marvel's The Avengers, Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    trailerUrl: "https://www.youtube.com/embed/npvJ9FTgZbM?si=wmsKeaL-dUakc-rh",
    director: "Alan Taylor",
    writer: "Christopher L. Yost, Christopher Markus, Stephen McFeely",
    runTime: 112,
    releaseDate: "November 8, 2013",
    rating: "PG-13",
  },
  {
    id: 9,
    title: "Marvel's Captain America: The Winter Soldier",
    year: "2014",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/captainamericathewintersoldier_lob_crd_01_2.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/captainamericathewintersoldier_lob_fea_dsk_02_0.jpg",
    overview:
      "After the cataclysmic events in New York with The Avengers, Marvel's 'Captain America: The Winter Soldier,' finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
    trailerUrl: "https://www.youtube.com/embed/tbayiPxkUMM?si=IGG_hZJBfp8ap0tS",
    director: "Anthony Russo, Joe Russo",
    writer: "Christopher Markus, Stephen McFeely",
    runTime: 136,
    releaseDate: "April 4, 2014",
    rating: "PG-13",
  },
  {
    id: 10,
    title: "Marvel's Guardians of the Galaxy",
    year: "2014",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_crd_03.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_fea_dsk_01_0.jpg",
    overview:
      "An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits—Rocket, a gun-toting raccoon, Groot, a tree-like humanoid, the deadly and enigmatic Gamora and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand—with the galaxy's fate in the balance.",
    trailerUrl: "https://www.youtube.com/embed/d96cjJhvlMA?si=9wU-L0Y6OAtv7N-V",
    director: "James Gunn",
    writer: "James Gunn, Nicole Perlman",
    runTime: 121,
    releaseDate: "August 1, 2014",
    rating: "PG-13",
  },
  {
    id: 11,
    title: "Marvel's Avengers: Age of Ultron",
    year: "2015",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/avengersageofultron_lob_fea_dsk_02.jpg",
    overview:
      "Marvel Studios presents 'Avengers: Age of Ultron,' the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    trailerUrl: "https://www.youtube.com/embed/tmeOjFno6Do?si=FwWv5XWf3A9R1Y1o",
    director: "Joss Whedon",
    writer: "Joss Whedon",
    runTime: 141,
    releaseDate: "May 1, 2015",
    rating: "PG-13",
  },
  {
    id: 12,
    title: "Marvel's Ant-Man",
    year: "2014",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/ant-man_lob_crd_01_8.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/ant-man_lob_fea_dsk_01_0.jpg",
    overview:
      "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    trailerUrl: "https://www.youtube.com/embed/pWdKf3MneyI?si=pXvD-4-jM7iWzQ6k",
    director: "Peyton Reed",
    writer: "Edgar Wright, Joe Cornish, Adam McKay, Paul Rudd",
    runTime: 117,
    releaseDate: "July 17, 2015",
    rating: "PG-13",
  },
  {
    id: 13,
    title: "Marvel's Captain America: Civil War",
    year: "2016",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_crd_01_9.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_fea_dsk_02_0.jpg",
    overview:
      "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
    trailerUrl: "https://www.youtube.com/embed/dKrVegVI0Us?si=D35-30uY8GvE0R7V",
    director: "Anthony Russo, Joe Russo",
    writer: "Christopher Markus, Stephen McFeely",
    runTime: 147,
    releaseDate: "May 6, 2016",
    rating: "PG-13",
  },
  {
    id: 14,
    title: "Marvel's Doctor Strange",
    year: "2016",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01_6.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/doctorstrange_lob_fea_dsk_01_1.jpg",
    overview:
      "From Marvel Studios comes 'Doctor Strange,' the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
    trailerUrl: "https://www.youtube.com/embed/HSzx-zryEgM?si=e2T4lOa1m5m5S1L6",
    director: "Scott Derrickson",
    writer: "Jon Spaihts, Scott Derrickson, C. Robert Cargill",
    runTime: 115,
    releaseDate: "November 4, 2016",
    rating: "PG-13",
  },
  {
    id: 15,
    title: "Marvel's Guardians of the Galaxy Vol. 2",
    year: "2017",
    posterImageUrl:
      "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol2_lob_crd_01.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol2_lob_fea_dsk_01.jpg",
    overview:
      "Set to the all-new sonic backdrop of Awesome Mixtape #2, Marvel Studios' 'Guardians of the Galaxy Vol. 2' continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel Cinematic Universe continues to expand.",
    trailerUrl: "https://www.youtube.com/embed/dW1BIid8Osg?si=xXvD-4-jM7iWzQ6k",
    director: "James Gunn",
    writer: "James Gunn",
    runTime: 136,
    releaseDate: "May 5, 2017",
    rating: "PG-13",
  },
  {
    id: 16,
    title: "Marvel's Spider-Man: Homecoming",
    year: "2017",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/spider-manhomecoming_lob_crd_02.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084144/Screenshot_2025-12-19_002522_fkiliw.png",
    overview:
      "A young Peter Parker/Spider-Man, who made his sensational debut in 'Captain America: Civil War,' begins to navigate his newfound identity as the web-slinging super hero in 'Spider-Man: Homecoming.' Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark. Peter tries to fall back into his normal daily routine—distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man—but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.",
    trailerUrl: "https://www.youtube.com/embed/DiTECkLZ8HM?si=DpqP7zTV7MZgsq2Q",
    director: "Jon Watts",
    writer:
      "Jonathan Goldstein, John Francis Daley, Jon Watts, Christopher Ford, Chris McKenna, Erik Sommers",
    runTime: 133,
    releaseDate: "July 7, 2017",
    rating: "PG-13",
  },
  {
    id: 17,
    title: "Marvel's Thor: Ragnarok",
    year: "2017",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/thorragnarok_lob_crd_03.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/thorragnarok_lob_fea_dsk_01.jpg",
    overview:
      "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
    trailerUrl: "https://www.youtube.com/embed/ue80QwXMRHg?si=xur6d1y5MS8nB4qF",
    director: "Taika Waititi",
    writer: "Eric Pearson, Craig Kyle, Christopher L. Yost",
    runTime: 130,
    releaseDate: "November 3, 2017",
    rating: "PG-13",
  },
  {
    id: 18,
    title: "Marvel's Black Panther",
    year: "2018",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/blackpanther_lob_crd_01_4.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/2x/blackpanther_lob_fea_dsk_01.jpg",
    overview:
      "T'Challa, heirs to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    trailerUrl: "https://www.youtube.com/embed/xjDjIWPwcPU?si=G65sJyj09q-tXLn4",
    director: "Ryan Coogler",
    writer: "Ryan Coogler, Joe Robert Cole",
    runTime: 134,
    releaseDate: "February 16, 2018",
    rating: "PG-13",
  },
  {
    id: 19,
    title: "Marvel's Avengers: Infinity War",
    year: "2018",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/avengersinfinitywar_lob_crd_02_1.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_fea_dsk_01.jpg",
    overview:
      "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' 'Avengers: Infinity War' brings to the screen the ultimate, deadliest showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    trailerUrl: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=PfDh990dMem72KeX",
    director: "Anthony Russo, Joe Russo",
    writer: "Christopher Markus, Stephen McFeely",
    runTime: 149,
    releaseDate: "April 27, 2018",
    rating: "PG-13",
  },
  {
    id: 20,
    title: "Marvel's Ant-Man and the Wasp",
    year: "2018",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/ant-manandthewasp_lob_crd_01.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/2x/ant-manandthewasp_lob_fea_dsk_01.jpg",
    overview:
      "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    trailerUrl: "https://www.youtube.com/embed/8_rTIAOohas?si=9HcDXl-NV8qxyCtG",
    director: "Peyton Reed",
    writer:
      "Chris McKenna, Erik Sommers, Paul Rudd, Andrew Barrer, Gabriel Ferrari",
    runTime: 118,
    releaseDate: "July 6, 2018",
    rating: "PG-13",
  },
  {
    id: 21,
    title: "Marvel's Captain Marvel",
    year: "2019",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/captainmarvel_lob_crd_06.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/captainmarvel_lob_fea_dsk_new_0.jpg",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, 'Captain Marvel' is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    trailerUrl: "https://www.youtube.com/embed/0LHxvxdRnYc?si=U7rIVt0OnLNNx5yf",
    director: "Anna Boden, Ryan Fleck",
    writer: "Anna Boden, Ryan Fleck, Geneva Robertson-Dworet",
    runTime: 124,
    releaseDate: "March 8, 2019",
    rating: "PG-13",
  },
  {
    id: 22,
    title: "Marvel's Avengers: Endgame",
    year: "2019",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/avengersendgame_lob_crd_05_2.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/avnendgame_lob_fea_dsk_02.jpg",
    overview:
      "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, 'Avengers: Endgame.'",
    trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c?si=UVF9WxpqOA7N9vEO",
    director: "Anthony Russo, Joe Russo",
    writer: "Christopher Markus, Stephen McFeely",
    runTime: 181,
    releaseDate: "April 26, 2019",
    rating: "PG-13",
  },
  {
    id: 23,
    title: "Marvel's Spider-Man: Far From Home",
    year: "2019",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/spider-manfarfromhome_lob_crd_04_0.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084403/Screenshot_2025-12-19_002950_crecja.png",
    overview:
      "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    trailerUrl: "https://www.youtube.com/embed/Nt9L1jCKGnE?si=m1sZpSqeFzfAoKUM",
    director: "Jon Watts",
    writer: "Chris McKenna, Erik Sommers",
    runTime: 129,
    releaseDate: "July 2, 2019",
    rating: "PG-13",
  },
  {
    id: 24,
    title: "Marvel's Black Widow",
    year: "2021",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/blackwidow_lob_crd_06.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/1x/blackwidow_lob_fea_dsk_03.jpg",
    overview:
      "In Marvel Studios’ action-packed spy thriller 'Black Widow,' Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    trailerUrl: "https://www.youtube.com/embed/ybji16u608U?si=m2EDWnVhmcswOnTa",
    director: "Cate Shortland",
    writer: "Eric Pearson",
    runTime: 134,
    releaseDate: "July 9, 2021",
    rating: "PG-13",
  },
  {
    id: 25,
    title: "Marvel Studios' Shang-Chi and the Legend of the Ten Rings",
    year: "2021",
    posterImageUrl: "https://cdn.marvel.com/content/2x/shangchi_lob_crd_07.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084524/Screenshot_2025-12-19_003153_f3vsxe.png",
    overview:
      "Marvel Studios' 'Shang-Chi and The Legend of The Ten Rings' stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    trailerUrl: "https://www.youtube.com/embed/8YjFbMbfXaQ?si=9HpdmPtk_6ICDE7L",
    director: "Destin Daniel Cretton",
    writer: "Dave Callaham, Destin Daniel Cretton, Andrew Lanham",
    runTime: 132,
    releaseDate: "September 3, 2021",
    rating: "PG-13",
  },
  {
    id: 26,
    title: "Marvel Studios' Eternals",
    year: "2021",
    posterImageUrl: "https://cdn.marvel.com/content/2x/eternals_lob_crd_06.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084596/Screenshot_2025-12-19_003305_hh1nss.png",
    overview:
      "Marvel Studios' 'Eternals' follows a group of heroes from beyond the stars who had protected the Earth since the dawn of man. When monstrous creatures called the Deviants, long thought lost to history, mysteriously return, the Eternals are forced to reunite in order to defend humanity once again.",
    trailerUrl: "https://www.youtube.com/embed/x_me3xsvDgk?si=jh-Y3F9BcTn9LSX6",
    director: "Chloé Zhao",
    writer: "Chloé Zhao, Patrick Burleigh, Ryan Firpo, Kaz Firpo",
    runTime: 156,
    releaseDate: "November 5, 2021",
    rating: "PG-13",
  },
  {
    id: 27,
    title: "Marvel Studios' Spider-Man: No Way Home",
    year: "2021",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/spider-mannowayhome_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084690/Screenshot_2025-12-19_003440_m6l2i6.png",
    overview:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    trailerUrl: "https://www.youtube.com/embed/JfVOs4VSpmA?si=xqXVOiW-jy0nb_Fr",
    director: "Jon Watts",
    writer: "Chris McKenna, Erik Sommers",
    runTime: 148,
    releaseDate: "December 17, 2021",
    rating: "PG-13",
  },
  {
    id: 28,
    title: "Marvel Studios' Doctor Strange in the Multiverse of Madness",
    year: "2022",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084768/Screenshot_2025-12-19_003541_zwojac.png",
    overview:
      "To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone.",
    trailerUrl: "https://www.youtube.com/embed/aWzlQ2N6qqg?si=sr4YqWfb2thb-SXt",
    director: "Sam Raimi",
    writer: "Michael Waldron",
    runTime: 126,
    releaseDate: "May 6, 2022",
    rating: "PG-13",
  },
  {
    id: 29,
    title: "Marvel Studios' Thor: Love and Thunder",
    year: "2022",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/thorloveandthunder_lob_crd_04.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084827/Screenshot_2025-12-19_003659_cstyxu.png",
    overview:
      "Thor embarks on a journey unlike anything he's ever faced—a quest for inner peace. However, his retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods.",
    trailerUrl: "https://www.youtube.com/embed/Go8nTmfrQd8?si=BrXH1pTd2qmvtKen",
    director: "Taika Waititi",
    writer: "Taika Waititi, Jennifer Kaytin Robinson",
    runTime: 119,
    releaseDate: "July 8, 2022",
    rating: "PG-13",
  },
  {
    id: 30,
    title: "Marvel Studios' Black Panther: Wakanda Forever",
    year: "2022",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/blackpantherwakandaforever_lob_crd_06.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084901/Screenshot_2025-12-19_003814_cdk0d8.png",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    trailerUrl: "https://www.youtube.com/embed/_Z3QKkl1WyM?si=AIEw9z3xHrpzUKpJ",
    director: "Ryan Coogler",
    writer: "Ryan Coogler, Joe Robert Cole",
    runTime: 161,
    releaseDate: "November 11, 2022",
    rating: "PG-13",
  },
  {
    id: 31,
    title: "Marvel Studios' Ant-Man and the Wasp: Quantumania",
    year: "2023",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/antmanandthewaspquantumania_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766084978/Screenshot_2025-12-19_003907_njjrvm.png",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne return to continue their adventures as Ant-Man and the Wasp. Together, with Hope’s parents Janet van Dyne and Hank Pym, and Scott’s daughter Cassie Lang, the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    trailerUrl: "https://www.youtube.com/embed/5WfTEZJnv_8?si=jlyidJITdMdfJ7tG",
    director: "Peyton Reed",
    writer: "Jeff Loveness",
    runTime: 124,
    releaseDate: "February 17, 2023",
    rating: "PG-13",
  },
  {
    id: 32,
    title: "Marvel Studios' Guardians of the Galaxy Vol. 3",
    year: "2023",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/guardiansofthegalaxyvolume3_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085052/Screenshot_2025-12-19_004045_fcjbn0.png",
    overview:
      "Our beloved band of misfits are settling into life on Knowhere. But it isn't long before their lives are upended by the echoes of Rocket's turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a perilous mission to save Rocket's life—a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    trailerUrl:
      "https://www.youtube.com/embed//u3V5KDHRQvk?si=DbBnkxRE3JaCtmFG",
    director: "James Gunn",
    writer: "James Gunn",
    runTime: 150,
    releaseDate: "May 5, 2023",
    rating: "PG-13",
  },
  {
    id: 33,
    title: "Marvel Studios' The Marvels",
    year: "2023",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/themarvels_lob_crd_05.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/2x/themarvels_lob_fea_dsk_01.jpg",
    overview:
      "Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan, Kamala Khan aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau.",
    trailerUrl: "https://www.youtube.com/embed/wS_qbDztgVY?si=PVd5nDyE0zjlnfzv",
    director: "Nia DaCosta",
    writer: "Nia DaCosta, Megan McDonnell, Elissa Karasik",
    runTime: 105,
    releaseDate: "November 10, 2023",
    rating: "PG-13",
  },
  {
    id: 34,
    title: "Marvel Studios' Deadpool & Wolverine",
    year: "2024",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/deadpoolandwolverine_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085268/Screenshot_2025-12-19_004413_gyfd1p.png",
    overview:
      "A listless Wade Wilson toils away in civilian life. His days as the morally flexible mercenary, Deadpool, behind him. When his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctantlier… reluctantest? He must convince a reluctant Wolverine to—Oh hell, just watch the movie.",
    trailerUrl: "https://www.youtube.com/embed/73_1biulkYk?si=QrpMzRMZ5W10xR7k",
    director: "Shawn Levy",
    writer: "Ryan Reynolds, Rhett Reese, Paul Wernick, Zeb Wells, Shawn Levy",
    runTime: 128,
    releaseDate: "July 26, 2024",
    rating: "R",
  },
  {
    id: 35,
    title: "Marvel Studios' Captain America: Brave New World",
    year: "2025",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/captainamericabravenewworld_lob_crd_05.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085350/Screenshot_2025-12-19_004535_xlag51.png",
    overview:
      "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    trailerUrl: "https://www.youtube.com/embed/1pHDWnXmK7Y?si=VIDmY6XWQhKBELKm",
    director: "Julius Onah",
    writer: "Malcolm Spellman, Dalan Musson, Matthew Orton",
    runTime: 118,
    releaseDate: "February 14, 2025",
    rating: "PG-13",
  },
  {
    id: 36,
    title: "Marvel Studios' Thunderbolts*",
    year: "2025",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/thenewavengers_lob_crd_01.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085409/Screenshot_2025-12-19_004642_kw7dhe.png",
    overview:
      "Marvel Studios assembles an unconventional team of antiheroes—Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster, and John Walker. After finding themselves ensnared in a death trap set by Valentina Allegra de Fontaine, these disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    trailerUrl: "https://www.youtube.com/embed/-sAOWhvheK8?si=TKFQBX3jPbyQrayp",
    director: "Jake Schreier",
    writer: "Eric Pearson, Joanna Calo",
    runTime: 127,
    releaseDate: "May 2, 2025",
    rating: "PG-13",
  },
  {
    id: 37,
    title: "Marvel Studios' The Fantastic Four: First Steps",
    year: "2025",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/thefantasticfourfirststeps_lob_crd_03.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085497/Screenshot_2025-12-19_004808_dooexi.png",
    overview:
      "Set against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, 'The Fantastic Four: First Steps' introduces Marvel's First Family—Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm—as they protect Earth from the planet-devouring cosmic being Galactus and his enigmatic herald, the Silver Surfer.",
    trailerUrl: "https://www.youtube.com/embed/18QQWa5MEcs?si=FVSmAfM0b032OI5I",
    director: "Matt Shakman",
    writer: "Josh Friedman, Eric Pearson, Jeff Kaplan, Ian Springer",
    runTime: 115,
    releaseDate: "July 25, 2025",
    rating: "PG-13",
  },
  {
    id: 38,
    title: "Marvel Studios' Avengers: Doomsday",
    year: "2026",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/avengersdoomsday_lob_crd_01.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085570/Screenshot_2025-12-19_004853_pyjyhu.png",
    overview:
      "The Avengers return to face their most dangerous threat yet: the brilliant and ruthless Victor von Doom. As the Multiverse continues to fracture, Earth's Mightiest Heroes must unite with allies from across time and space to prevent a total collapse of reality.",
    trailerUrl: "https://www.youtube.com/embed/aZXBFirj6b4?si=6CG1x5byJ2P00s9q",
    director: "Anthony Russo, Joe Russo",
    writer: "Michael Waldron, Stephen McFeely",
    runTime: 155,
    releaseDate: "December 18, 2026",
    rating: "PG-13",
  },
  {
    id: 39,
    title: "Marvel Studios' Spider-Man: Brand New Day",
    year: "2026",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/spidermanbrandnewday_lob_crd_01.jpg",
    bannerImageUrl:
      "https://res.cloudinary.com/dotfp4bnt/image/upload/v1766085631/Screenshot_2025-12-19_005012_eolfp5.png",
    overview:
      "Following the events of 'No Way Home,' Peter Parker attempts to navigate a life where no one knows his secret. However, a new criminal syndicate rising in New York City forces him back into the spotlight, proving that being Spider-Man is a responsibility he can never truly walk away from.",
    trailerUrl: "https://www.youtube.com/embed/Vsn7sVxCq1M?si=XftMqdEiNqFMKD2A",
    director: "Destin Daniel Cretton",
    writer: "Chris McKenna, Erik Sommers",
    runTime: 130,
    releaseDate: "July 31, 2026",
    rating: "PG-13",
  },
  {
    id: 40,
    title: "Marvel Studios' Avengers: Secret Wars",
    year: "2027",
    posterImageUrl:
      "https://cdn.marvel.com/content/2x/avengerssecretwars_lob_crd_02.jpg",
    bannerImageUrl:
      "https://cdn.marvel.com/content/2x/avengerssecretwars_lob_mas_dsk_02.jpg",
    overview:
      "The culmination of the Multiverse Saga. Heroes and villains from across the Marvel Cinematic Universe and beyond are pulled onto Battleworld for a final showdown that will determine the fate of existence itself.",
    trailerUrl: "https://www.youtube.com/embed/",
    director: "Anthony Russo, Joe Russo",
    writer: "Michael Waldron, Stephen McFeely",
    runTime: 180,
    releaseDate: "December 17, 2027",
    rating: "PG-13",
  },
];

export const getMovies = () => {
  return moviesList;
};

export const getMovieById = (movieId) => {
  return moviesList.find((eachMovie) => eachMovie.id === movieId);
};
