

//vid sub cytube


const container = document.querySelector('#leftcontrols');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'subtitle link here (only works with raw video)';

const button = document.createElement('button');
button.textContent = 'Send';

container.appendChild(input);
container.appendChild(button);

// Add event listener to button
button.addEventListener('click', () => {

	try{
  const player = videojs(document.querySelector("video").id); 

player.addRemoteTextTrack({
  kind: 'subtitles',
  src: input.value,  // VTT FILE, NO CORS
  srclang: 'en',
  label: 'custom subs',
  default: true
}, false);

}catch(err){
		console.warn(err)
	}
});

