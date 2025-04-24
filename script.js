const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  // your code here and return token
  const token = jwt.sign(payload, secret, {expiresIn:"1h"});
  return token;
};

//Example
const payload = {username: "user123", role: "student"};
const secret = "250b36e6eae9c8573465267a2f4cce7a3cb1f541356c4e9035cdec5969db8804814bc7038d0e10bddabf34206a0cb61dc19911204fcf3e5b9bcb804bd0321971";

//Generating token
const token = encrypt(payload, secret);
console.log("Generated token:", token);

//Handling token expiry and verification
try{
  const decoded = jwt.verify(token, secret);
  console.log("Valid token:", decoded);
} catch(err){
  if(err.name==='TokenExpiredError'){
    console.log("Token has expired");
  } else{
    console.log("Invalid token:", err.message);
  }
}

module.exports = encrypt;