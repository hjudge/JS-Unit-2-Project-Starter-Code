/*
	GA JS-SF-9
	Hannah Judge
	Please add all Javascript code to this file.
*/

const nytKey = 'x';
const guardianKey = 'x';

const eventregistryKey = 'x';
const eventregistryUrl = 'https://eventregistry.org/json/minuteStreamArticles?apiKey=' + eventregistryKey + '&callback=JSON_CALLBACK'


'use-strict';

//Display the loading container
//remove `loader hidden` class from #popUp 

$(window).on('load', function () {
	$('#popUp').removeClass('hidden');
	$('#popUp a').hide();
});



// console.log('something happened');


// Retrieve information from the default API

//attempt 1
	// function makeRequest(url) {
	// 	console.log('Making request');
	// 	fetch(eventregistryUrl).then(function(response) {
	// 		if (response.ok) {
	// 			return response.json();
	// 		} else {
	// 			console.log(response.statusText);
	// 		}
	// 	});

//attempt 2
	// $.get(eventregistryUrl), function(response) {

	// 	console.log(response);

	// 	json.recentActivity.articles.activity.forEach(function(result) {
	// 		$('ul').append('<li>' + json.recentActivity.articles.activity[0].title)

	// 	})

	// };

//attempt 3
	// const articleList = [];
	// $.each(json.recentActivity.articles.activity, function (i) {
	// 				articleList.push({
	// 					"title": json.recentActivity.articles.activity[i].title,
	// 					"description": json.recentActivity.articles.activity[i].body,
	// 					"date": json.recentActivity.articles.activity[i].date,
	// 					"url": json.recentActivity.articles.activity[i].url,
	// 					"source": json.recentActivity.articles.activity[i].source.title,
	// 				});
	// 			})

//attempt 4
$(function eventregistryRequest() {
	$.ajax({
		type: 'GET',
		url: 'https://eventregistry.org/json/minuteStreamArticles?apiKey=' + eventregistryKey + '&callback=JSON_CALLBACK',

		result: function (json) {
			const eventregistryImage = './images/eventregistry.jpg';
			let $eventregistryTemplate = ``;

			json.recentActivity.articles.activity.forEach(function (i) {
				$eventregistryTemplate += `
				
			<article class="article">
				<section class="featuredImage">
					<img src= eventregistryImage />
				</section>
				<section class="articleContent">
					<a href=json.recentActivity.articles.activity[i].url >
						<h3> + json.recentActivity.articles.activity[i].title + '</h3>
					</a>
						<h6>' + json.recentActivity.articles.activity[i].lang + '</h6>
				</section>
				<section class="impressions"> json.recentActivity.articles.activity[i].sim 
				</section>
				<div class="clearfix"></div>
			</article>'

				`
				$('#popUp').click(function (event) {
				event.preventDefault()

				$('#popUp').removeClass('loader');
				});	

			});
				
				
			// $eventregistryTemplate.on('click', function (event) {
			// 	$('#popUp .container').show();
			// 	event.preventDefault();
			// 	$('#popUp a').show();
			// 	$('#popUp').removeClass('loader hidden');
			// 	$('#popUp .container h1').text(result.title);
			// 	$('#popUp p').text(result.excerpt);
			// })

// hide loader again

			// $(window).on('load', function () {
			// 	$('#popUp').addClass('hidden');
			// 	$('#popUp a').show();
			// });

		}
	
	});
});




// function createList(json) {
// 	$("#main").empty()
// 	$.each(json.recentActivity.articles.activity, function(i) {
// 		let $newArticle = $('<article>').attr('class', 'article')
// 		// need to add image here but this source doesn't have one
// 		$("#main").append($newArticle);
// 		$($newArticle).on('click', function (event) {
// 			createPopUp(json.recentActivity.articles.activity, i);
// 		});
// 	});
// }



// Hide the loader
// Replace the content of #main container with that of API
// DOM structure of each article must adhere to `.article` structure
// User interactivity:
//   - When user selects an article title, app should show #popUp overlay
//     - Content of article must be inserted in the `.container` class inside #popUp
//     - Make sure you remove the `.loader` class when toggling the article info in the pop up
//     - Change the link of “Read more from source” button to respective article
//   - When user selects source from dropdown menu, replace the content of the page with articles from new source. 
//     - Display the loading pop up when user first selects new source
//     - Hide the loading pop up on success
//     - Add an error message (alert or notification) if app cannot load
//   - When user clicks/taps the search icon, expand the input box
//     - Toggle the `.active` class for the #search container
//     - If the search input box is already expanded, tapping the icon again should close the input
//     - Pressing the “Enter” key should also close the opened input box
//   - When the app is first loading and user selects a new feed to load from the drodown, display the #popUp container with the `.loader` class. 
//     - You can toggle the `.hidden` class from the container to display/hide the overlay container
//   - Add functionality to hide the pop-up when user selects the “X” button on the pop-up
//   - Clicking/tapping the “Feedr” logo should display the main/default feed