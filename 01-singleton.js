// const _noSingleton = () => {
//   class NotSingleton {
//     constructor(x) {
//       this.a = 5;
//       this.b = x;
//     }
//   }

//   console.log(new NotSingleton(35));
//   console.log(new NotSingleton(1));
//   console.log(new NotSingleton(14));
// };


// const _singleton = () => {
//   const Singleton = (() => {
//     let instance;

//     class Singleton {
//       constructor(x) {
//         if (instance) return instance;
//         instance = this;
//         this.a = 5;
//         this.b = x;
//       }
//     }

//     return Singleton;
//   })();

//   const one = new Singleton(55);
//   console.log(one);
//   one.a = 1;
//   one.b = 10;
//   console.log(new Singleton(35));
//   console.log(new Singleton(1) === new Singleton(14));
// };


// const _singleton2 = () => {
//   class Singleton {
//     constructor(x) {
//       if (Singleton._instance) {
//         return Singleton._instance;
//       }
//       this.a = 5;
//       this.b = x;
//       Singleton._instance = this;
//     }
//   }

//   const one = new Singleton(55);
//   console.log(one);
//   one.a = 1;
//   one.b = 10;
//   console.log(new Singleton(35));
//   console.log(new Singleton(1));
//   console.log(new Singleton(14));
// };


// const _singletonJS = () => {
//   const singleton = {
//     a: 5,
//     b: 15,
//   };

//   const singleton2 = singleton;

//   console.log(singleton === singleton2);

//   const singleton3 = new Object({a: 5, b: 15});

//   console.log(singleton === singleton3);


//   console.log('singleton: ', singleton);
// };

// // _singletonJS()
