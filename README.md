# Docs

## Banner 
The `div` with classes `content original` is the main div. The rest of the divs with the classes `content glass` are used to create the blurry effect layers that are moving accross the screen. All the blur layers also have a `glass-x (x represents a number)` id.

To change the style for the main banner, it's best to change the `content` class, so the changes will apply to all the blur layers that share this same class.

# Banner Blur Layers
When making the clip-path shape animations, to keep the shape consistent you have to keep consistent the % space between the polygon points in the angles.

# Note on performance
This page does not work well on low-tier devices because of its high resource usage. It is resource intensive because each Blur Layer duplicates the Banner content, and has animations to shift the text in different directions. The page was part of a project that was never finished. 

To actually use this page, it would be better to remove all the text animations from the Blur Layers, and make them using `<filter/>` and `<feOffset/>`.