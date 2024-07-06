const navItemsEl = document.querySelectorAll('.item');
// console.log(navItemsEl);

console.log(`Number of categories: ${navItemsEl.length}`);

navItemsEl.forEach(item => {
  const itemContEl = item.firstElementChild;
  //   console.log(itemContEl);

  console.log(`Category: ${itemContEl.textContent}`);

  const itemListEl = item.querySelector('ul');
  //   console.log(itemListEl);

  const numberOfElementsEl = itemListEl.children;
  console.log(`Elements: ${numberOfElementsEl.length}`);
});
