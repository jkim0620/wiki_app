$(document).ready(() => {
  console.log("jquery working");
  $('select').material_select();

  $('.edit-btn').on('click', () => {
    $('.edit-modal-container').fadeIn(500);
  });

  $('.open-modal-btn').on('click', () => {
    $('.delete-modal-container').fadeIn(500);
  });

  $('.close-modal-btn').on('click', () => {
    $('.delete-modal-container').fadeOut(500);
  });

  $('.close-edit-modal-btn').on('click', () => {
    $('.edit-modal-container').fadeOut(500);
  });

  $('.delete-article').on('click', () => {
    const articleId = $('.delete-article').data('id');

    $.ajax({
      method: 'DELETE',
      url: `/articles/${articleId}`
    })
    .then((response) => {
      console.log('success');
      window.location.replace('/articles');
    })
    .catch((err) => {
        console.log(err)
    });
  });

});
