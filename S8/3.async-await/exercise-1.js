// Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

// ```js

// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();


function runTimeOut() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Finalizado');
      }, 2000);
    });
  }
  
  async function async() {
    const result = await runTimeOut();
    console.log(result);
  }
  
  async();