$('document').ready(function(){
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '</li>');
    });
});