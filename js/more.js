    <script type="text/javascript">
$('.more').click(function() {
    $(this).prev('div').slideToggle();
    if ($(this).html() === 'Read more')
      $(this).html('Read less');
    else
      $(this).html('Read more');
});
    </script>
