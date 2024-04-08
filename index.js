// objects are a collection of data that consist of a list of properties(key value pairs) bounded by curly braces 
// the properties can point to values of any data 

// Syntax
const Object ={}   (empty Object)
const Object ={ key:value}   (single property) 

// commas are used to separate multiple objects
const Object = {
    key1: value1,
    key2: value2,
    key3: value3
}
// nested Objects- here the values  associated with one or more of the keys is another object

const object={
    key1: value1
    key2: {
        innerkey1: innervalue1
        innerkey2: innervalue2
    }
}

const address = "11 Broadway, 2nd Floor, New York, NY 10004";
const address = ["11 Braodway","2nd Floor","New York","NY 10004"]

const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };
//   In this case, ciyt is a key and New York is the value of the key 
// But keys must be unique. If he same key is used for multiple properties, only the final value will be retained.
//  The rest will be overwritten:

const meals = {
    breakfast: "Avocado toast",
    breakfast: "Oatmeal",
    breakfast: "Scrambled eggs",
  };
  
  meals;
  // => { breakfast: "Scrambled eggs" }
      

// the real data of an object is stored in the other half of the key value pairing 
// the key is what lets us access that value.

//   DOT NOTATION (member access operator.)

// we can access the object stored in the variable by typing the variable names. 
// To access one of the values inside our object,we adda reference to the key associated with the value we want 

const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };
  console.log(address.city)
  console.log(address.zipCode)
  console.log(address.street.line2)

//   Inorder to access a property via dot Notification, 
//   the key must follow the same naming rules applied to variables and functions.
camelCaseEverything
start the key with a lower case letter 
no spaces or punctuatuions



//   Bracket Notation(computed member access operator) ([])
To access the  properties, they are  represented as strings inside the operator.



