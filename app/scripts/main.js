document.addEventListener('click', function(event) {
  if (event.target.className === 'ajax-pagination-btn') {
    var items = document.querySelectorAll('.news .alert');
    var lastItem = items[items.length - 1];
    lastItem.style.borderBottom = "2px solid #ddd";
  }
});
