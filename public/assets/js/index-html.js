// --- DATA ANDA ---
const CLAIMS = [
  {
    id: "bpom-izin",
    title: "Nomor izin BPOM bisa dipalsukan mudah",
    status: "context",
    topic: "BPOM",
    date: "2025-08-25",
    pop: 60,
    summary:
      "Kasus pemalsuan ada, namun cek silang di situs resmi memadai untuk verifikasi.",
    reviewer: "Editor",
  },
  {
    id: "daun-pepaya",
    title: "Jus daun pepaya menyembuhkan DBD",
    status: "insufficient",
    topic: "DBD",
    date: "2025-08-12",
    pop: 88,
    summary: "Bukti terbatas dan heterogen; jangan gantikan perawatan medis.",
    reviewer: "Editor",
  },
  {
    id: "air-alkali",
    title: "Air alkali “menetralisir” asam lambung",
    status: "misleading",
    topic: "Herbal",
    date: "2025-06-05",
    pop: 50,
    summary:
      "Asam lambung diatur fisiologis; “netralisasi” tidak seperti klaim iklan.",
    reviewer: "Editor",
  },
];
const ARTICLES = [
  {
    title: "Cara cek izin BPOM dalam 30 detik",
    tldr: [
      "Buka situs resmi BPOM",
      "Cari nama/nomor izin",
      "Cocokkan produsen & status",
    ],
    link: "#",
    refs: 5,
  },
  {
    title: "TL;DR: Vaksin & Imunitas",
    tldr: [
      "Keamanan dimonitor ketat",
      "Efek samping umumnya ringan",
      "Manfaat jauh lebih besar",
    ],
    link: "#",
    refs: 12,
  },
  {
    title: "Herbal & Mitos: apa kata bukti?",
    tldr: [
      "Bedakan tradisi vs bukti",
      "Pantau interaksi obat",
      "Ikuti izin edar",
    ],
    link: "#",
    refs: 9,
  },
  {
    title: "Piramida Bukti: panduan kilat",
    tldr: [
      "Meta-analisis teratas",
      "RCT kuat",
      "Observasional memberi konteks",
    ],
    link: "#",
    refs: 7,
  },
  {
    title: "DBD: pencegahan praktis",
    tldr: ["3M Plus", "Repelan terbukti", "Cari Nakes bila demam"],
    link: "#",
    refs: 6,
  },
  {
    title: "Obat & BPOM: baca label cerdas",
    tldr: ["Nomor izin", "Komposisi", "Tanggal kedaluwarsa"],
    link: "#",
    refs: 8,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // =======================================================
  // |         FUNGSI UNTUK MENAMPILKAN KLAIM (LAMA)       |
  // =======================================================
  function displayClaims() {
    const claimsContainer = document.getElementById("claims-container");
    if (!claimsContainer) return;
    // ... (Semua logika untuk menampilkan klaim dan modal tetap sama)
    // Fungsi helper (tidak berubah)
    function getStatusBadge(status) {
      switch (status) {
        case "false":
          return { text: "Salah", color: "bg-danger" };
        case "misleading":
          return { text: "Menyesatkan", color: "bg-warning text-dark" };
        case "context":
          return { text: "Perlu Konteks", color: "bg-info text-dark" };
        case "insufficient":
          return { text: "Bukti Lemah", color: "bg-secondary text-white" };
        default:
          return { text: "N/A", color: "bg-light text-dark" };
      }
    }
    function formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    // Loop untuk membuat setiap kartu klaim
    CLAIMS.forEach((claim) => {
      const badge = getStatusBadge(claim.status);
      const formattedDate = formatDate(claim.date);
      const cardHTML = `<div class="col-lg-4 col-md-6 claim-item">...</div>`; // Diringkas agar tidak terlalu panjang
      claimsContainer.innerHTML += `
                    <div class="col-lg-4 col-md-6 claim-item my-2 p-2">
                        <div class="item">
                            <div class="info">
                                <div class="meta">
                                    <ul>
                                        <li><span>${formattedDate}</span></li>
                                        <li><a href="#" class="badge ${badge.color} rounded-pill p-2">${badge.text}</a></li>
                                    </ul>
                                </div>
                                <div class="content-body">
                                    <h4>${claim.title}</h4>
                                    <p class="mb-3">${claim.summary}</p>
                                    <div class="mini-title d-flex justify-content-between align-items-center">
                                        <p class="review-text mb-0">Review: <strong>${claim.reviewer}</strong></p>
                                        <p class="review-text mb-0">Popularitas: <span class="pop-score">${claim.pop}</span></p>
                                    </div>
                                </div>
                                <div class="mt-4" style="font-size:10px;">
                                    <button style="font-size:10px;" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ulasanModal" data-claim-id="${claim.id}">Baca Ulasan</button>
                                    <a href="#" style="font-size:10px;" class="btn btn-outline-secondary">Ajukan Pertanyaan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    });
  }

  // =======================================================
  // |         FUNGSI BARU UNTUK MENAMPILKAN ARTIKEL       |
  // =======================================================

  // Panggil semua fungsi untuk menampilkan data
  displayClaims();

  // Event listener untuk modal (tidak berubah)
  const ulasanModal = document.getElementById("ulasanModal");
  if (ulasanModal) {
    ulasanModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const claimId = button.getAttribute("data-claim-id");
      const claimData = CLAIMS.find((claim) => claim.id === claimId);
      // ... (logika pengisian modal sama seperti sebelumnya)
    });
  }
});

// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // --- DATA ARTIKEL ---
    // Semua teks dari sumber diubah menjadi struktur data (array of objects)
    const articlesData = [
      {
        title: "Mengapa Website FaktaSehat.Info Hadir?",
        content:
          "Di tengah derasnya arus informasi, hoaks kesehatan bisa membahayakan nyawa. FaktaSehat.Info hadir untuk memberikan edukasi berbasis bukti ilmiah dengan bahasa yang mudah dipahami, memegang nilai empati, integritas, dan transparansi.",
        publishDate: new Date("2025-09-12"),
        comments: 42,
        imageQuery: "Law_and_Justice",
        href: "/artikel",
        img: "/assets/img/logo-banner.png",
      },
      {
        title: "Cara Kerja FaktaSehat.Info dalam Melawan Hoaks",
        content:
          "Proses kami sistematis: laporan masuk, triase berdasarkan dampak, penelusuran bukti ilmiah di jurnal internasional dan lembaga kredibel, review oleh dokter, publikasi dalam bahasa sederhana, dan pembaruan berkala jika ada riset baru.",
        publishDate: new Date("2025-09-10"),
        comments: 28,
        imageQuery: "Process_Workflow",
        href: "/artikel",
        img: "/assets/img/logo-banner.png",
      },
      {
        title:
          "Waspadai Hoaks Populer: Daun Pepaya, Sirsak, hingga Angin Duduk",
        content:
          "Banyak hoaks berbahaya beredar, seperti daun pepaya untuk DBD, sirsak untuk kanker, atau kerokan untuk angin duduk. Klaim-klaim ini tidak terbukti secara klinis dan dapat menunda penanganan medis yang tepat dan berakibat fatal.",
        publishDate: new Date("2025-09-08"),
        comments: 115,
        imageQuery: "Warning_Sign",
        href: "/artikel",
        img: "/assets/img/logo-banner-pepaya.png",
      },
    ];

    // Mengambil elemen kontainer dari HTML
    const container = document.getElementById('article-container');
    if (!container) return; // Berhenti jika kontainer tidak ditemukan

    // Membersihkan kontainer dari konten placeholder
    container.innerHTML = '';

    // Looping untuk setiap artikel dalam data
    articlesData.forEach(article => {
        // Format tanggal agar lebih mudah dibaca (misal: "12 Sep")
        const formattedDateSpan = article.publishDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
        const formattedDateFull = article.publishDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });

        // Membuat blok HTML untuk satu artikel menggunakan template literal
        // Saya menambahkan paragraf <p> untuk menampilkan konten/ringkasan
        const articleHTML = `
            <div class="col-lg-4 col-md-6 single-item">
            <div class="item">
              <div class="thumb">
                <a href="#"><img src="${article.img}" alt="Thumb" /></a>
              </div>
              <div class="info">
                <span class="date">${formattedDateSpan}</span>
                <div class="meta">
                  <ul>
                    <li>

                      <span>${formattedDateFull}</span>
                    </li>
                    
                  </ul>
                </div>
                <h4>
                  <a href="${article.href}">${article.title}</a>
                </h4>
                <a class="btn btn-sm btn-theme border circle" href="${article.href}">Read More <i class="fas fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        `;

        // Menambahkan HTML yang baru dibuat ke dalam kontainer
        container.innerHTML += articleHTML;
    });

});

const questions = [
  {
    q: "“Jus daun pepaya menyembuhkan DBD.”",
    a: "Hoaks/Perlu bukti",
    exp: "Bukti masih terbatas; jangan gantikan perawatan medis.",
  },
  {
    q: "“Bayi < 1 tahun aman minum madu.”",
    a: "Hoaks",
    exp: "Risiko botulisme — hindari madu untuk bayi.",
  },
  {
    q: "“Cek nomor izin BPOM bisa di situs resmi.”",
    a: "Fakta",
    exp: "Gunakan portal resmi BPOM untuk verifikasi.",
  },
  {
    q: "“Tidur larut malam bisa merusak organ hati.”",
    a: "Hoaks/Perlu bukti",
    exp: "Tidak ada bukti medis bahwa jam tidur tertentu merusak organ tertentu.",
  },
  {
    q: "“Vaksin menyebabkan autisme.”",
    a: "Hoaks",
    exp: "Penelitian ilmiah membuktikan klaim ini salah.",
  },
  {
    q: "“Mencuci tangan dengan sabun bisa mencegah penyebaran penyakit.”",
    a: "Fakta",
    exp: "WHO merekomendasikan cuci tangan dengan sabun untuk mencegah infeksi.",
  },
  {
    q: "“Minum air kelapa bisa membantu hidrasi tubuh.”",
    a: "Fakta",
    exp: "Air kelapa mengandung elektrolit yang baik untuk hidrasi.",
  },
  {
    q: "“Minum air hangat bisa membunuh virus corona di tenggorokan.”",
    a: "Hoaks",
    exp: "Tidak ada bukti ilmiah bahwa suhu air dapat membunuh virus dalam tubuh.",
  },
  {
    q: "“Mengonsumsi vitamin C dapat membantu menjaga daya tahan tubuh.”",
    a: "Fakta",
    exp: "Vitamin C berperan dalam fungsi imun, meski tidak menyembuhkan penyakit.",
  },
  {
    q: "“Makanan tinggi serat membantu menurunkan kadar kolesterol.”",
    a: "Fakta",
    exp: "Serat larut membantu menurunkan kolesterol jahat (LDL).",
  },
  {
    q: "“Mengoleskan pasta gigi pada luka bakar bisa mempercepat penyembuhan.”",
    a: "Hoaks",
    exp: "Pasta gigi justru dapat mengiritasi kulit dan menambah risiko infeksi.",
  },
  {
    q: "“Berolahraga minimal 150 menit per minggu baik untuk kesehatan jantung.”",
    a: "Fakta",
    exp: "WHO menganjurkan aktivitas fisik aerobik 150 menit/minggu untuk kesehatan jantung.",
  },
  {
    q: "“Mengonsumsi suplemen antibiotik bisa mencegah flu.”",
    a: "Hoaks",
    exp: "Antibiotik tidak efektif melawan virus penyebab flu.",
  },
  {
    q: "“Meditasi dapat membantu menurunkan tingkat stres.”",
    a: "Fakta",
    exp: "Penelitian menunjukkan meditasi menurunkan hormon stres (kortisol).",
  },
];

let current = 0;
let score = 0;

// === Fungsi shuffle (Fisher–Yates) ===
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Panggil sekali sebelum mulai
shuffle(questions);

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
  document.getElementById("feedback").innerText = "";
  document.getElementById(
    "score"
  ).innerText = `Skor: ${score} / ${questions.length}`;
}

