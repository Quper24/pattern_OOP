class PurseCommand {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }

  execute() {
    throw new Error('Not implemented');
  }
}

class Minus extends PurseCommand {
  execute() {
    if (this.account.balance < this.amount) {
      console.warn('не возможно выполнить операцию');
      console.warn(this.account.balance, this.amount);
      return;
    }
    this.account.balance -= this.amount;
    return true;
  }
}

class Plus extends PurseCommand {
  execute() {
    this.account.balance += this.amount;
    return true;
  }
}

class PurseAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
}

class Purse {
  constructor() {
    this.commands = [];
  }

  operation(account, amount) {
    const Command = amount < 0 ? Minus : Plus;
    const command = new Command(account, Math.abs(amount));
    if (command.execute()) {
      this.commands.push(command);
    }
  }

  showOperations() {
    const output = [];
    for (const command of this.commands) {
      output.push({
        operation: command.constructor.name,
        account: command.account.name,
        amount: command.amount,
      });
    }
    console.table(output);
  }
}

// _use

const _use = () => {
  const purse = new Purse();
  const holiday = new PurseAccount('holiday');
 

  const car = new PurseAccount('Car');
  purse.operation(holiday, 1000);
  purse.operation(car, 1000);

  purse.operation(car, -900);
  purse.operation(car, -150);
  purse.operation(holiday, -150);

  purse.operation(holiday, 1500);
  purse.operation(holiday, 2500);
  purse.operation(car, 900);

  console.log(holiday);
  console.log(car);

  purse.showOperations();

};

