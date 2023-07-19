function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

  }
  Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
  }
  
  let sorular = [
    new Soru(
      "1-Hangisi JavaScript paket yönetim uygulamasıdır?",
      {
        a: "Node.js",
        b: "Nuget",
        c: "Npm",
        d: "Typescript",
      },
      "c"
    ),
    new Soru(
      "2-Hangisi frontend kapsamında değerlendirilmez?",
      {
        a: "CSS",
        b: "HTML",
        c: "JavaScript",
        d:"SQL"
      },
      "d"
    ),
    new Soru(
      "3-Hangisi backend kapsamında değerlendirilir?",
      {
        a: "Node.js",
        b: "Typescript",
        c: "Angular",
        d:"React"
      },
      "a"
    ),
    new Soru(
      "4-Hangisi JavaScript programlama dilini kullanmaz?",
      {
        a: "React",
        b: "Angular",
        c: "Vuejs",
        d: "ASP.NET"
      },
      "d"
    )
  ];