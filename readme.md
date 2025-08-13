# how to add subtitles to movies on cytube:

First of all, when you get a raw video file, like internet archive or something, cytube doesnt use the default browser player (thank god) but instead Video.js,
a foss video-player that supports a bunch of stuff, and easy to mess with it via js.
One of the very easy things it does is to add a subtitle via url, biggest problem is, the url must be not have Cross-Origin Resource Sharing (CORS), so it can be fetched from any origin, my solution was to upload the subtitles files on github, since raw github files have no cors, its the best solution.

Thats it, i added a script on cytube that makes all the work for you, just add the .vtt link file after the raw video starts and a new subtitle option will appear on the player.
Thats kinda obvious, but everyone needs to do that separately, and multiple people can have multiple sub files (multiple languages, if you want).