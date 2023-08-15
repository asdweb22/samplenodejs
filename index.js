// console.log("Testing");
// console.log("tetsing2");
// console.log("tetsing3");
// // process.exit(1); this  is ot a good way to exit from program

// //process is a inbuilt module in node js to programatically exit
// process.exit = 1;

// const err = new Error("something went wrong");

// // console.log(err.stack);
// console.log(err.message); //normal message
// throw new Error("something went wrong");

// const filepath = "./test.txt";

// const fs = require("fs");
// // console.log(fs);
// //reading from file is async
// fs.readFile(filepath, "utf-8", (err, data) => {
//   if (err) throw new Error("something went wrong");
//   //   console.log(data.toString());  //decoded in string
//   // or
//   //add utf-8 parameter inside readfile and use data variable directly
//   console.log(data);
// });

// sync async

// synchronously executed line by line executed but
//disadvantage here is some task are taking time a lot due to api calling and due to that our app is blocking to execute other task

// console.log("task1");
// console.log("task2");

// Promise

// const promise = new Promise((resolve, reject) => {
//   const obj = { name: "asd" };
//   if (false) {
//     resolve(obj);
//   } else {
//     const err = "something is wrong";
//     reject(err);
//   }
// }).then(
//   (val) => {
//     console.log(val);
//   },
//   (val) => {
//     console.log(val);
//   }
// );

// ex2.

// setTimeout(() => {
//   console.log(name);
// }, 2000);
// const name = "asd";

// ex.3
// function async() {
//   return Promise.resolve();
// }

// async().then(() => console.log(name));

// const name = "pqr";

// ex.4

// const p = Promise.resolve("done");
// p.then((val) => {
//   console.log(val);
//   return "done2";
// })
//   .then((val) => {
//     console.log(val);
//     return "done3";
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => console.log(val));

// ex.5

// const p = Promise.reject("failed");
// p.then((val) => {
//   console.log(val);
//   return "done2";
// })
//   .then((val) => {
//     console.log(val);
//     return "done3";
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => console.log(val));

// performance promises vs async await

// const makeApiCall = (time) => {
//   return () =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("This api executed in:" + time);
//       }, time);
//     });
// };

// const apiRequests = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];

// Promise.all(apiRequests).then((values) => {
//   console.log(values);
// });

//ex.3
const userLogin = () => {
  console.log("Enter username and pass");
  let username = prompt("Enter Username");
  let pass = prompt("Enter pass");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("performing user authentication");
      if (username === "asd" && pass === "123") {
        resolve("user authenticated ");
      } else {
        reject("authenticaton failed");
      }
    }, 1000);
  });
};

function gotoHomePage(userauthstatus) {
  return Promise.resolve(`go to homepage :${userauthstatus}`);
}

// --------------------------------------------------------------------
// userLogin()
//   .then((res) => {
//     console.log("validate user");
//     return gotoHomePage(res);
//   })
//   .then((userauthstatus) => {
//     console.log(userauthstatus);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -------------------------or-------------------------------------------------
// async function performTask() {
//   const res = await userLogin();
//   console.log("validated user");
//   const userauthstatus = await gotoHomePage(res);
//   console.log(userauthstatus);
// }
