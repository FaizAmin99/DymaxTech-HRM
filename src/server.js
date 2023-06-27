const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
MongoClient.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((client) => {
    console.log("MongoDB connected successfully");

    const db = client.db("hrm_data");
    const collection = db.collection("employees");

    // --------- Inserting a document ----------  /*
      collection.insertOne({ name: 'Ali', age: 28, role: 'Project Manager', status: 'Active'}, function(err, result) {
      if (err) {
        console.error('Failed to insert document:', err);
        return;
      }
      console.log('Document inserted successfully:', result.insertedId);

      // */

// -----------Deleting a document-----------  /*
      collection.deleteOne({ name: 'Ali' }, function(err, result) {
        if (err) {
          console.error('Failed to delete document:', err);
          return;
        }
        console.log('Document deleted successfully:', result.deletedCount);
      });

// */

    });
// -----------Updating a document-----------  /*
    collection.updateOne({ name: 'Faiz' }, { $set: { status: 'Active' } }, function(err, result) {
      if (err) {
        console.error('Failed to update document:', err);
        return;
      }
      console.log('Document updated successfully:', result.modifiedCount);
    });
    


    app.listen(port, () => {
      console.log("Server is running on port",port);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });








  /*

  Operations for real time:

  -InsertOne => To add a new employee
  -UpdateOne => To change the status of an employee (Active/Inactive)
  -FindMany => To search an employee with his/her name

  -Delete won't be used because we don't to delete any employees, as the data must be saved. Only will update status to activeinactive

  */
