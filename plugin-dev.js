/*pluginDev is function name, options is var from html, about 'this' is point to this function*/
var options = {"overlayText":"This data supplied at initializtion"}
videojs.plugin('pluginDev', function (options) {
    var player = this,
        overlay = document.createElement('p')
    overlay.className = 'vjs-overlay'
    overlay.innerHTML = options.overlayText
    /*options.oeverlayText*/
    /*overlay.innerHTML = "Becoming a plugin developer";*/
    /*from html var options and text*/
    player.el().appendChild(overlay)
    /*el() :Get the Components DOM element*/
});