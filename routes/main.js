const express = require("express");
const router = express.Router();

let semuaFakta = [
  {
    slug: "rebusan-daun-pepaya-menyembuhkan-dbd",
    title: "Rebusan Daun Pepaya Menyembuhkan DBD?",
    short_title: "Rebusan Daun Pepaya & DBD",
    verdict: "Menyesatkan",
    verdict_badge: "🟡 Menyesatkan",
    status: false,
    status_label: "❌ Menyesatkan",
    img: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2023/12/01/manfaat-air-rebusan-daun-pepaya-20231201034352.jpg",
    summary:
      "Beberapa riset kecil menunjukkan bahwa daun pepaya mungkin membantu menaikkan trombosit, tapi tidak membuktikan bahwa daun pepaya bisa menyembuhkan DBD. Pengobatan medis dan perawatan di RS tetap wajib.",
    date_published: "2025-09-01",
    checked_by: "Tim FaktaSehat + dr. Ni Wayan Ari Susanti",
    read_more_url: "/cek-fakta/rebusan-daun-pepaya-menyembuhkan-dbd/ulasan",
    card: {
      heading:
        "Klaim: “Rebusan daun pepaya bisa menyembuhkan Demam Berdarah (DBD).”",
      meta: {
        tanggal: "1 September 2025",
        pemeriksa: "Tim FaktaSehat + dr. Ni Wayan Ari Susanti",
      },
      cta: {
        read_review_text: "Baca Ulasan",
        read_review_url:
          "/cek-fakta/rebusan-daun-pepaya-menyembuhkan-dbd/ulasan",
      },
    },
    detail: {
      claim_title:
        "Air rebusan daun pepaya disebut menyembuhkan DBD tanpa perlu rawat inap.",
      short_verdict:
        "Klaim ini punya unsur kebenaran kecil, tapi tidak didukung bukti klinis kuat.",
      for_public:
        "Banyak yang bilang kalau minum air rebusan daun pepaya bisa menyembuhkan Demam Berdarah (DBD). Beberapa studi memang menunjukkan daun pepaya bisa membantu menaikkan jumlah keping darah yang berfungsi dalam penyembuhan luka, tapi tidak ada bukti bahwa ia bisa menyembuhkan virus dengue secara langsung. DBD tetap butuh perawatan medis seperti infus cairan, perawatan intensif, dan kadang rawat inap.",
      methodology:
        "Menelusuri jurnal internasional (PubMed, PubMed Central), pedoman WHO, BPOM, dan CDC. Sebagian besar studi kecil atau uji klinis terbatas — tidak cukup bukti kuat.",
      full_explanation: {
        origin:
          "Bereda lewat WhatsApp, terutama di daerah tropis saat musim hujan.",
        risk: "Jika mengandalkan daun pepaya, banyak pasien yang terlambat ke rumah sakit, padahal DBD bisa berbahaya bahkan mematikan jika tidak ditangani cepat.",
        culture_context:
          "Di Indonesia, penggunaan jamu dan herbal populer; daun pepaya sering dipilih karena murah dan mudah didapat.",
        biological_mechanism:
          "Ekstrak daun pepaya diketahui meningkatkan ekspresi gen terkait produksi trombosit (mis. ALOX-12, PTAFR) yang berpotensi menaikkan jumlah trombosit.",
      },
      evidence_summary: [
        {
          id: "subenthiran2013",
          title:
            "Carica papaya leaves juice significantly accelerates platelet count in dengue patients",
          authors: "Subenthiran S., et al.",
          year: 2013,
          source: "PMC",
          notes:
            "Uji klinis acak di Malaysia; menunjukkan kenaikan trombosit versus kontrol (P < 0.01).",
        },
        {
          id: "rajapakse2019",
          title:
            "Systematic review & meta-analysis on papaya leaf extract for dengue",
          authors: "Rajapakse S., et al.",
          year: 2019,
          source: "PubMed",
          notes:
            "Meta-analisis: peningkatan trombosit dan pengurangan hari rawat inap ~2 hari; kualitas bukti rendah.",
        },
        {
          id: "teh2022",
          title: "Papaya leaf juice platelet improvement",
          authors: "Teh B.P., et al.",
          year: 2022,
          source: "MDPI",
          notes:
            "Intervensi menunjukkan kenaikan trombosit dalam 1–5 hari pada beberapa pasien.",
        },
        {
          id: "scoping2025",
          title: "Scoping review: mechanisms & safety of papaya leaf",
          authors: "Various",
          year: 2025,
          source: "Thieme",
          notes:
            "Menyepakati potensi manfaat pada trombosit, tetapi butuh RCT berkualitas lebih tinggi.",
        },
        {
          id: "news-medical-mech",
          title: "Mechanistic article on ALOX-12 and PTAFR upregulation",
          authors: "News-Medical",
          year: null,
          source: "News-Medical",
          notes:
            "Menjelaskan mekanisme biologis yang mungkin menjelaskan efek pada trombosit.",
        },
      ],
      conclusion:
        "Daun pepaya mungkin membantu menaikkan trombosit pada beberapa pasien, tetapi bukti belum cukup untuk menyatakan bahwa ia 'menyembuhkan' DBD. Perawatan medis tetap wajib.",
    },
    references: [
      {
        text: "Subenthiran S., et al. Carica papaya leaves juice significantly accelerates platelet count in dengue patients. 2013 (PMC).",
        url: "",
      },
      {
        text: "Rajapakse S., et al. Systematic review & meta-analysis on papaya leaf extract for dengue. 2019 (PubMed).",
        url: "",
      },
      {
        text: "Teh B.P., et al. Papaya leaf juice platelet improvement. 2022 (MDPI).",
        url: "",
      },
      {
        text: "Scoping review Mechanisms & Safety (2025) (Thieme).",
        url: "",
      },
      {
        text: "News-Medical article on ALOX-12, PTAFR mechanisms.",
        url: "",
      },
    ],
    share: {
      instagram_story: "/share/ig/rebusan-daun-pepaya-menyembuhkan-dbd",
      tiktok: "/share/tiktok/rebusan-daun-pepaya-menyembuhkan-dbd",
      whatsapp:
        "https://wa.me/6282237745751?text=Jamu%20daun%20pepaya%20mungkin%20bantu%20naikkan%20trombot%20tapi%20tidak%20menyembuhkan%20DBD.%20Baca%20selengkapnya%20di%20FaktaSehat%20-%20/rebusan-daun-pepaya-menyembuhkan-dbd",
    },
    social_caption:
      "Jamu daun pepaya mungkin bantu naikkan trombosit, tapi tidak bisa sembuhin DBD. Tetap ke RS ya! #FaktaSehat #SaringSebelumSharing",
    faq_cta: {
      text: "Ada yang masih bingung soal DBD atau herbal lainnya?",
      wa_link: "https://wa.me/6282237745751",
    },
    meta: {
      keywords: [
        "daun pepaya",
        "DBD",
        "dengue",
        "faktasehat",
        "cek fakta",
        "trombosit",
      ],
      author: "Tim FaktaSehat",
      locale: "id_ID",
    },
  },
  {
    slug: "sirsak-menyembuhkan-kanker",
    title: "Sirsak Menyembuhkan Kanker?",
    short_title: "Sirsak & Kanker",
    verdict: "Menyesatkan",
    verdict_badge: "🟠 Menyesatkan",
    status: false,
    status_label: "❌ Menyesatkan",
    summary:
      "Hingga sekarang belum ada uji klinis pada manusia yang membuktikan sirsak mampu mengobati atau menyembuhkan kanker. Riset yang ada kebanyakan masih di tabung (sel) atau hewan, jadi belum bisa dijadikan dasar terapi. Mengandalkan sirsak sebagai “obat anti-kanker” justru berisiko menunda pengobatan yang sudah terbukti.",
    date_published: "2025-09-01",
    checked_by: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
    read_more_url: "/cek-fakta/sirsak-menyembuhkan-kanker/ulasan",
    card: {
      heading:
        "Klaim: “Rebusan/ekstrak sirsak (graviola) bisa menyembuhkan kanker.”",
      meta: {
        tanggal: "1 September 2025",
        pemeriksa: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
      },
      cta: {
        read_review_text: "Baca Ulasan",
        read_review_url: "/cek-fakta/sirsak-menyembuhkan-kanker/ulasan",
      },
    },
    detail: {
      claim_title:
        "“Minum rebusan sirsak bisa menyembuhkan kanker tanpa kemoterapi.”",
      short_verdict:
        "Klaim ini salah karena tidak didukung bukti klinis yang valid pada manusia.",
      for_public:
        "Banyak unggahan menyebut sirsak sebagai “pembunuh kanker”. Kenyataannya, belum ada bukti klinis pada manusia yang menunjukkan sirsak dapat menyembuhkan kanker. Beberapa penelitian di laboratorium memang menemukan ekstrak sirsak bisa menghambat pertumbuhan sel kanker pada piring kultur atau tumor pada hewan, tetapi hasil seperti ini sering tidak sama ketika diuji pada manusia. Karena itu, sirsak tidak boleh digunakan untuk menggantikan terapi medis standar seperti operasi, kemoterapi, radioterapi, atau terapi target.",
      methodology:
        "Penelusuran sumber: ringkasan klinis dari rumah sakit kanker ternama (Memorial Sloan Kettering Cancer Center), situs amal kanker bereputasi (Cancer Research UK), regulasi otoritas kesehatan (BPOM), dan publikasi ilmiah (PubMed/PMC).",
      full_explanation: {
        origin:
          "Klaim “sirsak membunuh 10.000× sel kanker lebih kuat dari kemoterapi” sudah bertahun-tahun beredar di WhatsApp/media sosial, sering disertai testimoni dan iklan produk herbal.",
        risk: "Menunda atau menghentikan pengobatan medis yang terbukti (seperti kemoterapi) bisa membuat kanker bertambah parah. Konsumsi berlebih produk sirsak juga berisiko menyebabkan gangguan saraf (neurotoksisitas) yang mirip penyakit Parkinson.",
        culture_context:
          "Di Indonesia, klaim obat tradisional yang bisa menyembuhkan penyakit berat sangat populer. Otoritas kesehatan seperti BPOM sudah mengingatkan masyarakat agar tidak mudah percaya klaim jamu/herbal yang mengaku “menyembuhkan kanker”.",
        biological_mechanism:
          "Studi laboratorium menunjukkan bahwa senyawa dalam sirsak yang disebut 'acetogenins' dapat menghambat pertumbuhan dan membunuh beberapa jenis sel kanker (seperti payudara dan pankreas) di cawan petri dan pada hewan coba.",
      },
      evidence_summary: [
        {
          id: "mskc2025",
          title: "Graviola - Purported Benefits, Side Effects, & More",
          authors: "Memorial Sloan Kettering Cancer Center",
          year: null,
          source: "Memorial Sloan Kettering Cancer Center",
          notes:
            "Menyatakan dengan jelas: 'There is no proof that this therapy has benefits for cancer patients.' Tidak ada bukti manfaat sirsak untuk pasien kanker.",
        },
        {
          id: "cruk2025",
          title: "Graviola (soursop)",
          authors: "Cancer Research UK",
          year: null,
          source: "Cancer Research UK",
          notes:
            "Menyimpulkan: 'There is not enough reliable evidence that graviola works as a treatment for cancer.' Bukti yang andal tidak cukup untuk menjadikan sirsak sebagai pengobatan kanker.",
        },
        {
          id: "lannuzel2007",
          title:
            "The mitochondrial complex I inhibitor annonacin is toxic to mesencephalic dopaminergic neurons",
          authors: "Lannuzel A., et al.",
          year: 2007,
          source: "Oxford Academic (Brain)",
          notes:
            "Menghubungkan konsumsi tinggi buah dari famili Annonaceae (termasuk sirsak) dengan kasus parkinsonisme atipikal di Guadeloupe, menyoroti risiko neurotoksik.",
        },
        {
          id: "torres2012",
          title:
            "Graviola: A novel promising natural-derived drug that inhibits tumorigenicity and metastasis of pancreatic cancer cells",
          authors: "Torres MP., et al.",
          year: 2012,
          source: "PMC (PLoS ONE)",
          notes:
            "Contoh riset laboratorium (in vitro/in vivo pada hewan) yang menunjukkan ekstrak sirsak menghambat sel kanker pankreas. Ini bukan bukti pada manusia.",
        },
        {
          id: "pom2025",
          title:
            "Penjelasan BPOM RI tentang Iklan Obat Tradisional, Suplemen Kesehatan, dan Kosmetika yang Menyesatkan",
          authors: "BPOM RI",
          year: null,
          source: "POM RI",
          notes:
            "Otoritas Indonesia mengingatkan masyarakat untuk waspada terhadap klaim berlebihan obat tradisional yang mengaku bisa menyembuhkan penyakit berat seperti kanker.",
        },
      ],
      conclusion:
        "Hingga kini, tidak ada bukti klinis pada manusia yang mendukung klaim sirsak dapat menyembuhkan kanker. Mengandalkan sirsak sebagai pengobatan utama berisiko menunda terapi medis yang terbukti efektif dan dapat membahayakan kesehatan.",
    },
    references: [
      {
        text: "Memorial Sloan Kettering Cancer Center — Graviola (ringkasan bukti & keamanan).",
        url: "",
      },
      {
        text: "Cancer Research UK — Graviola (soursop): tidak cukup bukti sebagai terapi kanker.",
        url: "",
      },
      {
        text: "Lannuzel A., et al. Brain 2007 — konsumsi sirsak lebih tinggi pada pasien parkinsonisme atipikal di Guadeloupe.",
        url: "",
      },
      {
        text: "Torres MP., et al. PLoS ONE 2012 — ekstrak graviola menghambat sel kanker pankreas (in vitro/in vivo hewan).",
        url: "",
      },
      {
        text: "BPOM: penjelasan soal klaim berlebihan obat tradisional/jamu “menyembuhkan kanker”.",
        url: "",
      },
    ],
    share: {
      instagram_story: "/share/ig/sirsak-menyembuhkan-kanker",
      tiktok: "/share/tiktok/sirsak-menyembuhkan-kanker",
      whatsapp:
        "https://wa.me/6282237745751?text=HOAKS%20sirsak%20sembuhkan%20kanker.%20Bukti%20manusia%20belum%20ada%E2%80%94yang%20ada%20baru%20uji%20sel/hewan.%20Jangan%20tunda%20terapi%20dokter%20ya.%20Info%20lengkap%20di%20FaktaSehat%20-%20/sirsak-menyembuhkan-kanker",
    },
    social_caption:
      "HOAKS sirsak sembuhkan kanker. Bukti manusia belum ada—yang ada baru uji sel/hewan. Jangan tunda terapi dokter ya. #FaktaSehat #SaringSebelumSharing",
    faq_cta: {
      text: "Masih bingung soal herbal antikanker atau butuh klarifikasi resep online?",
      wa_link: "https://wa.me/6282237745751",
    },
    meta: {
      keywords: [
        "sirsak",
        "graviola",
        "kanker",
        "cek fakta",
        "faktasehat",
        "hoax",
        "herbal",
        "obat kanker",
      ],
      author: "Tim FaktaSehat",
      locale: "id_ID",
    },
  },
  {
    slug: "zymuno-menyembuhkan-kanker",
    title: "Benarkah Zymuno bisa menyembuhkan kanker tanpa kemoterapi?",
    short_title: "Zymuno & Kanker",
    verdict: "Salah & Menyesatkan",
    verdict_badge: "🔴 Salah & Menyesatkan",
    status: false,
    status_label: "❌ Salah & Menyesatkan",
    summary:
      "Tidak ada bukti ilmiah bahwa produk herbal Zymuno (daun kelor, meniran, temulawak, madu) dapat menyembuhkan kanker. Klaim “menghilangkan sel kanker tanpa kemoterapi” berbahaya karena bisa membuat pasien menunda terapi medis yang terbukti menyelamatkan jiwa.",
    date_published: "2025-09-01",
    checked_by: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
    read_more_url: "/cek-fakta/zymuno-menyembuhkan-kanker/ulasan",
    card: {
      heading:
        "Klaim: “Zymuno, ramuan herbal alami, TERBUKTI mampu menghilangkan sel kanker hanya dalam hitungan minggu TANPA kemoterapi.”",
      meta: {
        tanggal: "1 September 2025",
        pemeriksa: "Tim FaktaSehat & dr. Ni Wayan Ari Susanti",
      },
      cta: {
        read_review_text: "Baca Ulasan",
        read_review_url: "/cek-fakta/zymuno-menyembuhkan-kanker/ulasan",
      },
    },
    detail: {
      claim_title:
        "“Zymuno, madu herbal alami, terbukti menghilangkan sel kanker hanya dalam hitungan minggu tanpa kemoterapi.”",
      short_verdict:
        "Klaim ini salah dan berbahaya; tidak ada bukti klinis bahwa produk ini bisa menyembuhkan kanker.",
      for_public:
        "Beredar iklan yang menyebut produk Zymuno bisa menyembuhkan kanker secara total tanpa kemoterapi. Faktanya, tidak ada satu pun bukti klinis pada manusia yang mendukung klaim ini. Komposisi produk (daun kelor, meniran, temulawak, madu) memang bermanfaat sebagai suplemen kesehatan umum, tetapi bukan obat kanker. Pasien kanker tetap memerlukan terapi medis (operasi, kemoterapi, radioterapi, atau terapi target). Mengandalkan herbal sebagai pengganti bisa berakibat fatal.",
      methodology:
        "Penelusuran sumber dari lembaga kesehatan global (WHO, American Cancer Society, Cancer Research UK) dan otoritas nasional (BPOM RI). Level bukti untuk klaim ini tidak ada (tidak ada uji klinis pada manusia). Klaim dinilai sebagai 'misleading commercial claim'.",
      full_explanation: {
        origin:
          "Klaim ini menyebar melalui materi iklan di WhatsApp dan media sosial, sering kali secara spesifik menargetkan pasien kanker atau keluarga mereka, terutama yang berada di stadium lanjut.",
        risk: "Risiko terbesar adalah pasien menunda atau menghentikan pengobatan medis yang sudah terbukti efektif (seperti kemoterapi atau radioterapi). Penundaan ini dapat membuat kanker menyebar dan berkembang ke stadium yang lebih parah, menurunkan peluang kesembuhan, bahkan berujung kematian.",
        culture_context:
          "Klaim “herbal penyembuh kanker” sangat menarik bagi pasien yang takut akan efek samping kemoterapi. Penjual sering menyalahgunakan nomor registrasi BPOM “TR” (Obat Tradisional) seolah-olah itu adalah bukti khasiat sebagai obat kanker, padahal itu hanya izin edar sebagai jamu atau suplemen pendukung.",
        biological_mechanism:
          "Komponen seperti daun kelor kaya antioksidan, temulawak mengandung kurkuminoid dengan potensi anti-inflamasi, dan madu memiliki efek antibakteri. Namun, manfaat ini bersifat pendukung kesehatan umum dan tidak ada bukti ilmiah yang menunjukkan kombinasi ini dapat memberantas sel kanker pada manusia.",
      },
      evidence_summary: [
        {
          id: "who2025",
          title: "Cancer: Overview & treatment",
          authors: "World Health Organization",
          year: null,
          source: "WHO",
          notes:
            "Menegaskan: “There is no herbal product proven to cure cancer. Standard treatments remain essential.” Tidak ada produk herbal yang terbukti menyembuhkan kanker.",
        },
        {
          id: "acs2025",
          title: "Complementary and Alternative Methods for Cancer",
          authors: "American Cancer Society",
          year: null,
          source: "American Cancer Society",
          notes:
            "Menyatakan bahwa suplemen herbal seperti kelor atau kunyit dapat membantu kesehatan secara umum, tetapi tidak terbukti sebagai penyembuh kanker.",
        },
        {
          id: "bpom2025",
          title: "Waspada klaim berlebihan produk obat tradisional",
          authors: "BPOM RI",
          year: null,
          source: "BPOM RI",
          notes:
            "Otoritas Indonesia secara rutin memperingatkan publik untuk tidak mempercayai iklan jamu/obat tradisional yang mengklaim dapat menyembuhkan penyakit serius seperti kanker, karena klaim semacam itu dilarang dan berbahaya.",
        },
        {
          id: "upadhyay2015",
          title: "Anticancer potential of Moringa oleifera",
          authors: "Upadhyay S. et al.",
          year: 2015,
          source: "Asian Pacific J Cancer Prev",
          notes:
            "Contoh studi tentang potensi antikanker daun kelor, tetapi hasilnya hanya terbatas pada uji laboratorium (in vitro) dan belum terbukti pada manusia.",
        },
      ],
      conclusion:
        "Tidak ada bukti ilmiah yang valid bahwa Zymuno dapat menyembuhkan kanker. Klaimnya berbahaya dan menyesatkan. Pengobatan kanker harus selalu didasarkan pada terapi medis standar yang direkomendasikan oleh dokter onkologi.",
    },
    references: [
      {
        text: "World Health Organization. Cancer: Overview & treatment.",
        url: "",
      },
      {
        text: "American Cancer Society. Complementary and Alternative Methods for Cancer.",
        url: "",
      },
      {
        text: "BPOM RI. Waspada klaim berlebihan produk obat tradisional.",
        url: "",
      },
      {
        text: "Upadhyay S. et al. (2015). Anticancer potential of Moringa oleifera. Asian Pacific J Cancer Prev.",
        url: "",
      },
      {
        text: "Aggarwal BB. et al. (2013). Curcumin and cancer therapy.",
        url: "",
      },
    ],
    share: {
      instagram_story: "/share/ig/zymuno-menyembuhkan-kanker",
      tiktok: "/share/tiktok/zymuno-menyembuhkan-kanker",
      whatsapp:
        "https://wa.me/6282237745751?text=HOAKS%3A%20Zymuno%20menyembuhkan%20kanker%20tanpa%20kemoterapi.%0AFAKTA%3A%20Belum%20ada%20bukti%20ilmiah.%20Herbal%20bisa%20untuk%20stamina%2C%20tapi%20kanker%20tetap%20perlu%20terapi%20medis.%20%23FaktaSehat%20%23SaringSebelumSharing",
    },
    social_caption:
      "HOAKS: Zymuno menyembuhkan kanker tanpa kemoterapi. FAKTA: Belum ada bukti ilmiah. Herbal bisa untuk stamina, tapi kanker tetap perlu terapi medis. #FaktaSehat #SaringSebelumSharing",
    faq_cta: {
      text: "Masih bingung soal terapi kanker atau produk herbal?",
      wa_link: "https://wa.me/6282237745751",
    },
    meta: {
      keywords: [
        "Zymuno",
        "kanker",
        "kemoterapi",
        "herbal",
        "cek fakta",
        "faktasehat",
        "hoax",
        "daun kelor",
        "meniran",
        "temulawak",
        "madu",
      ],
      author: "Tim FaktaSehat",
      locale: "id_ID",
    },
  },
  {
    slug: "air-es-membekukan-lemak",
    title: "Benarkah Air Es Membekukan Lemak dan Bikin Susah Langsing?",
    short_title: "Air Es & Lemak",
    verdict: "Salah",
    verdict_badge: "🔴 Salah",
    status: false,
    status_label: "❌ Salah",
    summary:
      "Tubuh kita dijaga tetap hangat sekitar 37°C—minuman dingin cepat dihangatkan di lambung, bukan membekukan lemak. Lemak makanan juga tidak “membeku” di usus: ia dipecah dan diemulsikan oleh empedu lalu dicerna enzim, terlepas dari suhu minuman.",
    date_published: "2025-09-01",
    checked_by: "Tim FaktaSehat & dr.dr.Ni Nyoman Sri Okawati",
    read_more_url: "/cek-fakta/air-es-membekukan-lemak/ulasan",
    card: {
      heading:
        "Klaim: “Segelas air es membekukan lemak di perut/paha, seperti minyak goreng di kulkas. Karena itu berat badan susah turun.”",
      meta: {
        tanggal: "1 September 2025",
        pemeriksa: "Tim FaktaSehat & dr.dr.Ni Nyoman Sri Okawati",
      },
      cta: {
        read_review_text: "Baca Ulasan",
        read_review_url: "/cek-fakta/air-es-membekukan-lemak/ulasan",
      },
    },
    detail: {
      claim_title:
        "“Air es membekukan lemak, membuat perut buncit bandel—stop minum air dingin kalau mau kurus!”",
      short_verdict:
        "Klaim ini salah total dan bertentangan dengan prinsip dasar fisiologi tubuh manusia.",
      for_public:
        "Informasi “lemak jadi balok es karena air dingin” terdengar meyakinkan, tapi tidak sesuai biologi manusia. Begitu masuk perut, air dingin cepat mencapai suhu tubuh (~37 °C), karena tubuh punya sistem pengatur suhu (thermoregulation) yang sangat ketat. Sementara itu, lemak makanan tidak menggumpal seperti minyak di kulkas: di usus halus dia dipecah dan diemulsikan oleh empedu sehingga bisa diserap. Proses ini terjadi pada suhu tubuh, tidak tergantung dingin-hangatnya minuman.",
      methodology:
        "Menelusuri pedoman fisiologi dasar tentang termoregulasi dan pencernaan lemak dari sumber tepercaya (NCBI/StatPearls), serta telaah sumber kesehatan publik (CDC/NHS) tentang hidrasi dan manajemen berat badan. Level bukti klaim ini 'bertentangan dengan fisiologi dasar'.",
      full_explanation: {
        origin:
          "Pesan yang menyamakan lemak tubuh dengan minyak goreng yang membeku di kulkas ini sering viral di grup WhatsApp dan media sosial, karena analoginya yang sederhana dan mudah dipercaya.",
        risk: "Mempercayai hoaks ini bisa menyebabkan dehidrasi, terutama jika seseorang jadi menghindari minum air dingin saat cuaca panas atau setelah berolahraga. Selain itu, fokus pada suhu air mengalihkan perhatian dari faktor penurunan berat badan yang terbukti secara ilmiah, seperti pola makan seimbang dan aktivitas fisik.",
        culture_context:
          "Mitos ini adalah salah satu misinformasi kesehatan yang paling umum dan bertahan lama, sering kali diulang dalam nasihat non-profesional tentang diet dan penurunan berat badan.",
        biological_mechanism:
          "Tubuh memiliki sistem termoregulasi yang menjaga suhu inti tetap stabil di sekitar 37°C, sehingga air dingin cepat dihangatkan. Pencernaan lemak tidak bergantung pada suhu, melainkan pada proses kimia: empedu mengemulsi lemak menjadi butiran kecil, lalu enzim lipase memecahnya. Proses 'pembekuan lemak' (cryolipolysis) adalah prosedur medis yang memerlukan paparan dingin ekstrem dari luar tubuh, bukan dari dalam.",
      },
      evidence_summary: [
        {
          id: "ncbi-thermo",
          title: "Physiology, Body Temperature Regulation",
          authors: "Sessler DI.",
          year: null,
          source: "NCBI (StatPearls)",
          notes:
            "Menjelaskan bahwa suhu inti tubuh manusia yang sehat dijaga secara ketat pada 37 ± 0.5 °C. Minuman dingin tidak akan mengubah suhu ini secara signifikan.",
        },
        {
          id: "ncbi-fatdigestion",
          title: "Physiology, Fat Digestion",
          authors: "Hondares E, et al.",
          year: null,
          source: "NCBI (StatPearls)",
          notes:
            "Merinci peran empedu dalam mengemulsi lemak dan enzim lipase dalam mencernanya, proses yang bergantung pada kimia, bukan suhu minuman.",
        },
        {
          id: "cdc-water",
          title: "Water and Healthier Drinks",
          authors: "CDC",
          year: null,
          source: "CDC",
          notes:
            "Menekankan bahwa air putih tidak mengandung kalori dan mengganti minuman manis dengan air adalah strategi efektif untuk mengurangi asupan kalori, terlepas dari suhunya.",
        },
        {
          id: "boschmann2003",
          title: "Water-induced thermogenesis",
          authors: "Boschmann M, et al.",
          year: 2003,
          source: "PubMed",
          notes:
            "Studi yang menemukan bahwa minum air dapat meningkatkan laju metabolisme sementara. Efeknya kecil dan bukan karena 'membekukan lemak', melainkan karena tubuh mengeluarkan energi untuk menghangatkan air.",
        },
      ],
      conclusion:
        "Minum air es tidak membekukan lemak atau menghambat penurunan berat badan. Suhu air (dingin, hangat, atau suhu ruang) tidak signifikan; yang terpenting adalah memastikan hidrasi yang cukup, terutama dengan mengganti minuman manis berkalori dengan air putih.",
    },
    references: [
      {
        text: "StatPearls/NCBI — Thermoregulation: suhu inti ~37 °C & mekanisme pengaturan.",
        url: "",
      },
      {
        text: "StatPearls/NCBI — Fat Digestion: peran empedu & emulsifikasi.",
        url: "",
      },
      {
        text: "CDC — Water and Healthier Drinks: air tidak berkalori & bantu kurangi asupan kalori.",
        url: "",
      },
      {
        text: "Boschmann et al., 2003 (PubMed) — Thermogenesis air dingin (efek kecil).",
        url: "",
      },
      {
        text: "PMC/Lippincott — Ulasan tentang cryolipolysis sebagai prosedur klinis.",
        url: "",
      },
    ],
    share: {
      instagram_story: "/share/ig/air-es-membekukan-lemak",
      tiktok: "/share/tiktok/air-es-membekukan-lemak",
      whatsapp:
        "https://wa.me/6282237745751?text=Mitos%3A%20Air%20es%20bikin%20lemak%20membeku.%0AFakta%3A%20Tubuh%20kita%2037%20%C2%B0C%E2%80%94air%20dingin%20cepat%20dihangatkan.%20Lemak%20dicerna%2C%20bukan%20dibekukan.%20Minum%20air%20yang%20cukup%20jauh%20lebih%20penting.%20%23FaktaSehat",
    },
    social_caption:
      "Mitos: Air es bikin lemak membeku. Fakta: Tubuh kita 37 °C—air dingin cepat dihangatkan. Lemak dicerna, bukan dibekukan. Minum air yang cukup jauh lebih penting. #FaktaSehat",
    faq_cta: {
      text: "Masih penasaran soal minum air, diet, atau metabolisme?",
      wa_link: "https://wa.me/6282237745751",
    },
    meta: {
      keywords: [
        "air es",
        "lemak",
        "berat badan",
        "kurus",
        "diet",
        "mitos",
        "hoax",
        "cek fakta",
        "faktasehat",
        "metabolisme",
      ],
      author: "Tim FaktaSehat",
      locale: "id_ID",
    },
  },
  {
    slug: "tidur-di-lantai-menyebabkan-paru-paru-basah",
    title: "Benarkah Tidur di Lantai Menyebabkan Paru-paru Basah?",
    short_title: "Tidur di Lantai & Paru-paru Basah",
    verdict: "Salah",
    verdict_badge: "🔴 Salah",
    status: false,
    status_label: "❌ Salah",
    summary:
      "Tidak ada istilah medis “paru-paru basah karena tidur di lantai”. Paru-paru basah sebenarnya istilah awam untuk pneumonia (infeksi paru) atau edema paru (penumpukan cairan), yang penyebabnya bukan udara dingin lantai, melainkan infeksi bakteri/virus atau kondisi medis tertentu.",
    date_published: "2025-09-01",
    checked_by: "Tim FaktaSehat & dr. ___, Sp.P",
    read_more_url:
      "/cek-fakta/tidur-di-lantai-menyebabkan-paru-paru-basah/ulasan",
    card: {
      heading:
        "Klaim: “Udara dingin dari lantai diserap tubuh, membuat paru-paru jadi ‘basah’ dan menyebabkan infeksi.”",
      meta: {
        tanggal: "1 September 2025",
        pemeriksa: "Tim FaktaSehat & dr. ___, Sp.P",
      },
      cta: {
        read_review_text: "Baca Ulasan",
        read_review_url:
          "/cek-fakta/tidur-di-lantai-menyebabkan-paru-paru-basah/ulasan",
      },
    },
    detail: {
      claim_title:
        "“Tidur di lantai bikin paru-paru basah, batuk, dan sesak napas.”",
      short_verdict:
        "Klaim ini salah. 'Paru-paru basah' adalah istilah awam untuk kondisi medis serius seperti pneumonia atau edema paru, yang tidak disebabkan oleh tidur di lantai.",
      for_public:
        "Tidur di lantai tidak otomatis bikin paru-paru basah. “Paru-paru basah” adalah istilah yang sering dipakai masyarakat, tapi di dunia medis berarti pneumonia atau edema paru. Penyebab utamanya infeksi bakteri/virus, gagal jantung, atau penyakit kronis, bukan karena suhu lantai.",
      methodology:
        "Penilaian berdasarkan prinsip fisiologi pernapasan dan tinjauan literatur medis dari sumber otoritatif seperti CDC dan WHO. Tidak ditemukan bukti ilmiah yang mengaitkan posisi tidur di lantai dengan penyebab pneumonia atau edema paru.",
      full_explanation: {
        origin:
          "Ini adalah mitos kesehatan yang sangat umum dan diwariskan secara turun-temurun di banyak komunitas, berdasarkan pemahaman yang keliru tentang cara kerja tubuh dan penyakit.",
        risk: "Risiko utamanya adalah salah diagnosis mandiri. Seseorang yang mengalami gejala pneumonia (demam, batuk, sesak napas) mungkin akan mengabaikannya dan menganggapnya hanya 'masuk angin' karena tidur di lantai. Hal ini bisa menunda diagnosis dan pengobatan yang krusial.",
        culture_context:
          "Istilah “paru-paru basah” sangat populer dalam percakapan sehari-hari di Indonesia, tetapi tidak merujuk pada satu diagnosis medis yang spesifik, sehingga sering menimbulkan kebingungan mengenai penyebab dan penanganan yang benar.",
        biological_mechanism:
          "Paru-paru tidak dapat 'menyerap' dingin dari lantai. Udara yang kita hirup akan dihangatkan dan dilembabkan oleh saluran napas atas (hidung, tenggorokan) sebelum mencapai paru-paru. 'Paru-paru basah' yang sebenarnya adalah kondisi di mana kantung udara di paru-paru terisi cairan atau nanah akibat infeksi (pneumonia) atau kegagalan organ lain (edema paru).",
      },
      evidence_summary: [
        {
          id: "cdc-pneumonia",
          title: "Pneumonia: Causes and Risk Factors",
          authors: "CDC",
          year: null,
          source: "CDC",
          notes:
            "Menyatakan dengan jelas bahwa pneumonia disebabkan oleh infeksi kuman (bakteri, virus, jamur), bukan oleh paparan udara dingin.",
        },
        {
          id: "mayo-edema",
          title: "Pulmonary edema overview",
          authors: "Mayo Clinic",
          year: null,
          source: "Mayo Clinic",
          notes:
            "Menjelaskan bahwa edema paru terjadi ketika cairan menumpuk di paru-paru, paling sering akibat masalah jantung atau kondisi medis lainnya, bukan faktor eksternal seperti suhu lantai.",
        },
        {
          id: "who-pneumonia",
          title: "Pneumonia Fact Sheet",
          authors: "WHO",
          year: null,
          source: "WHO",
          notes:
            "Menegaskan bahwa pneumonia adalah penyakit menular yang disebabkan oleh kuman, dan merupakan penyebab utama kematian anak-anak di seluruh dunia.",
        },
      ],
      conclusion:
        "Tidur di lantai aman bagi orang sehat asalkan lantai bersih, menggunakan alas yang layak, dan suhu ruangan nyaman. Kondisi 'paru-paru basah' disebabkan oleh infeksi atau penyakit serius, bukan suhu lantai. Jika mengalami gejala seperti batuk, demam, dan sesak napas, segera periksakan ke dokter.",
    },
    references: [
      {
        text: "CDC — Pneumonia: Causes and Risk Factors.",
        url: "",
      },
      {
        text: "Mayo Clinic — Pulmonary edema overview.",
        url: "",
      },
      {
        text: "WHO — Pneumonia is the single largest infectious cause of death in children worldwide.",
        url: "",
      },
      {
        text: "NHS UK — Cold air can trigger asthma, but does not cause pneumonia.",
        url: "",
      },
    ],
    share: {
      instagram_story: "/share/ig/tidur-di-lantai-paru-paru-basah",
      tiktok: "/share/tiktok/tidur-di-lantai-paru-paru-basah",
      whatsapp:
        "https://wa.me/6282237745751?text=Mitos%3A%20Tidur%20di%20lantai%20bikin%20paru-paru%20basah.%0AFakta%3A%20Paru-paru%20basah%20%3D%20infeksi%20(pneumonia)%20atau%20cairan%20(edema)%2C%20bukan%20karena%20lantai.%20Tidur%20di%20lantai%20aman%20kalau%20bersih%20%26%20nyaman.",
    },
    social_caption:
      "Mitos: Tidur di lantai bikin paru-paru basah. Fakta: Paru-paru basah = infeksi (pneumonia) atau cairan (edema), bukan karena lantai. Tidur di lantai aman kalau bersih & nyaman.",
    faq_cta: {
      text: "Masih bingung soal “paru-paru basah” atau penyakit pernapasan?",
      wa_link: "https://wa.me/6282237745751",
    },
    meta: {
      keywords: [
        "paru-paru basah",
        "tidur di lantai",
        "pneumonia",
        "edema paru",
        "mitos kesehatan",
        "cek fakta",
        "faktasehat",
      ],
      author: "Tim FaktaSehat",
      locale: "id_ID",
    },
  },
];


router.get("/", (req, res) => res.render("index", { title: "Beranda" }));
router.get("/artikel", (req, res) =>
  res.render("artikel", { title: "Artikel" })
);
router.get("/blog/:slug", (req, res) =>
  res.render("blog-single", { title: req.params.slug })
);
router.get("/cek-fakta/:slug", (req, res) => {
  const slug = req.params.slug;

  // cari object yang slug-nya sama
  const fakta = semuaFakta.find((item) => item.slug === slug);

  if (fakta) {
    res.render("blog-single", { fakta });
  } else {
    res.status(404).render("404");
  }
});
router.get("/glosarium", (req, res) =>
  res.render("glosarium", { title: "Glosarium" })
);
router.get("/laporkanhoax", (req, res) =>
  res.render("laporkanhoax", { title: "Laporkan Hoax" })
);
router.get("/team", (req, res) => res.render("team", { title: "Tim" }));
router.get("/tes", (req, res) => res.render("tes", { title: "Tes" }));
router.get("/video", (req, res) => res.render("video", { title: "Video" }));

module.exports = router;
