// list-posts.js
const files = [
  {
    id: 1,
    files_href: "abs-compound-chong-chay.html",
    name: "abs compound chống cháy",
  },
  {
    id: 2,
    files_href: "abs-compound-chong-tinh-dien.html",
    name: "abs compound chống tích điện",
  },
  {
    id: 3,
    files_href: "lam-nhua.html",
    name: "làm nhựa",
  },

  {
    id: 4,
    files_href: "nhua-ca-phe-la-gi.html",
    name: "Nhựa cà phê là gì",
  },
  {
    id: 5,
    files_href: "nhua-soi-tre-la-gi.html",
    name: "Nhựa sợi tre là gì",
  },

  {
    id: 6,
    files_href: "nhua-abs-la-gi.html",
    name: "Nhựa ABS là gì",
  },
  {
    id: 7,
    files_href: "pa6-pa66-compound-chong-chay.html",
    name: "PA6-PA66 compound chống cháy",
  },
  {
    id: 8,
    files_href: "ve-chung-toi.html",
    name: "Giới thiệu về TSH",
  },
  {
    id: 9,
    files_href: "ung-dung-cua-nhua.html",
    name: "Ứng dụng của nhựa",
  },
  {
    id: 10,
    files_href: "phu-gia-nhua-la-gi.html",
    name: "Phụ gia nhựa là gì",
  },
  {
    id: 11,
    files_href: "pp-compound-chong-chay.html",
    name: "PP compound chống cháy",
  },
  {
    id: 12,
    files_href: "pp-compound-chong-tia-uv.html",
    name: "PP compound chống tia UV",
  },
  {
    id: 13,
    files_href: "pa6-pa66-compound-gia-cuong-soi-thuy-tinh.html",
    name: "PA6 PA66 compound gia cường sợi thủy tinh",
  },
  {
    id: 14,
    files_href: "hips-compound.html",
    name: "Nhựa hips compound",
  },
  {
    id: 15,
    files_href: "go-nhua-la-gi.html",
    name: "Gỗ nhựa là gì",
  },
  {
    id: 16,
    files_href: "chat-lieu-nhua-pp.html",
    name: "Chất liệu nhựa PP",
  },
  {
    id: 17,
    files_href: "cong-ty-san-xuat-nhua.html",
    name: "Công ty sản xuất nhựa",
  },
  {
    id: 18,
    files_href: "nhua-goc-tinh-bot-la-gi.html",
    name: "Nhựa gốc tinh bột là gì",
  },
  {
    id: 19,
    files_href: "pbt-compound.html",
    name: "Nhựa PBT compound",
  },
  {
    id: 20,
    files_href: "pc-abs-compound-chong-chay.html",
    name: "PC ABS compound chống cháy",
  },
  {
    id: 21,
    files_href: "pc-abs-compound-ma-dien.html",
    name: "PC ABS compound mạ điện",
  },
];

const shownFiles = []; // Mảng để lưu trữ các file đã hiển thị

const randomFiles = [];
for (let i = 0; i < 15; i++) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * files.length);
  } while (shownFiles.includes(files[randomIndex])); // Kiểm tra xem file đã được hiển thị hay chưa

  randomFiles.push(files[randomIndex]);
  shownFiles.push(files[randomIndex]); // Thêm file vào mảng đã hiển thị
}

// Hiển thị các file ngẫu nhiên
for (const file of randomFiles) {
  const link = `<a href="${file.files_href}" class="">${file.name}</a>`;
  document.querySelector("#links-container").innerHTML += link;
}
