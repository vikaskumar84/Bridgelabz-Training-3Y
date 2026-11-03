async function fetchAndDisplayProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const catalog = await response.json();
    catalog.forEach((goods) => {
      console.log(`Product: ${goods.title}`);
      console.log(`Price: $${goods.price}`);
      console.log(`Image: ${goods.image}`);
      console.log('------------------------------');
    });
    if (typeof document !== 'undefined') {
      let holder = document.getElementById('products-container');
      if (!holder) {
        holder = document.createElement('div');
        holder.id = 'products-container';
        document.body.appendChild(holder);
      }
      catalog.forEach((product) => {
        const tile = document.createElement('article');
        const heading = document.createElement('h3');
        const cost = document.createElement('p');
        const photo = document.createElement('img');
        heading.textContent = product.title;
        cost.textContent = `$${product.price}`;
        photo.src = product.image;
        photo.alt = product.title;
        photo.width = 120;
        tile.append(heading, cost, photo);
        holder.appendChild(tile);
      });
    }
  } catch (err) {
    console.error('Failed to load products. Please try again.', err);
  }
}
fetchAndDisplayProducts();
