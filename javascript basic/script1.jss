function sortFruitsDescending() {
  let fruitsList = document.getElementById("fruitsList");
  let fruitsArray = Array.from(fruitsList.children);

  fruitsArray.sort((a, b) => {
    return b.textContent.localeCompare(a.textContent);
  });

  fruitsArray.forEach((fruit) => {
    fruitsList.appendChild(fruit);
  });
}