function checkAnswer(ans) {
  let feedback = "";
  if (ans === questions[current].a) {
    feedback = `<span style="color:green">Benar!</span> ${questions[current].exp}`;
    score++;
  } else {
    feedback = `<span style="color:red">Salah!</span> ${questions[current].exp}`;
  }
  document.getElementById("feedback").innerHTML = feedback;
  document.getElementById(
    "score"
  ).innerText = `Skor: ${score} / ${questions.length}`;

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.querySelector(".blog-item-box").innerHTML = `
        <div class="text-center">
          <h3>Kuis selesai!</h3>
          <p>Skor akhir kamu: ${score} dari ${questions.length}</p>
          <button class="btn btn-theme mt-3" onclick="restartQuiz()">Ulangi Kuis</button>
        </div>`;
    }
  }, 3000);
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.querySelector(".blog-item-box").innerHTML = `
      <div class="single-item">
        <div class="item">
          <div class="info text-center">
            <h4 id="question"></h4>
            <div class="mt-3">
              <button class="btn btn-theme quiz-btn" onclick="checkAnswer('Fakta')">Fakta</button>
              <button class="btn btn-theme quiz-btn" onclick="checkAnswer('Hoaks')">Hoaks</button>
              <button class="btn btn-theme quiz-btn" onclick="checkAnswer('Hoaks/Perlu bukti')">Perlu Bukti</button>
            </div>
            <p class="quiz-feedback mt-3" id="feedback"></p>
            <div class="quiz-score mt-2" id="score"></div>
          </div>
        </div>
      </div>`;
  loadQuestion();
}

