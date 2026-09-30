import { useEffect, useRef } from "react";
import "./GirlfriendDay.css";

function GirlfriendDay() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const playMusic = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay diblokir oleh browser.
        // Tidak ada tombol yang ditampilkan.
      }
    };

    playMusic();
  }, []);

  return (
    <div className="girlfriend-page">
      {/* BACKGROUND MUSIC */}
      <audio ref={audioRef} src="/music/background.mp3" loop preload="auto" />

      <main className="girlfriend-content">
        {/* HEADER */}
        <section className="girlfriend-header">
          <div className="small-heart">♡</div>

          <p className="girlfriend-date">01 OCTOBER 2026</p>

          <h1>
            Happy Girlfriend Day
            <span>Babyyy 💗</span>
          </h1>

          <p className="girlfriend-subtitle">
            A little something made just for you.
          </p>
        </section>

        {/* POLAROID */}
        <section className="polaroid-section">
          <div className="polaroid polaroid-one">
            <img src="/images/foto1.jpeg" alt="Foto kenangan 1" />

            <p>
              Kalau lihat foto kamu yang satu ini, rasanya lucu juga kalau ingat
              sekarang kamu sudah tumbuh jadi seseorang yang begitu berarti buat
              aku. ❤️ Dulu kamu masih kecil, masih polos, dan mungkin belum
              kepikiran bakal bertemu seseorang seperti aku di masa depan 😭😂
              Ternyata waktu berjalan sejauh itu sampai akhirnya kita
              dipertemukan, saling kenal, saling cerita, dan akhirnya bisa
              sampai di titik ini. Kalau boleh jujur, aku senang banget bisa
              mengenal kamu yang sekarang. Tapi melihat versi kecil kamu seperti
              ini juga bikin aku senyum sendiri. Karena ternyata, perempuan yang
              sekarang selalu berhasil bikin aku jatuh hati itu… sudah lucu dari
              dulu. ❤️
            </p>
          </div>

          <div className="polaroid polaroid-two">
            <img src="/images/foto2.jpeg" alt="Foto kenangan 2" />

            <p>
              Lucu juga ya lihat kita versi kecil begini 😭❤️ Dua anak kecil
              yang dulu belum saling kenal, belum tahu kalau suatu hari nanti
              bakal dipertemukan dan akhirnya saling sayang. Walaupun foto ini
              cuma hasil AI, aku suka membayangkan kalau dari kecil kita sudah
              ketemu. Tapi mungkin memang lebih indah kita dipertemukan di waktu
              yang tepat. Dulu cuma dua bocil, sekarang jadi kita ya walaupun
              kamu masih aku anggap sebagai anak kecil yang bakal selalu aku
              sayang di manapun dan kapanpun itu sayanggg
            </p>
          </div>

          <div className="polaroid polaroid-three">
            <img src="/images/foto3.jpeg" alt="Foto kenangan 3" />

            <p>
              Salah satu bukti kalau kamu memang clumsy dari sananya 😭😂
              Setrika aja sampai diajak berantem, padahal dia cuma diem di
              tempat wkwkwk. Kadang tingkah kamu bikin aku geleng-geleng kepala,
              tapi di balik semua ke-clumsy-an kamu, ada satu hal yang selalu
              bikin aku sayang: aku selalu khawatir kalau kamu kenapa-kenapa. ❤️
              Jadi boleh clumsy, boleh random, tapi jangan sering-sering bikin
              aku khawatir ya, babyyyy. Aku sayang kamu, dengan segala
              ke-random-an kamu itu lovee u sayangg
            </p>
          </div>

          <div className="polaroid polaroid-four">
            <img src="/images/foto4.jpeg" alt="Foto kenangan 4" />

            <p>
              Aku nggak tahu kamu sadar atau nggak… Tapi setiap kali lihat kamu,
              aku selalu mikir, ‘Kok bisa ya secantik ini?’ 😭❤️ Kamu bukan cuma
              orang yang aku sayang, tapi juga salah satu alasan yang bikin aku
              semangat menjalani hari. Sesibuk atau secapek apa pun hariku,
              lihat kamu sedikit aja rasanya udah bikin mood balik lagi. Jadi
              kalau suatu hari kamu merasa nggak cukup baik, ingat aja… ada aku
              yang dari dulu sampai sekarang masih gampang banget terpesona sama
              kamu. 🤍
            </p>
          </div>
        </section>

        {/* MESSAGE */}
        <section className="girlfriend-message">
          <div className="message-card">
            <div className="message-icon">💌</div>

            <h2>A little message for you</h2>

            <p>
              Kalau ditanya apa kesanku selama kenal kamu, jawabannya mungkin
              sederhana: Kamu itu aneh. 😭 Kadang lucu, kadang nyebelin, kadang
              clumsy sampai bikin aku ikut deg-degan, tapi entah kenapa selalu
              berhasil bikin aku nyaman. Banyak hal kecil dari kamu yang mungkin
              menurutmu biasa aja, tapi justru hal-hal kecil itu yang sering
              bikin hari aku jadi lebih berwarna. Pesanku cuma satu… tetap jadi
              kamu yang aku kenal sekarang. Jangan berubah cuma karena merasa
              harus menjadi seseorang yang sempurna. Kalau nanti ada hari di
              mana kamu capek, sedih, atau merasa semuanya berat, ingat kalau
              kamu nggak harus selalu kuat sendirian. Aku mungkin nggak selalu
              punya solusi, nggak selalu tahu harus ngomong apa, dan mungkin
              malah kadang bikin kamu kesel duluan 😭😂 Tapi aku akan selalu
              berusaha jadi seseorang yang bisa kamu cari ketika kamu butuh
              tempat pulang. Dan kalau suatu hari nanti kita buka lagi tulisan
              ini, semoga kita bisa ketawa sambil bilang: “Ternyata kita udah
              sejauh ini ya.” Terima kasih ya sayangg sudah hadir dan menjadi
              bagian dari cerita hidupku.
            </p>

            <p>
              Semoga kamu selalu bahagia, selalu sehat, dan semua yang kamu
              impikan bisa tercapai. Semoga aku masih bisa nemenin kamu di
              banyak cerita dan hari-hari berikutnya. Tetap jadi kamu, ya aku
              sayangg banget sama kamu babyy. 💗
            </p>

            <div className="message-line"></div>

            <h3>Happy Girlfriend Day, Babyyy 🌷</h3>

            <span className="signature">— Dzaky</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GirlfriendDay;
