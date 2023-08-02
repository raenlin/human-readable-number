module.exports = function toReadable (n) {
  const digit= ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const decimal = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(n < 20) {
    return digit[n];
  } else if((n === 20) || (n === 30) || (n === 40) || (n === 50) || (n === 60) || (n === 70) || (n === 80) || (n === 90)) {
    n = String(n);
    return decimal[n[0]];
  } else if(n < 100) {
    n = String(n);
    return `${decimal[n[0]]}${' '}${digit[n[1]]}`
  } else if((n === 100) || (n === 200) || (n === 300) || (n === 400) || (n === 500) || (n === 600) || (n === 700) || (n === 800) || (n === 900)) {
    n = String(n);
    return `${digit[n[0]]}${' '}${'hundred'}`;
  } else if((n > 100 && n < 110) || (n > 200 && n < 210) || (n > 300 && n < 310) || (n > 400 && n < 410) || (n > 500 && n < 510) || (n > 600 && n < 610) || (n > 700 && n < 710) || (n > 800 && n < 810) || (n > 900 && n < 910)) {
    n = String(n);
    nFirst = n[0];
    nSecond = n.slice(2);
    return `${digit[nFirst]}${' '}${'hundred'}${' '}${digit[nSecond]}`;
  } else if((n >= 110 && n < 120) || (n >= 210 && n < 220) || (n >= 310 && n < 320) || (n >= 410 && n < 420) || (n >= 510 && n < 520) || (n >= 610 && n < 620) || (n >= 710 && n < 720) || (n >= 810 && n < 820)  || (n >= 910 && n < 920)) {
    n = String(n);
    nFirst = n[0];
    nSecond = n.slice(1);
    return `${digit[nFirst]}${' '}${'hundred'}${' '}${digit[nSecond]}`;
  } else if(n <= 999) {
      n = String(n);      
      if(n[2] === '0') {
        nFirst = n[0];
        nSecond = n.slice(1);
        return `${digit[nFirst]}${' '}${'hundred'}${' '}${decimal[nSecond[0]]}`;
      } else return `${digit[n[0]]}${' '}${'hundred'}${' '}${decimal[n[1]]}${' '}${digit[n[2]]}`;
  }
}
