class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}


const observer = new Observer();

const form = document.querySelector('form');
form.style.display = 'flex';

form.text.addEventListener('input', () => {
  observer.broadcast(form.text.value);
});

const getWordsCount = text => (text ?
  text.trim().split(/\s+/).length : 0);

const output = text => {
  form.output.textContent = text;
};

const count = text => {
  form.count.textContent = getWordsCount(text);
};

observer.subscribe(count);
observer.subscribe(output);

setTimeout(() => {
  observer.unsubscribe(output);
}, 5000);

