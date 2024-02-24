import reproductor from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const repro = new reproductor(iframe);
const localStorageKey = 'video-current-time';
const play = function (data) {
    localStorage.setItem('video-current-time', data.seconds);
};

repro.setCurrentTime(localStorage.getItem(localStorageKey)).then(function (time) {
    time = localStorage.getItem(localStorageKey);
});

repro.on('timeupdate', throttle(play),1000);