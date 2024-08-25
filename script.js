/**
 * Diagonal Sum
 *
 * Given a square matrix. Calculate the sum of the elements on its diagonals.
 * The sum should only count the elements on the diagonals and there should be no duplication when summing.
 * */

function diagonalSum(matrix) {
  const panjangMatrix = matrix.length; // misal panjangnya 3
  let total = 0;

  for (let baris = 0; baris < panjangMatrix; baris++) {
    // Tambah diagonal utama
    total += matrix[baris][baris];

    // menjumlahkan diagonal sekunder jika tidak ada angka yang duplikat
    // misal baris ke-1 : 3 - 0 - 1 = 2, atau 3
    // misal baris ke-2 : 3 - 1 - 1 = 1, atau 5
    // misal baris ke-3 : 3 - 2 - 1 = 0, atau 7
    const diagonalSekunder = panjangMatrix - baris - 1;

    if (baris !== diagonalSekunder) {
      total += matrix[baris][diagonalSekunder];
    }
  }
  return total;
}

const dataMatriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(dataMatriks));
