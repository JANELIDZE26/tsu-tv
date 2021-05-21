const videoUrls = ['./videos/universe.mp4',
    './videos/animals-video.mp4',
    './videos/nature.mp4',
    './videos/deep-ocean.mp4'];


const onButton = document.getElementById('on');
const offButton = document.getElementById('off');
const video = document.getElementById('video');
const videoSource = document.getElementById('video-source');
const screen = document.getElementById('tv-screen');
const channels = [...document.querySelectorAll('li')];


onButton.addEventListener('click', () => {
    video.style.opacity = 1;
    onButton.classList.add('active')
    offButton.classList.remove('active')
})
offButton.addEventListener('click', () => {
    video.style.opacity = 0;
    onButton.classList.remove('active')
    offButton.classList.add('active')
})

for (const channel of channels) {
    channel.addEventListener('click', () => {
        video.setAttribute('src', videoUrls[channels.indexOf(channel)])
    })
}

