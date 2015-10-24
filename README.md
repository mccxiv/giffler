# Video to Gif
I was tired of programs that would crash with more than 300 frames and online
tools with absurd restrictions in terms of fps and length... Like gfycat.  
So much :poop:

## In comes giffler
In its current form, Giffler is  command line tool that converts most video
formats (anything supported by ffmpeg) to gif files without compromising on
quality. Output gifs are not as huge as you might think, ImageMagick's convert
has some incredible optimization algorithms.

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
- How to resize/crop/cut?  
Do that before using giffler, I like [HandBrake](https://handbrake.fr).

- Isn't this just a wrapper around other tools?  
Yes. You could spend a day figuring out how to get everything working and which
parameters are optimal, or just run `npm install -g giffler`.
The choice is yours.

### Legal
- © 2015 Andrea Stella
- License: ISC. Check the LICENSE file


- Uses ffmpeg - [ffmpeg.org](https://www.ffmpeg.org/)
- Uses ImageMagick - [imagemagick.org](http://www.imagemagick.org/)