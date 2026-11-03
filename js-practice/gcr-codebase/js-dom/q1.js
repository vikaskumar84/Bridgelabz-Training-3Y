const goodsForm = document.querySelector('#productForm');
const goodsInput = document.querySelector('#productInput');
const goodsList = document.querySelector('#productList');
let goodsId = 0;
goodsForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const fullName = goodsInput.value.trim();
  if (!fullName) return;
  const entry = document.createElement('div');
  entry.className = 'product-item';
  entry.dataset.id = String(++goodsId);
  const caption = document.createElement('span');
  caption.className = 'product-name';
  caption.textContent = fullName;
  const edit = document.createElement('button');
  edit.type = 'button';
  edit.dataset.action = 'edit';
  edit.textContent = 'Edit';
  const dropIt = document.createElement('button');
  dropIt.type = 'button';
  dropIt.dataset.action = 'delete';
  dropIt.className = 'danger';
  dropIt.textContent = 'Delete';
  entry.append(caption, edit, dropIt);
  goodsList.append(entry);
  goodsInput.value = '';
  goodsInput.focus();
});
function saveEditedItem(item) {
  if (!item) return;
  const composer = item.querySelector('input');
  if (!composer) return;
  const updatedName = composer.value.trim();
  const label = document.createElement('span');
  label.className = 'product-name';
  label.textContent = updatedName || composer.dataset.original || 'Untitled product';
  composer.replaceWith(label);
  item.dataset.editing = 'false';
}
goodsList.addEventListener('click', (event) => {
  const actionButton = event.target.closest('button[data-action]');
  if (!actionButton) return;
  const item = actionButton.closest('.product-item');
  if (actionButton.dataset.action === 'delete') {
    item.remove();
  } else if (actionButton.dataset.action === 'edit') {
    const oldEditor = goodsList.querySelector('.product-item input');
    if (oldEditor) saveEditedItem(oldEditor.closest('.product-item'));
    const label = item.querySelector('.product-name');
    const editor = document.createElement('input');
    editor.value = label.textContent;
    editor.dataset.original = label.textContent;
    editor.setAttribute('aria-label', 'Edit product name');
    editor.style.margin = '0';
    label.replaceWith(editor);
    editor.focus();
    editor.select();
  }
});
document.addEventListener('click', (event) => {
  const itemInEdit = goodsList.querySelector('.product-item input');
  if (itemInEdit && !itemInEdit.closest('.product-item').contains(event.target)) {
    saveEditedItem(itemInEdit.closest('.product-item'));
  }
});
goodsList.addEventListener('keydown', (event) => {
  if (event.target.matches('input') && event.key === 'Enter') {
    event.preventDefault();
    saveEditedItem(event.target.closest('.product-item'));
  }
});
