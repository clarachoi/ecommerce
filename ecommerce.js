
  var book1 = {
    id: 'book1',
    name: 'Song of the Deep',
    category: 'Childrens Books',
    price: '$' + 7.89,
    picture: 'img_book1.JPG',
    selling_points: ['Fantasy & Magic', ' Kids Fiction', ' Transportation']
  }
  var book2 = {
    id: 'book2',
    name: 'Lab Girl',
    category: 'Childrens Books',
    price: '$' + 16.17,
    picture: 'img_book2.JPG',
    selling_points: ['Horticulture', ' Kids Fiction', ' General & Miscellaneous']
  }
  var book3 = {
    id: 'book3',
    name: 'Pride & Prejudice',
    category: 'Classics Series',
    price: '$' + 14.99,
    picture: 'img_book3.JPG',
    selling_points: ['Black Comedy', ' Historical Romance - Regency', ' Fiction']
  }
  var album1 = {
    id: 'album1',
    name: 'The Beatles',
    category: 'Music Album',
    price: '$' + 24.99,
    picture: 'img_album1.JPG',
    selling_points: ['Rock & Roll', ' Sheet Music', ' Popular Scores & Songbooks']
  }
  var album2 = {
    id: 'album2',
    name: 'ADELE 21',
    category: 'Music Album',
    price: '$' + 18.99,
    picture: 'img_album2.JPG',
    selling_points: ['Pop & Rock', ' Lap Steel Guitar', ' singer-songwriter']
  }
  var album3 = {
    id: 'album3',
    name: 'Amy Winehouse',
    category: 'Music Album',
    price: '$' + 14.78,
    picture: 'img_album3.JPG',
    selling_points: ['Vocal Piano', ' singer-songwriter', ' Popular Scores']
  }

/*  잠깐 숨어라!!!
    // $('#book1 .name').text(book1.name);
    // $('#book2 .name').text(book2.name);
    // $('#book3 .name').text(book3.name);
    // $('#album1 .name').text(album1.name);
    // $('#album2 .name').text(album2.name);
    // $('#album3 .name').text(album3.name);

    // var add_to_page = function(obj) {
    //   $('#' + obj.id + ' .name').html(obj.name);
    //   $('#' + obj.id + ' .category').html(obj.category);
    //   $('#' + obj.id + ' .price').html(obj.price);
    //   $('#' + obj.id + ' .picture').html(obj.picture);
    //   $('#' + obj.id + ' .list').html(obj.selling_points);
    // }
    // add_to_page(book1);
    // add_to_page(book2);
    // add_to_page(album1);
    // add_to_page(album2);

    //$('#content').append($('<div id="book1">').html( $('<div class="name">').text(book1.name)))

    //샘코드
    var appendToPage = function(obj) {
      $('#content').append('<div id="'+ obj.id + '">' + '<div class="name">' + obj.name + '</div>' + '</div>');
    }

    appendToPage(book1);
    appendToPage(book2);
    appendToPage(album1);
    appendToPage(album2);
*/

  var add_to_page = function(obj){
      $('#content').append('<div class ="row">' + '</div>');
      $('.row').append('<div id =' + obj.id + ' class="col-xs-6 col-md-4">' + '</div>');
      $('#' + obj.id).append('<div id=' + obj.id + '><h2>' + obj.name + '</h2></div>');
      //.category
      $('#' + obj.id).append('<div class="category">' + '</div>');
      $('#' + obj.id + ' .category').html(obj.category);
      $('.category').css({'color': '#0066c0'});
      //.picture
      $('#' + obj.id).append('<div class="picture">' + '</div>');
      $('#' + obj.id + ' .picture').html('<img src="' + obj.picture + '" >');
      $('.picture img').addClass('img-thumbnail');
      $('.picture img').css({'width':'260'});
      $('.picture').css({'padding':'10px 0'});
      //.price
      $('#' + obj.id).append('<div class="price">' + '</div>');
      $('#' + obj.id + ' .price').html(obj.price);
      $('.price').css({'color': '#ff0000', 'font-size': '18px'});
      //.selling_points
      $('#' + obj.id).append('<div class="selling_points">' + '</div>');
      $('#' + obj.id + ' .selling_points').html(obj.selling_points);
      $('.selling_points').css('color','#555');
      //button
      $('#' + obj.id).append('<p>' + '<a class="btn btn-default mybtn" href="#" role="button">' + 'View details »' + '</a>' + '</p>');
      $('.mybtn').css('margin','10px 0 30px');
     }

     add_to_page( book1 );
     add_to_page( book2 );
     add_to_page( book3 );
     add_to_page( album1 );
     add_to_page( album2 );
     add_to_page( album3 );

     //.empty()를 사용해서 네비게이션 활용 ///////////////////////////////////////
     var booksCallBack = function(){
       $('#content').empty();
       add_to_page(book1);
       add_to_page(book2);
       add_to_page(book3);
     }

     var albumsCallBack = function(){
       $('#content').empty();
       add_to_page(album1);
       add_to_page(album2);
       add_to_page(album3);
     }

     var allSales = function () {
       $('#content').empty();
       add_to_page(book1);
       add_to_page(book2);
       add_to_page(book3);
       add_to_page(album1);
       add_to_page(album2);
       add_to_page(album3);
     }
     //top nav
     $('.nav .books').on('click', booksCallBack);
     $('.nav .albums').on('click', albumsCallBack);
     $('.nav .allSales').click(allSales)
    //right-side-bar nav
     $('#sidebar .books').on('click', booksCallBack);
     $('#sidebar .albums').on('click', albumsCallBack);
     $('#sidebar .allSales').click(allSales)
