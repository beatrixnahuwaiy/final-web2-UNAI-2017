$(document).ready(function() {

				$("#div4").hide();
				
				$("#btn1").click(function(event){
					
					$.ajax({
    					url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    					datatype: 'jsonp',
      					success: function(data) {
        				var r = data.shift(); // The data is an array of posts. Grab the first one.
	      				var colors =['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	      				var n = Math.floor(Math.random() * colors.length);
	      				currentQuote = r.content;
	      				currentAuthor = r.title;
						$("#quotes1").html(r.content);
						$("#author").text(r.title);
						$("#div3").css({"color":colors[n]});
						$("#div4").css({"color":colors[n]});
						$("html, body").animate({
				        "backgroundColor": colors[n],
				        "color": colors[n]
				      		}, 1000);
				    	$("#btn1").animate({
				        "backgroundColor": colors[n]
				      		}, 1000);
				    	$("#tweet-quote").animate({
				        "backgroundColor": colors[n]
				      		}, 1000);
				    	$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	      				},
	      				cache : false
      				})
					$("#div4").show();

					$("#div3").animate({opacity: 0}, 500,
						function() {
          					$(this).animate({opacity: 1}, 500);
					});

					$("#div4").animate({opacity: 0}, 500,
						function() {
						$(this).animate({opacity: 1}, 500);
					});
				});	
			});