
// Example with: fetch API & XMLHttpRequest
let fetchButton = document.querySelector('#getMoreBtn');
let theQuote = document.querySelector('#quote');
let qAuthor = document.querySelector('#author');
let url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

let setContent = data => {
	theQuote.innerHTML = data.content;
	qAuthor.innerHTML = data.title;
}

// bypass for bypassing cache
let bypass;

/* Using fetch API */
let getQuote = () => {
	bypass = ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
	fetch(url + bypass, {
		method: 'GET',
	})
		.then(res => { console.log(); return res.json() })
		.then(res => { console.log(); setContent(res[0]) })
		.catch(err => { console.log(err); })
}

/* Using XMLHttpRequest */

// let getQuote = () => {
// 	bypass = ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();

// 	let xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = el => {
// 		if (xhr.readyState !== 4) return;
// 		if (xhr.status === 200) {
// 			let response = JSON.parse(xhr.response);
// 			setContent(response[0])
// 		} else {
// 			console.log('FAIL: ', xhr);
// 		}
// 	}

// 	xhr.open('GET', url + bypass);
// 	// DOES NOT BYPASS CACHE
// 	// xhr.open('GET', url);
// 	// xhr.setRequestHeader(
// 	// 	'Cache-Control', 'no-cache',
// 	// 	'pragma', 'no-cache'
// 	// );
// 	xhr.send({ cache: false });
// }


fetchButton.addEventListener('click', function () { getQuote() });
document.onload = getQuote();