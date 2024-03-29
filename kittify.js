/*
 * Kittify 3.0.0
 *
 * Copyright 2012, Gary Von Schilling
 * Project: https://github.com/garyv/kittify
 *
 * How to use:
 *
 * Replace all images with kittens
 * kittify(); 
 *
 * Configure with an options object
 * kittify(options); 
 *
 * Set a minimum image size 
 * kittify({size:100});
 *
 * Allow kitten images to be repeated
 * kittify({repeat:true});
 *
 * Replace images in a jQuery object or an array of images
 * kittify({imgs:$('img:first')});
 * kittify({imgs:document.getElementById('page').getElementsByTagName('img')});
 * 
 * Set to a different image generator
 * kittify({template:'http://placehold.it/-w-x-h-'});
 * kittify({template:'http://lorempixum.com/-w-/-h-/animals'});
 * kittify({template:'http://lorempixum.com/-w-/-h-/food'});
 * kittify({template:'http://lorempixum.com/-w-/-h-/people'});
 * kittify({template:'http://lorempixum.com/-w-/-h-/technics'});
 * kittify({template:'http://dummyimage.com/-w-/-h-/09f/fff.png'});
 *
 */

function kittify(options) {

    options = options || {};
    
    var imgs = options.imgs || document.getElementsByTagName('img'),
        size = options.size || 20,
        template = options.template || 'http://placekitten.com/-w-/-h-',
        repeat = options.repeat || false,
        alternate = false,
        sizes = {},
        i;
        
    for (i=0; i < imgs.length; i += 1) {
        
        (function(){
            
            var img = imgs[i],
                 w  = img.width || img.offsetWidth ||
                       Math.floor(img.style.width || 0),
                 h  = img.height || img.offsetHeight ||
                       Math.floor(img.style.height || 0),
                 key = w + 'x' + h;
                 
            if (w > size && h > size) {
                
                while(sizes[key] && !repeat) {
                    if (alternate) {
                        w -= 1;
                    } else {
                        h -= 1;
                    }
                    key = w + 'x' + h;
                    alternate = !alternate;
                }
                
                sizes[key] = true;
            
                img.src = template.replace(/-w-/g, w).replace(/-h-/g, h);
            }
    
        })();
    }

}
