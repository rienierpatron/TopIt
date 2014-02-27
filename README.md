TopIt - A Return to Top jQuery Plugin
=====
If scrolling back to top of your page seems to be a hassle, then here's one good plugin for you. This will let you return to the top of your page, without scrolling the scrollbar, by just a click.

To use TopIt plugin:

- Call the following files to your codes:

    - css/topIt.css
    - js/topIt/topIt.js

- Create a div with a class "topIt" to create the scroll to top button.

- Add the following to your script:

        jQuery(document).ready( function($) {
      		$('.topIt').topIt({
      			label			: null, 	//default label "TOP"
      			width			: null,		//default 35
      			background		: null,		//default #000000
      			border			: null,		//no border by default, sample format if will be used -> 1px solid black 
      			color			: null,		//default #FFFFFF
      			fontSize		: "10px",	//default 20px
      			position		: null,		//default left
      			startingDistance: null,		//default 100
      		});
      	});

//rienierpatron
