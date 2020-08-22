[**Back to Home**](./../README.md)

# Accept the EULA

## Directions

Seorang user akan melakukan instalasi sebuah program pada komputernya. Namun sebelum program tersebut dapat di-install, user harus melakukan menyetujui EULA terlebih dahulu dengan cara melakukan klik tombol agree (`agree`). Tombol tersebut hanya dapat diklik apabila posisi scroll (`scrollPos`) sudah di `'bottom'`. User juga akan diberi opsi apakah hendak melakukan instalasi spyware remover (`spywareRemover`) atau tidak.

Berdasarkan skema tersebut buatlah sebuah program yang akan menampilkan:

- `'You have to read all the clauses before accepting'` apabila `scrollPos` berada pada posisi selain `bottom`.
- `'Installing software + spyware remover'` apabila `agree` dan `spywareRemover` bernilai `true`.
- `'Installing software'` apabila `agree` bernilai `true`.
- `'Cannot proceed when not agree'` apabila `agree` bernilai `false`.
- `'Unknown error'` apabila terdapat variable yang kosong.

### Contoh 1:

Input: `scrollPos` = `'bottom'`, `agree` = `true`, `spyware` = `true`

Output: `'Installing software + spyware remover'`

### Contoh 2:

Input: `scrollPos` = `'where am I?'`, `agree` = `true`, `spyware` = `false`

Output: `'You have to read all the clauses before accepting'`

### Contoh 3:

Input: `scrollPos` = `'bottom'`, `agree` = `true`, `spyware` = `false`

Output: `'Installing software'`

### Contoh 4:

Input: `scrollPos` = `'bottom'`, `agree` = `false`, `spyware` = `true`

Output: `'Cannot proceed when not agree'`

### Contoh 5:

Input: `scrollPos` = `''`, `agree` = `false`, `spyware` = `true`

Output: `'Unknown error'`

## Notes

- Asumsikan tipe data pada test case selalu sesuai seperti contoh-contoh yang telah diberikan.
- Testing dapat dilakukan dengan mengetikkan perintah `npm install` kemudian `npm test`.
- **Jangan mengubah nama variable yang telah disediakan**.
- **Dilarang menggunakan built-in function apapun**.

## Implementation

```javascript
var scrollPos = 'bottom';
var agree = true;
var spyware = true;

// Your code here
```

[**Back to Home**](./../README.md)
