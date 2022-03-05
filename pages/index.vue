<template>
  <div class="container">
    <div class="row">

      <header class="header">

        <button @click="$modal('gameConditions')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path fill="#FFFFFF" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
        </button>

        <a class="header__brand">WORDLE</a>

        <button @click="$modal('gameSettings')">
           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="#FFFFFF" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
          </svg>
        </button>

      </header>


      <div class="content text-center">
        <input ref="nameInput" @keyup.enter="submit()" class="input" type="text" maxlength='5' v-model="guess" />
        <button v-if="this.guess.length" class="close-btn" @click="clearInput()">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="15px" version="1.1"
            viewBox="0 0 512 512" width="15px" xml:space="preserve">
            <g>
              <path
                d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
            </g>
          </svg>
        </button>

        <div id="forNotif"></div>



        <modal v-bind="{
          title: this.$t('game_conditions'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="gameConditions">
          6 ta urinishda <b> SO'Z </b> ni toping. <br>

          Har bir taxmindan so'ng, kataklarning rangi o'zgarib, sizning taxminingiz kun
          so'ziga qanchalik yaqin ekanligini ko'rsatadi. <br>


          Ushbu sayt - <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">WORDLE</a>
          o'yinining norasmiy o'zbekcha talqini. <br>


          <img class="modalka__img" src="images/green_word.png" alt="">
          <b> S </b> harfi SO'Z ichida bor va to'g'ri o'rindan joy olgan.

          <img class="modalka__img" src="images/yellow_word.png" alt="">
          <b> L </b> harfi SO'Z ichida bor lekin noto'g'ri o'rindan joy olgan.

          <img class="modalka__img" src="images/gray_word.png" alt="">
          <b> O </b> harfi SO'Z ichida ishtirok etmagan. <br>

          Sayt to'liqligicha <a href="https://t.me/R_27_12">Ubaydullayev R.</a> tomonidan ishlab chiqildi.

        </modal>


        <modal v-bind="{
          title: this.$t('game_settings'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="gameSettings">

          Settings

        </modal>


        <modal v-bind="{
          title: this.$t('victory'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="wordFound">

          So'zni topdingiz
          To'gri javob : <b id="solutionWord"></b>

          <button @click="refreshWord(); $modalHide('wordFound')" class="word-found__btn block mt-[30px] mx-auto">
            Yana o'ynayman
          </button>

        </modal>


      </div>


      <div id="answer" class=" mt-[30px] flex items-center justify-center mx-auto  max-w-[220px]">
        <div id="answers" class="flex flex-wrap items-center"></div>
      </div>




    </div>
  </div>

</template>

<script>
 import IconBase from '~/components/IconBase.vue'
  import Modal from '../components/Modal.vue'
  export default {
    components: {
      IconBase,
      Modal
    },
    data() {
      return {
        guess: ''
      }
    },


    methods: {

      submit() {

        const words = ['hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar','hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar','hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar', 'raqib', 'rohib', 'ablah', 'qotil', 'lozim', 'biroq', 'shart', 'sabab', 'iqror', 'maqol', 'ibora', 'kalom', 'solih', 'ixlos', 'madad', 'anjir', 'matoh']  

        // const solution = words[Math.floor(Math.random() * words.length)] // solution bu kun so'zi
        let solution = 'armon' // solution bu kun so'zi
        
        


        const inp = document.getElementsByClassName('input')  


        if(this.guess == solution){
             document.querySelector(`#wordFound`).classList.add("_active");
             document.documentElement.classList.add("_lock");
             document.getElementById('solutionWord').innerHTML = solution.toUpperCase();

        }

        if(this.guess.length < 5){
           this.guess = '';
           this.$refs.nameInput.focus();
           document.getElementById('forNotif').innerHTML = '<div class="notif notif--error">'+ this.$t('less_5') +'</div>';
           document.getElementById('forNotif').style.opacity = '1';

        }

        else {

        document.getElementById('forNotif').style.opacity = '0';
        for (let i = 0; i < this.guess.length; i++) {
          let guessLetter = this.guess.charAt(i);
          let solutionLetter = solution.charAt(i);
          console.log(solution)
          if (guessLetter === solutionLetter) {
            document.getElementById('answers').innerHTML += '<span class="is_green">' + this.guess.charAt(i) +
              '</span>';

          } else if (solution.indexOf(guessLetter) != -1 && guessLetter !== solutionLetter) {
            document.getElementById('answers').innerHTML += '<span class="is_yellow">' + this.guess.charAt(i) +
              '</span>';
          } 


          else {
            // console.log(this.guess.charAt(i) + ' is grey');
            document.getElementById('answers').innerHTML += '<span class="is_gray">' + this.guess.charAt(i) +
              '</span>';

          }
        }
      }
          this.guess = '';  
      },

      clearInput() {
        this.guess = '';
        this.$refs.nameInput.focus();
      },

      refreshWord(){
        console.log('refresh word')
        document.getElementById('answers').innerHTML = '';
        document.getElementById('forNotif').innerHTML = '';
        this.$refs.nameInput.focus();


      }
    },
    created() {
      function enterPress(e) {
        if (e.keyCode == 13) {
          if (this.guess.length != 5) {
            alert('So\'z 5 harfli bo\'lishi kerak!');
          } else {
            this.submit();
          }
        }
      }
      const ya = ["abbat","abgor","abdol","abyot","abjad","abjaq","abjir","abzal","abzas","abira","ablaq","ablah",
    "abort","abxaz","avaÇµa","avans","avara","avval","avizo","avlod","avloq","avrat","avrod","avroq","avron",
    "avsat","avtol","avtor","agent","agrar","aÇµyor","adasi","adash","adyol","adiba","adoyi","adras","adres",
    "ajabo","ajdar","ajdod","ajiva","ajina","ajriq","ajrim","ajuva","ajuza","azali","aybli","ayvon","ayÇµiz",
    "ayÇµir","ayÇµoq","ayyom","ayyor","ayqin","aymoq","aynan","ayram","ayrim","ayron","aytim","ayhay","akbar",
    "aksar","aktiv","akula","aksiz","aqida","aqiqa","aqlan","aqliy","aqlli","aqoid","aqrab","aqcha","alayh",
    "alapi","alban","albat","alvon","alÇµov","alyor","aleut","alibi","alish","alqor","allof","alloh","aloqa",
    "aloha","alfoz","alhol","albom","amaki","amvol","amiri","amlok","amoma","amorf","amper","anavi","anbar",
    "anbuh","anvar","anvoi","angar","angor","anÇµiz","andak","andiz","andom","anduh","anjir","anjom","anzur",
    "anker","anqov","anovi","anoyi","anons","antik","anhor","ancha","anana","aorta","aport","aprel","apshu",
    "arabi","arava","araqi","arang","arafa","arbob","arvoh","argon","ardob","ardoq","areal","arest","arzon",
    "ariza","arish","ariya","arkon","arqoq","arqon","arman","armon","aroba","artel","arxar","arxiv","archa",
    "asaka","asbob","asira","askar","asket","aslan","asliy","asriy","asror","astar","astma","ataka","atala",
    "atama","atvor","atele","atigi","atiqa","atlas","atlet","atrof","attor","audit","afgor","afÇµon","afzal",
    "afzun","afifa","afkor","afsun","afsus","afyun","axbor","axiri","axlat","axloq","ahbob","ahvol","ahyon",
    "ahkom","ahmoq","aholi","achom","ashyo","ashir","ashor","babaq","bagaj","baÇµaz","baÇµiz","baÇµir","badal"
    ,"badan","badar","badia","badik","badya","bayov","bayoz","bayon","bayot","bazis","bazÃ³r","bayzo","bayir"
    ,"bakor","bakra","baqay","baqam","baqar","baqir","baqqa","balet","baliÇµ","baliq","balka","balki","balli"
    ,"baloq","balon","balxi","banan","bangi","banda","bandi","banka","banot","barak","barda","bardi","barja",
    "bariy","barin","barit","barno","baroq","barol","baron","baror","barot","barpo","barra","barsh","barer",
    "basir","basit","baski","basta","batar","baton","baxil","baxsh","baxya","bahay","bahaq","baham","bahor",
    "bahra","bacha","badaz","bazan","bayan","beayb","beaql","beamr","beaso","bebok","bevaj","bevah","begim",
    "begor","beÇµam","bedav","bedil","bedin","bedov","bedoÇµ","bedod","bedor","bejiz","bejoy","bejon","bezak",
    "bezor","bezot","beibo","beizn","beish","bekas","bekat","bekik","bekor","belak","belat","belgi","belli",
    "beluj","bemor","benaf","benom","benur","bepul","beret","beruh","berch","besar","besas","betob","beton",
    "bexor","bexos","bexud","behad","behis","behol","beega","beyuz","bigiz","bidon","bidat","bizol","bizon",
    "bikir","biqiq","biqin","biqqa","biqqi","bilak","bilan","bilet","bilik","bilim","billa","billo","binar",
    "binom","biram","birga","birda","birja","birka","birla","birov","biroz","biroq","biron","biror","bisot",
    "bitik","bitim","bitma","bitov","bitta","blank","bluza","bobiy","bobov","boboy","bovar","bovur","boÇµli",
    "boÇµot","bodom","bodpo","boyov","boyok","boyon","bozor","bokal","bokir","boqiy","boqim","boqla","boqon",
    "boquv","bolÇµa","boliÇµ","bolid","boloq","bolon","bolor","bolta","bolut","bomba","bonus","bopta","bosiq",
    "bosim","bosqi","bosma","botiq","botil","botin","botir","boyar","brass","britt","bronx","buvak","buvra",
    "bugun","buÇµli","buÇµro","budda","budka","buyoq","buyon","bujun","bujur","buzoq","buzuq","buyra","buket",
    "bukik","bukri","bukun","bukur","buqoq","bulka","buloq","bulon","bulut","burga","burÇµi","burÇµu","burda",
    "burim","burma","burov","buroq","burro","buruq","burul","burun","burut","burch","butoq","butsi","butun",
    "bufer","bufet","buxor","buxta","buyuk","buyuq","buyum","buyur","bÃ³Çµiz","bÃ³Çµiq","bÃ³Çµim","bÃ³Çµin",
    "bÃ³Çµma","bÃ³Çµov","bÃ³Çµoz","bÃ³Çµot","bÃ³Çµra","bÃ³yov","bÃ³yoq","bÃ³yin","bÃ³yli","bÃ³yra","bÃ³ksa",
    "bÃ³qoq","bÃ³lak","bÃ³lar","bÃ³lib","bÃ³liq","bÃ³lim","bÃ³lis","bÃ³lka","bÃ³lma","bÃ³lsa","bÃ³luv","bÃ³luk",
    "bÃ³nak","bÃ³pti","bÃ³ryo","bÃ³riq","bÃ³roz","bÃ³ron","bÃ³tqa","byuro","byust","vavaÇµ","vagon","vazir",
    "vakil","valad","valiy","vanil","vanna","varaq","varta","vasiy","vassa","vatan","vatar","vatin","vafli",
    "vafot","vaxli","vaxta","vahiy","vahim","vahma","vzvod","vznos","video","vizir","vizit","viqor","vilka",
    "villa","viraj","viski","visol","vodiy","voyey","vojak","vojib","voybÃ³","vokal","voqea","voqif","volan",
    "voliy","volta","voris","vosil","votum","vohid","vrach","vujud","gavaz","gavan","gavda","gavir","gavra",
    "gadoy","gajak","gajim","gajir","gazak","gazan","gazat","gazet","gazik","gazli","gazon","gayka","galgi",
    "gamak","gamma","ganak","ganda","ganch","garaj","garma","garov","gasht","geliy","geniy","germa","getra",
    "gidir","giyoh","gijda","gilam","gilos","gilza","girak","girih","girra","girya","goboy","gotik","gramm",
    "grant","grafa","gripp","grunt","guash","guber","guvoh","gudok","gujum","guzar","gulli","gulob","gulrÃ³",
    "gumon","gumus","gunoh","guppa","guppi","gurji","gurzi","gurra","guruh","gusar","gusli","guhar","gÃ³dak",
    "gÃ³zal","gÃ³lax","gÃ³los","gÃ³mma","gÃ³rga","gÃ³sha","gÃ³sht","dabba","dabir","dabla","davir","davom",
    "davot","davra","dagir","daÇµal","dadil","dayov","daydi","dakan","dakki","daqqi","dalda","dalil","dalir",
    "dalla","dalli","dalon","damba","damka","danak","danqa","darak","darÇµa","daryo","dariÇµ","dariy","daroz"
    ,"darra","dasta","dafna","daxma","dahan","dacha","dasht","davat","dayus","debet","debon","deviz","devol",
    "devon","devor","degan","dejur","deizm","dekan","delta","demak","demoq","depma","desat","detal","defiz",
    "divan","digar","didli","diyor","dizel","diyda","dikir","diler","dimiq","dimoÇµ","diniy","dinor","diram",
    "diska","dobil","dovol","dovon","dovot","dovul","dovur","dogma","doÇµli","doimo","doira","doyra","doker",
    "dolÇµa","dolon","doman","domat","domla","domna","domod","donli","donna","donor","doska","doxil","dohiy",
    "drama","dubir","dubur","duvva","duvol","dugoh","dudak","dudam","dudoq","duduq","dujon","dukki","dukur",
    "dumak","dumba","dumli","dumoq","dunyo","dupur","durda","durra","duruÇµ","dusaq","dutor","duhÃ³l",
    "dÃ³Çµob","dÃ³Çµov","dÃ³zax","dÃ³kay","dÃ³kon","dÃ³qir","dÃ³qqi","dÃ³qol","dÃ³lma","dÃ³lob","dÃ³lop",
    "dÃ³lta","dÃ³non","dÃ³pir","dÃ³ppi","dÃ³xta","dyuym","dyuna","yevro","yezna","yelik","yelim","yelin",
    "yelka","yemak","yemoq","yerli","yesir","yetak","yetim","yetov","yetti","yetuk","jabra","jabha","javak",
    "javzo","javob","javon","jadal","jaddi","jadid","jadiy","jajji","jazza","jayra","jaket","jamol","janda",
    "janob","janub","jarÇµi","jasad","jasur","jahon","jevak","jezna","jelak","jeton","jigar","jizza","jizya",
    "jiyda","jiqqa","jilva","jilÇµa","jilet","jilla","jilov","jimir","jimit","jinka","jinni","jinsi","jirov",
    "jihat","jihod","jihoz","jiyak","jiyan","jobir","jovon","jozib","joyli","jonib","jonim","jonli","jonon",
    "joriy","josus","johil","jubba","juvda","juvoz","juvon","jujuq","jujun","juziy","jumak","jumla","jumur",
    "junun","jurat","jussa","jufay","juhud","jÃ³lak","jÃ³yak","jyuri","zabar","zaboy","zabon","zabun","zabur",
    "zavja","zavod","zavol","zayom","zaifa","zakaz","zakan","zakiy","zakot","zalil","zamin","zamir","zamma",
    "zamon","zangi","zanji","zapal","zapas","zarar","zarba","zarda","zarik","zaril","zarif","zarli","zarra",
    "zarur","zafar","zaxob","zahar","zahil","zahot","zahra","zveno","zebra","zenit","zefir","ziÇµir","ziyod",
    "ziyon","ziqna","zilol","zimma","zinda","zirak","zobit","zovur","zoyil","zolim","zombi","zomin","zonal",
    "zoniy","zotan","zotli","zohid","zohir","zubda","zuÇµum","zukko","zulol","zuluk","zuhal","zuhra","zuhur",
    "zÃ³rÇµa","iblis","iboli","ibora","ibrat","ibriy","ivrit","igrek","idbor","iddao","ideal","ideya","idish",
    "idora","idrok","iyena","ijara","izÇµin","izÇµir","izÇµor","izzat","izofa","izsiz","izhor","izchi","iymoq",
    "iymon","iyrim","iyhom","ikkov","ikona","ikrom","iksir","iqbol","iqlim","iqror","ilgak","ilgir","ilÇµov",
    "ilÇµor","ilday","ildam","ildiz","ilinj","ilkis","illat","ilmiy","ilmli","ilmoq","ilova","iloyo","iloha",
    "ilohi","iloho","ilhaq","ilhom","imdod","imkon","imoli","indiy","indin","indov","inert","injiq","injil",
    "inkor","inmoq","inson","insof","intiq","intim","insho","iprit","ipsiz","irÇµay","irish","irkit","irqiy",
    "irmoq","iroda","iroqi","irsiy","isbot","isyon","isqot","islik","islom","isloh","ismat","ismli","isnod",
    "ispan","isror","isrof","issiz","issiq","istak","itboz","itvoy","itlik","itmom","itoat","ittik","itfel",
    "iflos","ifoda","ifrot","iftor","iffat","ifsho","ixvat","ixlos","ixroj","ihota","ihrom","ichak","ichki",
    "ichra","ishva","ishli","ishsh","yigit","yigna","yiÇµiq","yiÇµim","yiÇµin","yiÇµma","yiÇµuv","yiqiq",
    "yilgi","yilÇµa","yilqi","yirik","yiriq","yiroq","yodli","yÃ³Çµon","yÃ³qsa","yÃ³lak","yÃ³lka","yÃ³lli",
    "yÃ³niq","yÃ³rÇµa","yÃ³riq","yÃ³rma","yÃ³sin","yÃ³tal","kabel","kabir","kabob","kavak","kavar","kavob",
    "kavsh","kagor","kadar","kadet","kazak","kakao","kakku","kakra","kalid","kaliy","kalit","kalla","kalom",
    "kalon","kalta","kalka","kamar","kamer","kamin","kamob","kamol","kamon","kanal","kanat","kanva","kanda",
    "kaniz","kanna","kanon","kanop","kanor","kanoe","kapot","karam","karat","karim","karih","karki","karra",
    "karta","karch","karer","kasal","kaska","kasod","kasra","kassa","kasta","katak","katar","kater","katet",
    "katod","katta","kafan","kafel","kafil","kafsh","kashf","kvant","kvars","kvota","kegay","kejim","kezak",
    "keyin","kekli","keksa","kelim","kelin","kemik","kenas","kenja","kepak","kepka","kerak","kergi","kerik",
    "kesak","kesik","kesim","kesma","kefir","kecha","kibor","kigiz","kizak","kiyik","kiyim","kimyo","kimsa",
    "kinli","kinna","kirza","kirim","kirka","kirom","kirpi","kisel","kissa","kista","kitel","kitob","kishi",
    "kisht","klass","knyaz","kobra","kovak","kovul","kovsh","kojux","kozir","koyka","koyne","kokil","kokos",
    "kolba","kolit","komik","komil","konka","konus","konki","kopar","koriz","korol","kosib","koski","kosov",
    "kotib","kofir","kofta","kohin","kreml","krest","krona","kross","krupa","kubik","kubok","kuyov","kuzak",
    "kuzgi","kuzir","kuzov","kuyik","kuyit","kuyka","kukun","kulba","kulgi","kulol"
    ,"kuloh","kunda","kunun","kunya","kupon","kurak","kurka","kurra","kursi","kurer","kuyuk","kÃ³gan","kÃ³zgu",
    "kÃ³zli","kÃ³kay","kÃ³kat","kÃ³lam","kÃ³lik","kÃ³lka","kÃ³lob","kÃ³mak","kÃ³mik","kÃ³mir","kÃ³mma","kÃ³nak"
    ,"kÃ³nka","kÃ³pas","kÃ³pik","kÃ³rak","kÃ³rik","kÃ³rpa","kÃ³sak","kÃ³sov","kÃ³tak","kÃ³toh","kÃ³xna","kÃ³hli",
    "kÃ³cha","kÃ³shk","labir","lavha","lagan","lager","lazgi","lazer","laziz","lakot","laqab","laqay","laqqa",
    "laqqi","laqma","lalmi","lampa","lanka","lapar","latin","latif","latta","latun","lafet","laxta","lahad",
    "lahja","lahza","lahim","lanat","legal","leyka","lekin","lemma","lemur","lenta","lepra","libos","livit",
    "lider","likop","liqqo","liman","limit","limon","limfa","linza","lippa","lirik","lison","liter","litiy",
    "lobar","lobid","logik","loÇµar","lodon","lozim","loyiq","loyqa","loyli","lokal","lokin","losos","loson",
    "lotin","lotok","lohas","luÇµat","luzum","luqma","lungi","lÃ³kki","lÃ³nda","lÃ³ppi","mavze","mavzu","maviz",
    "mavqe","magar","magma","maÇµiz","madad","madda","mador","mayoq","majaq","majmu","majoz","majol","major",
    "majus","mazax","mazut","mayda","mayib","mayiz","mayin","mayit","mayka","mayli","mayna","mayor","maysa",
    "mayta","maket","makka","makon","maqol","maqom","malay","malak","malax","malik","malla","malol","malul",
    "malun","mamma","mamnu","mamot","manap","manat","manba","mango","mangu","manej","maniy","manqa","manol",
    "manor","manot","manti","maofa","maosh","maraz","maral","marza","mariy","marka","marli","maroq","marom",
    "marra","marta","marsh","masal","maska","massa","masud","masul","matal","matin","matla","matoh","match",
    "mahal","mahol","mahsi","mashq","mabad","madan","majun","mazul","mazur","maqul","malum","mamur","manan",
    "maruf","masum","mayub","mayus","mayak","mebel","medal","medik","mezon","menyu","merov","meros","metan",
    "metil","metin","metis","metod","metro","meyor","memor","meroj","miyov","miyon","mijja","mijiÇµ","mijoz",
    "mizoj","miyiq","miqqi","miqti","milod","milya","mimit","minan","minor","minus","minut","mirza","mirzo",
    "mirob","misli","misol","misra","mitti","mifik","moviy","movut","moÇµor","modal","modda","model","moziy",
    "mozor","moyil","moyli","molik","momiq","monax","moped","morze","motam","motel","motiv","motka","motor",
    "moxov","mohir","mocha","moyak","muguz","mudir","mudom","mujda","mujik","muzey","muzli","mukka","muqim",
    "muqom","mulat","mulla","mullo","mumli","munda","munis","murda","murid","murod","murut","murch","mufid",
    "mufta","mufti","muhib","muhim","muhit","muhra","mucha","mushk","musht","mÃ³Çµul","mÃ³yna","mÃ³kki","mÃ³loq"
    ,"mÃ³may","mÃ³min","mÃ³ndi","mÃ³jaz","nabor","nabot","navli","navob","navha","nagan","naÇµal","naÇµma",
    "nadim","najas","najib","najot","nazar","nazla","nayza","nakaz","naqib","naqsh","namak","namat","namli",
    "namoz","nanay","nanna","narda","narra","narsa","nasab","nasib","nasim","nasos","nafas","nafis","nahal",
    "nahor","nahot","nahra","nasha","nashr","nalat","negiz","negov","nedir","nemis","nenes","netay","netto",
    "necha","nemat","nigin","nigor","nigoh","nigun","niyoz","nizom","nikel","nikoh","niqob","niliy","nimta",
    "ninni","nisor","nifoq","nihol","nihon","niyat","nobop","nobud","novda","novut","nogah","nogoh","nodir",
    "nodon","noyob","nozik","nozir","nozli","nokas","noqil","noqis","nolon","nomer","nomli","nomoz","nomus",
    "nopok","norin","norka","norma","nosir","noski","nosoÇµ","nosoz","notiq","notob","noxun","nohaq","nujum",
    "nukta","nuqra","nuqta","nuqul","nurli","nusqa","nusxa","nufuz","nufus","nÃ³Çµay","nÃ³noq","nÃ³xat","nÃ³xta",
    "obaki","obdan","obdov","obdor","obzor","obida","obkom","obnus","oboÇµa","obosh","obraz","obrez","obrÃ³y",
    "obuna","obekt","ovqat","ovloq","ovoza","ovora","ovsar","ovsin","ovchi","oÇµish","oÇµmoq","oÇµoch","oÇµriq"
    ,"oÇµuli","oÇµush","oddiy","odosh","ojiza","ozÇµin","oziqa","ozmoq","ozoda","ozuqa","oyboy","oygul",
    "oydin","oyina","oylab","oylar","oylik","oynak","oysiz","okean","okrug","oksid","oktet","oqava","oqila",
    "oqish","oqquv","oqlik","oqliq","oqlov","oqmoq","oqova","oqpar","oqsil","oqsim","oqsoq","oqsuv","oqcha",
    "olasi","olÇµir","oldda","oldin","olima","olqor","olloh","olmoq","olmon","olmos","oltin","oltov","oltoy",
    "olcha","olchi","ombir","ombor","ombur","omoch","ongli","oniks","opala","opera","opoqi","oppoq","optik",
    "organ","orden","order","orsiz","ortiq","ortqi","osmiy","osmoq","osmon","ostit","ostki","osuda","otali",
    "otash","otish","otliq","otmoq","otnon","otrez","ofset","oftob","oxiri","oxund","ohaki","ohang","ochar",
    "ochiq","ochko","osham","oshiq","oshli","oshna","oshno","padar","payoq","payom","paydo","paysa","pakar",
    "paket","pakka","pakki","paqir","palak","palid","palla","palov","palon","palos","palma","palto","panel",
    "panja","panno","panoh","papaq","papax","papka","parad","parvo","parda","parez","parik","parqu","parma",
    "parol","parom","parpi","parra","parta","parte","pasta","pasxa","patak","patir","patli","patta","pauza",
    "pafos","paxsa","paxta","pedal","pemza","penal","penya","petit","pesha","piyoz","piyon","piyma","pikap",
    "piket","piqir","pilik","pilla","pilot","pilta","pinak","pirog","piroq","pirra","piska","pista","pitak",
    "piton","pitra","picha","pisht","plato","plash","plita","plyus","plyaj","pogon","poyon","poyga","poliz",
    "polip","polis","polka","polli","pompa","popoq","popop","popuk","porom","porox","porso","poson","poxol",
    "pocha","poema","poyas","pravo","press","proba","proza","pudli","pukka","pulli","pulpa","punkt","putur",
    "pufak","puxta","pusht","pÃ³kak","pÃ³kon","pÃ³lat","pÃ³pak","pÃ³rim","pÃ³sht","pyure","rabot","ravza",
    "ravoq","ravon","ravot","radar","raddi","radiy","radio","radif","radon","rajab","rajaz","razil","raisa",
    "rayon","raqam","raqba","raqib","ralli","ramad","ramaq","ramal","ramka","rampa","randa","ranes","rante",
    "rasad","rasvo","rasta","rasul","raund","rafiq","raxit","raxna","rahba","rahim","rashk","rebus","regbi",
    "rejim","rezgi","rezba","reyka","relef","reniy","renta","resha","rivoj","riyol","riyel","rinit","rioya",
    "ritor","robot","roviy","rovon","roÇµib","rodiy","rolik","roman","rondo","rotor","rohat","rohib","royal",
    "rubob","rulet","rulon","rumin","rupor","rupoh","rusta","rusum","rutba","ruxiy","ruhan","ruhli","rÃ³vak",
    "rÃ³yob","rÃ³yjo","rÃ³mol","rÃ³yan","reket","sabab","sabza","sabzi","sabiy","sabil","saboq","sabot","saboh",
    "sabur","savaq","savam","savat","savdo","savil","savob","savod","savol","saÇµal","saÇµir","saÇµri","sadaf",
    "sadqa","sadoq","sayoz","sayoq","sajda","sazan","sayid","sayil","sayin","sayis","sayli","sakta","saqar",
    "salat","salaf","salib","salim","salqi","salla","salma","salom","salon","salot","saloh","saldo","salto",
    "saman","samar","sambo","samum","samur","sanad","sanam","sanqi","sanoq","sanat","sarak","sarja","sariq",
    "sarin","sarob","saroy","sarpo","sasir","satil","satin","satta","sauna","safar","safil","safro","safha",
    "saxiy","sahar","sahbo","sahil","sahih","sahna","sahro","seans","sevgi","segoh","sezgi","sezon","sekin",
    "sekta","selen","selob","selon","semiz","semit","semon","senaj","senat","senor","sepli","sepma","serka",
    "serob","serÃ³t","setka","setor","sibir","sigir","siÇµim","sidqi","sidra","siyoq","siyoh","sizot","siyli",
    "siymo","siyna","siyra","siqiq","siqim","siqma","siquv","silen","silla","silon","silos","siloh","simob"
    ,"simoq","siniq","sinka","sinli","sinov","sinod","sinoq","sinus","sinch","sipar","sipoh","sirÇµa","siren",
    "siriq","sirka","sirli","sirma","sirop","sirot","sirra","sitam","sitor","sitro","sifat","sifon","skver",
    "sklad","slayd","slyot","smena","smeta","smola","sobiq","sobir","sobit","sobol","sobor","sobun","sovÇµa",
    "sovet","sovuq","sovun","sovut","soÇµar","soÇµim","soÇµin","sodda","sodiq","sodir","sokin","sokit","soqiy",
    "soqit","soqqa","soqov","soqol","solik","soliq","solim","solih","solqa","solqi","solma","solor","somon",
    "somsa","sonet","sonli","sopli","sopol","sotix","sofir","soxta","sohib","sohil","sohir","soyuz","spazm",
    "spirt","spora","sport","start","stvol","stend","stoik","subut","suvli","suvoq","suvot","suvÃ³t","suÇµur",
    "sudya","sujud","suzma","suzuk","suyri","sukun","sukut","suqli","suqma","suqut","sulgi","sulla","suluv",
    "suluk","sumak","suman","sumba","sumka","summa","sunna","suniy","supra","supta","surat","surgi","surik",
    "surma","surob","suron","surpa","surra","surur","sutak","sutka","sutli","sutun","sufiy","suxan","suyuk",
    "suyuq","suyak","suyam","sÃ³gal","sÃ³Çµin","sÃ³Çµir","sÃ³Çµon","sÃ³zak","sÃ³zan","sÃ³zli","sÃ³yil",
    "sÃ³kik","sÃ³qim","sÃ³qir","sÃ³qqa","sÃ³qma","sÃ³lak","sÃ³liq","sÃ³lim","sÃ³loq","sÃ³niq","sÃ³poq",
    "sÃ³rov","sÃ³roq","sÃ³tak","sÃ³fiy","sÃ³xta","sfera","sxema","schot","tabaa","tabaq","tabar","tabel",
    "tabib","tabla","tablo","taboq","tabor","tavan","tavba","tavir","tavla","tavon","tavof","tagli","taÇµin",
    "tayov","tayoq","tazod","tayga","tayin","taksa","taksi","takya","taqal","taqvo","taqiq","taqim","taqir",
    "taqqa","taqya","talab","talay","talaf","taloq","talon","talxa","talat","tamal","tamba","tamÇµa","tamiz",
    "tamli","tamom","tamuÇµ","tanga","tangi","tango","tanda","taniq","tanob","tansa","tanti","tanho","taolo",
    "tappa","tappi","taraq","taram","taran","taraf","tariq","tarif","tarix","taroq","tarra","tarso","tasma",
    "tatar","tatiq","tatim","tatir","taxir","taxta","tabir","tazim","tazir","takid","taqib","talim","talif",
    "tamin","tamir","tasip","tasir","tasis","tatil","teatr","tevat","tegli","tegra","tejam","tezak","tezda",
    "tezis","tezob","tekin","tekis","tekst","telba","telov","tembr","temir","tenor","tepki","terak","teran",
    "terli","terma","tetik","tesha","tivit","tigel","tiÇµiz","tiÇµli","tizza","tizim","tizma","tiyiq","tiyin",
    "tiyra","tikan","tiker","tikka","tikma","tikuv","tiqin","tilak","tilik","tilim","tilka","tilla","tillo",
    "tilma","tiniq","tinim","tinka","tinch","tipik","tiraj","tirak","tiran","tirik","tirma","tirob","tiski",
    "titan","titiq","titul","tixir","toboq","tobon","tobut","tovar","tovba","tovva","tovoq","tovon","tovor",
    "tovuq","tovus","tovut","toÇµay","toÇµli","tojik","tojir","tojli","toifa","toifi","toydi","tokay","tokar",
    "toqat","toqli","tolib","tolim","tolma","tomat","tomir","tomli","tomoq","tomon","tomuÇµ","toner","tonna",
    "topaz","topik","toriy","torli","toroj","total","totem","totim","totli","totuv","tocha","trakt","trest",
    "triko","triod","tromb","truba","trusi","tryum","tuban","tubli","tuvak","tuvoq","tugal","tugma","tuguk",
    "tugul","tugun","tuÇµli","tuÇµma","tuÇµro","tudoq","tuyoq","tuzli","tuzoq","tuzuk","tuzum","tuyÇµu","tukli",
    "tuliy","tulim","tulki","tulum","tuman","tumba","tumov","tumoq","tumor","tumsa","tungi","tunda","tunov",
    "tupik","tupka","tuppa","tupuk","turli","turna","turoq","turum","turfa","tutak","tutal","tutam","tutim",
    "tutqa","tutqi","tutuq","tutum","tutun","tufli","tuxum","tuhfa","tuyuq","tuyur","tÃ³Çµin","tÃ³Çµon",
    "tÃ³Çµri","tÃ³ziq","tÃ³zim","tÃ³zon","tÃ³yli","tÃ³kin","tÃ³kma","tÃ³qay","tÃ³qim","tÃ³qli","tÃ³qol",
    "tÃ³liq","tÃ³lin","tÃ³lov","tÃ³niq","tÃ³nka","tÃ³nli","tÃ³par","tÃ³piq","tÃ³pir","tÃ³pon","tÃ³ppi",
    "tÃ³rva","tÃ³riq","tÃ³sat","tÃ³siq","tÃ³sin","tÃ³fon","tÃ³xta","uvada","uvvos","uyezd","uzala","uzana",
    "uzviy","uzzol","uzlat","uzmoq","uzrli","uzual","uyÇµoq","uyÇµun","uyÇµur","uymoq","uysiz","uysoz","uklad",
    "ukpar","ukrop","uksus","uqmoq","ulama","ulamo","ulkan","ulton","ulush","ulfat","umaro","ummat","ummon",
    "umoch","umrli","unaqa","unvon","ungur","unday","undov","undoq","unmoq","unobi","unsiz","unsur","uncha",
    "upqun","urvoq","uryon","urish","urmoq","urpoq","urtuk","urush","uslub","ustav","ustki","ustod","ustoz",
    "ustun","utmoq","uxloq","uchak","uchar","uchli","uchoq","uchuq","uchun","ushbu","ushoq","ushuk","uyali",
    "faqat","faqir","faqih","falaj","falak","falaq","falon","famil","faner","fanor","fanta","faola","faraz",
    "farah","faroÇµ","farsh","fasad","fasih","fasod","fason","fatal","fatvo","fatha","fauna","fahsh","fenol",
    "ferma","feruz","felan","fibra","figor","fiÇµon","fizik","filtr","fimoz","final","finka","firib","firqa",
    "firma","firoq","firuz","fitna","flang","flora","flaga","fojia","fojir","fozil","foyda","fokus","folga",
    "fonar","foniy","fonus","foriÇµ","forma","forum","fosid","fosiq","fotih","foton","foxta","fraza","frank",
    "freza","front","fugas","fujer","fuzul","fuzun","funun","fusun","futur","xabar","xabis","xayol","xazon",
    "xakas","xaker","xalal","xalat","xalaf","xalos","xalta","xalfa","xamak","xamir","xampa","xamsa","xanda",
    "xanik","xarak","xarid","xarob","xasva","xasis","xasta","xatar","xatib","xatli","xatna","xafif","xiyol",
    "xijil","xiyla","xiyli","xilli","xilof","xilat","ximik","xinin","xippa","xirad","xirqa","xirqi","xiroj",
    "xirom","xirpa","xirpi","xitob","xitoy","xisht","xodim","xoqon","xoliq","xolis","xolli","xolos","xomak",
    "xomut","xonim","xorij","xotam","xotin","xotir","xuddi","xudoy","xulyo","xumor","xumsa","xunob","xunuk",
    "xural","xurma","xurmo","xuruj","xusus","xutba","xutor","xufya","xÃ³ppa","xÃ³rak","xÃ³rda","xÃ³roz",
    "xÃ³tik","qabza","qabil","qabih","qaboq","qabul","qavat","qaviq","qavom","qadaq","qadam","qadar","qadah",
    "qadim","qadoq","qayon","qayer","qazna","qazuv","qayga","qayÇµu","qayda","qayiq","qayin","qayir","qayqi",
    "qayla","qayni","qaysa","qaysi","qayta","qaqas","qaqir","qalay","qalam","qalin","qalov","qaloq","qamal",
    "qamar","qamoq","qamti","qanda","qanor","qanot","qaram","qarÇµa","qarov","qaroÇµ","qarol","qaror","qarta",
    "qasam","qasir","qasos","qatiq","qatim","qatla","qator","qatra","qatan","qatiy","qafas","qahat","qahva",
    "qibla","qiyoq","qiyom","qiyos","qiyot","qiziq","qizil","qizli","qiyiq","qiyin","qiyma","qiqir","qiliq",
    "qimiz","qimir","qimor","qimti","qipiq","qirÇµi","qirma","qirov","qirol","qiron","qirpi","qirra","qisiq",
    "qisim","qisir","qisqa","qisma","qissa","qisuv","qitiq","qitir","qobiq","qobil","qobon","qovÇµa","qovoq",
    "qovuz","qovuq","qovul","qovun","qoÇµoz","qodir","qoziq","qozoq","qozon","qoida","qoyil","qoyim","qoqim",
    "qolip","qoloq","qomat","qomus","qonli","qonun","qopqa","qoriq","qorin","qorli","qoruv","qosid","qosir",
    "qotil","qotma","qubba","qubur","quvva","quvur","quduq","quyon","quyqa","quyma","qulay","quloq","qulon",
    "qulun","qumli","qumoy","qumoq","qumri","quray","qurey","qurma","qurov","quroq","qurol","qurro","quruq",
    "qurum","qurch","quron","qusuq","qusur","qutqu","qutli","quyuq","quyun","qÃ³biz","qÃ³Çµay","qÃ³zoq",
    "qÃ³yin","qÃ³yli","qÃ³lli","qÃ³nim","qÃ³noq","qÃ³pol","qÃ³riq","qÃ³sqi","qÃ³tir","qÃ³ton","qÃ³tos",
    "qÃ³sha","habba","habib","havas","havza","havol","havon","hadaf","hadeb","hadik","hadis","hadya",
    "hayon","hayot","hazar","hazil","hazin","hazir","hazor","hayit","hayat","hakam","hakim","hakka",
    "haqda","haqiq","haqir","haqli","halak","halvo","halim","halqa","halli","halok","halol","hamal",
    "hamda","hamza","hamin","hamla","hamma","hamon","hampo","hangi","hanik","hanuz","haram","harba",
    "harir","haris","harif","harna","harom","hasad","hasip","hassa","hasti","hatto","hafta","hahha",
    "hayal","hidli","hijob","hijra","hiyla","hilva","hilla","hilol","hindi","hisli","hisob","hissa",
    "hovva","hovli","hovuz","hovur","hodis","hojat","hojib","hoziq","hozir","hokim","holat","holva",
    "homiz","homiy","horma","hosid","hosil","hotam","hofiz","hosho","hudud","hujra","hujum","huzur",
    "huyya","huqqa","huqqi","huqna","huquq","hulla","hunar","husht","hÃ³kiz","hÃ³kki","yobon","yovar",
    "yovon","yovuz","yovuq","yoÇµdu","yoÇµiy","yoÇµin","yoÇµli","yozgi","yoziq","yozma","yozuv","yozuÇµ",
    "yoyiq","yoyma","yoqiq","yoqli","yoqti","yoqut","yolli","yombi","yomon","yonar","yoniq","yonoq",
    "yopiq","yoppa","yorÇµi","yoriy","yoriq","yorma","yoron","yorti","yoruÇµ","yorsh","yosin","yotiq",
    "yotoq","yoxud","sanga","sapfa","sedra","seziy","seriy","singa","sokol","chaqa","chala","chalp",
    "chama","chana","chang","charm","chars","charx","chega","cheka","chena","chizi","ching","chink",
    "chirk","chirq","chirs","chirt","chiya","choÇµi","chora","chori","choch","chosh","chuÇµz","churq",
    "churr","chÃ³lp","chÃ³ng","chÃ³ri","chÃ³rt","shavq","shayx","shakl","shalp","shama","shams","sharj",
    "sharq","sharm","sharr","shart","sharf","sharh","shafe","shaxs","shaxt","shahd","shahr","shved",
    "sheva","shiÇµa","shiiy","shilq","shilp","shilt","shina","shior","shira","shirk","shirq","shirt",
    "shifo","shifr","shift","shish","shkaf","shkiv","shlak","shlem","shnur","shoda","shodi","shoir",
    "shoyi","sholi","shona","shoti","shohi","shpal","shpat","shpor","shtab","shtat","shtik","shuba",
    "shukr","shung","shuru","shurf","shuur","shula","shÃ³lq","shÃ³lp","shÃ³ra","shÃ³ro","shchi","evara",
    "evenk","evida","egali","egmoq","ezgin","ezmoq","eyvoh","ekmoq","ekran","elita","ellik","elchi",
    "emgak","emish","emmoq","emchi","enaga","engak","engil","enish","enlik","enmoq","ensiz","enchi",
    "epaqa","epkin","epoxa","epsiz","erbiy","erish","erkak","erkan","erkin","erkli","erlik","ermak",
    "erman","ermoq","ersiz","ertak","ertan","esvos","eskiz","esmoq","esnoq","essiz","estet","eston",
    "etdor","etika","etmoq","etnik","etnos","etsiz","etxÃ³r","etyud","ehzon","ehrom","ehson","echki",
    "eshak","eshik","eshma","eshon","yubka","yugan","yuzli","yuzta","yukli","yuluq","yumma","yumor",
    "yumuq","yundi","yunon","yupqa","yupun","yurak","yuruq","yurum","yutoq","yutuq","yutum","yaÇµir",
    "yaÇµmo","yadro","yayov","yazna","yakan","yakka","yakor","yakto","yakun","yaqin","yalam","yalla",
    "yallo","yalov","yaloq","yalpi","yamoq","yanga","yangi","yapon","yaraq","yarim","yaroÇµ","yarus",
    "yasli","yasov","yasoq","yassi","yaxna","yaxob","yaxta",
    
    ]

    }
  }
</script>