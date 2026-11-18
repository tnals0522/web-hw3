// app.js : 영화 배열을 다루는 함수 6개 / 김수민(26) / 11주차
// average : 영화 배열 ⇒ 평균 평점(숫자)

function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}

function sortBy(list, key, desc) {
    const copy = [...list];
    copy.sort((a, b) => {
        if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
        return a[key] - b[key];
    });
    if (desc) copy.reverse();
    return copy;
}

function search(list, keyword) {
    const k = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(k));
}

function renderCards(list) {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
        if (m.rating >= 8) {
            card.classList.add("hot");
        }
        card.setAttribute("data-type", m.type);
        card.setAttribute("data-title", m.title);

        let rank = "";
        if (m.type === "boxoffice") {
            rank = `<span class="rank">${m.rank}</span>`;
        }
        let poster = `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">`;
        if (m.poster === null) {
            card.classList.add("no-poster");
            poster = `<div class="poster-fallback">${m.title[0]}</div>`;
        }

        card.innerHTML = `
        ${poster}
        ${rank}
      <span class="badge">${m.rating}</span>
      <div class="info">
        <h3>${m.title}</h3>
        <p class="year">${m.year}</p>
        <button class="like" type="button">♥</button>
      </div>`;
        board.appendChild(card);
    }
    document.getElementById("count").textContent = list.length + "편";
    
}
renderCards(movies);

function getView() {
    const keyword = document.getElementById("q").value;
    const type = document.querySelector('input[name="type"]:checked').value
    const key = document.getElementById("sort").value;
    let list = search(movies, keyword);
    if (type !== "all") {
        list = list.filter(m => m.type === type);
    }
    return sortBy(list, key, key !== "title");
}

function refresh() {
    renderCards(getView());
}

document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);
refresh();