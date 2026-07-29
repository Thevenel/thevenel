export const translations = {
  en: {
    meta: {
      title: 'Thevenel Joazard | Software Engineer',
      description: 'Thevenel Joazard is a software engineer apprentice building backend applications, data-processing workflows, and automation tools with Java and Python.'
    },
    nav: { projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact', resume: 'Résumé' },
    hero: {
      eyebrow: 'Software Engineer Apprentice · Engineering Student',
      title: 'I build reliable backend and data systems.',
      description: 'I develop enterprise applications, batch workflows, and automation tools with Java, Spring Boot, Python, and SQL.',
      projectsCta: 'View selected projects',
      resumeCta: 'Download résumé',
      availability: 'Preparing applications for international Software Engineering internships in 2027.'
    },
    proof: { automation: 'manual workflow automated at Thales', coverage: 'automated test coverage', languages: 'languages spoken' },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects that show how I engineer software',
      description: 'A focused selection covering algorithms, systems programming, backend architecture, and product workflows.'
    },
    experience: { eyebrow: 'Professional experience', title: 'Building and modernizing real systems' },
    skills: { eyebrow: 'Technical foundation', title: 'Tools supported by practical experience' },
    about: {
      eyebrow: 'About',
      title: 'Engineering across systems, people, and cultures',
      paragraph1: 'I enjoy understanding software at different levels, from instruction execution and memory state to enterprise backend applications and data-processing systems.',
      paragraph2: 'Before computer science, I studied educational sciences, sociology, anthropology, and didactics. That background still shapes how I communicate, document systems, and design software for real users.',
      paragraph3: 'My academic and professional journey includes Haiti, the Dominican Republic, France, Germany, and Italy. I speak five languages and expect to graduate from IMT Nord Europe in September 2028.'
    },
    community: {
      title: 'Community and knowledge sharing',
      python: 'Contributor to French translations of Python documentation.',
      pycon: 'Presented a practical Wagtail tutorial at PyConFR.',
      youtube: 'Create technology education in Haitian Creole for an audience of about 4,000 subscribers.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s discuss software engineering and international opportunities.',
      description: 'The fastest way to reach me is by email or LinkedIn.',
      resume: 'Download résumé'
    },
    footer: { location: 'Lille, France · Built with Parcel and Bootstrap' }
  },
  fr: {
    meta: {
      title: 'Thevenel Joazard | Ingénieur logiciel',
      description: 'Thevenel Joazard est ingénieur logiciel en alternance et développe des applications backend, des traitements de données et des outils d’automatisation avec Java et Python.'
    },
    nav: { projects: 'Projets', experience: 'Expérience', about: 'À propos', contact: 'Contact', resume: 'CV' },
    hero: {
      eyebrow: 'Ingénieur logiciel en alternance · Étudiant ingénieur',
      title: 'Je développe des systèmes backend et de données fiables.',
      description: 'Je conçois des applications d’entreprise, des traitements batch et des outils d’automatisation avec Java, Spring Boot, Python et SQL.',
      projectsCta: 'Découvrir mes projets',
      resumeCta: 'Télécharger mon CV',
      availability: 'Préparation de candidatures à des stages internationaux en génie logiciel pour 2027.'
    },
    proof: { automation: 'processus manuel automatisé chez Thales', coverage: 'de couverture de tests automatisés', languages: 'langues parlées' },
    projects: {
      eyebrow: 'Travaux sélectionnés',
      title: 'Des projets qui illustrent ma manière de concevoir des logiciels',
      description: 'Une sélection centrée sur l’algorithmique, la programmation système, l’architecture backend et les workflows métier.'
    },
    experience: { eyebrow: 'Expérience professionnelle', title: 'Développer et moderniser des systèmes réels' },
    skills: { eyebrow: 'Fondements techniques', title: 'Des outils soutenus par une expérience pratique' },
    about: {
      eyebrow: 'À propos',
      title: 'Concevoir des systèmes en comprenant aussi les personnes et les contextes',
      paragraph1: 'J’aime comprendre les logiciels à différents niveaux, de l’exécution des instructions et de la gestion de la mémoire jusqu’aux applications backend d’entreprise et aux systèmes de traitement de données.',
      paragraph2: 'Avant l’informatique, j’ai étudié les sciences de l’éducation, la sociologie, l’anthropologie et la didactique. Ce parcours influence encore ma manière de communiquer, de documenter les systèmes et de concevoir des logiciels pour des utilisateurs réels.',
      paragraph3: 'Mon parcours académique et professionnel comprend Haïti, la République dominicaine, la France, l’Allemagne et l’Italie. Je parle cinq langues et mon diplôme d’ingénieur à IMT Nord Europe est prévu en septembre 2028.'
    },
    community: {
      title: 'Communauté et partage de connaissances',
      python: 'Contribution à la traduction française de la documentation Python.',
      pycon: 'Présentation d’un tutoriel pratique consacré à Wagtail lors de PyConFR.',
      youtube: 'Création de contenu technologique en créole haïtien pour une audience d’environ 4 000 abonnés.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Échangeons autour du génie logiciel et des opportunités internationales.',
      description: 'Les moyens les plus directs pour me contacter sont l’e-mail et LinkedIn.',
      resume: 'Télécharger mon CV'
    },
    footer: { location: 'Lille, France · Développé avec Parcel et Bootstrap' }
  }
};

