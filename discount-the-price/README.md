[**Back to Home**](./../README.md)

# Discount the Price

## Directions

Buatlah sebuah program yang akan menampilkan keputusan potongan harga untuk sebuah produk makanan. Potongan harga akan dihitung berdasarkan `daysBeforeExp` dan `basicPrice`. Ketentuannya adalah sebagai berikut:

- Apabila `daysBeforeExp` kurang dari `30`, maka potongan harganya adalah `30%`.
- Apabila `daysBeforeExp` kurang dari `60`, maka potongan harganya adalah `20%`.
- Apabila `daysBeforeExp` adalah `60` ke atas, maka potongan harganya adalah `0%`.
- Perhitungan potongan harga berdasarkan `basicPrice` hanya akan dilakukan jika `daysBeforeExp` kurang dari `60`:
  - Apabila `basicPrice` lebih dari `50000`, maka potongan harga akan dikurangi `5%`.
  - Apabila `basicPrice` lebih dari `100000`, maka potongan harga akan dikurangi `10%`.

Tampilkan harga akhir, yaitu hasil pengurangan `basicPrice` dengan potongan harga pada terminal.

## Notes

- Apabila nilai `daysBeforeExp` memiliki tipe selain `number`, tampilkan `'invalid daysBeforeExp'`.
- Apabila nilai `basicPrice` memiliki tipe selain `number`, tampilkan `'invalid basicPrice'`.
- Apabila nilai `daysBeforeExp` atau `basicPrice` memiliki tipe selain `number`, tampilkan `'invalid daysBeforeExp dan basicPrice'`.
- Apabila nilai `daysBeforeExp` atau `basicPrice` memiliki tipe `number`, asumsikan nilainya selalu lebih dari `0`.
- Testing dapat dilakukan dengan mengetikkan perintah `npm install` kemudian `npm test`.
- **Jangan mengubah nama variable yang telah disediakan**.
- **Dilarang menggunakan built-in function apapun**.

## Implementation

```javascript
var daysBeforeExp = 30;
var basicPrice = 500000;

// Your code here
```

[**Back to Home**](./../README.md)
