var items = {
    item1: {
      img: "leaf-yellow.png",
      name: "Fresh From Naturix Farm",
      description: "Lorem ipsum dolor sit amet consectetuer adipising elit,sed diam nonummy",
    },
    item2: {
      img: "leaf-pink.png",
      name: "100% Organic Goods",
      description: "Lorem ipsum dolor sit amet consectetuer adipising elit,sed diam nonummy",
    },
    item3: {
      img: "leaf-yellow.png",
      name: "Premium Quality",
      description: "Lorem ipsum dolor sit amet consectetuer adipising elit,sed diam nonummy",
    },
    // ... other items ...
  };

  function createItemElement(item) {
    var div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <button class="button">Learn More</button>
    `;
    return div;
  }

  var itemsContainer = document.getElementById('itemsContainer');
  Object.values(items).forEach(function(item) {
    itemsContainer.appendChild(createItemElement(item));
  });