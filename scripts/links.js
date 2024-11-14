const baseURL = "https://jacksonrkendall.github.io/wdd230/";
const linksURL = "https://jacksonrkendall.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(lessons) {
  const ul = document.getElementById('lessons-list');
  lessons.forEach(lesson => {
    const li = document.createElement('li');
    li.innerHTML = `${lesson.lesson}: ${lesson.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(' <span> | </span> ')}`;
    ul.appendChild(li);
  });
}

// Fetch and display the links
getLinks();
