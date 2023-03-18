const groupByKey = (list, key, {omitKey=false}) => list.reduce((hash, {[key]:value, ...rest}) => ({...hash, [value]:( hash[value] || [] ).concat(omitKey ? {...rest} : {[key]:value, ...rest})} ), {})


const data = [ { name: "Alice", age: 25, gender: "female" }, 
               { name: "Bob", age: 30, gender: "male" }, 
               { name: "Charlie", age: 35, gender: "male" }, 
               { name: "Dave", age: 40, gender: "male" }, 
               { name: "Eve", age: 45, gender: "female" }, 
               { name: "Frank", age: 50, gender: "male" }, 
               { name: "Grace", age: 55, gender: "female" }, ];


console.log(groupByKey(data, 'gender', {omitKey:false}))
       