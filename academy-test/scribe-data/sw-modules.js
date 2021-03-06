

let all = 29
let most = Math.floor(all * 0.8)
let half = Math.floor(all * 0.5)
let little = Math.floor(all * 0.3)
let bit = Math.floor(all * 0.2)
let trio = 3
let duo = 2
let single = 1

export default [
	
	{name: `rozmowa z grupk膮`, ext: '', '馃暐':60, '馃毝':15, desc: '', type: 'M'},
	{name: `rozmowa wszystkich`, ext: '', '馃暐':60, '馃毝':'all', desc: '', type: 'M'},
	
	{name: `prezentacje`, ext: '', '馃暐':60, '馃毝':18, desc: '', type: 'M'},
	{name: `przygotowywanie prezentacji na temat z listy`, ext: '', '馃暐':60, desc: '', type: 'M'},
	{name: `wyst膮pienia publiczne`, ext: '', '馃暐':60, '馃毝':'all', desc: '', type: 'M'},
	{name: `Tworzenie quest贸w`, ext: '', '馃暐':60, '馃毝':20, desc: '', type: 'M'},
	{name: `icebreakery`, ext: '', '馃暐':40, '馃毝':'all', desc: '', type: 'M'},
	{name: `pytnia z pask贸w`, ext: '', '馃暐':60, '馃毝':12, desc: '', type: 'M'},
	{name: `LARP`, ext: '', '馃暐':100, '馃毝':20, desc: '', type: 'M'},
	{name: `RPG`, ext: '', '馃暐':120, '馃毝':4, desc: '', type: 'M'},
	{name: `challenge`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `rozmowa in english`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `robienie Story Cards贸w`, ext: '', '馃暐':120, '馃毝':15, desc: '', type: 'M'},
	{name: `sesja grania w Story Cardsy`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `sesja StoryCubes`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},

	{name: `poranek`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `rozgrzewka`, ext: '', '馃暐':20, '馃毝':8, desc: '', type: 'M'},
	{name: `chillout`, ext: '', '馃暐':45, '馃毝':20, desc: '', type: 'M'},
	{name: `nagrywanie d藕wi臋k贸w`, ext: '', '馃暐':60, desc: '', '馃毝':bit, type: 'M'},
	{name: `sesja ambient贸w / AMSR`, ext: '+ grupowa medytacja', '馃暐':75, '馃毝':20, desc: '', type: 'M'},
	{name: `storytelling`, ext: '', '馃暐':60, '馃毝':15, desc: '', type: 'M'},
	{name: `story obrasski`, ext: '', '馃暐':60, '馃毝':15, desc: 'Wariant z animacj膮 obraskow膮 (pokazem slajd贸w)', type: 'M'},
	{name: `zagadki`, ext: '', '馃暐':75, '馃毝':15, desc: '', type: 'M'},
	{name: `gry planszowe`, ext: '', '馃暐':90, '馃毝':8, desc: '', type: 'M'},
	{name: `kontynuowana historia`, ext: '', '馃暐':45, '馃毝':15, desc: '', type: 'M'},
	{name: `gra w skojarzenia`, ext: '', '馃暐':20, '馃毝':15, desc: '', type: 'M'},
	{name: `odwr贸cone skojarzenia`, ext: '', '馃暐':45, '馃毝':15, desc: '', type: 'M'},
	{name: `eksperyment naukowy`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `koncert`, ext: '', '馃暐':60, '馃毝':20, desc: '', type: 'M'},
	{name: `sprz膮tanie`, ext: '', '馃暐':30, '馃毝':'all', desc: '', type: 'M'},
	{name: `karaoke`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `improwizacja`, ext: '', '馃暐':90, '馃毝':20, desc: '', type: 'M'},
	{name: `improwizacja z podzia艂em`, ext: '', '馃暐':90, '馃毝':15, desc: '', type: 'M'},
	{name: `civ impro game`, ext: '', '馃暐':120, '馃毝':20, desc: '', type: 'M'},
	{name: `scenki z 偶ycia`, ext: '', '馃暐':30, '馃毝':15, desc: 'Scenki impro, zazwyczaj powa偶ne i dotycz膮ce 偶yciowych sytuacji, maj膮ce nas przygotowa膰 na te trudniejsze momenty', type: 'M'},
	{name: `bieganie`, ext: '', '馃暐':45, '馃毝':15, desc: '', type: 'M'},
	{name: `trening`, ext: '', '馃暐':30, '馃毝':bit, desc: '', type: 'M'},
	{name: `submission`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `gry towarzyskie`, ext: '', '馃暐':30, '馃毝':15, desc: '', type: 'M'},
	{name: `dyskoteka`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	
	{name: `czas wolny`, ext: '', '馃暐':60, '馃毝':'all', desc: 'Nie ma aktywno艣ci w tym czasie', type: 'M'},
	{name: `czas dzia艂a艅 kreatywnych`, ext: 'CDK', '馃暐':90, '馃毝':'all', desc: '', type: 'M'},
	
	{name: `happening`, ext: '', '馃暐':45, '馃毝':20, desc: 'Idziemy przez wie艣 i krzyczymy do ludzi - 艣mieszen. Mo偶na te偶 podej艣膰, zagada膰, poprosi膰 o zrobienie czego艣 w ramach zabawy.', type: 'M'},
	
	{name: `szukanie skarbu`, ext: '', '馃暐':90, '馃毝':20, desc: '', type: 'M'},
	{name: `ognisko`, ext: '', '馃暐':90, '馃毝':20, desc: '', type: 'M'},
	{name: `spacer`, ext: '', '馃暐':40, '馃毝':15, desc: '', type: 'M'},
	{name: `spacer wszystkich`, ext: '', '馃暐':30, '馃毝':'all', desc: '', type: 'M'},
	{name: `kr贸tki spacerek`, ext: '', '馃暐':15, '馃毝':20, desc: '', type: 'M'},
	{name: `d艂u偶szy spacer`, ext: '', '馃暐':100, '馃毝':8, desc: '', type: 'M'},
	
	{name: `gra terenowa`, ext: '', '馃暐':90, '馃毝':20, desc: '', type: 'M'},
	{name: `baloniec`, ext: '', '馃暐':60, '馃毝':18, desc: '', type: 'M'},
	{name: `Capture the flag`, ext: 'prison variant', '馃暐':60, '馃毝':25, desc: '', type: 'M'},
	
	{name: `cosplay => prezentacja => sesja`, ext: '', '馃暐':120, desc: '', type: 'M'},
	{name: `sesja zdj臋ciowa`, ext: '', '馃暐':75, '馃毝':15, desc: '', type: 'M'},
	{name: `tematyczna sesja zdj臋ciowa`, ext: '', '馃暐':75, '馃毝':20, desc: '', type: 'M'},
	{name: `quest making`, ext: '', '馃暐':60, '馃毝':20, list: ['OutOfComfortZone personal (targeted) quest making'], desc: '', type: 'M'},
	
	{name: `turniej`, ext: '', list: ['growy','sabmajt贸w','raps贸w','zagadek'], '馃暐':60, '馃毝':20, desc: '', type: 'M'},
	
	{name: `szkolenie`, ext: '', '馃暐':30, '馃毝':6, desc: 'Kto艣 obeznany w jednym temacie przygotowjue grupk臋 np. Olek bierze ludzi i robi im przeszkolenie jak powinna wygl膮da膰 dobra scena przes艂uchania, albo Jacek ze skejcenia i nazw trick贸w w celu np. rozegrania scenki o spotkaniu skejterskim', type: 'M'},
	
	{name: `rysunek`, ext: '', '馃暐':30, '馃毝':15, desc: '', type: 'M'},
	
	{name: `crafting`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `origami session`, ext: '', '馃暐':30, '馃毝':15, desc: '', type: 'M'},
	
	{name: `blindfolded obstacle run`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	
	{name: `ulubione postacie TALK`, ext: '', '馃暐':30, '馃毝':20, desc: 'Przedstaw jedn膮 ze swoich ulubionych postaci i powiedz dlaczego', type: 'M'},
	
	{name: `pisanie`, ext: '', '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `pisanie scenariusza`, ext: '',  '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `pisanie piosenki`, ext: '', '馃暐':30, '馃毝':15, desc: '', type: 'M'},
	{name: `muzyka`, ext: '', '馃暐':60, '馃毝':15, desc: '', type: 'M'},
	{name: `instrument`, ext: '', list: ['pianino','gitara', 'ukulele'], '馃暐':30, '馃毝':8, desc: '', type: 'M'},
	{name: `sesja s艂uchania soundtrack贸w`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `opowiadanie do muzyki`, ext: '', '馃暐':30, '馃毝':15, desc: '', type: 'M'},
	{name: `voiceover`, ext: '', '馃暐':30, '馃毝':bit, desc: '', type: 'M'},
	{name: `scena do muzyki`, ext: '', '馃暐':30, '馃毝':20, desc: '', type: 'M'},
	{name: `dzienniczek`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `podsumowanie`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `rozpocz臋cie`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `gulag`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `rywalizacja z podzia艂em`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `dzia艂alno艣膰 artystyczna`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `malowanie`, ext: '', list: ['obrazk贸w','talerzy','kamieni'], '馃暐':30, desc: '', type: 'M'},
	{name: `plener rysunkowy`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `basen`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `ustalanie i sprawy organizacyjne`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `zebranie z rozmow膮`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `przegl膮danie materia艂u`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `ogl膮danie dawnych zdj臋膰 i film贸w`, ext: '', '馃暐':45, desc: '', type: 'M'},
	{name: `ogl膮danie anime/bajek`, ext: '', '馃暐':90, desc: '', type: 'M'},
	{name: `przegl膮danie i robienie mem贸w z naszych uj臋膰`, ext: '', '馃暐':45, desc: '', type: 'M'},
	{name: `wprowadzenie`, ext: '', list: ['do RPG','do LARP贸w', 'do innych gier'], '馃暐':30, desc: '', type: 'M'},
	{name: `dance workout`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `programowanie`, ext: '', '馃暐':90, desc: '', type: 'M'},
	{name: `robienie kart postaci`, ext: '', '馃暐':120, desc: '', type: 'M'},
	{name: `nasze marzenia`, ext: '', '馃暐':90, '馃毝':20, desc: 'rozmowa o przysz艂o艣ci', type: 'M'},
	{name: `Sesja wymy艣lania technologii`, ext: '', '馃暐':60, '馃毝':15, desc: '', type: 'M'},
	{name: `event logging`, ext: '', '馃暐':'ca艂y czas', desc: '', type: 'M'},
	{name: `festyn`, ext: 'LARP', '馃暐':150, desc: 'Festono gra pe艂na atrakcji, rozstawione wsz臋dzie stragany i uczestnicy podzieleni na grupki rywalizuj膮ce ze sob膮.', type: 'M'},
	{name: `kt贸ra rola jest bardziej specific?`, ext: '', '馃暐':60, desc: 'i dlaczego (dyskusja)', type: 'M'},
	{name: `g艂osowanie`, ext: '', '馃暐':30, desc: '', type: 'M'},
	{name: `piknik`, ext: '', '馃暐':75, desc: '', type: 'M'},
	{name: `sesja nudy`, ext: 'jako wywo艂ywacz kreatywno艣ci', '馃暐':45, desc: '', type: 'M'},
	{name: `kalambury`, ext: '', '馃暐':30, desc: 'Kto艣 rysuje na komputerze jaki艣 obiekt a grupa zgaduje, mo偶e by膰 z listy a mo偶e by膰 total random. Czasem daje si臋 hinta np. z kategorii', type: 'M'},
	
	{name: `dyskusja o telewizji`, ext: '', '馃暐':30, list: ['Stare programy telewizyjne: panorama i wiadomo艣ci','cartoon network i kresk贸wki','game network i gry','RTL7/TVN7 = DragonBall','Jetix',], desc: '', type: 'M'},
	
	{name: `rozmowa o kontrolowaniu emocji`, ext: '', '馃暐':60, desc: '', type: 'M'},
	
	{name: `power of storytelling`, ext: '', '馃暐':45, desc: 'Inaczej wprowadzenie do gier RPG i jak u偶ywa膰 storytellingu by gra艂o si臋 lepiej', type: 'M'},

	{name: `zapoznanie z gamepad app`, ext: '', '馃暐':60, '馃毝':20, desc: 'Testujemy mo偶liwo艣ci programu, uczymy obs艂ugi, dopisujemy w艂asne funkcje (je艣li umiesz w prog)', type: 'M'},
	
	
]