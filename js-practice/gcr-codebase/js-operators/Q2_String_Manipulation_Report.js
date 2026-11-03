const goodsName = ' wireless headphones PRO ';
const cleanName = goodsName.trim().toLowerCase();
const properName = cleanName
  .split(' ')
  .map((term2) => term2.charAt(0).toUpperCase() + term2.slice(1))
  .join(' ');
const tidyTitle = properName.replace('Pro', 'Pro Edition');
console.log(`Cleaned title: ${tidyTitle}`);
console.log(`Title length: ${tidyTitle.length}`);
