

$(document).ready(() => {

//Delete Category AJAX Request
  $('.category-delete').on('click', (e) => {
    $target = $(e.target);
    $.ajax({
      type: 'DELETE',
      url: '/categories/delete/'+$target.attr('data-cat-id'),
      success: (response) => {
        alert('Category Removed');
        window.location.href='/'
      },
      error: (error) => {
        console.log(error);
      }
    });
  });

//Delete Article AJAX Request
    $('.article-delete').on('click', (e) => {
      $target = $(e.target);
      $.ajax({
        type: 'DELETE',
        url: '/articles/delete/'+$target.attr('data-article-id'),
        success: (response) => {
          alert('Article Removed');
          window.location.href='/'
        },
        error: (error) => {
          console.log(error);
        }
      });
    });

});
