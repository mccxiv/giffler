# Video to Gif
I was tired of programs that would crash with more than 300 frames and online
tools with absurd restrictions in terms of fps and length... Like gfycat.  
So much :poop:

## In comes giffler
In its current form, Giffler is  command line tool that converts most video
formats (anything supported by ffmpeg) to gif files without compromising on
quality. Output gifs are not as huge as you might think, ImageMagick's convert
has some incredible optimization algorithms.

![](http://mccxiv.me/files/bbb60fps3fuzz.gif)  
*60 fps 3% fuzz, dithering on:* `giffler --input bunny.mp4 --fps 60`

### installation
```
npm install -g giffler
```
It has *no* dependencies on Windows.  
Linux and Mac users need to have ffmpeg and ImageMagick's convert installed.

### Converting video to gifs
Creates `vid.mp4.gif` in the current directory:
```
giffler --input vid.mp4
```

Prints full documentation:
```
giffler --help
```

### FAQ
- How to edit/crop/cut/shorten?  
Do that before using giffler, I like [HandBrake](https://handbrake.fr).

- Found a problem of any kind?  
Open an issue on github! :smile:

- Isn't this just a wrapper around other tools?  
Yes. You could spend a day figuring out how to get everything working and which
parameters are optimal, or just run `npm install -g giffler`.
The choice is yours.

### Legal
© 2015 Andrea Stella  
ISC license. Check the LICENSE file


Uses ffmpeg - [ffmpeg.org](https://www.ffmpeg.org/)  
Uses ImageMagick - [imagemagick.org](http://www.imagemagick.org/)