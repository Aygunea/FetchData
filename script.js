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
