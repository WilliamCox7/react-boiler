// this app's server location
const HOST = {
  production: "",
  development: "http://localhost:" + PORT
}

// data storage location (mongo)
const MONGO_URI = {
  production: "",
  development: "mongodb://localhost:27017"
}

// this determines what environment the server is running in
const ENV = "development";

// secret: this app's client secret
// api: used to make an explicit call to this app's api
// facebook: facebook-passport's required fields
// mongo_uri: provides access to mongo's storage location
module.exports = {

  secret: "________________",

  api: HOST[ENV],

  facebook: {
    clientSecret: "________________",
    clientID: "________________",
    callbackURL: HOST[ENV] + "/auth/facebook/callback"
  },

  mongo_uri: MONGO_URI[ENV],

  port: 3000

}
