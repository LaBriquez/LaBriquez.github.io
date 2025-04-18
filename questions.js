let questions = [
    {type: "Se", question: "Vous trouvez-vous souvent en quête d'expériences stimulantes et nouvelles ?"},
    {type: "Se", question: "Prenez-vous plaisir à être impliqué dans des activités physiques qui sollicitent vos sens ?"},
    {type: "Se", question: "Êtes-vous souvent attiré par ce qui se passe ici et maintenant ?"},
    {type: "Se", question: "Avez-vous tendance à agir rapidement en fonction de ce que vous voyez, entendez ou ressentez autour de vous ?"},
    {type: "Se", question: "Lorsque vous interagissez avec votre environnement, ressentez-vous un fort besoin de toucher et d'explorer directement ?"},
    {type: "Se", question: "Est-ce que les détails et les aspects concrets de votre environnement captent immédiatement votre attention ?"},
    {type: "Se", question: "Vous vous sentez plus vivant lorsque vous êtes activement engagé dans le monde extérieur ?"},
    {type: "Si", question: "Trouvez-vous que vous préférez faire confiance à des méthodes éprouvées basées sur vos expériences passées ?"},
    {type: "Si", question: "Aimez-vous vous remémorer des souvenirs en détail et ressentir les émotions qu'ils évoquent ?"},
    {type: "Si", question: "Vous appuyez-vous souvent sur des routines bien établies pour guider vos actions ?"},
    {type: "Si", question: "Préférez-vous vous référer à ce que vous connaissez déjà avant d'essayer quelque chose de nouveau ?"},
    {type: "Si", question: "Avez-vous un fort sens de ce qui est correct ou approprié dans une situation en fonction de ce que vous avez appris auparavant ?"},
    {type: "Si", question: "Vous sentez-vous à l'aise lorsque vous pouvez vous appuyer sur vos souvenirs pour naviguer dans de nouvelles situations ?"},
    {type: "Si", question: "Tenez-vous à préserver vos habitudes ?"},
    {type: "Ne", question: "Vous arrive-t-il de voir immédiatement plusieurs possibilités ou alternatives dans une situation donnée ?"},
    {type: "Ne", question: "Aimez-vous brainstormer ou générer des idées nouvelles et originales ?"},
    {type: "Ne", question: "Vous retrouvez-vous souvent en train de relier des idées apparemment non liées ?"},
    {type: "Ne", question: "Vous sentez-vous stimulé par la découverte de nouvelles idées et concepts qui vous mènent à des solutions créatives ?"},
    {type: "Ne", question: "Trouvez-vous que votre esprit saute souvent d'une idée à une autre, connectant des points de manière imaginative ?"},
    {type: "Ne", question: "Aimez-vous explorer les potentialités plutôt que de vous limiter à ce qui est évident ou concret ?"},
    {type: "Ne", question: "Prenez-vous du plaisir à envisager différentes perspectives et scénarios simultanément ?"},
    {type: "Ni", question: "Vous arrive-t-il souvent d'avoir une vision claire de la direction que vous souhaitez prendre à long terme ?"},
    {type: "Ni", question: "Avez-vous l'impression de comprendre intuitivement le sens profond des événements ou situations ?"},
    {type: "Ni", question: "Vous trouvez-vous attiré par des concepts ou des idées abstraites que vous voulez approfondir ?"},
    {type: "Ni", question: "Ressentez-vous une forte confiance dans vos intuitions internes, même si elles ne sont pas toujours explicables ?"},
    {type: "Ni", question: "Prenez-vous plaisir à élaborer des théories complexes et des schémas mentaux ?"},
    {type: "Ni", question: "Vous arrive-t-il souvent de chercher à comprendre les motivations profondes des autres ou des événements ?"},
    {type: "Ni", question: "Pensez-vous souvent à l'avenir et aux possibilités que vous pourriez explorer ?"},
    {type: "Te", question: "Vous sentez-vous motivé à organiser les choses pour qu'elles soient plus efficaces et productives ?"},
    {type: "Te", question: "Aimez-vous prendre des décisions rapidement en vous basant sur des faits objectifs ?"},
    {type: "Te", question: "Vous trouvez-vous souvent à vouloir structurer et planifier les étapes nécessaires pour atteindre un objectif ?"},
    {type: "Te", question: "Aimez-vous donner des instructions ou conseils pour aider les autres à être plus efficaces ?"},
    {type: "Te", question: "Trouvez-vous que vous prenez facilement les commandes dans les situations qui nécessitent une organisation ?"},
    {type: "Te", question: "Appréciez-vous fixer des objectifs clairs et mesurer vos progrès de manière tangible ?"},
    {type: "Te", question: "Aimez-vous résoudre les problèmes en vous basant sur des données factuelles et objectives ?"},
    {type: "Ti", question: "Avez-vous une tendance à analyser les situations en profondeur pour en comprendre les mécanismes sous-jacents ?"},
    {type: "Ti", question: "Vous appuyez-vous sur des principes logiques internes pour prendre des décisions, même si elles ne sont pas populaires ?"},
    {type: "Ti", question: "Avez-vous un fort besoin de cohérence et de clarté dans vos idées et croyances ?"},
    {type: "Ti", question: "Aimez-vous décomposer des problèmes complexes en éléments plus simples et compréhensibles ?"},
    {type: "Ti", question: "Ressentez-vous une satisfaction personnelle lorsque vous trouvez des solutions logiques et bien raisonnées ?"},
    {type: "Ti", question: "Vous sentez-vous souvent concentré sur le \"pourquoi\" des choses, en cherchant à comprendre leur fonctionnement ?"},
    {type: "Ti", question: "Avez-vous une forte préférence pour des décisions qui s'accordent avec vos propres modèles de pensée logique ?"},
    {type: "Fe", question: "Aimez-vous vous assurer que les autres se sentent bien et sont émotionnellement à l'aise ?"},
    {type: "Fe", question: "Trouvez-vous important de maintenir l'harmonie et d'éviter les conflits au sein de votre entourage ?"},
    {type: "Fe", question: "Vous retrouvez-vous souvent à prendre des décisions basées sur les besoins et les désirs des autres ?"},
    {type: "Fe", question: "Avez-vous tendance à exprimer ouvertement vos émotions et à vous soucier des réactions des autres ?"},
    {type: "Fe", question: "Vous arrive-t-il souvent d'agir pour soutenir ou aider les autres dans leurs difficultés ?"},
    {type: "Fe", question: "Aimez-vous construire des relations chaleureuses et sincères ?"},
    {type: "Fe", question: "Prenez-vous du plaisir à rassemblé les gens et favorisé l'harmonie ?"},
    {type: "Fi", question: "Prenez-vous souvent des décisions en fonction de vos valeurs personnelles profondes ?"},
    {type: "Fi", question: "Vous arrive-t-il de ressentir fortement ce qui est juste ou injuste en fonction de vos propres standards ?"},
    {type: "Fi", question: "Trouvez-vous important de rester fidèle à vous-même, même si cela entre en conflit avec l'avis des autres ?"},
    {type: "Fi", question: "Vous appuyez-vous souvent sur vos convictions personnelles pour évaluer une situation ?"},
    {type: "Fi", question: "Avez-vous une forte préférence pour préserver votre intégrité emotionel dans vos actions quotidiennes ?"},
    {type: "Fi", question: "Trouvez-vous que vous ressentez intensément vos émotions, mais que vous les gardez souvent pour vous-même ?"},
    {type: "Fi", question: "Vous arrive-t-il de prendre vos distances face à des situations qui contredisent vos valeurs personnelles ?"},
]