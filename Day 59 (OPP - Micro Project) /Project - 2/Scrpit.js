class Audio_Player {
    constructor(playlist) {
        this.playlist = playlist
        this.current_song_index = 0
        this.is_playing = false
    }

    play_Song() {
        this.is_playing = true
        console.group(`Song is playing...`)
        this.view()
        console.groupEnd()
    }

    pause_Song() {
        this.is_playing = false
        console.group(`Song is Paused.`)
        this.view()
        console.groupEnd()
    }

    next_song() {
        if (this.current_song_index === this.playlist.length - 1) {
            this.current_song_index = 0
        } else {
            this.current_song_index++
        }
        console.group(`Next song.`)
        this.view()
        console.groupEnd()
    }

    previes_song() {
        if (this.current_song_index === 0) {
            this.current_song_index = this.playlist.length - 1
        } else {
            this.current_song_index--
        }
        console.group(`Previes song.`)
        this.view()
        console.groupEnd()
    }

    view() {
        console.log(`Current Song : ${this.playlist[this.current_song_index].title} `);
        console.log(`Song Artist : ${this.playlist[this.current_song_index].artist} `);
        console.log(`Song Album : ${this.playlist[this.current_song_index].album} `);
        console.log(`Song Year : ${this.playlist[this.current_song_index].year} `);


    }
}

let song_playlist = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        year: 2020,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2de819225052801.681692d05f0f7.gif"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        year: 2020,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/801880225052801.6817c8462bb40.gif"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        year: 2017,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d0d843225052801.6817c8462bf39.gif"
    },
    {
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        album: "F*ck Love 3: Over You",
        year: 2021,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e80cd5225052801.6818781bf0714.gif"
    },
    {
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        year: 2021,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec0f39225052801.6818781c9b28b.gif"
    }
];



let Audio_Player_1 = new Audio_Player(song_playlist)

class Main_Theme {
    constructor() {
        this.main_body = document.body
        this.theme_i = document.querySelector(".theme").querySelectorAll("i")
        this.moon = this.theme_i[0]
        this.sun = this.theme_i[1]
        this.dark = false
    }

    theme_toggle() {
        if (this.dark) {
            this.main_body.classList.remove("dark")
            this.moon.style.display = "block"
            this.sun.style.display = "none"
            console.warn(`Theme : white`);

        } else {
            this.main_body.classList.add("dark")
            this.moon.style.display = "none"
            this.sun.style.display = "block"
            console.warn(`Theme : dark`);

        }

        this.dark = !(this.dark);
        console.log(this.dark);
    }
}

let my_theme = new Main_Theme()

document.querySelector(".theme").addEventListener("click", () => {
    my_theme.theme_toggle()
})


let Song_name = document.querySelector(".Song_name")
let Song_artist = document.querySelector(".Song_artist")
let Song_year = document.querySelector(".Song_year")
let Song_album = document.querySelector(".Song_album")
let img = document.querySelector(".song_img").querySelector("img")

let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let nxt_song = document.querySelector(".next")
let prv_song = document.querySelector(".previus")


function song_info() {
    Song_name.innerHTML = Audio_Player_1.playlist[Audio_Player_1.current_song_index].title
    Song_album.innerHTML = Audio_Player_1.playlist[Audio_Player_1.current_song_index].album
    Song_artist.innerHTML = Audio_Player_1.playlist[Audio_Player_1.current_song_index].artist
    Song_year.innerHTML = Audio_Player_1.playlist[Audio_Player_1.current_song_index].year
    img.src = Audio_Player_1.playlist[Audio_Player_1.current_song_index].image

    console.log(Audio_Player_1.current_song_index);

}

song_info()

play.addEventListener("click", () => {
    Audio_Player_1.play_Song()
    song_info()

    play.style.display = "none"
    pause.style.display = "inline"
})

pause.addEventListener("click", () => {
    Audio_Player_1.pause_Song()
    song_info()

    play.style.display = "inline"
    pause.style.display = "none"
})

nxt_song.addEventListener("click", () => {
    Audio_Player_1.next_song()
    song_info()

    play.style.display = "none"
    pause.style.display = "inline"
})

prv_song.addEventListener("click", () => {
    Audio_Player_1.previes_song()
    song_info()

    play.style.display = "none"
    pause.style.display = "inline"
})

let song_list_section = document.querySelector(".song-list")


song_playlist.forEach((song, idx) => {
    song_list_section.innerHTML += `<div data-idx = ${idx} class="song">
                    <p >${song.title}</p>
                </div>`

})

let songs = document.querySelectorAll(".song")

songs.forEach((song) => {
    song.addEventListener("click", () => {
        let idx = song.getAttribute("data-idx")
        Audio_Player_1.current_song_index = idx

        Audio_Player_1.current_song_index = Number(idx)
        Audio_Player_1.play_Song()
        song_info()

        play.style.display = "none"
        pause.style.display = "inline"

    })
})
