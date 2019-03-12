const addBookButton = document.querySelector('#add-button');
let tableBody = document.querySelector('tbody');

let readBtn = document.querySelector('.read-button');
let notReadBtn = document.querySelector('.not-read-button');

readBtn.addEventListener('click', toggleRead);
notReadBtn.addEventListener('click', toggleRead);

function toggleRead() {
	this.classList.toggle('read-button');
	this.classList.toggle('not-read-button');
} 


let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function AddBookToLibrary(book) {
	myLibrary.push(book);
}

function clearFields() {
	title.value = "";
	author.value = "";
	pages.value = "";
	check.checked = false;
}

let delBtn = document.querySelectorAll('.delete-button');
	for (let btns of delBtn) {
		btns.addEventListener('click', (e) =>{
		e.target.parentNode.parentNode.remove();
	})
}

function render(newBook) {
		this.newBook = newBook;

		let tableRow = document.createElement('tr');	
		let title = document.createElement('td');
		let author = document.createElement('td');
		let pages = document.createElement('td');
		let read = document.createElement('td');
		let del = document.createElement('td');

		let readStatusButton = document.createElement('button');
		let delBtn = document.createElement('button');

		delBtn.addEventListener('click', (e) => {
			e.target.parentNode.parentNode.remove();
		})

		delBtn.setAttribute('class', 'delete-button');
		del.appendChild(delBtn);

		if (this.newBook.read) {
			readStatusButton.setAttribute('class', 'read-button');
			read.appendChild(readStatusButton);
		} else {
			readStatusButton.setAttribute('class', 'not-read-button');
			read.appendChild(readStatusButton);
		}
		
		function classToggle() {
			this.classList.toggle('read-button');
			this.classList.toggle('not-read-button');
		}
		
		readStatusButton.addEventListener('click', classToggle);


		title.textContent = this.newBook.title;
		author.textContent = this.newBook.author;
		pages.textContent = this.newBook.pages;


		tableRow.appendChild(title);
		tableRow.appendChild(author);
		tableRow.appendChild(pages);
		tableRow.appendChild(read);
		tableRow.appendChild(del);
		tableBody.appendChild(tableRow);	
}

addBookButton.addEventListener('click', () => {
	if (title.value === "" || author.value === "") return;
	let newBook = new Book(title.value, author.value, pages.value, check.checked);
	AddBookToLibrary(newBook);		
	render(newBook);
	clearFields();
})
