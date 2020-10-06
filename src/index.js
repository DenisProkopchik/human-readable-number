module.exports = function toReadable(number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number >= 0 && number <= 9) {
    return units[number];
  }
  if (number >= 10 && number < 20) {
    return fromTenToNineteen[number - 10];
  }
  if (number >= 20 && number <= 99) {
    let str = `${number}`.split('');
    let ten = Number(str[0]) - 2;
    let unit = Number(str[1]) === 0 ? "" : units[Number(str[1])];
    let result = `${dozens[ten]} ${unit}`;
    return result.trim();
  }
  if (number >= 100 && number <= 999) {
    let str = `${number}`.split('');
    let hundr = str[0];
    let ten = str[1];
    let unit = Number(str[2]) === 0 ? "" : units[Number(str[2])];
    Number(ten) === 1 ? ten = fromTenToNineteen[Number(str[2])] : Number(ten) === 0 ? ten = unit : unit === "" && Number(ten) > 1 ? ten = `${dozens[Number(ten) - 2]}` : ten = `${dozens[Number(ten) - 2]} ${unit}`;
    let result = `${units[hundr]} hundred ${ten}`;
    return result.trim();
  }
}
