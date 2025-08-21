// Anatomy of an axios request!
// variable to save response in
// equals await axios 
// in parens - url to make the request too
// by default it is get
let res = await axios('http://example.com');


//  other axios anatomys
//  varaible to save response in
let res2 = await axios.put("requrl",dataVar,{new:true});    // to get updated data we need to pass new:true
let res3 = await axios.post("requestURL",dataVar);
let res4 = await axios.delete("requrl",dataVar)