// Contains functions used for components

/**
 * Returns a color in RGB as a string with the format: RRR,GGG,BBB 
 * @param {string} hex - A color in hexadecimal code as a string, e.g. #FFFFFF
 * @returns {string} - The color in RGB as a string with the format: RRR,GGG,BBB
*/
const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var resultRGB = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    var resultStr = resultRGB.r+","+resultRGB.g+","+resultRGB.b
    return resultStr
}

// Credits: https://stackoverflow.com/a/13532993/14323287
/**
 * Creates a ripple effect of a particular color on a button on execution of an event.
 * @param {Event} e - The click event.
 * @param {string} color - The color of the ripple in hexadecimal code as a string, e.g. #FFFFFF
 */ 
const btnRippleEffect = (e, color) => {
    let target = e.target;
    let rect = target.getBoundingClientRect();
    let ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        ripple.style.background = color;
        target.appendChild(ripple);
    }

    ripple.classList.remove('show');
    let top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    let left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
}

/**
 * Returns darkened/lightened color in hexadecimal code as a string.
 * @param {string} color - The color in hexadecimal code as a string, e.g. #FFFFFF
 * @param {number} percent - The percent by which you want to darken or lighten the color (negative values for darkening, positive values for lightening).
 * @returns {string} - The darkened/lightened color in hexadecimal code as a string.
*/
const colorLightLevel= (color, percent) => {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

export {
    hexToRgb, 
    btnRippleEffect, 
    colorLightLevel, 
}
