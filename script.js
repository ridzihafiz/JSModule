import { cetakNama, dataSiswa } from './cetakNama.js';
import cetakDataSiswa from './cetakDataSiswa';

// cetakNama();
// console.info(dataSiswa);

// cetakDataSiswa(dataSiswa);

// window.cetakDataSiswa = cetakDataSiswa;

let btn_cetakSiswa = document.getElementById('btn_cetakSiswa');

btn_cetakSiswa.addEventListener('click', () => {
  cetakDataSiswa('Rid', 7, true);
});
