

let all = 29
let most = Math.floor(all * 0.8)
let half = Math.floor(all * 0.5)
let little = Math.floor(all * 0.3)
let bit = Math.floor(all * 0.2)
let trio = 3
let duo = 2
let single = 1

export default [
	
	{name: `rozmowa z grupką`, ext: '', '🕥':60, '🚶':15, desc: '', type: 'M'},
	{name: `rozmowa wszystkich`, ext: '', '🕥':60, '🚶':'all', desc: '', type: 'M'},
	
	{name: `prezentacje`, ext: '', '🕥':60, '🚶':18, desc: '', type: 'M'},
	{name: `przygotowywanie prezentacji na temat z listy`, ext: '', '🕥':60, desc: '', type: 'M'},
	{name: `wystąpienia publiczne`, ext: '', '🕥':60, '🚶':'all', desc: '', type: 'M'},
	{name: `Tworzenie questów`, ext: '', '🕥':60, '🚶':20, desc: '', type: 'M'},
	{name: `icebreakery`, ext: '', '🕥':40, '🚶':'all', desc: '', type: 'M'},
	{name: `pytnia z pasków`, ext: '', '🕥':60, '🚶':12, desc: '', type: 'M'},
	{name: `LARP`, ext: '', '🕥':100, '🚶':20, desc: '', type: 'M'},
	{name: `RPG`, ext: '', '🕥':120, '🚶':4, desc: '', type: 'M'},
	{name: `challenge`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `rozmowa in english`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `robienie Story Cardsów`, ext: '', '🕥':120, '🚶':15, desc: '', type: 'M'},
	{name: `sesja grania w Story Cardsy`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `sesja StoryCubes`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},

	{name: `poranek`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `rozgrzewka`, ext: '', '🕥':20, '🚶':8, desc: '', type: 'M'},
	{name: `chillout`, ext: '', '🕥':45, '🚶':20, desc: '', type: 'M'},
	{name: `nagrywanie dźwięków`, ext: '', '🕥':60, desc: '', '🚶':bit, type: 'M'},
	{name: `sesja ambientów / AMSR`, ext: '+ grupowa medytacja', '🕥':75, '🚶':20, desc: '', type: 'M'},
	{name: `storytelling`, ext: '', '🕥':60, '🚶':15, desc: '', type: 'M'},
	{name: `story obrasski`, ext: '', '🕥':60, '🚶':15, desc: 'Wariant z animacją obraskową (pokazem slajdów)', type: 'M'},
	{name: `zagadki`, ext: '', '🕥':75, '🚶':15, desc: '', type: 'M'},
	{name: `gry planszowe`, ext: '', '🕥':90, '🚶':8, desc: '', type: 'M'},
	{name: `kontynuowana historia`, ext: '', '🕥':45, '🚶':15, desc: '', type: 'M'},
	{name: `gra w skojarzenia`, ext: '', '🕥':20, '🚶':15, desc: '', type: 'M'},
	{name: `odwrócone skojarzenia`, ext: '', '🕥':45, '🚶':15, desc: '', type: 'M'},
	{name: `eksperyment naukowy`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `koncert`, ext: '', '🕥':60, '🚶':20, desc: '', type: 'M'},
	{name: `sprzątanie`, ext: '', '🕥':30, '🚶':'all', desc: '', type: 'M'},
	{name: `karaoke`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `improwizacja`, ext: '', '🕥':90, '🚶':20, desc: '', type: 'M'},
	{name: `improwizacja z podziałem`, ext: '', '🕥':90, '🚶':15, desc: '', type: 'M'},
	{name: `civ impro game`, ext: '', '🕥':120, '🚶':20, desc: '', type: 'M'},
	{name: `scenki z życia`, ext: '', '🕥':30, '🚶':15, desc: 'Scenki impro, zazwyczaj poważne i dotyczące życiowych sytuacji, mające nas przygotować na te trudniejsze momenty', type: 'M'},
	{name: `bieganie`, ext: '', '🕥':45, '🚶':15, desc: '', type: 'M'},
	{name: `trening`, ext: '', '🕥':30, '🚶':bit, desc: '', type: 'M'},
	{name: `submission`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `gry towarzyskie`, ext: '', '🕥':30, '🚶':15, desc: '', type: 'M'},
	{name: `dyskoteka`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	
	{name: `czas wolny`, ext: '', '🕥':60, '🚶':'all', desc: 'Nie ma aktywności w tym czasie', type: 'M'},
	{name: `czas działań kreatywnych`, ext: 'CDK', '🕥':90, '🚶':'all', desc: '', type: 'M'},
	
	{name: `happening`, ext: '', '🕥':45, '🚶':20, desc: 'Idziemy przez wieś i krzyczymy do ludzi - śmieszen. Można też podejść, zagadać, poprosić o zrobienie czegoś w ramach zabawy.', type: 'M'},
	
	{name: `szukanie skarbu`, ext: '', '🕥':90, '🚶':20, desc: '', type: 'M'},
	{name: `ognisko`, ext: '', '🕥':90, '🚶':20, desc: '', type: 'M'},
	{name: `spacer`, ext: '', '🕥':40, '🚶':15, desc: '', type: 'M'},
	{name: `spacer wszystkich`, ext: '', '🕥':30, '🚶':'all', desc: '', type: 'M'},
	{name: `krótki spacerek`, ext: '', '🕥':15, '🚶':20, desc: '', type: 'M'},
	{name: `dłuższy spacer`, ext: '', '🕥':100, '🚶':8, desc: '', type: 'M'},
	
	{name: `gra terenowa`, ext: '', '🕥':90, '🚶':20, desc: '', type: 'M'},
	{name: `baloniec`, ext: '', '🕥':60, '🚶':18, desc: '', type: 'M'},
	{name: `Capture the flag`, ext: 'prison variant', '🕥':60, '🚶':25, desc: '', type: 'M'},
	
	{name: `cosplay => prezentacja => sesja`, ext: '', '🕥':120, desc: '', type: 'M'},
	{name: `sesja zdjęciowa`, ext: '', '🕥':75, '🚶':15, desc: '', type: 'M'},
	{name: `tematyczna sesja zdjęciowa`, ext: '', '🕥':75, '🚶':20, desc: '', type: 'M'},
	{name: `quest making`, ext: '', '🕥':60, '🚶':20, list: ['OutOfComfortZone personal (targeted) quest making'], desc: '', type: 'M'},
	
	{name: `turniej`, ext: '', list: ['growy','sabmajtów','rapsów','zagadek'], '🕥':60, '🚶':20, desc: '', type: 'M'},
	
	{name: `szkolenie`, ext: '', '🕥':30, '🚶':6, desc: 'Ktoś obeznany w jednym temacie przygotowjue grupkę np. Olek bierze ludzi i robi im przeszkolenie jak powinna wyglądać dobra scena przesłuchania, albo Jacek ze skejcenia i nazw tricków w celu np. rozegrania scenki o spotkaniu skejterskim', type: 'M'},
	
	{name: `rysunek`, ext: '', '🕥':30, '🚶':15, desc: '', type: 'M'},
	
	{name: `crafting`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `origami session`, ext: '', '🕥':30, '🚶':15, desc: '', type: 'M'},
	
	{name: `blindfolded obstacle run`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	
	{name: `ulubione postacie TALK`, ext: '', '🕥':30, '🚶':20, desc: 'Przedstaw jedną ze swoich ulubionych postaci i powiedz dlaczego', type: 'M'},
	
	{name: `pisanie`, ext: '', '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `pisanie scenariusza`, ext: '',  '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `pisanie piosenki`, ext: '', '🕥':30, '🚶':15, desc: '', type: 'M'},
	{name: `muzyka`, ext: '', '🕥':60, '🚶':15, desc: '', type: 'M'},
	{name: `instrument`, ext: '', list: ['pianino','gitara', 'ukulele'], '🕥':30, '🚶':8, desc: '', type: 'M'},
	{name: `sesja słuchania soundtracków`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `opowiadanie do muzyki`, ext: '', '🕥':30, '🚶':15, desc: '', type: 'M'},
	{name: `voiceover`, ext: '', '🕥':30, '🚶':bit, desc: '', type: 'M'},
	{name: `scena do muzyki`, ext: '', '🕥':30, '🚶':20, desc: '', type: 'M'},
	{name: `dzienniczek`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `podsumowanie`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `rozpoczęcie`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `gulag`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `rywalizacja z podziałem`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `działalność artystyczna`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `malowanie`, ext: '', list: ['obrazków','talerzy','kamieni'], '🕥':30, desc: '', type: 'M'},
	{name: `plener rysunkowy`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `basen`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `ustalanie i sprawy organizacyjne`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `zebranie z rozmową`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `przeglądanie materiału`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `oglądanie dawnych zdjęć i filmów`, ext: '', '🕥':45, desc: '', type: 'M'},
	{name: `oglądanie anime/bajek`, ext: '', '🕥':90, desc: '', type: 'M'},
	{name: `przeglądanie i robienie memów z naszych ujęć`, ext: '', '🕥':45, desc: '', type: 'M'},
	{name: `wprowadzenie`, ext: '', list: ['do RPG','do LARPów', 'do innych gier'], '🕥':30, desc: '', type: 'M'},
	{name: `dance workout`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `programowanie`, ext: '', '🕥':90, desc: '', type: 'M'},
	{name: `robienie kart postaci`, ext: '', '🕥':120, desc: '', type: 'M'},
	{name: `nasze marzenia`, ext: '', '🕥':90, '🚶':20, desc: 'rozmowa o przyszłości', type: 'M'},
	{name: `Sesja wymyślania technologii`, ext: '', '🕥':60, '🚶':15, desc: '', type: 'M'},
	{name: `event logging`, ext: '', '🕥':'cały czas', desc: '', type: 'M'},
	{name: `festyn`, ext: 'LARP', '🕥':150, desc: 'Festono gra pełna atrakcji, rozstawione wszędzie stragany i uczestnicy podzieleni na grupki rywalizujące ze sobą.', type: 'M'},
	{name: `która rola jest bardziej specific?`, ext: '', '🕥':60, desc: 'i dlaczego (dyskusja)', type: 'M'},
	{name: `głosowanie`, ext: '', '🕥':30, desc: '', type: 'M'},
	{name: `piknik`, ext: '', '🕥':75, desc: '', type: 'M'},
	{name: `sesja nudy`, ext: 'jako wywoływacz kreatywności', '🕥':45, desc: '', type: 'M'},
	{name: `kalambury`, ext: '', '🕥':30, desc: 'Ktoś rysuje na komputerze jakiś obiekt a grupa zgaduje, może być z listy a może być total random. Czasem daje się hinta np. z kategorii', type: 'M'},
	
	{name: `dyskusja o telewizji`, ext: '', '🕥':30, list: ['Stare programy telewizyjne: panorama i wiadomości','cartoon network i kreskówki','game network i gry','RTL7/TVN7 = DragonBall','Jetix',], desc: '', type: 'M'},
	
	{name: `rozmowa o kontrolowaniu emocji`, ext: '', '🕥':60, desc: '', type: 'M'},
	
	{name: `power of storytelling`, ext: '', '🕥':45, desc: 'Inaczej wprowadzenie do gier RPG i jak używać storytellingu by grało się lepiej', type: 'M'},

	{name: `zapoznanie z gamepad app`, ext: '', '🕥':60, '🚶':20, desc: 'Testujemy możliwości programu, uczymy obsługi, dopisujemy własne funkcje (jeśli umiesz w prog)', type: 'M'},
	
	
]