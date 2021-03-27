var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function printBox () {
  var tableRow = document.getElementsByTagName('tr')

  for (let i = 0; i < arr.length; i++) {
      var out = ''
      for (let j = 0; j < arr.length; j++) {
          out += `<td><div id="box${arr[i][j]}">${arr[i][j]}<div></td>`
      }
      tableRow[i].innerHTML = out + `<td><button id="sortLeft" onclick="sortLeft(${i})"><i class="material-icons">compare_arrows</i></button></td>`
  }

  tableRow[3].innerHTML = `
      <td><button id="sortBottom" onclick="sortBottom(${0})"><i class="material-icons rotate-90">compare_arrows</i></button></td>
      <td><button id="sortBottom" onclick="sortBottom(${1})"><i class="material-icons rotate-90">compare_arrows</i></button></td>
      <td><button id="sortBottom" onclick="sortBottom(${2})"><i class="material-icons rotate-90">compare_arrows</i></button></td>
      <td></td>
  `
}

function sortLeft (index) {
  if (arr[index][0] > arr[index][2]) {
      arr[index].sort((a, b) => a > b ? 1 : -1) // acceding sort
  } else {
      arr[index].sort((a, b) => a > b ? -1 : 1)
  }
  printBox()
}

function sortBottom(index) {
  // take an elements from one colum in matrix to new array
  var arrNew = []
  for (let i = 0; i < arr.length; i++) {
      arrNew.push(arr[i][index])
  }

  // sort it
  if (arrNew[0] > arrNew[2]) {
      arrNew.sort((a, b) => a > b ? 1 : -1) // acceding sort
  } else {
      arrNew.sort((a, b) => a > b ? -1 : 1)
  }

  arr[0][index] = arrNew[0]
  arr[1][index] = arrNew[1]
  arr[2][index] = arrNew[2]
  printBox()            
}

function counter () {
  var newArr =  Array(3).fill(0).map(i => i = Array(3).fill(0))
  // var newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  for (let i = 0; i < arr.length; i++) {
      for (let j = 2; j >= 0; j--) {
          newArr[j][i] = arr[i][j]
      }
  }
  arr = newArr.reverse()
  printBox()
}

function clockWise () {
  var newArr =  Array(3).fill(0).map(i => i = Array(3).fill(0))
  arr.reverse()
  for (let i = 0; i < arr.length; i++) {
      for (let j = 2; j >= 0; j--) {
          newArr[j][i] = arr[i][j]
      }
  }
  arr = newArr
  printBox()
}

function reset () {
  arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ]
  printBox()
}

// call main function
printBox()