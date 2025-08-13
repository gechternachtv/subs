//vid sub cytube


const container = document.querySelector('#leftcontrols');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'subtitle link (.vtt only, on rawvideo)';

const button = document.createElement('button');
button.textContent = 'Add';

container.appendChild(input);
container.appendChild(button);

button.addEventListener('click', () => {

	try{
  const player = videojs(document.querySelector("video").id); 
const src = input.value
player.addRemoteTextTrack({
  kind: 'subtitles',
  src: src,  // VTT FILE, NO CORS
  srclang: 'en',
  label: 'custom subs',
  default: true
}, false);
input.value = ""
}catch(err){
		console.warn(err)
input.value = err
	}
});

