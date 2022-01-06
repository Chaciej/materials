
export default [
	
	
	{ name: 'Najgorszy sposób nauczania', ext: '', desc: 'Zaprojektujcie najgorszy sposób nauczania, niech cię nie tylko NIE nauczy ale zniechęci do końca życia (coś jak w szkołach to robią tylko lepiej)', type: 'quest' },
	
	{ name: 'Zadanka', ext: '', desc: `Dajemy sobie proste zadania, każdy każdemu, codziennie jako element praktyki regularności. Przykład zadania: napisz HTML gdzie jeden element zawiera się w drugim
`, type: 'quest' },
	
	{ name: 'sen do RPG', ext: '', desc: 'Weź jeden ze swoich snów i uczyń z niego [ opowieść, scenę impro, RPGa ]', type: 'quest' },
	
	// { name: 'quest', ext: '', desc: '', type: 'quest' },
	
	{ name: 'pomóż z rysunkiem postaci', ext: 'Mela => Jacek', desc: '', type: 'targeted' },
	{ name: 'poćwicz postaćki', ext: 'Jacek', desc: '', type: 'targeted' },
	{ name: 'zaprogramuj', ext: 'Jacek', desc: '', list: [
		'button który dodaje element do strony',
		], type: 'targeted' },
	
	{ name: 'Jscex Programming Quest', ext: 'Jacek', list: [
			`Stwórz na stronce button który po kliknięciu(onclick="funkcja()") będzie dodawał <div>TEST</div>`,
			`Namierz div z poziomu JS używając jego ID`,
			`Zmień styl(css) elementu z poziomu JS`,
			`Dowiedz się jak przy użyciu EventListener'ów dodać funkcje klawiszom klawiatury i elementom na stronie`,
			`Zrób tak by strzałkami klawiatury można było przesuwać element html w różne miejsca na stronce`,
			`Zrób tak by ten element przeskakiwał po gridzie(siatce/szachownicy) o podanych rozmiarach (np. 64x64px)`,
			`Napisz funkcję która zmienia src obrazka w zależności od wciśniętego klawisza strzałek`,
			`Wykorzystując zdobytą wiedzę zrób stronkę na której gracz może sterować postacią która obraca się w kierunku w którym idzie`,
		], desc: '', type: 'targeted' },
	
	// { name: 'quest', ext: 'person', desc: '', type: 'targeted' },
	
	
	// ========================================================================
	// ========================================================================
	// CHALLENGE
	
	{ name: 'Akronim na nazwę', ext: '', desc: 'Macie jakiś akronim (niewiadomy) i musicie z niego utworzyć pełną nazwę jak najszybciej. (przykład: EMP = "Elokwętna mowa pajaca" lub "Egzotyczny Malarski Pomnik") Entropia męczy porządkiwistów', type: 'challenge' },
	
	{ name: 'powiedz alfabet od tyłu', ext: '', list: [
		'alfabet zbieżny / rozbieżny'
		], desc: '', type: 'challenge' },
	
	{ name: 'słowo w zdaniu', ext: '', desc: 'Ktoś z grupy mówi słowo a osoba odpowiada zdaniem z tym słowem', type: 'challenge' },
	{ name: 'ruch do muzyki', ext: '', desc: 'Zaimprowizuj ruchem do wylosowanej muzyki', type: 'challenge' },
	{ name: 'wymiarowe przedmioty', ext: '', desc: 'Zbierzcie jak najwięcej rzeczy o długości nie przekraczającej 5cm w ciągu 1 minuty', type: 'challenge' },
	{ name: 'blindfold walk', ext: '', desc: 'Blindfold all przejść niezauważeni przez Helenkę z punktu A do B', type: 'challenge' },
	{ name: 'definicja', ext: '', desc: 'Napisz definicję czegoś w 1, 2 i 3 zdaniach, albo słowach', type: 'challenge' },
	{ name: 'związani', ext: '', desc: 'Ucieczka będąc związanym', type: 'challenge' },
	{ name: 'zwiąż ręce', ext: '', desc: 'Zwiąż komuś ręcę w 1 minutę', type: 'challenge' },
	{ name: 'direct instruction challenge', ext: '', desc: '', type: 'challenge' },
	{ name: 'chowajcie się', ext: '', desc: 'Schowajcie się wszyscy challenge,', type: 'challenge' },
	{ name: 'math', ext: '', desc: 'Mental math challenge (?),', type: 'challenge' },
	// { name: 'quest', ext: '', desc: 'Find and compose certain items,', type: 'challenge' },
	{ name: 'próbuj w ciemno', ext: '', desc: 'Blindfolded (makeup, drawing, food taste),', type: 'challenge' },
	{ name: 'dojdź na ślepo', ext: '', desc: 'Blindfolded get from a to b (without x),', type: 'challenge' },
	{ name: 'quick-przebieranka', ext: '', desc: 'Przebierz się w 1 minutę,', type: 'challenge' },
	{ name: 'odpowiadanka', ext: '', desc: 'Quick answer question,', type: 'challenge' },
	{ name: 'quiz', ext: '', desc: 'Quiz z warsztatów (lore i przyjaciele),', type: 'challenge' },
	{ name: 'światła', ext: '', desc: 'Zgaście wszystkie światła w domu w ciągu 1 minuty,', type: 'challenge' },
	{ name: 'cisza', ext: '', desc: 'Bądźcie cicho przez 1 minutę albo nawet 5,', type: 'challenge' },
	{ name: 'poważniec', ext: '', desc: 'Nie zaśmiej się challenge (najlepiej na scenie),', type: 'challenge' },
	{ name: 'kostka', ext: '', desc: 'Wyrzuć kostką wynik (np 40 z 2 d 20),', type: 'challenge' },
	{ name: 'emo', ext: '', desc: 'Rozpłacz się, zaśmiej się (na klaśnięcie zmiana),', type: 'challenge' },
	{ name: 'catz', ext: '', desc: 'Zbierz wszystkie koty w jednym pomieszczeniu,', type: 'challenge' },
	{ name: 'aaaaaa', ext: '', desc: 'Mów jak najdłużej aaaaaaaaaaaaaaaaaa, ewentalnie jak najkrócej', type: 'challenge' },
	{ name: 'anty obj', ext: '', desc: 'Nie opuszczając pokoju znajdź się jak najdalej od obiektu', list: [
		'poduszka','okno','kanapa','albert','pianino','tworzywa sztuczne','komputer','żarówka',
		], type: 'challenge' },
	{ name: 'quest', ext: '', desc: '', type: 'challenge' },
	{ name: 'quest', ext: '', desc: '', type: 'challenge' },



	{ name: 'quest', ext: '', desc: 'Ask, convince a person to make an action,', type: 'quest' },

// ========================================================================
// ========================================================================






	{ name: 'Challenge', ext: '', desc: 'Challenge to często zadania na czas: widoczny lub ukryty w trakcie trwania zadania (ale można lekko postresować ludzi). Challenge skupiają się nieco bardziej na rywalizacji niż questy', type: 'quest type' },
	
	{ name: 'Questy indywidualne', ext: '', desc: 'powiedz coś komuś, zainteresuj, nakłoń, zaprowadź w miejsce, wydobądź info', type: 'quest type' },
	
	{ name: 'secret quest', ext: '', desc: 'quest w którym o zasadach wiesz tylko ty (np. rozśmieszyć grupę nr 2)', type: 'quest type' },
	
	
	{name: 'Zrób w Blenderze', ext: '', list: [
		'kolumnę',
		'stół',
		'krzesło',
		'pojazd',
		'statek kosmiczny',
		'spluwę',
		'chmurkę',
		'wazon',
		], type: 'quest'},
	
	{name: 'Zrób prosty beat w FL studio', type: 'quest'},

	{val: 3, name: 'Narysuj kilku uczestników SW w stylizowanej formie', type: 'quest'},
	
	{val: 3, name: 'Narysuj kilku uczestników SW jako postacie z anime', type: 'quest'},

	{name: 'Zrób fajny (fizyczny) plan z miejscem na sloty', type: 'quest'},
	{val: 3, name: 'Fotka grupowa', type: 'quest'},
	
	{val: 2, name: 'stwórz własną religię', desc: 'Opisz ją, ludzi którzy wyznają, jakie ma bóstwa, jeśli ma', type: 'quest'},
	
	
	{name: 'bezdech', desc: '', type: 'challenge'},
	{name: 'planck', desc: '', type: 'challenge'},
	{name: 'jajko w łyżce', desc: '', type: 'challenge'},
	{name: 'niedrgnij przez x czasu', desc: '', type: 'challenge'},
	{name: 'nie zaśmiej się', desc: '', type: 'challenge'},
	{name: 'jaskiniowiec', desc: '', type: 'challenge'},
	{name: 'dowiedz się ile wszyscy mają lat', desc: '', type: 'challenge'},
	{name: 'zjarany zbyszek mode na 1 min', desc: '', type: 'challenge'},
	{name: 'rozpoznaj przetworzony dźwięk', desc: '', type: 'challenge'},
	{name: 'Thumb disfunction', desc: 'prawa wskazujący, lewa kciuk w górę, zmiana, zmiana szybko zmiana szybciej!', type: 'challenge'},
	{name: 'S jak Sen-tence', desc: 'Ktoś z grupy mówi słowo a osoba odpowiada zdaniem z tym słowem', type: 'challenge'},
	{name: 'Impro ruch', desc: 'Zaimprowizuj ruchem do wylosowanej muzyki', type: 'challenge'},
	{name: 'Metryka', desc: 'Zbierzcie jak najwięcej rzeczy o długości nie przekraczającej 5cm w ciągu 1 minuty', type: 'challenge'},
	{name: 'Helenka spy', desc: 'Blindfold all przejść niezauważeni przez Helenkę z punktu A do B', type: 'challenge'},
	{name: 'Definicje', desc: 'Napisz definicję czegoś w 1, 2 i 3 zdaniach, albo słowach', type: 'challenge'},
	{name: 'Wydostań się będąc związanym', desc: 'Tied up escape,', type: 'challenge'},
	{name: 'Zawiąż komuś ręce', desc: '', type: 'challenge'},
	{name: 'Direct instruction challenge,', desc: '', type: 'challenge'},
	{name: 'Schowajcie się wszyscy challenge,', desc: '', type: 'challenge'},
	{name: 'Mental math challenge (?),', desc: '', type: 'challenge'},
	{name: 'Zbieracz', desc: 'Find and compose certain items,', type: 'challenge'},
	{name: 'Przekonaj osobę', desc: 'Przekonaj kogoś do pocjęcia decyzji lub zrobienia czegoś', type: 'challenge'},
	{name: 'Ślepiec try', desc: 'Blindfolded (makeup, drawing, food taste),', type: 'challenge'},
	{name: 'Ślepiec A-B', desc: 'Blindfolded get from a to b (without x),', type: 'challenge'},
	{name: 'Przebierz się w 1 minutę,', desc: '', type: 'challenge'},
	{name: 'Szybka odpowiedź', desc: 'Odpowiadamy na pytania jak najszybciej', type: 'challenge'},
	{name: 'Lore QUIZ', desc: 'Quiz z warsztatów (lore i przyjaciele),', type: 'challenge'},
	{name: 'Lights off', desc: 'Zgaście wszystkie światła w domu w ciągu 1 minuty,', type: 'challenge'},
	{name: 'Cisza', desc: 'Bądźcie cicho przez 1 minutę albo nawet 5,', type: 'challenge'},
	{name: 'Powaga', desc: 'Nie zaśmiej się challenge (najlepiej na scenie),', type: 'challenge'},
	{name: 'Wynik kości', desc: 'Wyrzuć kostką wynik (np 40 z 2 d 20),', type: 'challenge'},
	{name: 'Zbierz koty', desc: 'Zbierz wszystkie koty w jednym pomieszczeniu,', type: 'challenge'},
	{name: 'poduch finder', desc: 'Nie opuszczając pokoju znajdź się jak najdalej od poduszek,', type: 'challenge'},

	{name: 'Gra strategiczna', desc: `Zaprojektuj prostą grę strategiczną, może być na siatce 3x3 lub 4x4 czy też większej, gramy turowo. Gierka może przypominać bitwę figur, każda porusza się nieco inaczej ale ogólnie jest ich niewiele (żeby nie komplikować) Mogą to być np. kształty geometryczne`, type: 'quest'},

	{desc: 'Naucz się liter alfabetu (bez ogonków) oraz wartości liczbowej przyporządkowanej do każdej litery.', type: 'crapQ'},
	{desc: 'Stwórz swojej fikcyjnej postaci historię i opisz jej cechy', type: 'crapQ'},
	{desc: 'Naucz się podstaw programu FL Studio (tworzenie muzyki)', type: 'crapQ'},
	{desc: 'Naucz się podstaw programu Adobe Premiere (montaż video)', type: 'crapQ'},
	{desc: 'Naucz się podstaw obsługi aparatu Panasonic Lumix GH2, GH3 by wspomóc nas z nagrywaniem materiału.', type: 'crapQ'},
	{desc: 'Naucz kogoś czegoś, co potrafisz a druga osoba nie', type: 'crapQ'},
	{desc: 'Dowiedz się o podstawowych prawach i zasadach improwizacji', type: 'crapQ'},
	{desc: 'Zainteresuj kogoś jednym ze swoich hobby', type: 'crapQ'},
	{desc: 'Wybierz jedną piosenkę, weź z niej zwrotkę i zmień tekst na własny, po czym ją zaśpiewaj', type: 'crapQ'},
	{desc: 'Zaimprowizuj pozy do zdjęć', type: 'crapQ'},
	{desc: 'Wymyśl prostą grę lub aktywność (z użyciem dowolnych elementów)', type: 'crapQ'},
	{desc: 'Naucz się zakładać jedną z technik submission fightingu', type: 'crapQ'},
	{desc: 'Wytrzymaj 1 dzień bez użycia smartfonów i tabletów', type: 'crapQ'},
	{desc: 'Wytrzymaj 2 dni bez użycia smartfonów i tabletów', type: 'crapQ'},
	{desc: 'Wymyśl nazwy 5 fikcyjnych obiektów i opisz czym są', type: 'crapQ'},
	{desc: 'Zaprogramuj w języku JS prostą funkcję liczącą cokolwiek oraz ją uruchom pokazując, że działa.', type: 'crapQ'},
	{desc: 'Wymyśl własny (prosty) improwizowany utworek na pianinie.', type: 'crapQ'},
	{desc: 'Nakręć krótki film o warsztatach z dogranym komentarzem. (grupowe, min 3os.) Będziecie potrzebować wiedzy z zakresu nagrywania dźwięku, aparatu i montażu.', type: 'crapQ'},
	{desc: 'Opisz przyjacielowi, przyjaciółce ostatnią wizytę (dowolne miejsce) Opowieść należy prowadzić śpiewem. (grupowe, min. 2 os.)', type: 'crapQ'},
	{desc: 'Wygłoś przemówienie motywacyjne dla grupy.', type: 'crapQ'},
	{desc: 'Narysuj swoją postać najlepiej jak potrafisz (możesz się wspomóc obrazkami)', type: 'crapQ'},
	{desc: 'Zaprojektuj swojej postaci jakiś przedmiot, opisz go i narysuj', type: 'crapQ'},
	{desc: 'Zaimprowizuj jakiś utwór poprzez użycie głosu i rytmu (grupowe)', type: 'crapQ'},
	{desc: 'Zaczynając od dowolnego słowa rozpisz na kartce ciąg 50 kolejnych skojarzeń (gra w skojarzenia)', type: 'crapQ'},
	{desc: 'Odpowiedz na 3 losowe pytania (zadane przez Marcina)', type: 'crapQ'},
	{desc: 'Zrób zdjęcia osobom z warsztatów a potem dodaj chmurki dialogowe do obrazka tak, by stworzyć zupełnie inną historię. (wymagana wiedza z obsługi photoshopa lub innego programu)', type: 'crapQ'},
	{desc: 'Wymyśl 6 ciekawych pytań które można zadać każdemu.', type: 'crapQ'},
	{desc: 'Zaprojektuj swój znak graficzny, swoje logo, swój herb', type: 'crapQ'},
	{desc: 'Zrób prostą animację opowiadającą historyjkę w programie TvPaint', type: 'crapQ'},
	{desc: 'Zaimprowizujcie ruchem do losowo puszczonej muzyki (2 osoby)', type: 'crapQ'},
	{desc: 'Odegraj scenę, która zostanie nakręcona (scena wybrana losowo)', type: 'crapQ'},
	{desc: 'Przepłyń basen 1 raz na plecach ze związanymi z tyłu rękoma i płynąc do przodu', type: 'crapQ'},
	{desc: 'Naucz się żonglować 2 piłeczkami 1 ręką', type: 'crapQ'},
	{desc: 'Wymyśl własne ćwiczenie fizyczne oraz o nim opowiedz, dlaczego jest dobre i na co działa.', type: 'crapQ'},
	{desc: 'Wymyśl 3 własne sposoby poruszania się.', type: 'crapQ'},
	{desc: 'Napisz prostą grę w JS, musisz wykorzystać funkcje oraz obiekty.', type: 'crapQ'},
	{desc: 'Stwórz własny utwór muzyczny w programie FL studio z użyciem dowolnych instrumentów.', type: 'crapQ'},
	{desc: 'Opowiedz o... (tutaj losowo dostaniesz temat)', type: 'crapQ'},
	{desc: 'Poprowadź krótką sesję RPG (grę fabularną) w dowolnych realiach', type: 'crapQ'},
	{desc: 'Zaśpiewaj fragment znanej Ci piosenki na 3 różne sposoby', type: 'crapQ'},
	{desc: 'Narysuj abstrakcję (dowolną kompozycję złożoną z kresek, plam i kształtów)', type: 'crapQ'},

	{
		name: 'Przedstaw siebie',
		desc: 'Zaprezentuj się jak najlepiej potrafisz, powiedz o sobie w niedosłowny sposób, zainteresuj publikę.',
		type: 'crapQ'
	},
	{
		name: 'Zapytać, rzecz istotna',
		desc: 'Odpowiedz na 5 zadanych Ci pytań, staraj się by udzielane odpowiedzi były ciekawe, nie uciekaj w dosłowność byle coś powiedzieć.',
		type: 'crapQ'
	},
	{
		name: 'Daj się poznać!',
		desc: 'Jak w tytule, zadanie wykonasz gdy się zapoznasz ze wszystkimi. Inni mają wiedzieć kim jesteś, co lubisz a czego nie, znać twój charakter oraz rozumieć twoje potrzeby.',
		type: 'crapQ'
	},
	{
		name: 'Zaprezentuj osobę',
		desc: 'Dowiedz się jak najwięcej o jednej osobie poprzez rozmowę i pytania. Zaprezentuj ją przed ludźmi najlepiej jak potrafisz, powiedz co Ci się w niej podoba, staraj się unikać dosłowności.',
		type: 'crapQ'
	},
	{
		name: 'Improwizacja ma też zasady',
		desc: 'Naucz się podstawowych zasad improwizacji scenicznej, spróbuj wyjaśnić jak je rozumiesz.',
		type: 'crapQ'
	},
	{
		name: 'Potrzebujemy lidera!',
		desc: 'Zostań liderem jednej z grup, jeżeli grupa zaakceptuje twoje umiejętności oraz podejście zostaniesz wybrany(a) ',
		type: 'crapQ'
	},
	{
		name: 'Pierwsza asysta',
		desc: 'Asysta to pomoc jednemu z prowadzących w realizacji jakiegoś zadania. Musisz zapytać czy jest dla Ciebie miejsce i potrzeba.',
		type: 'crapQ'
	},
	{
		name: 'Przechwyć to obrazem!',
		desc: 'Opanuj obsługę aparatu, zrozum podstawę takich funkcji jak migawka, przysłona, czułość ISO',
		type: 'crapQ'
	},
	{
		name: 'PROGRAM przyjaciel człowieka',
		desc: 'Opanuj obsługę któregoś z programów, możesz nauczyć się wielu: FL Studio (program do tworzenia muzyki i dźwięków) Photoshop (program do malowania i zdjęć przerabiania) Adobe Premiere (program do edycji filmików i podkładania dźwięku) TV Paint (program do animacji rysunkowej) Illustrator (program do grafiki wektorowej i obrazków stylizowanych) IntelliJ Idea (program do... programowania, kodu pisania) After Effects (program do efektów specjalnych w filmach i nie tylko)',
		type: 'crapQ'
	},
	{
		name: 'Twoje wyobrażone odbicie',
		desc: 'Stwórz fikcyjną postać oddającą Ciebie, po czym zaprezentuj ją przed ludźmi, opisz dlaczego ma właśnie takie cechy.',
		type: 'crapQ'
	},
	{
		name: 'Ty także możesz zapytać',
		desc: 'Sformułuj 5 ciekawych pytań, jakie zadałbyś osobie chcąc się dowiedzieć o niej jak najwięcej.',
		type: 'crapQ'
	},
	{
		name: 'Tworzyć jest rzeczą ludzką',
		desc: 'Stwórz coś ciekawego co można pokazać, opowiedz o tym. Może to być: opowieść, rysunek, obrazek, muzyka, filmik, prosta gra, jakiś obiekt lub jakikolwiek inny przejaw twórczości.',
		type: 'crapQ'
	},{
		name: 'HEJ Impro!',
		desc: 'Przywitajcie się z improwizacją odgrywając prostą scenę, weź ze sobą kilka osób. Niech publika sugeruje miejsce, czas, sytuację i elementy sceny',
		type: 'crapQ'
	},
	{
		name: 'Uchwyć to filmem',
		desc: 'Naucz się kręcić proste filmy, skorzystaj z dowolnego urządzenia nagrywającego by przedstawić co udało Ci się uchwycić.',
		type: 'crapQ'
	},{
		name: 'Wymyśl zagadkę dla grupy',
		desc: 'Wszyscy kochają zagadki, te trudne jak i te łatwe, jednak twoja z pewnością będzie jedyna w swoim rodzaju... jeżeli oczywiście ją zrobisz, a warto!',
		type: 'crapQ'
	},
	{
		name: 'Hej programisto!',
		desc: 'Poznaj podstawy programowania w języku JS (przeglądarka). Dowiedz się jak działa program pod powłoką, zrozum pojęcia. W celu podsumowania napisz:' +
			'* przykład użycia zmiennych * przykład pętli o (x) iteracjach * przykład funkcji z użyciem argumentów * przykład użycia arrayów [] * przykład użycia instrukcji warunkowych * przykład użycia obiektów {} * przykład użycia bufora tymczasowego',
		type: 'crapQ'
	},
	{
		name: '3 rodzaje kroków przed kamerą i ludźmi',
		desc: 'Na wystąpieniu zaprezentuj 3 rodzaje ciekawych kroków w jakich możesz się poruszać na scenie, opisz kiedy powinno się je stosować i dlaczego.',
		type: 'crapQ'
	},
	{
		name: 'Scena do muzyki!',
		desc: 'Po uprzednim odsłuchaniu kawałka muzycznego gramy do niego pasującą scenę, która przebiega adekwatnie do muzyki w tle.',
		type: 'crapQ'
	},{
		name: 'Zapozuj do zdjęć',
		desc: 'Jak w tytule, zapozuj do zdjęć: * stojąc * siedząc (z krzesłem) * leżąc * dziwaczne pozy',
		type: 'crapQ'
	},
	{
		name: 'Zapozujcie w grupie',
		desc: 'Parę osób próbuje zapozować razem do zdjęć. Ujęcia powinny być ciekawe a wręcz szokujące!',
		type: 'crapQ'
	},
	{
		name: 'Daj się nagrać, by w animacji zagrać!',
		desc: 'Wykonaj kilka czynności (z listy) będąc nagrywanym. Zrób to w swoim stylu, bez skrępowania (będąc sobą) Niech twoje ruchy mówią za Ciebie! ',
		type: 'crapQ'
	},
	{
		name: 'Kreatywne grupowe zdjęcia pamiątkowe\n',
		desc: 'Zbierzmy się grupą i zróbmy 5-10+ zdjęć, niech każde będzie inne, choć równie ciekawe. Pamiętajcie, najważniejsza jest pamiątka!',
		type: 'crapQ'
	},{
		name: 'Dodaj komentarz głosowy do filmu',
		desc: 'Nagraj swój głos, tak by zabawnie połączył się z daną sceną (wybraną z nagranych filmików). Nie krępuj się, komentuj!',
		type: 'crapQ'
	},
	{
		name: 'Przedstaw scenę wyolbrzymienia bólu lub innej emocji',
		desc: 'Scena ma przedstawiać nadwrażliwość  (udawaną) lub wyolbrzymienie pewnej emocji, należy zwielokrotnić jej moc by uzyskać “szokujący” efekt.',
		type: 'crapQ'
	},{
		name: 'Wypowiedz to INACZEJ',
		desc: 'Wypowiedz ten sam tekst  lub słowa piosenki  na wiele różnych sposobów.',
		type: 'crapQ'
	},
	{
		name: 'Zaprezentujcie zintegrowany ruchowo układ w grupie',
		desc: 'Jak w tytule, przedstawcie na scenie impro ruchowe z ukazaniem, że rozumiecie i akceptujecie siebie. ',
		type: 'crapQ'
	},{
		name: 'Zrób kilka spontanicznych zdjęć komuś w grupie',
		desc: 'Porób spontaniczne zdjęcia jakiejś osobie, niech wygląda zabawnie i dziwnie.',
		type: 'crapQ'
	},
	{
		name: 'Zrób parę spontanicznych ujęć filmowych w grupie',
		desc: 'Porób spontaniczne filmy komuś z grupy, niech to będą niestandardowe ujęcia z pomysłem.',
		type: 'crapQ'
	},
	{
		name: 'Wygłoś przemówienie na ciekawy temat, który uważasz że cię interesuje',
		desc: '',
		type: 'crapQ'
	},
	{
		name: 'Debata prezydencka',
		desc: 'Odegrajcie scenę debaty prezydenckiej, potrzebujemy dwóch kandydatów oraz prowadzącego debatę.',
		type: 'crapQ'
	},
	{
		name: 'Przeprowadźcie rozmowę w gibberish',
		desc: 'Porozmawiajcie w niezrozumiałym języku, charakter tej rozmowy powinien ukazywać, że występuje komunikacja.',
		type: 'crapQ'
	},
	{
		name: 'Scena sądu',
		desc: 'Odegrajcie scenę sądu (oskarżony + sędzia + reszta typów). Niech działa na emocje, lub będzie zabawna i z humorem.',
		type: 'crapQ'
	},
	{
		name: 'Żonglerka',
		desc: 'Naucz się żonglować dwoma i trzema piłeczkami. Zaczynaj powoli i ćwicz aż wyjdzie, nie poddawaj się.',
		type: 'crapQ'
	},
	{
		name: 'Submission fight I',
		desc: 'Poznaj podstawy i pozycje submission fightingu',
		type: 'crapQ'
	},{
		name: 'Submission fight II',
		desc: 'Poznaj techniki (choke, triangle choke, armbar, kneebar i inne)',
		type: 'crapQ'
	},
	{
		name: 'Submission fight III',
		desc: 'Sparuj z kimś (w miarę) równym i zakończ techniką, za każdą otrzymasz 4PK',
		type: 'crapQ'
	},
	{
		name: 'Nagraj swój głos',
		desc: 'Nagraj swój głos, niech choć RAZ zmieni się jego ton, im więcej zróżnicowania tym lepiej.',
		type: 'crapQ'
	},
	{
		name: 'Impro kapela!',
		desc: 'Stwórzcie zespół, który będzie improwizował wokalem i rytmem. Mogą pojawić się nawet tancerze',
		type: 'crapQ'
	},{
		name: 'Wymyśl dowcip',
		desc: 'Wymyśl i opowiedz dowcip! Jedna zasada, ma być zabawa i niech większość zrozumie. Nie musicie (wręcz nie powinniście) odnosić się do znanych dowcipów.',
		type: 'crapQ'
	},
	{
		name: 'Przygotuj układ taneczny',
		desc: 'Przygotuj choreo układu do jakiejś muzyki, który będzie ciekawie się prezentował na scenie, nie musi być długi, około 20-40 sekund lub więcej.',
		type: 'crapQ'
	},
	// questy WMK17
	{
		name: 'Przedstaw siebie',
		desc: 'Zaprezentuj się jak najlepiej potrafisz, powiedz o sobie w niedosłowny sposób, zainteresuj publikę.',
		type: 'crapQ'
	},
	// {
	// 	name: 'QUESTY trzeba poznać, a potem je wykonać.',
	// 	desc: 'Naucz się podstawowych zasad dotyczących questów, czym są i po co się je robi. Dowiedz się co oznaczają poszczególne ikonki oraz opisy. Poznaj pojęcia index, id, scope, mining, charges, etc.',
	// 	type: 'crapQ'
	// },
	{
		name: 'Poznawaj i daj się poznać!',
		desc: 'Zapoznaj się z kilkoma nowymi osobami. Postaraj się zaprzyjaźnić, porozmawiać na różne, nawet głębsze tematy, nawiązać wspólny język.',
		type: 'crapQ'
	},
	{
		name: 'Zaprezentuj wybraną osobę',
		desc: 'Dowiedz się jak najwięcej o jednej osobie poprzez rozmowę i pytania. Zaprezentuj ją przed ludźmi najlepiej jak potrafisz, powiedz co Ci się w niej podoba, staraj się unikać dosłowności.',
		type: 'crapQ'
	},
	{
		name: 'Tłumaczyciel questów',
		desc: 'Wyjaśnij paru osobom treść questów, których normalnie by nie chcieli ale uważasz że potrzebują.',
		type: 'crapQ'
	},
	// {
	// 	name: 'Warsztaty to nasza gra',
	// 	desc: 'Przyswój i zrozum zasady Warsztatów Kreatywności. Dowiesz się o nich z głównej listy zasad. Poznaj questy i punkty, dowiedz się jakie są zmienne i stałe warsztatów, co możesz otrzymać za punkty, jakie atrakcje nas czekają i wiele innych.',
	// 	type: 'crapQ'
	// },
	{
		name: 'Opowiedz historię ze swojego życia',
		desc: 'Wybierz jeden fragment z życia i spróbuj o nim opowiedzieć możliwie najciekawiej. Historia może być zabawna, a może być smutna lub wzruszająca, nic nie stoi na przeszkodzie by mówić o rzeczach trudnych.',
		type: 'crapQ'
	},
	{
		name: 'Odpowiedz na pytania',
		desc: 'Odpowiedz na 5 pytań z (lista pytań 1) przed ludźmi w formie wystąpienia.',
		type: 'crapQ'
	},
	{
		name: 'Pomocna dłoń',
		desc: 'Pomóż kilku osobom w dowolnej aktywności udzielając jakiejś wskazówki, przekazując wartościowe informacje lub wskazując właściwą drogę postępowania. Twoja pomoc powinna zostać jakoś potwierdzona.',
		type: 'crapQ'
	},
	{
		name: 'Camera basics,',
		desc: 'Poznaj aparat i jego funkcje. Zrozum czym jest czas naświetlania, przysłona, ogniskowa, jak działa automatyczny focus. Jako podsumowanie zrób kilka zdjęć i nakręć prosty filmik.',
		type: 'crapQ'
	},
	{
		name: 'Gry integracyjne, just PLAY IT!',
		desc: 'Z poniższej listy wybierzcie jedną grę improwizowaną po czym zagrajcie w nią. Gry te najczęściej wymagają kilku osób. Każdy element dostępny jest tylko raz i znika po jednorazowym użyciu.',
		type: 'crapQ'
	},
	{
		name: 'Impro to też zasady',
		desc: 'Naucz się podstawowych zasad improwizacji scenicznej (helper x). Postaraj się je zrozumieć, oprócz uczenia się ich na pamięć, po czym przedstaw je po swojemu.',
		type: 'crapQ'
	},
	{
		name: 'Sceniczny impro show',
		desc: 'Odegraj impro scenkę wybierając temat z listy # (lista impro scenek)',
		type: 'crapQ'
	},
	{
		name: 'Piano basics',
		desc: 'Poznaj podstawy pianina, najbardziej wrzechstronnego instrumentu. Lista zawiera elementy podstawowe jakie należy przyswoić.',
		type: 'crapQ'
	},
	{
		name: 'Zasady muzyki',
		desc: 'Naucz się podstawowych i ogólnych zasad muzyki, zrozum czym jest dźwięk i kompozycja, co sprawia, że ją lubimy. Dowiedz się o rytmice i strukturze. Poznaj harmonie i dysonanse. Zrozum jak można opowiedzieć muzyką historię i jak różna muzka wpływa na charakter przekazu. Opowiedz na swój własny sposób.',
		type: 'crapQ'
	},
	{
		name: 'Podstawy komputra',
		desc: 'Opanuj w stopniu podstawowym obsługę komputera z warsztatów (laptop lub stacjonarny). Dowiedz się jakie mają programy i który mniej więcej do czego służy. Jako podsumowanie wykonaj proste zadania z poniższej listy.',
		list: [
			'naucz się podstawowych skrótów w systemie',
			'naucz się podstawowych skrótów w kilku programach do tworzenia',
			'',
			'',
			'',
			'uruchom program z pliku .bat',
		],
		type: 'crapQ'
	},
	{
		name: 'Obrazy widzę wszędzie',
		desc: 'Zrozum podstawy grafiki i mediów wizualnych. Dowiedz się jak działają kontrasty, czym jest kształt i bryła, przestrzeń, tekstura, kolor, forma, linia i punkt, jakie są cele grafiki i projektowania, co przekazuje swoją treścią.',
		type: 'crapQ',
		list: [
			'kształt i bryła',
			'kontrast',
			'tekstura',
			'kompozycja',
			'przestrzeń (whitespace)',
			'światłocień',
			'design',
			'',
			'',
			'',
		]
	},
	{
		name: 'Śpiewać każdy może',
		desc: 'Wybierz jedną ze znanych Ci piosenek i wykonaj ją na scenie przed ludźmi. Skup się na interpretacji, baw się nią, dodaj nieco własnej inwencji, urozmaicaj i zmieniaj bo to twoje wykonanie.',
		type: 'crapQ'
	},
	{
		name: 'Wierszo-mówca',
		desc: 'Naucz się wiersza lub fragmentu prozy, po czym ciekawie go przedstaw na jednym z wystąpień. Fajnie byłoby usłyszeć jak działasz intonacją w trakcie wypowiedzi.',
		type: 'crapQ'
	},
	{
		name: 'Porażka',
		desc: 'Jeśli poniosłeś porażkę w zadaniu z wystąpieniem ten quest jest dla Ciebie. Podejdź do jednego z GMów i opowiedz mu o swoich bolesnych doświadczeniach. Jeśli historia będzie przekonująca otrzymasz punkty.',
		type: 'crapQ'
	},
	{
		name: 'Rysunek, nie tylko do rysowania',
		desc: 'Opanuj podstawy rysunku (ołówek lub długopis). Dowiedz się czym jest kreska, walor, bryła i jak je przedstawić. Poznaj rysunek od strony opowiadania historii obrazkowych. Narysuj coś.',
		type: 'crapQ'
	},
	{
		name: 'Przebudzenie - scena',
		desc: 'Odegraj scenę przebudzenia się w miejscu tobie nieznanym. Lokacja ta będzie piękna lub straszna w zależności od rzutu kością d10 (0 sielanka - 9 horror)',
		type: 'crapQ'
	},
	{
		name: 'Włóż w to emocje',
		desc: 'Wybierz jedną ze znanych Ci piosenek i wykonaj ją na scenie, jednak z naciskiem na wyrażenie emocji. Spróbj zmierzyć się z czymś nowym próbując różnych interpretacji piosenki z naciskiem na wyrażenie swoich uczuć względem utworu.',
		type: 'crapQ'
	},
	{
		name: 'Edytor tekstu',
		desc: 'Opanuj podstawy obsługi edytora tekstu (VScode lub IntelliJ IDEA). Pokaż, że sprawnie poruszasz się między komórkami tekstu, szybko zaznaczasz i zgrabnie przenosisz, duplikujesz i kasujesz oraz jesteś świadomy jak wyszukiwać i zastępować informacje. Dodakowo możesz pokazać, że umiesz korzystać ze skrótów.',
		type: 'crapQ',
		list: [
			'szybkie chodzenie po słowie',
			'wyszukiwanie',
			'wyszukiwanie w tekście',
			'multiple kursory',
		],
	},
	{
		name: 'Odpowiedz na pytania II',
		desc: 'Odpowiedz na 6 pytań z (lista pytań 2) przed ludźmi w formie wystąpienia.',
		type: 'crapQ'
	},
	// {
	// 	name: 'Asystent mistrza',
	// 	desc: 'Zadanie wykonasz, jeśli pomożesz GM-om w pewnej wymagającej czynności. Albo nie, przyjdź po prostu po zapłatę jakbyśmy zapomnieli o Tobie i twoich pomocach. To zadanie możesz wykonać wielokrotnie.',
	// 	type: 'crapQ'
	// },
	{
		name: 'Zwierzeu',
		desc: 'Wybierz z listy jedno zwierzę, przygotuj o nim kreatywną prezentację, powiedz czym się wyróżnia i co ciekawego warto jest wiedzieć. Możesz nieco zmyślić historię, wyolbrzymić cechy a nawet przedstawić satyrę.',
		type: 'crapQ'
	},
	{
		name: 'Perswazja przekonania',
		desc: 'Naucz się wpływać na ludzi siłą perswazji poprzez przyswojenie kilku zasad. Dowiedz się jak skutecznie działać w kontaktach międzyludzkich i jak ludzi przekonać do swoich (niekoniecznie prawdziwych) poglądów. Jako podsumowanie możesz przeprowadzić rozmowę z jednym z GMów na wystąpieniu.',
		type: 'crapQ'
	},
	{
		name: 'Improwizacja rysunkowa',
		desc: 'Weź jedną kartkę A4 i narysuj na niej linie drzew u jej podstawy, niech każde drzewo czymś się różni. Teraz to samo zrób z chmurami u góry, niech każda będzie inna ale równie ciekawa. Dla urozmaicenia możesz dodać domek gdzieś w drzewach. Gratulacje, właśnie zaimprowizowałeś w sztuce',
		type: 'crapQ'
	},
	{
		name: 'Przes ta wia nie jest fun',
		desc: 'Poprzestawiaj słowa w zdaniu tak, by nadal miało (jakiś) sens, ale było inne. Listę zdań znajdziesz w liście nr 5',
		type: 'crapQ'
	},
	{
		name: 'Guitar basics',
		desc: 'Naucz się podstaw gitary, opanuj podstawowe akordy i przejścia, wygodną pozycję, różne artykulacje (palcowanie), strumming itd. Dodatkowo możesz stworzyć prostą melodię z tych akordów.',
		type: 'crapQ'
	},
	{
		name: 'Wstęp do programowania',
		desc: 'Opanuj podstawy programowania wykonując poniższą listę zadań. Zrozum koncepty oraz ich zastosowanie nie tylko w informatyce. Wykorzystaj wysokopoziomowy język javascript pisząc zadanie.',
		type: 'crapQ'
	},
	{
		name: 'Błazenada',
		desc: 'Rozbawiaj ludzi w okolicy przez 3h, jeśli zaakceptują twoje śmieszkowanie wykonasz zadanie. Może być tylko jeden błazen na czas zadania',
		type: 'crapQ'
	},
	{
		name: 'Papierowy świat',
		desc: 'Wykonaj prostą formę-figurkę z papieru lub tektury. Niech przedstawia jakiś znany nam obiekt, przedmiot lub zwierzę.',
		type: 'crapQ'
	},
	{
		name: 'Wolisz ją mieć, WILLPOWER, czyli siła woli!',
		desc: 'Wyzbądź się pokusy zrobienia czegoś, co Ci szkodzi a zarazem towarzyszy dnia każdego. Lista podpowie które rzeczy mogą sprawiać problemy. Możesz wybrać więcej niż jedną opcję z listy, jednak uważaj... niełatwo jest kontrolować tak wiele nawyków jednocześnie! Kontroluj się conajmniej 1 dzień, nagroda będzie zależeć od czasu jaki wytrzymasz.',
		type: 'crapQ'
	},
	{
		name: 'Fotomontaż foty, możesz w końcu wklejać koty!',
		desc: 'Wykonaj fotomontaż zdjęcia w PS (temat wedle uznania). Możesz dokleić komuś trzecią rękę, podmienić głowę, powiększyć oczy, nos, dorysować włosy, ustawić osobę w innym otoczeniu, a także wiele innych rzeczy, niekoniecznie związanych z ludźmi',
		type: 'crapQ'
	},
	{
		name: 'Obca piosenka',
		desc: 'Naucz się jednej nowej piosenki w języku innym niż polski lub angielski, wykonaj ją na scenie przed ludźmi lub na koncercie.',
		type: 'crapQ'
	},
	{
		name: 'Światła, kamera, akcja,',
		desc: 'Aparat w rękach a więc kręcimy film. Z poniższych słów kluczy wybierz jedno aby nakręcić krótki filmik-etiudkę od 1-3 minut. Do tego zadania nie potrzebujesz jeszcze montażu, jednak wedle uznania możesz skorzystać z videoedycji, jeśli potrafisz he he.',
		type: 'crapQ'
	},
	{
		name: 'Słowa w różnej formie mówione.',
		desc: 'Wybierz dowolną książkę. Z wybranej książki wylosuj 1 stronę (rzut kością). Z wylosowanej strony wybierz 2 wersy, naucz się ich na pamięć po czym zaprezentuj publicznie, wypowiedz je na 3 sposoby, za każdym razem inaczej.',
		type: 'crapQ'
	},
	{
		name: 'Podstawy submission fightingu',
		desc: 'Zrozum czym jest submission fighting oraz dlaczego jest najpotężniejszą kombinacją sztuk walki w starciu 1v1. Poznaj takie pojęcia jak garda, przejście, pozycjonowanie, pozycja boczna, dosiad, dźwignia, technika kończąca, poddanie, klucz, poznaj też jedną technikę (dowolną).',
		type: 'crapQ'
	},
	{
		name: 'Origami star',
		desc: 'Zaprojektuj i wykonaj z papieru ozdobną gwiazdkę origami. Możesz skorzystać z pomocy internetu a możesz poddać się całkowicie własnej inwencji.',
		type: 'crapQ'
	},
	{
		name: 'Błędy poznawcze wszędzie, a gdzie jest PRAWDA?',
		desc: 'Naucz się i zrozum podstawowe błędy poznawcze człowieka. Doświadczamy ich na codzień, większości nieświadomie a ich zrozumienie jest kluczowe dla naszego sukcesu!',
		type: 'crapQ'
	},
	{
		name: 'Włosy podstawą do fryzury',
		desc: 'Zaplącz drugiej osobie włosy w ciekawym stylu. Efekty swojej pracy zaprezentuj przed ludźmi, najlepiej na jednym z wystąpień. Dla urozmaicenia możesz coś powiedzieć, dodając jaki to styl i czym się charakteryzuje.',
		type: 'crapQ'
	},
	{
		name: 'Nihoono songuu',
		desc: 'Zaśpiewaj piosenkę po japońsku, niech będzie to nowa piosenka, której nauczysz się na warsztatach. Może być to opening z anime (wersja karaoke) a może być dowolne wybrana, inna piosenka.',
		type: 'crapQ'
	},
	{
		name: 'Powaga czasem pomaga!',
		desc: 'Bądź poważny przez cały dzień, nie można Ci się zaśmiać ani zażartować, a questa będą wszyscy kontrolować',
		type: 'crapQ'
	},
	{
		name: 'Długa forma z listą',
		desc: 'Z poniższej listy wybierzcie temat i odegrajcie spektakl jako długą formę. Każdy z uczestników posiada jedno klaśnięcie (zmiana kadrów) i może z niego skorzystać wyłącznie poza sceną. Zadaniem jest zakończyć scenę nim wyczerpie się limit zmian. Najważniejsze to zaciekawić widza, ilość osób może się bardzo wahać.',
		type: 'crapQ'
	},
	{
		name: 'Soundtracki sobie nucę.',
		desc: 'Naucz się fragmentu melodi z listy soundtracków. Zaprezentuj melodię śpiewając lub nucąc w dowolnej formie. Pomoże Ci to lepiej zrozumieć tajniki kompozycji muzycznej.',
		type: 'crapQ'
	},
	{
		name: 'Pierwszy projekt strony',
		desc: 'Opanuj podstawy Web Devu tworząc swój pierwszy projekt, stronę internetową. Na stronie powinno znaleźć się jakieś przywitanie oraz krótko o tobie. Dla urozmaicenie (i premii punktowej) możesz dodać tło, obrazki, przyciski i elementy animowane.',
		type: 'crapQ'
	},
	{
		name: 'Kotomontaż',
		desc: 'Fotomontaż, w którym udział wezmą wyłącznie koty. Im więcej kotów tym lepiej ale opowiedziana historia również się liczy.',
		type: 'crapQ'
	},
	{
		name: 'Ślepcy',
		desc: 'Zasłońcie oczy na 2 godziny, uczestniczcie w życiu warsztatów najnormalniej jak się da, oczywiście zważając na konsekwencje',
		type: 'crapQ'
	},
	{
		name: 'Mistrz kreatywności',
		desc: '"Jestem mistrzem kreatywności", opowiedz historię na podane hasło z naciskiem na działanie motywujące, bądź ekspresyjny i przekonujący. Postaraj się porwać odbiorców swoją wypowiedzią, przemawiaj naturalnie ale odważnie, bądź mistrzem kreatywności!',
		type: 'crapQ'
	},
	{
		name: 'Improwizowany chór',
		desc: 'Wystąpcie na scenie chóralnie śpiewająć improwizowaną melodię. Niech jedna osoba będzie dyrygować chórem by ten mógł lepiej się zrozumieć.',
		type: 'crapQ'
	},
	{
		name: 'Oszukiwista',
		desc: 'Lubisz kłamać, oszukiwać, mówić nieprawdę, chciałbyś wiedzieć, czy w przyszłości masz zadatki na dobrego polityka? W tym zadaniu jedyne co musisz zrobić to skłamać 10 razy w ciągu dnia. Twoje kłamstwa muszą zostać jakoś potwierdzone.',
		type: 'crapQ'
	},
	{
		name: 'Samojazdowiec węglanowy',
		desc: 'Wymyśl 5 rzeczy-przedmiotów, nazwanych swoimi własnymi słowami, które jeszcze nie istnieją. Każdy z nich opisz, czym są, do czego służą. Możesz napisać o ich historii, skąd się wzięły i dlaczego powstały.',
		type: 'crapQ'
	},
	{
		name: 'Jaskiniowiec',
		desc: 'Ja mówić jak jaskiniowiec, całkowicie omijać zasady odmiany przez przypadki. Ja być prosty i mówić proste rzeczy, niewiele rozumieć ale dorze się bawić. \n Utrzymaj status jaskiniowca przez 3h, nie powineneś przerywać ani zmieniać charakteru mowy, zadanie mają potwierdzić ludzie, którzy z tobą rozmawiali.',
		type: 'crapQ'
	},
	{
		name: 'Pianino stworzyli do improwizacji',
		desc: 'Naucz się improwizować proste melodie za pomocą pianina. Użyj paru dźwięków ale opowiedz nimi jakąś historię, niech będą miały przesłanie, emocje, charakter. GM zarzuci temat i charakter melodii.',
		type: 'crapQ'
	},
	{
		name: 'Zaprojektuj własną rutynę treningową',
		desc: 'Stwórz projekt własnego programu treningowego składającego się z kilku ćwiczeń, które są m. Zaprezentuj swój projekt przed grupą.',
		type: 'crapQ'
	},
	{
		name: 'Zadania sobie dajcie i publicznie je wykonajcie',
		desc: 'To nieco większy quest. Podzielcie się na grupy 2,3 a nawet 4. Każda grupa dostaje 30 minut na przygotowanie kilku zadań (mini questów), nie ma limitu długości listy zadań, ważniejsze jest by były zaskakujące i zróżnicowane. Zadania wykonujecie na evencie podobnym do turnieju',
		type: 'crapQ'
	},
	{
		name: 'Świat bez telefonu',
		desc: 'Na 5 dni zrezygnuj z zaglądania do telefonu, można Ci tylko odbierać ważne połączenia (np. od rodziców) Otrzymasz odpowiednio: 20% nagrody za 2 dni, 40% nagrody za 3 dni, 70% za 4 oraz 100% za pełne 5 dni!',
		type: 'crapQ'
	},
	{
		name: 'Magia statusów',
		desc: 'Z listy statusów zostanie wylosowany jeden z nich. By zadanie wykonać musicie (4 osoby) status utrzymać przez conajmniej godzinę. Twoje działania muszą zostać potwierdzone i odzwierciedlać charakter nadanego Ci statusu.',
		type: 'crapQ'
	},
	{
		name: 'W RPG każdy może być "miszczem"',
		desc: 'Zbierz kilku graczy i poprowadź im sesję RPG. Sesja może być w klimatach surrealistycznych, gdzie dziwne rzeczy są na porządku dziennym. Jako inspiracji możesz użyć jednego ze swoich snów ale całości ma towarzyszyć nietypowe poczucie humoru i mnóstwo zabawy.',
		type: 'crapQ'
	},
	{
		name: 'Uwaga, ogólność atakuje!',
		desc: 'Wykonaj coś na dowolny temat, masz pełną swobodę twórczą ale uważaj, zbyt wiele swobody potrafi nas paraliżować. Jeśli jednak masz energię to na niej działaj.',
		type: 'crapQ'
	},
	{
		name: 'Kreatywna żonglerka',
		desc: 'Opanuj podstawy żonglerki stopniowo poznając kolejne, coraz trudniejsze triki. Poniższ lista podpowie Ci od czego zaczynać, a jej kolejność jest odpowiednia do stopnia trudności trików.',
		type: 'crapQ'
	},
	{
		name: '{PROGRAMISTA}',
		desc: 'A więc jesteś już programistą, możesz rozwiązywać bardziej złożone problemy, a tych mamy dla Ciebie kilka. Lista zawiera zadania na poziomie średnio zaawansowanym, powodzenia! Rozwiążesz jedno, kilka czy może wszystkie?, ',
		type: 'crapQ'
	},
	{
		name: 'Soundtrack duet',
		desc: 'Z listy soundtracków wybierzcie jeden kawałek i wykonajcie go w duecie śpiewając lub nucąc melodię, niech każdy zajmie jedną ścieżkę dźwiękową (basy lub góra)',
		type: 'crapQ'
	},
	{
		name: 'Ziom budowniczy',
		desc: 'Zbuduj domek z tektury, niech będzie on niewielki, ale pozwala zmieścić się choć jednej osobie. Za otwierane drzwi przewidziana jest niemała premia.',
		type: 'crapQ'
	},
	{
		name: 'Owce do domu',
		desc: 'Wcielcie się w owce a jeden gracz niech wcieli się w owczarka i zagania owce w ustalone przez GMa miejsce. Zadanie może odbywać się na terenie całej posesji. Uwaga, to zadanie może wyglądać głuupio.',
		type: 'crapQ'
	},
	{
		name: 'Dyskoteka mistrzów',
		desc: 'Dziś wieczorem dyskoteka, ale nie taka jak zwykle się widzi. Zróbcie to inaczej, po swojemu, tak jak byście chcięli by wyglądał Wasz świat. Użyjcie muzyki nietypowej do tej aktywności albo... zróbcie ją sami.',
		type: 'crapQ'
	},
	{
		name: 'Te dziwne pozy trzeba uwiecznić',
		desc: 'Przeprowadź sparring SF, nakręć z niego materiał, po czym uchwyć 4 najdziwniejsze pozy. Zrób z tego kompozycje na jednej stronie. Dodatkowe punkty można otrzymać za narysowanie tych kompozycji.',
		type: 'crapQ'
	},
	{
		name: 'Zdjęcia, zdjęcia, zdjęcia!',
		desc: 'Spontan to ludzka potrzeba, wykonaj zestaw spontanicznych fotek dla osób z grupy, niech znajdą się w nietypowych sytuacjach, pozach, a ich miny będą w najlepszym przypadku zdziwione :D',
		type: 'crapQ'
	},
	{
		name: 'Przerabianie też jest kreatywne',
		desc: 'Wybierz 5 dostępnych questów i zrób ich alternatywne warianty.',
		type: 'crapQ'
	},
	{
		name: 'Hasło motywacyjne na dziś',
		desc: 'Stwórz swoją własną tabliczkę, afisz z jakimś hasłem motywacyjnym wymyślonym przez Ciebie. Odpowiednio dobierz fonty (czczionkę) i wielkości a także kolory. Niech twój projekt krzyczy i wyraźnie przekazuje treść.',
		type: 'crapQ'
	},
	{
		name: 'Poprowadź erpega',
		desc: 'Stań się mistrzem gry i poprowadź przygodę. Użyj listy by określić realia prowadzonej sesji, wybierz jedną opcję.',
		type: 'crapQ'
	},
	{
		name: 'Ilustracje różnie można opisać',
		desc: 'Na ekranie zostaną wyświetlone losowe obrazki-ilustracje. Twoim zadaniem jest opowiedzenie o niej historii w ciekawy i porywający sposób, najlepiej tworząc zupełnie fikcyjne przedstawienie. Jeśli opowiesz historię do muzyki śpiewem możesz zyskać premię punktową, ale możesz też rapować.',
		type: 'crapQ'
	},
	{
		name: 'Wychowawca',
		desc: 'Zostań wychowawcą kolonijnym na czas 45 minut. Ludzie zostaną poinformowani o twojej tymczasowej roli jako wychowawcy. Rzut kością zadecyduje czy będziesz dobrym wychowawcą czy też typowym, złym. Żeby questa wykonać reszta musi się zgodzić',
		type: 'crapQ'
	},
	{
		name: 'Projekt większej gry',
		desc: 'W grupie kilku osób sporządźcie projekt gry, po czym spróbujcie ją wykonać. Może to być dowolny rodzaj gry, planszowa, towarzyska, sportowa i każda inna. Nagrodę otrzymacie odpowiednio do wkładu w wasz projekt.',
		type: 'crapQ'
	},
	{
		name: 'Cywilizacja przemierza w czasie',
		desc: 'Przedstawcie  grupowo cywilizację ludzką, która przemierza poprzez różne epoki, kamienia, brązu, starożytność, średniowiecze, renesans, rewolucję przemysłową itd. Niech widać zmagania, charakter danej epoki, czynności ludzkie, elementy typowe dla okresu, intrygi i zagwostki a także proces tworzenia postępu.',
		type: 'crapQ'
	},
	{
		name: 'OPENING Warsztatów Kreatywności!',
		desc: 'Zmobilizujmy się, by nakręcić nasz własny warsztatowy opening i żeby każdy mógł wziąć w nim udział. Podzielcie się na role, niech pojawią się aktorzy, muzycy, projektanci a także montażyści video. Wszyscy z grupy powinni razem współpracować ze sobą w celu stworzenia tego projektu.\n\t\t\n\t\tZacznicie od nakreślenia projektu, zastanówcie się nad scenariuszem i podejściem do nagrania materiału. Przemyślcie proces kompozycji utworu i jego charakter, niech będzie oddawał to miejsce i klimat warsztatów.',
		type: 'crapQ'
	},

	{
		name: 'Urodzony przywódca',
		desc: 'Zostań wybrany przez grupę w zadaniu wymagającym lidera, ponadto musisz spełnić swoją rolę jako lider drużyny. To zadanie można odhaczyć jeśli taka sytuacja miała miejsce.',
		type: 'crapQ',
	},


	{name: 'FL music', desc:`Utwór muzyczny w FL'u + teledysk z udziałem innych uczestników.`, type: 'quest'},
	{name: 'Trailer filmowy', desc:'Ubergeneric Blockbuster Trailer with a twist', type: 'quest'},
	{name: 'Make an AD', desc:'Creative ad for something fictional', type: 'quest'},
	{name: 'Tutorial', desc:'Coolest tutorial in the world', type: 'quest'},
	{name: 'Fake News', desc:'Wiadomości z przyszłości/FakeNews', type: 'quest'},
	{name: 'Viral Vid', desc:'Video so viral it could cripple the nation entierly', type: 'quest'},
	{name: 'Useless Musical', desc:'Bezsensowny musical który jednak ma fabułę', type: 'quest'},
	{name: 'Music Video', desc:'Bollywoodzkie music video + piosenka', type: 'quest'},
	{name: 'CzkWood Action', desc:'Wakaliwood(CzWKwood?) action flick', type: 'quest'},
	{name: 'Mocumentary', desc:'Mocumentary - Film dokumentalny ale dokumentujący nieprawdę (np. Łowcy Katakumb)', type: 'quest'},











	// {
	// 	name: 'Niełatwa ta zagadka',
	// 	desc: 'Znajdź rozwiązanie pewnej zagadki "Płatki wokół róży"',
	// 	type: 'crapQ'
	// },
]