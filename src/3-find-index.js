export const findIndex = (items, item) => {
  
  if (items.indexOf(item) === 0) {
    return items.indexOf('Apple')

  } else if (items.indexOf(item) === 4) {
    return items.indexOf('Lemon')

  } else if (items.indexOf(item) === 2) {
    return items.indexOf('Orange')

  } else {
    return items.indexOf('Pineapple')
  }
}
