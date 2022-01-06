

import sw from './sw.js'
import swData from './sw-data.js'
import roles from './roles.js'
import listy from './listy.js'
import physical from './physical-objects.js'
import rysun from './rysun.js'
import impro from './impro.js'
import swModules from './sw-modules.js'
import ćwiczenia from './ćwiczenia.js'
import questy from './questy.js'
import system from './system.js'
import puzzle from './puzzle.js'
import music from './music.js'
import ideas from './ideas.js'

!function dataImport() {
	console.log('exported function')

	domains = {
		sw,
		swData,
		swModules,
		system,
		// roles,
		puzzle,
		questy,
		ćwiczenia,
		listy,
		rysun,
		music,
		impro,
		ideas,
	}

svelteSetDomains(domains)
}()