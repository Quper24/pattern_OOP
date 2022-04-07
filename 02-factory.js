const _function = () => {
  const user = (fullname, age) => ({
    fullname,
    age,
  });

  const max = user('Maksim Leskin', 35);
  const kate = user('Ekaterina Leskina', 30);
  console.log('kate: ', kate);
  console.log(max);
};



const _prototype = () => {
  const createUser = param => {
    const CreateUser = function(data) {
      this.values = data;
    };

    for (const key in param) {
      Object.defineProperty(CreateUser.prototype, key, {
        get() {
          return this.values[key];
        },
        set(value) {
          const def = param[key];
          const valid = typeof value === def.type &&
            def.validate(value);
          if (valid) {
            this.values[key] = value;
          } else {
            console.warn('No valid', key, value);
          }
        },
      });
    }

    return CreateUser;
  };

  const User = createUser({
    fullname: {type: 'string', validate: str => !!str.length},
    age: {type: 'number', validate: age => age > 0},
  });

  const user = new User({
    fullname: 'Maksim Leskin',
    age: 35,
  });

  console.log(user.age);
  console.log(user.fullname);

  user.age = 'Привет';
  console.log('user: ', user.age);
  user.age = 0;
  console.log('user: ', user.age);
  user.age = 15;
  console.log('user: ', user.age);
};


const _class = () => {
  const createUser = param => class CreateUser {
    constructor(data) {
      this.values = data;

      for (const key in param) {
        Object.defineProperty(CreateUser.prototype, key, {
          get() {
            console.log('Читаем', key);
            return this.values[key];
          },
          set(value) {
            console.log('Запись', key);
            const def = param[key];
            const valid = typeof value === def.type &&
              def.validate(value);
            if (valid) {
              this.values[key] = value;
            } else {
              console.warn('No valid', key, value);
            }
          },
        });
      }
    }
  };

  const User = createUser({
    fullname: {type: 'string', validate: str => !!str.length},
    age: {type: 'number', validate: age => age > 0},
  });

  const user = new User({
    fullname: 'Maksim Leskin',
    age: 35,
  });

  console.log(user);

  user.age = 'Привет';
  console.log('user: ', user.age);
  user.age = 0;
  console.log('user: ', user.age);
  user.age = 15;
  console.log('user: ', user.age);
};


const _method = () => {
  class User {
    constructor(create, fullname, age) {
      if (create !== 'create') throw new Error('err')
      this.fullname = fullname;
      this.age = age;
    }

    static create({fullname, age}) {
      return new User('create', fullname, age);
    }
  }

  const user2 = User.create({
    fullname: 'Maksim Leskin',
    age: 35,
  });
  console.log('user2: ', user2);
};


