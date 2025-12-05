let questions = [
    {type: "Si", question: `Pour évaluer une situation nouvelle, la compares tu instinctivement à ce que tu as déjà vécu ou appris de similaire concrètement, cherchant des points de repère familiers ?`},
    {type: "Si", question: `Accordes tu une grande importance aux rituels, routines qui ont fait leurs preuves, car ils te procurent un sentiment de stabilité ?`},
    {type: "Si", question: `Ta mémoire est-elle souvent riche en détails contextuels concrets (dates, lieux, sensations, séquences d'événements) liés à tes expériences passées ?`},
    {type: "Si", question: `Est-ce que le confort et la sécurité viennent pour toi de la prédictibilité et de la continuité avec le passé, bien plus que de la nouveauté en elle-même ?`},
    {type: "Si", question: `Préfères-tu un système existant et familier plutôt que de le remplacer par un nouveau système non testé, même potentiellement meilleur ?`},

    {type: "Se", question: `Es-tu particulièrement attentif(ve) aux détails physiques et esthétiques de ton environnement immédiat (lumière, sons, textures, mouvements) ?`},
    {type: "Se", question: `As-tu un fort désir d'expérimenter physiquement les choses (les toucher, les tester, les utiliser) pour vraiment les comprendre, plutôt que d'en parler ou d'y réfléchir longuement ?`},
    {type: "Se", question: `Es-tu naturellement doué(e) pour réagir avec rapidité et adaptabilité aux changements ou opportunités qui surviennent dans l'instant présent ?`},
    {type: "Se", question: `Le plaisir et l'énergie te viennent-ils souvent d'activités physiques, d'expériences intenses ou d'une immersion totale dans "l'ici et maintenant" ?`},
    {type: "Se", question: `Préfères-tu un style d'apprentissage kinesthésique ou basé sur la pratique directe, où tu peux manipuler et agir, plutôt que théorique ou abstrait ?`},

    {type: "Ne", question: `Face à un objet ou une idée, ton esprit saute-t-il spontanément à "à quoi cela pourrait-il servir d'autre ?" ou "à quoi cela me fait-il penser ?", générant des associations parfois surprenantes ?`},
    {type: "Ne", question: `Es-tu plus stimulé(e) par le champ des possibilités ouvertes (même irréalistes) que par la mise en œuvre rigoureuse d'une seule d'entre elles ?`},
    {type: "Ne", question: `Dans une discussion, as-tu tendance à rebondir sur les idées des autres pour en proposer des variations, des alternatives ou en explorer les implications, plutôt que de les approfondir en profondeur ?`},
    {type: "Ne", question: `aime tu les projets ou les phases de pensée où tout est encore à imaginer et à connecter ?`},
    {type: "Ne", question: `Ton processus de génération d'idées ressemble-t-il à explorer les branches d'un arbre qui se divise à l'infini ?`},

    {type: "Ni", question: `Lorsque vous avez une intuition très forte sur quelque chose, avez-vous tendance à lui faire confiance même si vous manquez de preuves concrètes pour l'étayer ?`},
    {type: "Ni", question: `Est-ce que vous arrivez souvent à "voir" la solution d'un problème dans votre tête avant de pouvoir l'expliquer logiquement à quelqu'un ?`},
    {type: "Ni", question: `Si les données statistiques vont à l'encontre de votre instinct, remettez-vous plus souvent les données en question que votre instinct ?`},
    {type: "Ni", question: `Pour vous, est-ce que "comprendre" un concept, c'est surtout réussir à en former une image ou une vision claire dans votre esprit ?`},
    {type: "Ni", question: `Préférez-vous avoir une vue d'ensemble approximative mais cohérente d'un sujet plutôt qu'une liste détaillée de faits sans liens évidents ?`},
    
    {type: 'Te', question: `Lorsque tu évalues une idée ou une méthode, le critère décisif est-il souvent : "Est-ce que ça marche concrètement et produit un résultat vérifiable ?"`},
    {type: 'Te', question: `Es-tu naturellement porté(e) à chercher la cause logique et tangible d'un problème pour le résoudre ?`},
    {type: 'Te', question: `As-tu tendance à optimiser spontanément les processus (itinéraires, organisation, méthodes de travail) autour de toi pour en améliorer l'efficacité et la productivité, même dans la vie quotidienne ?`},
    {type: 'Te', question: `Est-ce que l'inaction, l'inefficacité flagrante ou le manque de résultat concret te causent un sentiment de frustration ou d'ennui plus fort et plus immédiat que les simples contradictions logiques ?`},
    {type: 'Te', question: `Accordes tu peu de valeur à une idée si ses applications pratiques ou ses preuves tangibles dans le monde réel ne sont pas claires ou facilement démontrables ?`},

    {type: 'Ti', question: `Avant d'adopter une opinion ou une explication, éprouves tu le besoin de la démonter mentalement pour vérifier la solidité et la cohérence de chaque partie du raisonnement ?`},
    {type: 'Ti', question: `Le plaisir de comprendre "comment et pourquoi ça marche" est-il, pour toi, aussi satisfaisant (voire plus) que d'obtenir un résultat pratique ?`},
    {type: 'Ti', question: `Passes-tu du temps à affiner tes propres définitions internes des concepts pour qu'elles soient parfaitement précises et cohérentes dans ton système de pensée personnel ?`},
    {type: 'Ti', question: `Une contradiction logique interne dans un argument ou une théorie te semble-t-elle être une faille inacceptable, même si l'idée "fonctionne" en pratique ?`},
    {type: 'Ti', question: `Dans un débat, ton objectif premier est-il souvent de tester et d'affiner la solidité de ton propre modèle de pensée, plutôt que de convaincre l'autre ou d'atteindre un consensus ?`},

    {type: 'Fe', question: `Dans un groupe, es-tu naturellement conscient(e) de la position et du statut relatif des uns et des autres, ainsi que des non-dits qui circulent entre les personnes ?`},
    {type: 'Fe', question: `Pour prendre une décision, le regard et les réactions potentielles des personnes concernées pèsent ils souvent dans ta balance, au même titre (voir +) que les faits bruts ou ta propre opinion ?`},
    {type: 'Fe', question: `Te surprends tu à moduler ton attitude, ton langage ou tes sujets de conversation en fonction de la personne à qui tu t'adresses, pour que l'échange "passe" mieux ?`},
    {type: 'Fe', question: `Lorsqu'un conflit éclate autour de toi, ton attention se porte-t-elle d'abord sur comment la dispute affecte le climat du groupe et les relations entre les personnes, plutôt que sur le fond du désaccord ?`},
    {type: 'Fe', question: `As-tu tendance à absorber ou refléter l'émotion ambiante d'une pièce (comme la tension ou la joie collective), au point qu'elle influence ton propre état sans que tu le veuilles toujours ?`},

    {type: 'Fi', question: `Prends-tu la plupart de tes décisions importantes en les "sondant" intérieurement pour vérifier si elles résonnent avec ce que tu es au plus profond et tes convictions personnelles ?`},
    {type: 'Fi', question: `Est-ce que ton sens du "bien" et du "mal", ou du "juste" et de l'"injuste", est principalement guidé par un code éthique interne personnel, parfois distinct des conventions sociales ?`},
    {type: 'Fi', question: `Pour toi, l'identité personnelle ("qui je suis") se définit elle davantage par un noyau interne de valeurs et de sentiments authentiques que par les rôles que tu joues ou ton appartenance à des groupes ?`},
    {type: 'Fi', question: `Te sens-tu facilement froissé(e) ou en dissonance lorsque tu dois agir d'une manière qui te semble en contradiction avec tes valeurs, même si cela est socialement attendu ?`},
    {type: 'Fi', question: `L'authenticité (être fidèle à ce que tu ressens vraiment) est-elle pour toi une préoccupation centrale, parfois plus importante que le maintien de l'harmonie du groupe ?`},
]


