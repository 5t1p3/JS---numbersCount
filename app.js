const numbers = [...document.querySelectorAll(".number")];

const incrementFun = (el) => {
  const value = parseInt(el.dataset.value);
  let initialValue = 0;
  const increment = Math.ceil(value / 1000);

  const incr = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}`;
      clearInterval(incr);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};

numbers.forEach((number) => {
  incrementFun(number);
});
