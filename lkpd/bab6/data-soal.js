/*
  data-soal.js
  LKPD Bahasa Jepang Bab 6 | いろいろなところに行けて、よかったです
  Level: A2.2 • Checkpoint 1 (Topik 1–3) / Persiapan JFT-Basic / LPK
  Topik 3: 旅行に行こう (Pengalaman Wisata, Rencana & Kesan Perjalanan)
  
  PENTING:
  - Password Guru PIN: sensei123 (salt: lkpd_bab6::v1::)
  - 55 Butir Soal Komprehensif Berstandar CEFR A2 / JF Standard
*/

window.LKPD_DATA = {
  settings: {
    teacherPasswordHash: "5eb1d4c01d60a45c906e5d1f8f8f683363af16f2544711ffed967ab67fa9841c",
    sessionKey: "lkpd_bab6_session_v1",
    stateKey: "lkpd_bab6_state_v1",
    listeningPlayCount: 2,
    showListeningControls: false,
    babId: "bab6"
  },

  tabs: [
    {
      id: "panduan",
      label: "Panduan",
      type: "static",
      html: `
        <h2>Panduan LKPD Bab 6 • Checkpoint 1</h2>
        <div class="note">
          LKPD ini disusun berdasarkan materi <strong>Irodori Dasar 2 (A2.2) Bab 6: 「いろいろなところに行けて、よかったです」</strong> 
          dan merupakan <strong>CHECKPOINT 1 (Evaluasi Paruh Pertama Topik 1–3)</strong> pada standar kurikulum <strong>CEFR A2 / JFT-Basic</strong> 
          untuk kebutuhan peserta pelatihan LPK / calon Pekerja Berketerampilan Spesifik (SSW Tokutei Ginou).
        </div>

        <h3>A. Tujuan Pembelajaran Bab 6</h3>
        <p>Setelah menyelesaikan LKPD Bab 6 ini, peserta didik diharapkan mampu:</p>
        <ol>
          <li>Menceritakan pengalaman perjalanan wisata dan menyebutkan kegiatan yang dilakukan menggunakan pola <em>～たり、～たりしました</em>.</li>
          <li>Mengungkapkan kesan perjalanan, suasana tempat wisata, dan rasa bersyukur/senang menggunakan pola <em>～て、...</em> dan <em>～てよかったです</em>.</li>
          <li>Menyatakan rencana, jadwal, dan durasi penginapan wisata dengan istilah <em>～泊～日</em> (misal: 1泊2日 - <em>ippaku futsuka</em>, 2泊3日 - <em>nihaku mikka</em>).</li>
          <li>Menceritakan foto kenangan liburan dan mendeskripsikan tempat berkesan di Jepang (Danau Biwa, Hiroshima, Miyajima, Hakone, Okinawa, Kyoto).</li>
          <li>Membaca teks ulasan blog perjalanan dan pamflet wisata mengenai pengalaman berwisata di Jepang.</li>
        </ol>

        <h3>B. Can-do Statements Setara A2 / JFT-Basic</h3>
        <table>
          <tr><th>No</th><th>Can-do Statement</th><th>Kompetensi Teruji</th></tr>
          <tr><td>Can-do 22</td><td>旅行の計画や日程について、簡単に話すことができる。</td><td>Mampu berbicara singkat tentang rencana dan jadwal perjalanan wisata.</td></tr>
          <tr><td>Can-do 23</td><td>旅行先で何をしたか、どうだったかについて話すことができる。</td><td>Mampu menceritakan apa yang dilakukan di tempat wisata dan kesan perjalanannya.</td></tr>
          <tr><td>Can-do 24</td><td>旅行の写真を見せながら、旅行について話すことができる。</td><td>Mampu menceritakan pengalaman perjalanan sambil memperlihatkan foto kenangan.</td></tr>
          <tr><td>Can-do 25</td><td>観光地や旅行先についての簡単な口コミやブログを読んで、理解することができる。</td><td>Mampu membaca dan memahami ulasan singkat/blog mengenai pengalaman wisata.</td></tr>
        </table>

        <h3>C. Ambang Batas Checkpoint 1</h3>
        <p>Sebagai bab checkpoint penutup Topik 1–3 (Bab 1 s.d. Bab 6):</p>
        <ul>
          <li><strong>Nilai Akhir ≥ 75%</strong>: Siap melanjutkan ke Topik 4 (Bab 7 ke atas).</li>
          <li><strong>Nilai Akhir 65% – 74%</strong>: Memenuhi syarat minimum kelulusan Checkpoint 1.</li>
          <li><strong>Nilai Akhir &lt; 65%</strong>: Wajib mengulang evaluasi mandiri dan mendengarkan ulang Audio Bank.</li>
        </ul>
      `
    },

    {
      id: "materi",
      label: "Materi",
      type: "static",
      html: `
        <h2>Rangkuman Materi Bab 6 (Checkpoint 1)</h2>
        <div class="note">
          Tema Utama: <strong>旅行に行こう (Ayo Berwisata / Pengalaman &amp; Kesan Perjalanan)</strong>
        </div>

        <h3>1. Tata Bahasa Kunci (文法)</h3>
        <div class="grammar-box">
          <h4>➊ V-たり、V-たりしました (Menyebutkan Contoh Aktivitas)</h4>
          <p>Digunakan untuk menyebutkan beberapa contoh kegiatan representatif yang dilakukan selama wisata tanpa harus berurutan kronologis kaku.</p>
          <p class="ja">例：温泉に入ったり、おいしいものを食べたりしました。<br><small>(Saya telah masuk pemandian air panas dan makan makanan lezat, dll.)</small></p>
          <p class="ja">例：海で泳いだり、写真を撮ったりしました。<br><small>(Saya berenang di laut dan berfoto-foto, dll.)</small></p>
        </div>

        <div class="grammar-box">
          <h4>➋ V-てよかったです / V-ないでよかったです (Rasa Senang &amp; Syukur)</h4>
          <p>Digunakan untuk menyatakan rasa syukur atau senang atas suatu kejadian atau keputusan yang telah diambil.</p>
          <p class="ja">例：いろいろなところに行けて、よかったです。<br><small>(Saya senang bisa berkunjung ke berbagai macam tempat.)</small></p>
          <p class="ja">例：雨が降らないで、よかったです。<br><small>(Untunglah tidak hujan / Saya lega cuaca tidak hujan.)</small></p>
        </div>

        <div class="grammar-box">
          <h4>➌ V-て、... / A-くて、... / Na-で、... (Penyambung Kalimat Alasan &amp; Kesan)</h4>
          <p class="ja">例：景色がとてもきれいで、感動しました。<br><small>(Pemandangannya sangat indah dan saya merasa terkesan/tersentuh.)</small></p>
          <p class="ja">例：空気がおいしくて、気持ちがよかったです。<br><small>(Udaranya segar dan perasaan menjadi sangat nyaman.)</small></p>
        </div>

        <div class="grammar-box">
          <h4>➍ ～泊～日 (Penyebutan Durasi Menginap)</h4>
          <ul>
            <li><strong>1泊2日 (いっぱく ふつか):</strong> 1 malam 2 hari</li>
            <li><strong>2泊3日 (にはく みっか):</strong> 2 malam 3 hari</li>
            <li><strong>3泊4日 (さんぱく よっか):</strong> 3 malam 4 hari</li>
            <li><strong>日帰り (ひがえり):</strong> Perjalanan pulang-pergi di hari yang sama (tanpa menginap)</li>
          </ul>
        </div>
      `
    },

    {
      id: "moji",
      label: "Bagian 1: Moji",
      type: "questions",
      items: [
        {
          id: "q01",
          type: "mcq",
          number: "Soal 1.",
          prompt: "先週、友だちと京都へ（　　）に行きました。",
          options: ["りょこう", "しょくじ", "かいもの", "さんぽ"],
          answer: 1,
          hint: "Artinya: 'perjalanan / wisata'"
        },
        {
          id: "q02",
          type: "mcq",
          number: "Soal 2.",
          prompt: "山の上からの（　　）がとてもきれいでした。",
          options: ["おと", "けしき", "てんき", "におい"],
          answer: 2,
          hint: "Artinya: 'pemandangan alam'"
        },
        {
          id: "q03",
          type: "mcq",
          number: "Soal 3.",
          prompt: "会社の人たちに京都の（　　）を買いました。",
          options: ["おみやげ", "おべんとう", "きっぷ", "にもつ"],
          answer: 1,
          hint: "Artinya: 'oleh-oleh / suvenir'"
        },
        {
          id: "q04",
          type: "mcq",
          number: "Soal 4.",
          prompt: "古い日本の（　　）に泊まって、畳の部屋で寝ました。",
          options: ["アパート", "りょかん", "デパート", "こうじょう"],
          answer: 2,
          hint: "Artinya: 'penginapan tradisional Jepang'"
        },
        {
          id: "q05",
          type: "mcq",
          number: "Soal 5.",
          prompt: "露天（　　）に入りながら、富士山を見ました。",
          options: ["プール", "シャワー", "おんせん", "かわ"],
          answer: 3,
          hint: "Artinya: 'pemandian air panas'"
        },
        {
          id: "q06",
          type: "mcq",
          number: "Soal 6.",
          prompt: "観光地でたくさん（　　）を撮って、アルバムを作りました。",
          options: ["え", "しゃしん", "ビデオ", "きっぷ"],
          answer: 2,
          hint: "Artinya: 'foto (shashin o toru)'"
        },
        {
          id: "q07",
          type: "mcq",
          number: "Soal 7.",
          prompt: "連休の旅行の（　　）を立てています。",
          options: ["けいかく", "やくそく", "しゅくだい", "れんしゅう"],
          answer: 1,
          hint: "Artinya: 'rencana (keikaku o tateru)'"
        },
        {
          id: "q08",
          type: "mcq",
          number: "Soal 8.",
          prompt: "今夜は箱根のホテルに（　　）予定です。",
          options: ["すむ", "とまる", "やすむ", "はいる"],
          answer: 2,
          hint: "Artinya: 'menginap (tomaru)'"
        },
        {
          id: "q09",
          type: "mcq",
          number: "Soal 9.",
          prompt: "北海道は（　　）が豊かで、空気がとても澄んでいます。",
          options: ["しぜん", "じんこう", "ビル", "くるま"],
          answer: 1,
          hint: "Artinya: 'alam (shizen)'"
        },
        {
          id: "q10",
          type: "mcq",
          number: "Soal 10.",
          prompt: "日本での生活は、私にとって一生のいい（　　）になります。",
          options: ["おもいで", "ゆめ", "なやみ", "きもち"],
          answer: 1,
          hint: "Artinya: 'kenangan berharga (omoide)'"
        }
      ]
    },

    {
      id: "kaiwa",
      label: "Bagian 2: Kaiwa",
      type: "questions",
      items: [
        {
          id: "q11",
          type: "mcq",
          number: "Soal 11.",
          prompt: "週末は温泉に入（　　）、おいしい料理を食べ（　　）しました。",
          options: ["って／て", "ったり／たり", "る／る", "た／た"],
          answer: 2,
          hint: "Pola penyebutan contoh kegiatan: ～たり、～たりしました"
        },
        {
          id: "q12",
          type: "mcq",
          number: "Soal 12.",
          prompt: "Ａ「今回の旅行、どうでしたか？」<br>Ｂ「いろいろな場所に行（　　）、本当によかったです。」",
          options: ["って", "けて", "かないで", "ったら"],
          answer: 2,
          hint: "Pola rasa bersyukur/senang: bentuk potensial (te-form) + yokatta desu"
        },
        {
          id: "q13",
          type: "mcq",
          number: "Soal 13.",
          prompt: "山頂の景色がとてもきれい（　　）、みんなで感動しました。",
          options: ["で", "くて", "に", "な"],
          answer: 1,
          hint: "Kata sifat-Na (kirei) bentuk sambung te-form adalah で"
        },
        {
          id: "q14",
          type: "mcq",
          number: "Soal 14.",
          prompt: "今回はゆっくりしたいので、２（　　）３日のツアーを申し込みました。",
          options: ["泊（はく）", "夜（よる）", "回（かい）", "日（ひ）"],
          answer: 1,
          hint: "Penyebutan menginap 2 malam: 2泊3日 (nihaku mikka)"
        },
        {
          id: "q15",
          type: "mcq",
          number: "Soal 15.",
          prompt: "Ａ「これ、どこで撮った写真ですか？」<br>Ｂ「先週行った広島の宮島で（　　）写真ですよ。」",
          options: ["撮る", "撮った", "撮りたい", "撮って"],
          answer: 2,
          hint: "Bentuk lampau modifikasi kata benda: V-ta + meishi"
        },
        {
          id: "q16",
          type: "mcq",
          number: "Soal 16.",
          prompt: "旅行の間、ずっと天気が（　　）よかったです。",
          options: ["よくて", "よくなくて", "いいで", "よかった"],
          answer: 1,
          hint: "Ungkapan rasa syukur: 'untunglah cuacanya bagus' (yokute yokatta desu)"
        },
        {
          id: "q17",
          type: "mcq",
          number: "Soal 17.",
          prompt: "新幹線に（　　）、あっという間に名古屋に着きました。",
          options: ["乗ったら", "乗って", "乗るから", "乗れば"],
          answer: 2,
          hint: "Bentuk urutan kejadian sederhana: V-te"
        },
        {
          id: "q18",
          type: "mcq",
          number: "Soal 18.",
          prompt: "心配していましたが、雨が降ら（　　）、本当によかったです。",
          options: ["なくて", "ないで", "なかって", "ず"],
          answer: 2,
          hint: "Pola 'untung tidak hujan': V-naide yokatta desu"
        }
      ]
    },

    {
      id: "choikai",
      label: "Bagian 3: Choukai",
      type: "questions",
      items: [
        {
          id: "q19",
          type: "listening",
          number: "Soal 19.",
          prompt: "音声を聞いて答えてください。男の人は旅行で何をしましたか。",
          audioUrl: "audio/Z_[06-01]_choukai1.mp3",
          playCount: 2,
          options: [
            "湖でカヌーに乗ったり、サイクリングをしたりした",
            "山に登ったり、スキーをしたりした",
            "ホテルで一日中寝ていた",
            "美術館を見学した"
          ],
          answer: 1,
          script: "女：週末の琵琶湖の旅行、どうでしたか？ 男：すごく楽しかったですよ！湖でカヌーに乗ったり、周りをサイクリングしたりしました。天気もよくて最高でした。"
        },
        {
          id: "q20",
          type: "listening",
          number: "Soal 20.",
          prompt: "音声を聞いて答えてください。女の人はどこで写真を撮りましたか。",
          audioUrl: "audio/Z_[06-02]_choukai2.mp3",
          playCount: 2,
          options: [
            "東京タワーの前",
            "宮島の海の中の大鳥居の前",
            "富士山の山頂",
            "大阪城の天守閣"
          ],
          answer: 2,
          script: "男：わあ、きれいな写真ですね！どこですか？ 女：広島の宮島です。海の中に赤い大きな鳥居がある神社で、満潮のときに撮ったんですよ。"
        },
        {
          id: "q21",
          type: "listening",
          number: "Soal 21.",
          prompt: "音声を聞いて答えてください。二人は何泊何日で旅行に行きましたか。",
          audioUrl: "audio/Z_[06-03]_choukai3.mp3",
          playCount: 2,
          options: [
            "日帰り",
            "１泊２日",
            "２泊３日",
            "３泊４日"
          ],
          answer: 3,
          script: "女：北海道へ行ってきたそうですね。何泊で行ったんですか？ 男：２泊３日で行ってきました。札幌と小樽を回って、おいしい海鮮丼をたくさん食べましたよ。"
        },
        {
          id: "q22",
          type: "listening",
          number: "Soal 22.",
          prompt: "音声を聞いて答えてください。男の人が旅行で一番よかったと言っていることは何ですか。",
          audioUrl: "audio/Z_[06-04]_choukai4.mp3",
          playCount: 2,
          options: [
            "買い物がたくさんできたこと",
            "露天風呂から星空が見られたこと",
            "電車の切符が安かったこと",
            "友だちに偶然会えたこと"
          ],
          answer: 2,
          script: "女：箱根の温泉旅館はどうでしたか？ 男：部屋も広かったし、夜に露天風呂に入ってきれいな星空が見られて、本当によかったです。"
        },
        {
          id: "q23",
          type: "listening",
          number: "Soal 23.",
          prompt: "音声を聞いて答えてください。女の人は旅行でどんなお土産を買いましたか。",
          audioUrl: "audio/Z_[06-05]_choukai5.mp3",
          playCount: 2,
          options: [
            "京都の伝統的なお菓子（八ツ橋）とお茶",
            "北海道のチョコレート",
            "沖縄のシーサーの置物",
            "東京のキーホルダー"
          ],
          answer: 1,
          script: "男：京都のお土産、ありがとうございます！おいしそうですね。 女：有名な八ツ橋と宇治の緑茶ですよ。どうぞ召し上がってください。"
        },
        {
          id: "q24",
          type: "listening",
          number: "Soal 24.",
          prompt: "音声を聞いて答えてください。男の人はどうして新幹線で行ってよかったと言っていますか。",
          audioUrl: "audio/Z_[06-06]_choukai6.mp3",
          playCount: 2,
          options: [
            "値段が一番安かったから",
            "駅弁を食べながら富士山が見えたから",
            "途中で友達と合流できたから",
            "ホテルまで直通だったから"
          ],
          answer: 2,
          script: "女：金沢までは車で行ったんですか？ 男：いいえ、北陸新幹線で行きました。速いし、駅弁を食べながら雪景色が見られて、新幹線で行ってよかったです。"
        },
        {
          id: "q25",
          type: "listening",
          number: "Soal 25.",
          prompt: "音声を聞いて答えてください。女の人は沖縄旅行で何ができなかったと残念がっていますか。",
          audioUrl: "audio/Z_[06-07]_choukai7.mp3",
          playCount: 2,
          options: [
            "美ら海水族館の見学",
            "沖縄そばを食べること",
            "風が強くて海で泳ぐこと",
            "首里城の観光"
          ],
          answer: 3,
          script: "男：沖縄旅行はどうでした？ 女：美ら海水族館も行けたし楽しかったんですが、風が強くて海で泳げなかったのがちょっと残念でした。"
        },
        {
          id: "q26",
          type: "listening",
          number: "Soal 26.",
          prompt: "音声を聞いて答えてください。二人は次の連休にどこへ行くことに決めましたか。",
          audioUrl: "audio/Z_[06-08]_choukai8.mp3",
          playCount: 2,
          options: [
            "日光へ紅葉を見に行く",
            "大阪へユニバーサルスタジオに行く",
            "家でゆっくり休む",
            "沖縄へダイビングに行く"
          ],
          answer: 1,
          script: "男：次の秋の連休、どこか行かない？ 女：いいね！秋だから、日光へ紅葉を見に行ったり、温泉に入ったりするのはどう？ 男：賛成！早く電車の指定席を取ろう。"
        }
      ]
    },

    {
      id: "dokkai",
      label: "Bagian 4: Dokkai",
      type: "questions",
      items: [
        {
          id: "q27",
          type: "mcq",
          number: "Soal 27.",
          passage: "【ブログ：京都・奈良２泊３日の一人旅】<br>先週の金曜日から２泊３日で関西へ行ってきました。初日は京都で金閣寺を見たり、嵐山で竹林の道を歩いたりしました。外国人の観光客がたくさんいて混んでいましたが、景色が素晴らしかったです。２日目は奈良公園に行きました。鹿におせんべいをあげたり、大仏を見たりできて、とてもいい思い出になりました。最終日は雨が降りましたが、おいしい抹茶パフェを食べられたので大満足です。",
          prompt: "ブログの筆者は初日の京都で何をしましたか。",
          options: [
            "金閣寺を見たり、嵐山を歩いたりした",
            "奈良公園で鹿におせんべいをあげた",
            "一日中ホテルで休んでいた",
            "新幹線で富士山を見ていた"
          ],
          answer: 1,
          hint: "Perhatikan kalimat kedua pada teks blog."
        },
        {
          id: "q28",
          type: "mcq",
          number: "Soal 28.",
          prompt: "２日目の奈良で筆者が体験したことは何ですか。",
          options: [
            "大雨でホテルから出られなかった",
            "鹿におせんべいをあげたり、大仏を見たりした",
            "温泉旅館に泊まって露天風呂に入った",
            "自転車で京都を一周した"
          ],
          answer: 2,
          hint: "Baca kalimat: '２日目は奈良公園に行きました...'"
        },
        {
          id: "q29",
          type: "mcq",
          number: "Soal 29.",
          prompt: "最終日について正しい記述はどれですか。",
          options: [
            "天気がよくて青空だった",
            "雨が降ったが、抹茶パフェが食べられて大満足だった",
            "飛行機に乗り遅れてしまった",
            "一日中買い物をしていた"
          ],
          answer: 2,
          hint: "Perhatikan kalimat terakhir: '最終日は雨が降りましたが...大満足です'"
        },
        {
          id: "q30",
          type: "mcq",
          number: "Soal 30.",
          passage: "【箱根温泉旅館の宿泊プラン】<br>■ プラン名：旬の和食会席と絶景露天風呂満喫プラン（１泊２日・朝夕２食付き）<br>■ チェックイン：15:00 ／ チェックアウト：10:00<br>■ 特典：貸切露天風呂が無料で45分間利用可能（要事前予約）。<br>■ 注意事項：アレルギーがある方は、予約時に事前にお知らせください。当日の料理変更はできません。",
          prompt: "この宿泊プランの食事はどうなっていますか。",
          options: [
            "朝食のみ付いている",
            "夕食のみ付いている",
            "朝食と夕食の２食が付いている",
            "食事は付いていない"
          ],
          answer: 3,
          hint: "Lihat tulisan: '朝夕２食付き'"
        },
        {
          id: "q31",
          type: "mcq",
          number: "Soal 31.",
          prompt: "貸切露天風呂を利用したい場合、どうすればいいですか。",
          options: [
            "追加料金を5000円払う",
            "事前に予約をする",
            "チェックアウト後に利用する",
            "誰でも予約なしで自由に入れる"
          ],
          answer: 2,
          hint: "Lihat teks: '（要事前予約）' -> Perlu reservasi sebelumnya."
        },
        {
          id: "q32",
          type: "mcq",
          number: "Soal 32.",
          prompt: "アレルギーがある場合、いつ知らせる必要がありますか。",
          options: [
            "チェックインのとき",
            "予約するとき",
            "料理が運ばれてきたとき",
            "いつでもよい"
          ],
          answer: 2,
          hint: "Lihat teks: '予約時に事前にお知らせください'"
        }
      ]
    },

    {
      id: "kanji",
      label: "Bagian 5: Kanji",
      type: "questions",
      items: [
        {
          id: "q33",
          type: "mcq",
          number: "Soal 33.",
          prompt: "漢字「旅行」の正しい読み方はどれですか。",
          options: ["りょこう", "りょかん", "りこう", "りょき"] ,
          answer: 1,
          hint: "Perjalanan / Wisata"
        },
        {
          id: "q34",
          type: "mcq",
          number: "Soal 34.",
          prompt: "漢字「旅館」の正しい読み方はどれですか。",
          options: ["りょこう", "りょかん", "りょうかん", "ろかん"],
          answer: 2,
          hint: "Penginapan tradisional Jepang"
        },
        {
          id: "q35",
          type: "mcq",
          number: "Soal 35.",
          prompt: "漢字「景色」の正しい読み方はどれですか。",
          options: ["けいしょく", "けしき", "こうしょく", "けいしき"],
          answer: 2,
          hint: "Pemandangan alam"
        },
        {
          id: "q36",
          type: "mcq",
          number: "Soal 36.",
          prompt: "漢字「写真」の正しい読み方はどれですか。",
          options: ["しゃしん", "写心", "しゃじん", "さしん"],
          answer: 1,
          hint: "Foto"
        },
        {
          id: "q37",
          type: "mcq",
          number: "Soal 37.",
          prompt: "「ホテルにとまります」の「とまります」の正しい漢字はどれですか。",
          options: ["泊まります", "止まります", "富まります", "登まります"],
          answer: 1,
          hint: "Menginap di hotel (Kanji 泊)"
        },
        {
          id: "q38",
          type: "mcq",
          number: "Soal 38.",
          prompt: "漢字「計画」の正しい読み方はどれですか。",
          options: ["けいかく", "けいが", "けいかん", "けっかく"],
          answer: 1,
          hint: "Rencana / Jadwal"
        },
        {
          id: "q39",
          type: "mcq",
          number: "Soal 39.",
          prompt: "漢字「温泉」の正しい読み方はどれですか。",
          options: ["おんせん", "おんすい", "おゆせん", "おんぜん"],
          answer: 1,
          hint: "Pemandian air panas alami"
        },
        {
          id: "q40",
          type: "mcq",
          number: "Soal 40.",
          prompt: "「新幹線をよやくしました」の「よやく」の正しい漢字はどれですか。",
          options: ["予約", "豫約", "予役", "由約"],
          answer: 1,
          hint: "Reservasi / Pemesanan tiket"
        }
      ]
    },

    {
      id: "kosakata",
      label: "Bagian 6: Kosakata",
      type: "questions",
      items: [
        {
          id: "q41",
          type: "vocab",
          number: "Soal 41.",
          prompt: "Ketik bahasa Jepang dari 'Perjalanan / Wisata' (hiragana atau kanji):",
          accepted: ["りょこう", "旅行", "ryokou", "ryokou"]
        },
        {
          id: "q42",
          type: "vocab",
          number: "Soal 42.",
          prompt: "Ketik kata kerja bentuk kamus dari 'Menginap' (hiragana atau kanji):",
          accepted: ["とまる", "泊まる", "tomaru"]
        },
        {
          id: "q43",
          type: "vocab",
          number: "Soal 43.",
          prompt: "Ketik bahasa Jepang dari 'Pemandangan alam' (hiragana atau kanji):",
          accepted: ["けしき", "景色", "keshiki"]
        },
        {
          id: "q44",
          type: "vocab",
          number: "Soal 44.",
          prompt: "Ketik bahasa Jepang dari 'Oleh-oleh / Buah tangan' (hiragana atau kanji):",
          accepted: ["おみやげ", "お土産", "omiyage"]
        },
        {
          id: "q45",
          type: "vocab",
          number: "Soal 45.",
          prompt: "Ketik bahasa Jepang dari 'Penginapan tradisional Jepang' (hiragana atau kanji):",
          accepted: ["りょかん", "旅館", "ryokan"]
        },
        {
          id: "q46",
          type: "vocab",
          number: "Soal 46.",
          prompt: "Ketik bahasa Jepang dari 'Pemandian air panas' (hiragana atau kanji):",
          accepted: ["おんせん", "温泉", "onsen"]
        },
        {
          id: "q47",
          type: "vocab",
          number: "Soal 47.",
          prompt: "Ketik bahasa Jepang dari 'Foto' (hiragana atau kanji):",
          accepted: ["しゃしん", "写真", "shashin"]
        },
        {
          id: "q48",
          type: "vocab",
          number: "Soal 48.",
          prompt: "Ketik bahasa Jepang dari 'Rencana' (hiragana atau kanji):",
          accepted: ["けいかく", "計画", "keikaku"]
        },
        {
          id: "q49",
          type: "vocab",
          number: "Soal 49.",
          prompt: "Ketik bahasa Jepang dari 'Kenangan / Memori indah' (hiragana atau kanji):",
          accepted: ["おもいで", "思い出", "omoide"]
        },
        {
          id: "q50",
          type: "vocab",
          number: "Soal 50.",
          prompt: "Ketik bahasa Jepang dari 'Alam' (hiragana atau kanji):",
          accepted: ["しぜん", "自然", "shizen"]
        }
      ]
    },

    {
      id: "terjemahan",
      label: "Bagian 7: Terjemahan",
      type: "questions",
      items: [
        {
          id: "q51",
          type: "translation",
          number: "Soal 51.",
          prompt: "Terjemahkan ke bahasa Jepang: 'Saya senang bisa pergi ke berbagai macam tempat.'",
          sample: "いろいろなところに行けて、よかったです。(Iroirona tokoro ni ikete, yokatta desu.)"
        },
        {
          id: "q52",
          type: "translation",
          number: "Soal 52.",
          prompt: "Terjemahkan ke bahasa Jepang: 'Saya telah masuk pemandian air panas dan makan makanan yang lezat.'",
          sample: "温泉に入ったり、おいしいものを食べたりしました。(Onsen ni haittari, oishii mono o tabetari shimashita.)"
        },
        {
          id: "q53",
          type: "translation",
          number: "Soal 53.",
          prompt: "Terjemahkan ke bahasa Jepang: 'Pemandangannya sangat indah, dan saya merasa sangat terkesan.'",
          sample: "景色がとてもきれいで、感動しました。(Keshiki ga totemo kirei de, kandou shimashita.)"
        },
        {
          id: "q54",
          type: "translation",
          number: "Soal 54.",
          prompt: "Terjemahkan ke bahasa Jepang: 'Kami telah pergi berlibur ke Hakone selama 2 hari 1 malam.'",
          sample: "箱根に１泊２日で旅行に行ってきました。(Hakone ni ippaku futsuka de ryokou ni itte kimashita.)"
        },
        {
          id: "q55",
          type: "translation",
          number: "Soal 55.",
          prompt: "Terjemahkan ke bahasa Jepang: 'Syukurlah saat perjalanan wisata tidak turun hujan.'",
          sample: "旅行のとき、雨が降らないでよかったです。(Ryokou no toki, ame ga furanaide yokatta desu.)"
        }
      ]
    },

    {
      id: "hasil",
      label: "Hasil & Checkpoint 1",
      type: "result"
    },

    {
      id: "audiobank",
      label: "Bank Audio",
      type: "audiobank",
      items: [
        { track: "Track 01", file: "Z_[06-01]_choukai1.mp3", title: "琵琶湖でのアクティビティ (Kanoo & Cycling)" },
        { track: "Track 02", file: "Z_[06-02]_choukai2.mp3", title: "宮島の大鳥居の写真 (Shashin)" },
        { track: "Track 03", file: "Z_[06-03]_choukai3.mp3", title: "北海道2泊3日旅行 (Nihaku Mikka)" },
        { track: "Track 04", file: "Z_[06-04]_choukai4.mp3", title: "箱根温泉の露天風呂と星空 (Onsen & Hoshizora)" },
        { track: "Track 05", file: "Z_[06-05]_choukai5.mp3", title: "京都のお土産・八ツ橋 (Omiyage Yatsuhashi)" },
        { track: "Track 06", file: "Z_[06-06]_choukai6.mp3", title: "北陸新幹線での旅 (Shinkansen)" },
        { track: "Track 07", file: "Z_[06-07]_choukai7.mp3", title: "沖縄旅行での出来事 (Okinawa Ryokou)" },
        { track: "Track 08", file: "Z_[06-08]_choukai8.mp3", title: "秋の日光への旅行計画 (Nikko Keikaku)" }
      ]
    }
  ]
};
