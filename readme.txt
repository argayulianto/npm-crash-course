

shortcut for git bash : CTRL + L untuk clear command

1. command : 
	- npm : untuk melihat seluruh sintak available for npm
	- npm init : memulai inisiasi membuat file package.json
		> setelah melakukan npm init, isi semua data yang di butuhkan file package.json atau bisa skip (enter) bila ingin di isi default
	- npm init -y atau npm init --yes : inisiasi file package.json dengan opsi data di isi default
	- npm config set init-author-name "Arga Yulianto" : untuk set secara default nama author sebelum lakukan npm init
		> berlaku untuk semua form file package.json
	- npm config get init-author-name : memperoleh nama author
	- npm config delete init-author-name : hapus default nama author yang telah di set sebelumnya

2. package-lock.json :
	- npm version < 5 belum ada package-lock.json 
	- pastikan file ini ikut ter-commit
	- file ini untuk mengunci versi dari package tree yang sedang di gunakan
	- setiap kali version package pada dependancies package.json berubah, package-lock.json akan di update

3. catatan : 
	- sebelum versi 5 saat install package kita harus menuliskan --save agar package tersimpan di file package.json, di versi sekarang tidak lagi
	- namun bila ingin package tersimpan di devDependancies bukan pada regular dependancies, gunakan npm install <package_name> --save-dev
	- saat akan lakukan npm install dari sebuah project, bisa gunakan npm install --production untuk ignore devDependancies
	- untuk cek versi terbaru dari sebuah package : npm outdate
	- npm install <name_package> akan install latest version, untuk specific version gunakan : npm install <name_package>@<version>
	- update ke specific version : npm install <name_package>@<version>
	- untuk update ke latest version : npm update <nama_package>
	- untuk hapus package : npm uninstall <nama_package>

4. semantic versioning :
	- bisa di lihat pada gambar (semantic versioning.png)
	- kita ambil contoh package lodash :
		> "lodash": "^4.17.21" --> akan update minor & patch version
		> "lodash": "~4.17.21" --> update only patch version
		> "lodash": "4.17.21" --> install exact version
		> "lodash": "*" --> install latest version (including major version)

5. Global package :
	- global package mean package akan disimpan di root global, bukan di project sehingga kita bisa panggil dimana saja
	- untuk melihat dimana pacake di simpan di global : npm root -g
	- biasanya di simpan di : C:\Users\LENOVO\AppData\Roaming\npm\node_modules
	- kita ambil contoh install nodemon : npm install -g nodemon
	- untuk jalankan nodemon, ketik : nodemon
	- untuk hapus global package : npm uninstall -g nodemon

6. npm list :
	- untuk melihat list dependancies(package) yang digunakan, sintak : npm list
	- npm list akan menampilkan seluruh dependancies beserta tree dependancies yang berkaitan
	- untuk hanya melihat top root dependancies, gunakan : npm list --depth 0
	- atau untuk melihat lebih dalam lagi root tree nya : npm list --depth 1 / npm list --depth 2 / dst.. 

7. npm script :
	- digunakan untuk script running application
	- let's try :
		- pada package.json, tambahkan "start" dan valuenya (gambar 1.png)
		- pada value start masukan sintak node.js untuk menjalankan aplikasi seperti biasa
		- atau kita coba yang lain (jalankan server) :
			> install live-server locally : npm install live-server
			> masukan script di file package.json (gambar 2.png)
			> kemudian jalankan server dengan : npm run jalankan-server
			> selain sintak "npm start", tambahkan run di depanya 
