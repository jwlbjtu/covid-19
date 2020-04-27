const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

if(process.env.NODE_ENV !== "production") require("dotenv").config();

// Firebase admin initialization
var admin = require("firebase-admin");

var serviceAccount = require("./firebase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid19nyc.firebaseio.com"
});

const db = admin.firestore();

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if(process.env.NODE_ENV === "production") {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port" + port);
});

app.get('./service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.get('/data', (req, res) => {
    let dataRef = db.collection("covid19Data");
    dataRef.get()
    .then(snapshot => {
        let result = {};
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
            result[doc.id] = doc.data();
        });
        res.status(200).send(result);
    })
    .catch(error => {
        console.log("Error getting documents", error);
        res.status(500).send("Failed to get data!");
    });
});