// Init
loadQuestion();

document.addEventListener("DOMContentLoaded", function () {
  // =======================================================
  // |                  DATA SAMPEL (KLAIM)                |
  // =======================================================
  const CLAIMS = [
    {
      id: "rebusan-daun-pepaya-menyembuhkan-dbd",
      title: "Rebusan Daun Pepaya Menyembuhkan DBD?",
      status: "misleading",
      topic: "Herbal",
      date: "2025-09-01",
      pop: 90,
      summary:
        "Beberapa riset kecil menunjukkan daun pepaya mungkin membantu menaikkan trombosit, tapi tidak membuktikan bisa menyembuhkan DBD. Pengobatan medis tetap wajib.",
      reviewer: "Tim FaktaSehat + dr. Ni Wayan Ari Susanti",
    },
    {
      id: "sirsak-menyembuhkan-kanker",
      title: "Sirsak Menyembuhkan Kanker?",
      status: "misleading",
      topic: "Herbal",
      date: "2025-09-01",
      pop: 85,
      summary:
        "Belum ada uji klinis pada manusia yang membuktikan sirsak mampu mengobati kanker. Riset yang ada masih terbatas pada level sel atau hewan.",
      reviewer: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
    },
    {
      id: "zymuno-menyembuhkan-kanker",
      title: "Benarkah Zymuno bisa menyembuhkan kanker tanpa kemoterapi?",
      status: "false",
      topic: "Herbal",
      date: "2025-09-01",
      pop: 80,
      summary:
        "Tidak ada bukti ilmiah bahwa Zymuno (daun kelor, meniran, temulawak, madu) dapat menyembuhkan kanker. Klaim ini berbahaya dan menyesatkan.",
      reviewer: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
    },
    {
      id: "air-es-membekukan-lemak",
      title: "Air es membekukan lemak dan bikin susah langsing",
      status: "false",
      topic: "Gaya Hidup",
      date: "2025-09-01",
      pop: 75,
      summary:
        "Suhu tubuh akan menghangatkan air dingin. Lemak dicerna oleh empedu dan enzim, bukan dibekukan oleh suhu minuman.",
      reviewer: "Tim FaktaSehat & dr.dr.Ni Nyoman Sri Okawati",
    },
    {
      id: "tidur-di-lantai-menyebabkan-paru-paru-basah",
      title: "Tidur di lantai bikin paru-paru basah dan berbahaya",
      status: "false",
      topic: "Gaya Hidup",
      date: "2025-09-01",
      pop: 70,
      summary:
        "“Paru-paru basah” adalah istilah awam untuk pneumonia atau edema paru, yang disebabkan oleh infeksi atau kondisi medis, bukan suhu lantai.",
      reviewer: "Tim FaktaSehat & dr. ___, Sp.P",
    },
  ];

  // =======================================================
  // |       FUNGSI UNTUK MENAMPILKAN KLAIM (REVISI)       |
  // =======================================================
  function displayClaims(data) {
    const claimsContainer = document.getElementById("claims-containerr");
    if (!claimsContainer) return;

    // Helper untuk status badge
    function getStatusBadge(status) {
      switch (status) {
        case "false":
          return { text: "Salah", color: "bg-danger text-white" };
        case "misleading":
          return { text: "Menyesatkan", color: "bg-warning text-dark" };
        default:
          return { text: "N/A", color: "bg-light text-dark" };
      }
    }
    // Helper untuk format tanggal
    function formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    // Bangun string HTML di dalam variabel untuk efisiensi
    const allClaimsHTML = data
      .map((claim) => {
        const badge = getStatusBadge(claim.status);
        const formattedDate = formatDate(claim.date);
        return `
        <div class="col-lg-4 col-md-6 claim-item my-2 p-2">
            <div class="item">
                <div class="info">
                    <div class="meta">
                        <ul>
                            <li><span>${formattedDate}</span></li>
                            <li><a href="#" class="badge ${badge.color} rounded-pill p-2">${badge.text}</a></li>
                        </ul>
                    </div>
                    <div class="content-body">
                        <h4>${claim.title}</h4>
                        <p class="mb-3">${claim.summary}</p>
                        <div class="mini-title d-flex justify-content-between align-items-center">
                            <p class="review-text mb-0">Review: <strong>${claim.reviewer}</strong></p>
                            <p class="review-text mb-0">Popularitas: <span class="pop-score">${claim.pop}</span></p>
                        </div>
                    </div>
                    <div class="mt-4" style="font-size:10px;">
                    <a href="/cek-fakta/${claim.id}">
                        <button style="font-size:10px;" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ulasanModal" data-claim-id="${claim.id}">Baca Ulasan</button></a>
                        <a href="#" style="font-size:10px;" class="btn btn-outline-secondary">Ajukan Pertanyaan</a>
                    </div>
                </div>
            </div>
        </div>
      `;
      })
      .join(""); // Gabungkan semua HTML menjadi satu string

    // Set innerHTML hanya satu kali setelah loop selesai
    claimsContainer.innerHTML = allClaimsHTML;
  }

  // =======================================================
  // |        PANGGIL FUNGSI & ATUR EVENT LISTENER         |
  // =======================================================

  // Panggil fungsi untuk menampilkan data klaim
  displayClaims(CLAIMS);

  // Event listener untuk modal (asumsi menggunakan Bootstrap 5)
  const ulasanModal = document.getElementById("ulasanModal");
  if (ulasanModal) {
    ulasanModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const claimId = button.getAttribute("data-claim-id");
      const claimData = CLAIMS.find((claim) => claim.id === claimId);

      if (claimData) {
        // Logika pengisian modal di sini
        const modalTitle = ulasanModal.querySelector(".modal-title");
        const modalBody = ulasanModal.querySelector(".modal-body");

        modalTitle.textContent = claimData.title;
        modalBody.innerHTML = `<p>${claimData.summary}</p><hr><small>Diperiksa oleh: <strong>${claimData.reviewer}</strong></small>`;
      }
    });
  }
});