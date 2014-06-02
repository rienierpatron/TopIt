TopIt - A Return to Top jQuery Plugin
=====
If scrolling back to top of your page seems to be a hassle, then here's one good plugin for you. This will let you return to the top of your page, without scrolling the scrollbar, by just a click.

To use TopIt plugin:

- Call the following files to your codes:
    - js/topIt/topIt.js
      Note: be sure that you all have the files for this plugin

- Create a div with a class "topIt" to create the scroll to top button.

- Add the following to your script:

        jQuery(document).ready( function($) {
      		$('.topIt').topIt({
      		});
      	});

And here are the usable parameters:
      label           : null, //label of the button, default label "TOP"
      background      : null, //color of the button, default #000000
      border          : null, //format is like "1px solid black"
      color           : null, //color of the text, default #FFFFFF
      fontSize        : null, //text font size, default 20px
      position        : null, //positioning (left,right), default left
      startingDistance: null, //distance of scroll where button will show, default 100
      speed           : null, //default is 100
      theme           : null, //available themes for now : rounded, bottomLine

//rienierpatron
