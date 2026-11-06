// setTimeout(()=>{
//     console.log("This runs after 2000ms");
// })


// function checkUserPermission(userId, callback) {
//   if (!userId) {
//     return callback(new Error("Invalid User ID"), null); // Pass error
//   }
//   callback(null, { id: userId, role: "admin" }); // Pass null for error, then data
// }

// checkUserPermission(101, (err, data) => {
//   if (err) {
//     console.error("Failed:", err.message);
//     return;
//   }
//   console.log("Success:", data.role);
// });


// Promise

const fetchUserProfile = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
       if(success){
        resolve({id:1, username: "Rajesh"})
       }else{
        reject(new Error("Network failed"));
       }
        
    }, 1000);
});

fetchUserProfile
.then((user) => {console.log(user.username)})
.catch((error) =>{
    console.log("Error encountered:", error.message)
})
.finally(() => console.log("Operation complete"));