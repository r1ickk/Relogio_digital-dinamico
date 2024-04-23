/** const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura */

const horas = document.getElementById('horas'); /** Pega a tag <span id="horas">s*/
const minutos = document.getElementById('minutos'); /** Pega a tag <span id="minutos">s*/
const segundos = document.getElementById('segundos'); /** Pega a tag <span id="segundos">s*/
const relogio = setInterval(function time() {

    /** let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. */
    let dateToday = new Date();
    let hr = dateToday.getHours(); /** Pega as horas */
    let min = dateToday.getMinutes(); /** Pega os minutos */
    let sec = dateToday.getSeconds(); /** Pega os secundos */

    /** Declaramos os valores (hora, minutos e segundos) para os atuais. Sincronizando com o relógio mundial */

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    /** Cria uma condição. Se o valor presente for menor do que 10, ele vai automaticamente adicionar o número 0 na frente */

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})
