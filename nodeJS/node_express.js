var express = require('express');
var mongoose = require ('mongoose');
var product = require ('./models/product.model');
var review = require ('./models/review.model');
mongoose.connect('mongodb://localhost:27017/myappdatabase');
var app = express();



app.get('/',function(req,res) {
res.send('Hello Express!');

})

app.listen(3000, function() {
console.log('Express listening on port 3000');
})


var newProduct = product ({
  name: 'Produs1',
  price: 10,
  currency: '$',
  description: 'Laboris exercitation ad id sint tempor amet esse eiusmod anim.',
  picture: 'http://www.bing.com/images/search?q=&view=detailv2&iss=rec&FORM=INRECC&ft=GGF&it=IMG&lft=GGF&st=REC&dt=IMG&fvid=0&recfirst=0&reccount=35&ucid=generalFeed_37&id=2E520A084E0F0CD67278FA36DF84C6319D530934&ccid=3hOiq0TR&thid=OIP.Mde13a2ab44d1bfdc64bd186c2d002fc5o0&first=1000&selectedIndex=1000&ajaxhist=0',
   });

   newProduct.save(function(err){
     if (err) throw err;
     console.log('Product created!');
   });

   var newReview = review ({
     author: 'lala',
     text:'Aliquip esse aliqua labore magna duis deserunt labore reprehenderit consectetur sunt ut labore id cupidatat.',
     rating: 3
   });

   newReview.save(function(err){
     if (err) throw err;
     console.log('Review created!');
   });

  /*product.find({},function(err,products){
  if(err) throw err;
  console.log(products);
});

product.findById('57a05f3092c2051c3fccfef8', function(err, productDoc){
  if(err) throw err;
  product.name = 'produs2';

review.findById("57a05f3092c2051c3fccfef9",function(err,reviewDoc){
  if(err) throw err;
  productDoc.reviews.push(reviewDoc.id);
  productDoc.save(function(err){
    if(err) throw err;
    console.log('Product updated!');
  });
});
});*/

// product.find().populate('reviews').exec(function(err,products){
// if(err) throw err;
// console.log(products);
// });
//

product.findByIdAndRemove('57a05f3092c2051c3fccfef8',function(err){
  if(err) throw err;
  console.log("product deleted");
});
