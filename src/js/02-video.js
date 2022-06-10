import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const CURRENT_TIME_VIDEO = "videoplayer-current-time";
    const iframeEl = document.getElementById('vimeo-player');
    const player = new Player(iframeEl);
    const continuePlayingVideo = JSON.parse(localStorage.getItem(CURRENT_TIME_VIDEO));


player.on("timeupdate", throttle(onTimeUpdateVideo, 1000));
    
if (continuePlayingVideo) {
  currentTimePlayingVideo();
}

function onTimeUpdateVideo(e) {
  console.log(e.seconds);
  localStorage.setItem(CURRENT_TIME_VIDEO, e.seconds);
}

function currentTimePlayingVideo() {
  player.setCurrentTime(continuePlayingVideo);
}