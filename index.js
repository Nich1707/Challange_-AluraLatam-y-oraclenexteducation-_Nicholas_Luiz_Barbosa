document.addEventListener("DOMContentLoaded", function () {
  const btnEncriptar = document.querySelector("#btnEncriptador");
  const btnDesencriptar = document.querySelector("#btnDesencriptar");
  const btnCopiar = document.querySelector("#btnCopiar");
  const textArea = document.querySelector("#texteAreaId");
  const mensaje = document.querySelector("#mensaje");
  const mensajeInicial = document.querySelector(".informacao");
  const feedback = document.querySelector("#feedback");

  textArea.addEventListener("input", function () {
    if (textArea.value.trim() !== "") {
      mensajeInicial.style.display = "none";
    } else {
      mensajeInicial.style.display = "block";
    }
  });

  textArea.addEventListener("focus", function () {
    if (textArea.value === "Ingrese el texto aqui") {
      textArea.value = "";
    }
  });

  btnEncriptar.addEventListener("click", function () {
    const textoCriptografado = criptografar(textArea.value);
    mensaje.value = textoCriptografado;
    if (textoCriptografado.trim() !== "") {
      mensaje.classList.add("texto-presente");
    } else {
      mensaje.classList.remove("texto-presente");
    }
  });

  btnDesencriptar.addEventListener("click", function () {
    const textoDescriptografado = descriptografar(mensaje.value);
    textArea.value = textoDescriptografado;
    if (textoDescriptografado.trim() !== "") {
      mensaje.classList.add("texto-presente");
    } else {
      mensaje.classList.remove("texto-presente");
    }
  });

  btnCopiar.addEventListener("click", async function () {
    try {
      // Lê o texto do clipboard e coloca no campo "mensaje"
      const text = await navigator.clipboard.readText();
      mensaje.value = text;

      // Mostra feedback ao usuário
      feedback.style.display = "block";
      setTimeout(() => {
        feedback.style.display = "none";
      }, 2000); // Oculta a mensagem após 2 segundos
    } catch (err) {
      console.error("Falha ao ler do clipboard: ", err);
    }
  });

  mensaje.addEventListener("input", function () {
    const textoDescriptografado = descriptografar(mensaje.value);
    textArea.value = textoDescriptografado;
  });

  function criptografar(texto) {
    return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  function descriptografar(textoCriptografado) {
    return textoCriptografado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
});
