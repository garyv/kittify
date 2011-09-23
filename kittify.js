/*
 *  Kittify Plugin
 *  
 *  Copyright 2011 Gary Von Schilling
 *  Project on github: https://github.com/garyv/kittify
 *
 *  How to use:
 *  kittify(); 
 *  
 */

function kittify() {

    var i,
        t = 'http://placekitten.com/-w-/-h-',
        imgs = document.getElementsByTagName('img');
    
    for (i=0; i < imgs.length; i += 1) {
        
        (function(){
            
            var img = imgs[i],
                 w  = img.width || img.offsetWidth ||
                       Math.floor(img.style.width || 0),
                 h  = img.height || img.offsetHeight ||
                       Math.floor(img.style.height || 0);
            
            if (w > 20 && h > 20) {
                img.src = t.replace(/-w-/g, w).replace(/-h-/g, h);
            }
    
        })();
    }

}
