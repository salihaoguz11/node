	/* MongoSH */
	// https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
	// https://www.mongodb.com/docs/manual/reference/sql-comparison/
	// https://www.w3schools.com/mongodb/index.php

	/* General */
	// help
	help
	// clearScreen:
	cls // console.clear()

	// exit from mongosh:
	exit // exit() // .exit
	quit // quit()


	/* Databases */
	show('dbs') // show dbs // show databases
	// Create/Swicth to Database:
	use('newdb') // use newdb
	// Drop/Reset:
	db.dropDatabase()


	/* Collections (Tables) */
	// mongodb.com/docs/manual/reference/method/js-collection/
	show('collections') // show collections // show tables
	db.getCollectionNames() // List
	db.getCollectionInfos() // List
	db.createCollection('collName') // Create
	db.collName.renameCollection('collName2') // Update
	db.collName2.drop() // Drop


	/* Documents (Records/Rows) */

	// INSERT:
	// db.coll.insertOne( { new_values } )
	// db.coll.insertMany( [ { new_values } ] )
	db.coll.insertOne({ firstName: 'Test', lastName: 'Test', age: 10 })
	db.coll.insertMany([ // in array[]
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
	])
	// db.coll.insert() method is depracated.

	/* SELECT */
	// db.coll.findOne( { filters }, { fields } )
	// db.coll.find( { filters }, { fields } )
	db.coll.findOne()
	db.coll.findOne({ firstName: 'Test' })
	db.coll.find()
	db.coll.find({ firstName: 'Test' })
	db.coll.find({/* all */ }, { _id: false, firstName: true, lastName: true }) // Select Fields
	db.coll.distinct('firstName')
	// Comparison:
	db.coll.find({ 'age': { $exists: true } }) // if exists
	db.coll.find({ 'age': { $eq: 15 } }) // == : equal
	db.coll.find({ 'age': { $ne: 15 } }) // <> : not equal
	db.coll.find({ 'age': { $gt: 15 } }) // > : greather than
	db.coll.find({ 'age': { $gte: 15 } }) // >= : greather than equal
	db.coll.find({ 'age': { $lt: 15 } }) // <= : less than equal
	db.coll.find({ 'age': { $lte: 15 } }) // <= : less than equal
	db.coll.find({ 'age': { $in: [10, 11, 12] } }) // in list
	db.coll.find({ 'age': { $nin: [10, 11, 12] } }) // not in list
	// Regex:
	// mongodb.com/docs/manual/reference/operator/query/regex/
	db.coll.find({ firstName: { $regex: 'Test' } }) // Contains 'Test'
	db.coll.find({ firstName: /Test/ }) // Contains 'Test'
	db.coll.find({ firstName: /test/i }) // Case-InSensitive
	db.coll.find({ firstName: /^Test/ }) // StartsWith 'Test'
	db.coll.find({ firstName: /Test$/ }) // EndsWith 'Test'
	// Logical:
	db.coll.find({ 'age': { $not: { $eq: 15 } } }) // NOT {EQUAL}
	db.coll.find({ 'firstName': 'Test6', 'age': 16 }) // default: AND
	db.coll.find({ $and: [{ 'firstName': 'Test6' }, { 'age': 16 }] }) // AND
	db.coll.find({ $or: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // OR
	db.coll.find({ $nor: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // NOT OR
	// Limit:
	db.coll.find().limit(5)
	db.coll.find().skip(5).limit(5)
	// Sort (1:ASC, -1:DESC):
	db.coll.find().sort({ age: -1 }).limit(5)
	// Count:
	db.coll.find().count()
	db.coll.countDocuments() // ShortHand find().count()
	db.coll.countDocuments({ firstName: 'Test' })
	db.coll.estimatedDocumentCount() // for bigData
	// db.coll.count() method is depracated.


	// UPDATE:
	// db.coll.updateOne( { filters }, { $set: { new_values } } )
	// db.coll.updateMany( { filters }, { $set: { new_values } } )
	db.coll.updateOne({ age: 19 }, { $set: { new_fields: 'new_value' } }) // Add/Update field
	db.coll.updateOne({ age: 19 }, { $set: { new_fields: 'new_value2' } }) // Add/Update field
	db.coll.updateMany({ age: 19 }, { $set: { new_fields: 'new_value3' } }) // Add/Update field
	db.coll.updateMany({/* all */ }, { $unset: { new_fields: 0 } }) // Drop field
	db.coll.updateMany({/* all */ }, { $currentDate: { updated_at: true } }) // set currentDate to field
	db.coll.updateMany({/* all */ }, { $inc: { age: 2 } }) // increment (age+2) field
	db.coll.updateMany({/* all */ }, { $rename: { updated_at: 'updated' } }) // rename field
	// db.coll.update() method is depracated.


	// DELETE:
	// db.coll.deleteOne( { filters } )
	// db.coll.deleteMany( { filters } )
	db.coll.deleteOne({ age: 19 })
	db.coll.deleteMany({ age: 19 })
	db.coll.deleteMany({/* all */ }) // Delete all documents.
	// db.coll.remove() method is depracated.