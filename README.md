# IDEA9103 MAJOR PROJECT - INDIVIDUAL


Hi! Welcome to my individual part of the animation of our Group Work: the representation of Broadway Boogie Woogie. The following content will give you a detailed *(maybe not quite)* instruction and introduction to my work.

##Instruction

This is an audio-based animated work. The interaction is simple, just click on the button outside the canvas to shift the artwork into 'nighttime', and wait until the music starts. 

You will see deconstructed lines move according to the music spectrum in a form of waves. The shapes will cross and separate, creating a vivid scene. The bigger parts will also change sizes and colours according to the music.


##Deatils of my approach

- The type of my animation is audio-based.
- Aside from the size change of big rects (class:BigRectangles), which some of my groupmates is also doing, in my work there is a wave movement of rows and columns of rectangle lines, creating a dynamic and sensual atmosphere.


##My Inspirations:



##A short technical explanation


###The lines
-I spent a lot of time trying to make the original rows and columns to move wave-like and at the same time maintaining their colour patterns. But as we eventually constrcuted it by constantly drawing, and that the color array is too huge, I was unable to achieve my wanted effects with the group code merely. So I applied an alternative way. 

-I use the togglePlaying() p5.js function to handle events, separating the the original condition and the animated condition. 

-drawWithAudioEffects(): I create new rectangles that changes their position based on frequency data, which is mapped to amplitude array. This part is mostly inspired and adopted from [this code in the p5.js community](https://github.com/preziotte/party-mode?tab=readme-ov-file) (this is also one of my inspirations). This code has provided me with lots of useful insights about mapping arrays to create synchronisation。


###The Big rectangles

-I intended to do a lerpColor change along with the size change of big rectangles but struggled about how to build the section. ChatGPT helped me on this. 

let dynamicColor = color(colors[colorIndex]);
这行代码使用从 colors 数组中得到的索引 colorIndex 来选择一个颜色值，然后将其转换为 p5.js 的颜色对象。p5.js 的 color() 函数可以接受一个颜色字符串并返回一个颜色对象，这个对象可以用于绘制函数中。