export const projects = {
  en: [
    {
      title: 'Java Ray Tracer',
      subtitle: 'Algorithms and computer graphics',
      description: 'Built a 3D rendering engine from scratch with scene parsing, lighting, intersections, shadows, reflections, Lambert and Blinn-Phong shading, BVH acceleration, and image-based regression testing.',
      technologies: ['Java', 'JavaFX', 'JUnit', 'BVH'],
      status: 'Academic project'
    },
    {
      title: 'RISC-V Emulator',
      subtitle: 'Systems programming in Rust',
      description: 'Implemented RV32I binary loading, instruction decoding, step-by-step execution, program-counter management, registers, memory state, structured error handling, and automated tests.',
      technologies: ['Rust', 'RISC-V', 'Computer Architecture', 'Testing'],
      status: 'Academic project'
    },
    {
      title: 'GachaGame Microservices',
      subtitle: 'Distributed backend architecture',
      description: 'Designed authentication and player services in a four-person team using REST APIs, separate PostgreSQL databases, OpenFeign communication, domain rules, and Docker orchestration.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      status: 'Team project'
    },
    {
      title: 'Student Management System',
      subtitle: 'Workflow and access-control design',
      description: 'Built a Django MVP with admission workflows, decision history, automatic student-record creation, identifier generation, and role-based access control.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'RBAC'],
      status: 'Private MVP'
    }
  ],
  fr: [
    {
      title: 'Ray Tracer en Java',
      subtitle: 'Algorithmique et informatique graphique',
      description: 'Développement intégral d’un moteur de rendu 3D avec parsing de scènes, éclairage, intersections, ombres, réflexions, modèles de Lambert et Blinn-Phong, accélération BVH et tests de régression par comparaison d’images.',
      technologies: ['Java', 'JavaFX', 'JUnit', 'BVH'],
      status: 'Projet académique'
    },
    {
      title: 'Émulateur RISC-V',
      subtitle: 'Programmation système en Rust',
      description: 'Implémentation du chargement de binaires RV32I, du décodage d’instructions, de l’exécution pas à pas, du compteur ordinal, des registres, de la mémoire, de la gestion structurée des erreurs et de tests automatisés.',
      technologies: ['Rust', 'RISC-V', 'Architecture', 'Tests'],
      status: 'Projet académique'
    },
    {
      title: 'GachaGame Microservices',
      subtitle: 'Architecture backend distribuée',
      description: 'Conception en équipe de quatre personnes de services d’authentification et de gestion des joueurs avec API REST, bases PostgreSQL séparées, communication OpenFeign, règles métier et orchestration Docker.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      status: 'Projet en équipe'
    },
    {
      title: 'Student Management System',
      subtitle: 'Conception de workflows et de contrôles d’accès',
      description: 'Développement d’un MVP Django avec workflow d’admission, historique des décisions, création automatique des dossiers étudiants, génération d’identifiants et contrôle d’accès par rôles.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'RBAC'],
      status: 'MVP privé'
    }
  ]
};

