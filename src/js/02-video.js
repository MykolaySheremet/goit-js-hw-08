import Player from '@vimeo/player';
import throttle from 'lodash.throttle'   

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const keyForStorage = "videoplayer-current-time";

function timeFollow(time) {
    const saveTimeString = JSON.stringify(time)
    localStorage.setItem(keyForStorage, saveTimeString)
};

const saveTimeString = localStorage.getItem(keyForStorage);

const parsSaveTimeArray = JSON.parse(saveTimeString);

player.on("timeupdate", throttle(timeFollow, 1000))

player.setCurrentTime(parsSaveTimeArray.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
