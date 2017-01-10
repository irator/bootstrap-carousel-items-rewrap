var item    = '#products_carousel div.item',
    newItem = '<div class="item" />',
    div     = $('#products_carousel div.product-block-item'),
    dl      = div.length;

function rewrap() {
  $(item).contents().unwrap();
  dl = div.length;
  if($(window).width() >= 768){
    for (var i = 0; i < dl; i = i + 3) {
      div.slice(i, i + 3).wrapAll(newItem)
    }
  } else {
    for (var i = 0; i < dl; i = i + 1) {
      div.slice(i, i + 1).wrapAll(newItem)
    }
  }
  $(item).first().addClass('active');
  $('.carousel').carousel()
}

rewrap();

$(window).on('resize',function() {
  rewrap()
});
