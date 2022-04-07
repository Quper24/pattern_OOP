{
  class interfaceCar {
    constructor(brand, model, maxTank, maxSpeed) {
      const proto = Object.getPrototypeOf(this);
      if (proto.constructor === interfaceCar) {
        throw new Error(`${this.constructor.name}: can not create instance of interface`);
      }

      this.brand = brand;
      this.model = model;
      this._maxTank = maxTank;
      this.maxSpeed = maxSpeed;
      this.nowTank = Math.floor(Math.random() * maxTank);
    }

    getTitle() {
      throw new Error(`Не описан метод getTitle() в классе ${this.constructor.name}`);
    }

    setModel(model) {
      throw new Error(`Не описан метод setModel() в классе ${this.constructor.name}`);
    }

    get needPetrol() {
      throw new Error(`Не описан геттер needPetrol() в классе ${this.constructor.name}`);
    }

    fillUp() {
      throw new Error(`Не описан метод fillUp() в классе ${this.constructor.name}`);
    }

    get maxTank() {
      throw new Error(`Не описан геттер maxTank() в классе ${this.constructor.name}`);
    }

    go() {
      throw new Error(`Не описан геттер go() в классе ${this.constructor.name}`);

    }
  }

  class SportCar extends interfaceCar {
    typeCar = 'sport car';

    constructor(brand, model, maxTank, maxSpeed, typeFuel = 'petrol') {
      super(brand, model, maxTank, maxSpeed);
      this.typeFuel = typeFuel;
    }

    setModel(model) {
      this.model = model;
      return this;
    }

    get needPetrol() {
      return this.maxTank - this.nowTank;
    }

    get maxTank() {
      return this._maxTank;
    }

    getTitle() {
      return `Спортивный ${this.brand} ${this.model}`;
    }

    go() {
      console.log(`Едет со скоростью ${this.maxSpeed}`);
    }

    goTurbo() {
      console.log(`Едет со скоростью ${this.maxSpeed * 1.3}`);
    }
  }

  const nissan350z = new SportCar('Nissan', '350z', 50, 260);
  console.log('nissan350z: ', nissan350z);

  nissan350z.go();

  nissan350z.goTurbo();

}


