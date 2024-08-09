<h1>CSC-WEBSITE</h1>
Suatu laman website Computer Student Club yang bertujuan untuk memperkenalkan salah satu KSM di Politeknik Negeri Jakarta dan menyediakan tempat registrasi untuk menjadi salah satu calon anggota Computer Student Club.

Features 
1. Responsive Design
Mobile-Friendly: Website ini dirancang agar dapat diakses dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone.
Responsive Grid: Menggunakan grid system yang fleksibel untuk memastikan tata letak (layout) tetap rapi di berbagai ukuran layar.

2. Interactive UI Components
Dropdown Menus: Navigasi dengan dropdown yang dapat diakses dan mudah digunakan.
Modals & Dialogs: Pop-up modals yang digunakan untuk menampilkan informasi tambahan tanpa meninggalkan halaman.
Form Validations: Validasi form real-time untuk meningkatkan user experience dan mencegah kesalahan input.

3. Direct message sent to gmail
Dengan mengisi formulir yang terdapat di laman “Contact”, tiap user dapat langsung mengirim pesan ke email official CSC.

4. Custom Components
Reusable Components: Dibuat dengan pendekatan komponen yang dapat digunakan ulang di berbagai bagian situs.

5. Third-Party Integrations
Daisy UI: Penggunaan Daisy UI untuk komponen UI yang siap pakai dan dapat dikustomisasi dengan mudah.
React Components: Implementasi berbagai komponen React untuk pengembangan antarmuka yang dinamis dan modular.

<h2>Getting Started</h2>
<h3>Prerequisites</h3>
Node.js and npm(or yarn)

<h3>Instalasi NextJS</h3>
1. git clone https://github.com/syhenn1/Final-Project_CSC.git
2. cd csc-website
3. npx create-next-app@latest
4. What is your project named? my-appWould you like to use TypeScript? No / YesWould you like to use ESLint? No / YesWould you like to use Tailwind CSS? No / YesWould you like your code inside a `src/` directory? No / YesWould you like to use App Router? (recommended) No / YesWould you like to use Turbopack for `next dev`?  No / YesWould you like to customize the import alias (`@/*` by default)? No / YesWhat import alias would you like configured? @/*

<h3>Instalasi DaisyUI</h3>
1. Install daisyUI as a Node package:
npm i -D daisyui@latest
2. Tambah DaisyUI ke tailwind.config.js:
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}

<h3>Instalasi ReactIcons</h3>
1. npm install react-icons --save

<h2>Development</h2>
1. Jalankan server development : npm run dev <br>
2. Buka http://localhost:3000 dalam browsermu.