export const experiences = {
  en: [
    {
      role: 'Software Engineer Apprentice',
      company: 'Malakoff Humanis',
      date: 'Sep 2025 – Present',
      location: 'Guyancourt, France',
      bullets: [
        'Develop and maintain Java 21 and Spring Batch workflows using reader, processor, writer, and decider components.',
        'Deliver database and functional enhancements for reporting, operational monitoring, and communication workflows.',
        'Contribute to legacy-system modernization, SQL and MariaDB changes, incident analysis, and technical documentation.'
      ]
    },
    {
      role: 'DevSecOps Intern',
      company: 'Thales',
      date: 'Mar 2025 – Jun 2025',
      location: 'Lambersart, France',
      bullets: [
        'Built a Python tool delivered as a CLI, FastAPI REST API, and reusable package for firewall configuration matrices.',
        'Reduced an approximately five-day manual process to under 2.5 seconds.',
        'Achieved 84% automated test coverage, a Pylint score of 9.70/10, and zero Bandit findings.'
      ]
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Extramus.eu',
      date: 'May 2023 – Sep 2023',
      location: 'Terranova di Sibari, Italy',
      bullets: [
        'Developed a multilingual reservation application with React and a Laravel REST API.',
        'Implemented booking workflows, authentication, user roles, and access control.',
        'Contributed to requirements, database modelling, and multilingual technical documentation.'
      ]
    }
  ],
  fr: [
    {
      role: 'Ingénieur d’études et développement en alternance',
      company: 'Malakoff Humanis',
      date: 'Sept. 2025 – Aujourd’hui',
      location: 'Guyancourt, France',
      bullets: [
        'Développement et maintenance de traitements Java 21 et Spring Batch reposant sur des composants reader, processor, writer et decider.',
        'Livraison d’évolutions de bases de données et de fonctionnalités pour des workflows de reporting, de supervision opérationnelle et de communication.',
        'Contribution à la modernisation de systèmes legacy, aux évolutions SQL et MariaDB, à l’analyse d’incidents et à la documentation technique.'
      ]
    },
    {
      role: 'Stagiaire DevSecOps',
      company: 'Thales',
      date: 'Mars 2025 – Juin 2025',
      location: 'Lambersart, France',
      bullets: [
        'Développement d’un outil Python distribué sous forme de CLI, d’API REST FastAPI et de package réutilisable pour les matrices de configuration pare-feu.',
        'Réduction d’un processus manuel d’environ cinq jours à moins de 2,5 secondes.',
        'Obtention de 84 % de couverture de tests automatisés, d’un score Pylint de 9,70/10 et d’aucun problème détecté par Bandit.'
      ]
    },
    {
      role: 'Développeur Full-Stack stagiaire',
      company: 'Extramus.eu',
      date: 'Mai 2023 – Sept. 2023',
      location: 'Terranova di Sibari, Italie',
      bullets: [
        'Développement d’une application multilingue de réservation avec React et une API REST Laravel.',
        'Implémentation des workflows de réservation, de l’authentification, des rôles et du contrôle d’accès.',
        'Participation à l’analyse des besoins, à la modélisation de la base de données et à la documentation technique multilingue.'
      ]
    }
  ]
};

export const skills = {
  en: [
    { title: 'Programming', items: ['Java', 'Python', 'Rust', 'JavaScript / TypeScript', 'SQL', 'Bash'] },
    { title: 'Backend and data', items: ['Spring Boot', 'Spring Batch', 'FastAPI', 'Django', 'PostgreSQL', 'MariaDB'] },
    { title: 'Software engineering', items: ['Data structures', 'Algorithms', 'Object-oriented design', 'REST APIs', 'Microservices', 'Automated testing'] },
    { title: 'Engineering tools', items: ['Git', 'Linux', 'Docker', 'Jenkins', 'SonarQube', 'JUnit / pytest'] }
  ],
  fr: [
    { title: 'Programmation', items: ['Java', 'Python', 'Rust', 'JavaScript / TypeScript', 'SQL', 'Bash'] },
    { title: 'Backend et données', items: ['Spring Boot', 'Spring Batch', 'FastAPI', 'Django', 'PostgreSQL', 'MariaDB'] },
    { title: 'Génie logiciel', items: ['Structures de données', 'Algorithmique', 'Conception orientée objet', 'API REST', 'Microservices', 'Tests automatisés'] },
    { title: 'Outils d’ingénierie', items: ['Git', 'Linux', 'Docker', 'Jenkins', 'SonarQube', 'JUnit / pytest'] }
  ]
};
