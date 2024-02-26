const tbody = document.getElementById("tbody");
const theadTr = document.getElementById("theadTr");

fetch("https://northwind.vercel.app/api/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < Object.keys(data[0]).length; i++) {
      const theadTh = document.createElement("th");
      theadTh.textContent = Object.keys(data[0])[i];
      theadTr.appendChild(theadTh);
    }
    data.forEach((element) => {
      const tr = document.createElement("tr");
      for (const key in element) {
        const td = document.createElement("td");
        if (typeof element[key] === "object") {
          td.textContent = "id: " + element[key].id;
        } else {
          td.textContent = element[key];
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
  })

  .catch((error) => {
    console.error("Fetch işlemi sırasında bir hata oluştu:", error);
  });
// .https://api.tvmaze.com/shows

const cards = document.getElementById("cards");

fetch("https://api.tvmaze.com/shows")
    .then(response => response.json())
    .then(data => {
      data.forEach(show => {
        console.log(show);
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = show.image.medium
        card.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = show.name;
        card.appendChild(title);

        const language = document.createElement('p');
        language.textContent = `Language: ${show.language}`;
        card.appendChild(language);

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${show.rating.average || 'N/A'}`;
        card.appendChild(rating);

        const genres = document.createElement('p');
        genres.textContent = `Genres: ${show.genres.join(', ')}`;
        card.appendChild(genres);

        // Diğer özellikler buraya eklenebilir (örneğin, resim vb.)

        cards.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Bir hata oluştu:', error);
    });