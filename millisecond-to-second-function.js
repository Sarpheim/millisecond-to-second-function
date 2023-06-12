module.exports = (millisecond) => {
  let second = `${Math.floor(millisecond / 1000)}.${Math.floor(millisecond % 1000)}`
  if (second.split(".")[1].slice(1).toString() === "") {
    second = second.slice(0, -2)
  } else if (second.split(".")[1].slice(1).toString() === "00") {
    second = second.slice(0, -2)
  } else if (second.split(".")[1].slice(2).toString() === "0") {
    second = second.slice(0, -1)
  }
  return second
}