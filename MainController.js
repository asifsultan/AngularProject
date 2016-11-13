app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
    $scope.products = [{
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2016', '03', '08'),
        cover: 'img/the-book-of-trees.jpg',
            likes: 0,
            dislikes: 0
   },{
     name: 'Program or be Programmed',
     price: 8,
     pubdate: new Date('2013', '08', '01'),
     cover: 'img/program-or-be-programmed.jpg',
     likes: 0,
     dislikes: 0
   },{
     name: 'Javascript and JQuery',
     price: 19,
     pubdate: new Date('2015', '08', '01'),
     cover: 'https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png',
            likes: 0,
            dislikes: 0

   },{
     name: 'Eloquent JavaScript: A Modern Introduction to Programming',
     price: 15,
     pubdate: new Date('2016', '08', '01'),
     cover: 'http://www.javatpoint.com/images/javascript/javascript_logo.png',
            likes: 0,
            dislikes: 0
   }

   ];

  $scope.plusOne =  function(index){
          $scope.products[index].likes +=1;
   };
  $scope.minusOne = function(index){
                $scope.products[index].dislikes +=1;
  };

}]);
