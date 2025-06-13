
const rollBtn = document.getElementById('roll-dice');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const cup = document.querySelector('.cup');
const result = document.getElementById('result');
const resultMsg = document.getElementById('result-message');
const balance = document.getElementById('balance');
const betAmount = document.getElementById('bet-amount');
const oddEven = document.getElementById('odd-even-pick');
rollBtn.addEventListener('click', () => {
  if (parseInt(balance.textContent) <= 0) return;
  cup.classList.add('shaking');
  setTimeout(() => {
    cup.classList.remove('shaking');
    cup.classList.add('revealing');
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    dice1.className = `dice show-${random1}`;
    dice2.className = `dice show-${random2}`;
    const sum = random1 + random2;
    const isEven = sum % 2 === 0;
    const bet = parseInt(betAmount.value);
    const selectedOption = oddEven.value;
    if ((selectedOption === '1' && !isEven) || (selectedOption === '2' && isEven)) {
      balance.textContent = parseInt(balance.textContent) + bet;
      resultMsg.textContent = `You won! Sum was ${sum}`;
    } else {
      balance.textContent = parseInt(balance.textContent) - bet;
      resultMsg.textContent = `You lost! Sum was ${sum}`;
    }
    result.classList.remove('hidden');
    setTimeout(() => {
      result.classList.add('hidden');
      cup.classList.remove('revealing');
    }, 2000);
  }, 1000);
});
