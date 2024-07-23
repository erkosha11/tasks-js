const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const sumInput = document.getElementById('sum');

function formatAndSum() {
  const inputs = [input1, input2, input3, input4];
  let sum = 0;

  inputs.forEach(input => {
    let value = input.value.replace(/[^0-9.]/g, '');

    if (value) {
      let [integer, decimal] = value.split('.');
      if (decimal) {
        decimal = decimal.slice(0, 2);
      }
      value = integer + (decimal ? '.' + decimal : '');

      const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      input.value = formattedValue;

      sum += parseFloat(value) || 0;
    } else {
      input.value = '';
    }
  });

  sumInput.value = sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

[input1, input2, input3, input4].forEach(input => {
  input.addEventListener('input', formatAndSum);
});
