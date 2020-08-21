# Eat not Eat

## Directions

Buatlah sebuah program yang akan menampilkan keputusan `'eat'` atau `'not eat'` dari seseorang. Keputusan tersebut dipengaruhi oleh 3 hal yaitu waktu (`clock`), rasa lapar (`hungry`) serta aktifitas pada hari itu (`activity`).

- Apabila waktu menunjukkan pukul `'800'`, `'1200'`, atau `'1800'` maka keputusan adalah `'eat'`.
- Apabila waktu menunjukkan pukul yang bukan merupakan salah satu dari nilai yang telah disebutkan, maka:

| Aktifitas \ Rasa lapar | `true`      | `false`     |
| ---------------------- | ----------- | ----------- |
| `'high'`               | `'eat'`     | `'not eat'` |
| `'low'`                | `'not eat'` | `'not eat'` |

## Notes

- Apabila nilai `clock` memiliki tipe selain `string`, tampilkan `'invalid input'`.
- Apabila nilai `hungry` memiliki tipe selain `boolean`, tampilkan `'invalid input'`.
- Apabila nilai `activity` memiliki tipe selain `string`, tampilkan `'invalid input'`.
- Apabila nilai `activity` selain `'high'` atau `'low'`, tampilkan `'invalid activity'`.
- Testing dapat dilakukan dengan mengetikkan perintah `npm install` kemudian `npm test`.
- **Jangan mengubah nama variable yang telah disediakan**.
- **Dilarang menggunakan built-in function apapun**.

## Implementation

```javascript
var clock = '800';
var hungry = true;
var activity = 'low';

// Your code here
```
