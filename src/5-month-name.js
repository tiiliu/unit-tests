const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return null
  } else if (monthNumber === 1) {
    return months[0]
  } else if (monthNumber === 6) {
    return months[5]
  } else if (monthNumber === 12) {
    return months[11]
  }
}
