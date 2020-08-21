# Shop Work Hour

## Directions

Sebuah toko memiliki jam kerja (`workHour`) yang ditentukan berdasarkan kriteria sebagai berikut:

- Apabila `day` adalah `'Senin'` sampai `'Kamis'`, maka `workHour`-nya adalah `9` jam.
- Apabila `day` adalah `'Jumat'`, maka `workHour`-nya adalah `8` jam.
- Apabila `day` adalah `'Sabtu'` atau `'Minggu'`, maka toko tersebut libur sehingga `workHour`-nya adalah `0` jam.
- Apabila `holiday` adalah `true`, maka toko tersebut libur sehingga `workHour`-nya adalah `0` jam.

Buatlah sebuah program yang akan menampilkan nilai `workHour` pada terminal berdasarkan variable input `day` dan `holiday`.

## Notes

- Apabila nilai `day` memiliki tipe selain `string`, tampilkan `'invalid type'`.
- Apabila nilai `day` memiliki tipe `string` namun bukan merupakan nama hari yang ada pada Bahasa Indonesia, tampilkan `'invalid day'`.
- Apabila nilai `holiday` memiliki tipe selain `boolean`, tampilkan `'invalid type'`.
- Testing dapat dilakukan dengan mengetikkan perintah `npm install` kemudian `npm test`.
- **Jangan mengubah nama variable yang telah disediakan**.
- **Dilarang menggunakan built-in function apapun**.

## Implementation

```javascript
var day = 'Rabu';
var holiday = false;

// Your code here
```
