```javascript
// Correct usage of $inc operator in MongoDB update
db.collection('myCollection').updateOne( { "_id": ObjectId("653462c7216d47e76a5d7234") }, { $inc: { "count": 1 } } );
```