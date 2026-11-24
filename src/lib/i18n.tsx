import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

export type LanguageCode = "en" | "es" | "fr" | "de" | "zh" | "ja" | "ar" | "pt" | "it" | "ru";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir?: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "zh", name: "Chinese", nativeName: "中文 (简体)", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇦🇪", dir: "rtl" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷", dir: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
];

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.practiceAreas": "Practice Areas",
    "nav.attorneys": "Attorneys",
    "nav.ourFirm": "Our Firm",
    "nav.insights": "Insights",
    "nav.payOnline": "Pay Online",
    "nav.assessMatter": "Assess Matter",
    "nav.contact": "Contact",
    "nav.clientPortal": "Client Portal",
    "tagline.counsel": "COUNSEL",

    // Hero
    "hero.eyebrow": "VANTAGE HALL COUNSEL · HIGH-STAKES ADVOCACY",
    "hero.headline": "Decisive counsel for matters of enduring consequence.",
    "hero.subhead": "When enterprise stability, transformative transactions, or critical reputations hang in the balance, Vantage Hall delivers rigorous advocacy and discreet fiduciary counsel. We represent boards, private funds, and leadership teams with unyielding focus.",
    "hero.cta.assess": "Assess Your Legal Matter",
    "hero.cta.consult": "Request Confidential Consultation",
    "hero.cta.portal": "Client Payment Portal",

    // Stats
    "stats.volume": "$25B+",
    "stats.volume.label": "Transaction & Advisory Volume",
    "stats.trial": "94%",
    "stats.trial.label": "Favorable Trial & Dispute Record",
    "stats.exp": "35+",
    "stats.exp.label": "Years Senior Partner Experience",
    "stats.counsel": "100%",
    "stats.counsel.label": "Partner-Led Direct Counsel",

    // Lawyers Section
    "lawyers.eyebrow": "Senior Leadership & Trial Counsel",
    "lawyers.title": "Direct partner advocacy. Proven judgment.",
    "lawyers.desc": "We reject the volume-firm model of delegating critical decisions to junior associate pools. Every matter is personally strategized and executed by senior partners with battle-tested courtroom and boardroom records.",
    "lawyers.viewAll": "View All Firm Attorneys",
    "lawyers.highlight": "Track Record Highlight",
    "lawyers.fullProfile": "Full Profile",
    "lawyers.inquiry": "Direct Inquiry",

    // Practices
    "practices.eyebrow": "Disciplined Legal Capabilities",
    "practices.title": "Comprehensive counsel across commercial disciplines",
    "practices.desc": "We structure our practice around the critical lifecycle events of businesses, institutions, and family offices. Each practice area operates under senior partner direction with unified strategic oversight.",
    "practices.explore": "Explore Practice Scope",
    "practices.browseAll": "Browse All 10 Practice Disciplines →",

    // Standard
    "standard.eyebrow": "The Vantage Standard",
    "standard.title": "Why leadership trusts our counsel when everything is on the line.",
    "standard.desc": "In high-stakes legal matters, conventional firm incentives often lead to bloated teams and generic memorandums. Vantage Hall operates under an uncompromising boutique model built for velocity, clarity, and accountability.",
    "standard.p1.title": "Direct Senior Oversight",
    "standard.p1.desc": "Your primary contact is the partner authoring your strategy, not an intermediary.",
    "standard.p2.title": "Commercially Grounded Legal Strategy",
    "standard.p2.desc": "We align legal defense with enterprise balance sheets and commercial timelines.",
    "standard.p3.title": "Absolute Institutional Discretion",
    "standard.p3.desc": "Stringent information barriers and confidential handling for reputation-sensitive matters.",
    "standard.card1.title": "Fiduciary Rigor",
    "standard.card1.desc": "We deliver candid assessments early, advising clients when to litigate fiercely and when to execute surgical settlements.",
    "standard.card2.title": "Rapid Response Agility",
    "standard.card2.desc": "When temporary restraining orders, regulatory subpoenas, or hostile moves emerge, our response team is deployed within hours.",
    "standard.card3.title": "Trial-Ready Leverage",
    "standard.card3.desc": "Our courtroom readiness delivers tangible settlement leverage when opposing parties know counsel will go to verdict.",
    "standard.card4.title": "Transparent Billing",
    "standard.card4.desc": "No opaque billing or surprise allocations. We offer structured phase estimates and regular fiduciary accountability.",

    // Testimonials
    "impact.eyebrow": "Client Trust & Advisory Impact",
    "impact.title": "Trusted by corporate boards, fund managers, and private clients",
    "impact.desc": "Representative feedback from leadership teams and institutional general counsels.",

    // Consultation CTA
    "cta.badge": "Confidential Consultation",
    "cta.title": "When the stakes require experienced counsel.",
    "cta.desc": "Whether you are preparing for a transformative transaction, confronting complex litigation, or conducting an internal inquiry, our partners are ready to evaluate your objectives under strict confidentiality.",
    "cta.assess": "Assess Your Matter",
    "cta.speak": "Speak With a Partner",

    // Footer
    "footer.desc": "Strategic legal counsel for enterprise leadership, private capital sponsors, and institutional clients navigating complex transactions and disputes.",
    "footer.quick": "Quick Links",
    "footer.practices": "Practice Areas",
    "footer.services": "Client Services",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. All Rights Reserved.",
    "footer.disclaimer": "Attorney Advertising. Prior results do not guarantee a similar outcome.",
  },

  es: {
    "nav.home": "Inicio",
    "nav.practiceAreas": "Áreas de Práctica",
    "nav.attorneys": "Abogados",
    "nav.ourFirm": "Nuestra Firma",
    "nav.insights": "Perspectivas",
    "nav.payOnline": "Pagar en Línea",
    "nav.assessMatter": "Evaluar Caso",
    "nav.contact": "Contacto",
    "nav.clientPortal": "Portal de Clientes",
    "tagline.counsel": "ABOGADOS",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · LITIGIOS DE ALTO IMPACTO",
    "hero.headline": "Asesoramiento decisivo para asuntos de trascendencia crítica.",
    "hero.subhead": "Cuando la estabilidad corporativa, transacciones transformadoras o la reputación están en juego, Vantage Hall brinda una defensa rigurosa y asesoramiento fiduciario discreto.",
    "hero.cta.assess": "Evalúe su Asunto Legal",
    "hero.cta.consult": "Solicitar Consulta Confidencial",
    "hero.cta.portal": "Portal de Pagos",

    "stats.volume": "+$25 mil M",
    "stats.volume.label": "Volumen en Transacciones y Asesoría",
    "stats.trial": "94%",
    "stats.trial.label": "Resolución Favorable en Juicios",
    "stats.exp": "+35",
    "stats.exp.label": "Años de Experiencia de Socios",
    "stats.counsel": "100%",
    "stats.counsel.label": "Asesoría Directa por Socios",

    "lawyers.eyebrow": "Socios Principales y Litigantes",
    "lawyers.title": "Defensa directa por socios. Juicio comprobado.",
    "lawyers.desc": "Rechazamos el modelo de delegar decisiones cruciales a abogados novatos. Cada asunto es dirigido directamente por socios de trayectoria contrastada.",
    "lawyers.viewAll": "Ver Todos los Abogados",
    "lawyers.highlight": "Hito Destacado",
    "lawyers.fullProfile": "Perfil Completo",
    "lawyers.inquiry": "Consulta Directa",

    "practices.eyebrow": "Capacidades Jurídicas",
    "practices.title": "Asesoramiento integral en disciplinas comerciales",
    "practices.desc": "Estructuramos nuestras prácticas en torno a los eventos decisivos de empresas, fondos e instituciones.",
    "practices.explore": "Explorar Práctica",
    "practices.browseAll": "Ver las 10 Áreas de Práctica →",

    "standard.eyebrow": "El Estándar Vantage",
    "standard.title": "Por qué los líderes confían en nosotros cuando todo está en juego.",
    "standard.desc": "Operamos bajo un modelo de alta exclusividad diseñado para velocidad, claridad y máxima rendición de cuentas.",
    "standard.p1.title": "Supervisión Directa de Socios",
    "standard.p1.desc": "Su contacto principal es el socio que define la estrategia, sin intermediarios.",
    "standard.p2.title": "Estrategia Legal y Comercial",
    "standard.p2.desc": "Alineamos la defensa jurídica con la viabilidad financiera y los objetivos corporativos.",
    "standard.p3.title": "Discreción Absoluta",
    "standard.p3.desc": "Protocolos estrictos de confidencialidad para asuntos de máxima sensibilidad.",
    "standard.card1.title": "Rigor Fiduciario",
    "standard.card1.desc": "Evaluaciones tempranas y honestas para litigar con firmeza o acordar acuerdos quirúrgicos.",
    "standard.card2.title": "Respuesta Rápida",
    "standard.card2.desc": "Despliegue inmediato ante medidas cautelares o investigaciones regulatorias imprevistas.",
    "standard.card3.title": "Ventaja en Juicio",
    "standard.card3.desc": "Nuestra preparación para juicio otorga ventajas decisivas en negociaciones previas.",
    "standard.card4.title": "Facturación Transparente",
    "standard.card4.desc": "Estimaciones por etapas sin cobros opacos ni sorpresas.",

    "impact.eyebrow": "Confianza de Clientes e Impacto",
    "impact.title": "De confianza para juntas directivas, fondos y clientes privados",
    "impact.desc": "Comentarios representativos de directores jurídicos y líderes empresariales.",

    "cta.badge": "Consulta Confidencial",
    "cta.title": "Cuando lo que está en juego exige asesoría experimentada.",
    "cta.desc": "Nuestros socios están preparados para evaluar sus objetivos bajo estricto secreto profesional.",
    "cta.assess": "Evalúe su Caso",
    "cta.speak": "Hable con un Socio",

    "footer.desc": "Asesoramiento legal estratégico para empresas, fondos de inversión y clientes institucionales.",
    "footer.quick": "Enlaces Rápidos",
    "footer.practices": "Áreas de Práctica",
    "footer.services": "Servicios para Clientes",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Todos los derechos reservados.",
    "footer.disclaimer": "Publicidad de abogados. Los resultados previos no garantizan un resultado similar.",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.practiceAreas": "Pôles d'Expertise",
    "nav.attorneys": "Avocats",
    "nav.ourFirm": "Le Cabinet",
    "nav.insights": "Analyses",
    "nav.payOnline": "Paiement en Ligne",
    "nav.assessMatter": "Évaluer un Dossier",
    "nav.contact": "Contact",
    "nav.clientPortal": "Espace Client",
    "tagline.counsel": "AVOCATS",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · AFFAIRES STRATÉGIQUES",
    "hero.headline": "Conseil décisif pour les dossiers à enjeux majeurs.",
    "hero.subhead": "Lorsque la pérennité d'entreprise ou des réputations critiques sont en jeu, Vantage Hall apporte une défense d'exception et une rigueur fiduciaire absolue.",
    "hero.cta.assess": "Évaluer Votre Dossier",
    "hero.cta.consult": "Demander une Consultation",
    "hero.cta.portal": "Portail de Paiement",

    "stats.volume": "+25 Md$",
    "stats.volume.label": "Volume de Transactions et Conseils",
    "stats.trial": "94%",
    "stats.trial.label": "Taux d'Issues Favorables au Tribunal",
    "stats.exp": "+35",
    "stats.exp.label": "Années d'Expérience Associés",
    "stats.counsel": "100%",
    "stats.counsel.label": "Intervention Directe des Associés",

    "lawyers.eyebrow": "Associés Dirigeants et Avocats Plaidants",
    "lawyers.title": "Représentation directe par les associés. Jugement éprouvé.",
    "lawyers.desc": "Nous refusons de déléguer les décisions stratégiques à des juristes juniors. Chaque dossier est mené directement par nos associés de renom.",
    "lawyers.viewAll": "Tous les Avocats",
    "lawyers.highlight": "Succès Remarquable",
    "lawyers.fullProfile": "Profil Complet",
    "lawyers.inquiry": "Demande Directe",

    "practices.eyebrow": "Compétences Juridiques",
    "practices.title": "Conseil complet dans toutes les disciplines commerciales",
    "practices.desc": "Nous organisons nos pôles d'expertise autour des étapes décisives des entreprises et fonds d'investissement.",
    "practices.explore": "Découvrir la Pratique",
    "practices.browseAll": "Consulter les 10 Disciplines →",

    "standard.eyebrow": "L'Exigence Vantage",
    "standard.title": "Pourquoi les dirigeants nous confient leurs affaires critiques.",
    "standard.desc": "Un modèle d'excellence réactif, fondé sur la rapidité d'exécution, la clarté et la loyauté fiduciaire.",
    "standard.p1.title": "Direction par les Associés",
    "standard.p1.desc": "Votre interlocuteur privilégié est l'associé qui pilote votre stratégie juridique.",
    "standard.p2.title": "Stratégie Juridique et Commerciale",
    "standard.p2.desc": "Nous alignons la défense juridique avec les réalités de votre bilan financier.",
    "standard.p3.title": "Discrétion Absolue",
    "standard.p3.desc": "Cloisonnement rigoureux de l'information pour les litiges hautement confidentiels.",
    "standard.card1.title": "Rigueur Fiduciaire",
    "standard.card1.desc": "Des avis limpides dès le départ : plaider avec force ou négocier un accord chirurgical.",
    "standard.card2.title": "Réactivité Immédiate",
    "standard.card2.desc": "Mobilisation d'urgence sous quelques heures en cas d'assignation ou de crise réglementaire.",
    "standard.card3.title": "Levier Procédural",
    "standard.card3.desc": "Notre préparation au procès confère un avantage déterminant lors des pourparlers.",
    "standard.card4.title": "Honoraires Transparents",
    "standard.card4.desc": "Engagements budgétaires clairs et forfaits par phases sans facturation opaque.",

    "impact.eyebrow": "Confiance et Notoriété",
    "impact.title": "Choisi par les conseils d'administration et fonds d'investissement",
    "impact.desc": "Témoignages de directeurs juridiques et dirigeants d'entreprises.",

    "cta.badge": "Consultation Confidentielle",
    "cta.title": "Quand les enjeux exigent une expérience confirmée.",
    "cta.desc": "Nos associés sont prêts à analyser vos objectifs dans le respect le plus strict du secret professionnel.",
    "cta.assess": "Évaluer Votre Dossier",
    "cta.speak": "Échanger avec un Associé",

    "footer.desc": "Conseil juridique de référence pour dirigeants d'entreprises et fonds d'investissement internationaux.",
    "footer.quick": "Liens Rapides",
    "footer.practices": "Pôles d'Expertise",
    "footer.services": "Espace Client",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Tous droits réservés.",
    "footer.disclaimer": "Publicité d'avocats. Les résultats antérieurs ne garantissent pas d'issue semblable.",
  },

  de: {
    "nav.home": "Startseite",
    "nav.practiceAreas": "Praxisfelder",
    "nav.attorneys": "Anwälte",
    "nav.ourFirm": "Kanzlei",
    "nav.insights": "Publikationen",
    "nav.payOnline": "Online-Zahlung",
    "nav.assessMatter": "Mandatsprüfung",
    "nav.contact": "Kontakt",
    "nav.clientPortal": "Mandantenportal",
    "tagline.counsel": "RECHTSANWÄLTE",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · HOCHRANGIGE MANDATE",
    "hero.headline": "Entscheidende Rechtsberatung für Angelegenheiten von größter Tragweite.",
    "hero.subhead": "Wenn Unternehmensfortbestand, strategische Transaktionen oder Reputationen auf dem Spiel stehen, garantiert Vantage Hall konsequente Vertretung und diskrete Betreuung.",
    "hero.cta.assess": "Mandat Evaluieren",
    "hero.cta.consult": "Vertrauliche Beratung Anfordern",
    "hero.cta.portal": "Mandanten-Zahlungsportal",

    "stats.volume": ">25 Mrd. $",
    "stats.volume.label": "Transaktions- und Beratungsvolumen",
    "stats.trial": "94%",
    "stats.trial.label": "Erfolgsquote in Streitverfahren",
    "stats.exp": "35+",
    "stats.exp.label": "Jahre Senior-Partner-Erfahrung",
    "stats.counsel": "100%",
    "stats.counsel.label": "Partnergeführte Direktberatung",

    "lawyers.eyebrow": "Kanzleiführung & Prozessanwälte",
    "lawyers.title": "Direkte Vertretung durch Partner. Bewährte Urteilskraft.",
    "lawyers.desc": "Wir delegieren maßgebliche Weichenstellungen nicht an Nachwuchsjuristen. Jedes Mandat wird von erfahrenen Partnern persönlich geführt.",
    "lawyers.viewAll": "Alle Kanzleianwälte",
    "lawyers.highlight": "Erfolgs-Highlight",
    "lawyers.fullProfile": "Vollständiges Profil",
    "lawyers.inquiry": "Direktanfrage",

    "practices.eyebrow": "Juristische Kernbereiche",
    "practices.title": "Umfassende Betreuung über alle Wirtschaftsdisziplinen",
    "practices.desc": "Strukturierte Beratung entlang aller Phasen von Unternehmen, Family Offices und institutionellen Investoren.",
    "practices.explore": "Praxisfeld Erkunden",
    "practices.browseAll": "Alle 10 Praxisfelder Anzeigen →",

    "standard.eyebrow": "Der Vantage-Standard",
    "standard.title": "Warum Unternehmenslenker auf uns setzen, wenn alles auf dem Spiel steht.",
    "standard.desc": "Konsequente Ausrichtung auf Schnelligkeit, Präzision und unbedingte Treuepflichten.",
    "standard.p1.title": "Senior-Partner-Führung",
    "standard.p1.desc": "Ihr Ansprechpartner ist der federführende Partner selbst.",
    "standard.p2.title": "Ökonomisch Fundierte Strategie",
    "standard.p2.desc": "Wir stimmen juristische Verteidigung auf Bilanzen und geschäftliche Ziele ab.",
    "standard.p3.title": "Absolute Vertraulichkeit",
    "standard.p3.desc": "Strenge Informationsbarrieren bei reputationssensiblen Angelegenheiten.",
    "standard.card1.title": "Fiduziarische Strenge",
    "standard.card1.desc": "Klare Einschätzungen: prozessieren mit voller Härte oder punktgenaue Einigungen.",
    "standard.card2.title": "Krisen-Reaktionszeit",
    "standard.card2.desc": "Sofortige Einsatzbereitschaft bei Eilanträgen und behördlichen Prüfungen.",
    "standard.card3.title": "Prozessstärke als Hebel",
    "standard.card3.desc": "Gerichtsfeste Vorbereitung verschafft spürbare Verhandlungsmacht.",
    "standard.card4.title": "Transparente Vergütung",
    "standard.card4.desc": "Verlässliche Phasenbudgets ohne undurchsichtige Überraschungen.",

    "impact.eyebrow": "Mandantenvertrauen",
    "impact.title": "Geschätzt von Aufsichtsräten, Fondsmanagern und Führungskräften",
    "impact.desc": "Erfahrungsberichte leitender Unternehmensjuristen.",

    "cta.badge": "Vertrauliche Erstberatung",
    "cta.title": "Wenn die Sachlage erfahrene Spitzenjuristen verlangt.",
    "cta.desc": "Unsere Partner prüfen Ihre Anliegen unter striktester anwaltlicher Verschwiegenheit.",
    "cta.assess": "Sachverhalt Einreichen",
    "cta.speak": "Partner Kontaktieren",

    "footer.desc": "Strategische Rechtsberatung für Unternehmensleitungen, Private-Equity-Investoren und Institutionen.",
    "footer.quick": "Schnellzugriff",
    "footer.practices": "Fachbereiche",
    "footer.services": "Mandantenservice",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Alle Rechte vorbehalten.",
    "footer.disclaimer": "Anwaltswerbung. Bisherige Ergebnisse garantieren keinen gleichartigen Ausgang.",
  },

  zh: {
    "nav.home": "首页",
    "nav.practiceAreas": "业务领域",
    "nav.attorneys": "合伙人律师",
    "nav.ourFirm": "关于律所",
    "nav.insights": "法律洞察",
    "nav.payOnline": "在线付款",
    "nav.assessMatter": "案件评估",
    "nav.contact": "联系我们",
    "nav.clientPortal": "客户专区",
    "tagline.counsel": "律师事务所",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · 关键重大法律事务",
    "hero.headline": "关乎深远影响的决胜法律顾问。",
    "hero.subhead": "当企业平稳、重大并购或高层声誉面临严峻考验时，Vantage Hall 律所为董事会、私募基金与领军企业提供严谨且高度保密的战略辩护与顾问支持。",
    "hero.cta.assess": "评估您的法律案件",
    "hero.cta.consult": "预约高层保密咨询",
    "hero.cta.portal": "客户付款门户",

    "stats.volume": "超250亿美元",
    "stats.volume.label": "交易与法律顾问总额",
    "stats.trial": "94%",
    "stats.trial.label": "重大诉讼胜诉与和解胜率",
    "stats.exp": "35+年",
    "stats.exp.label": "资深合伙人执业经验",
    "stats.counsel": "100%",
    "stats.counsel.label": "合伙人全程直接主办",

    "lawyers.eyebrow": "律所核心领导层与出庭顾问",
    "lawyers.title": "合伙人亲自主理 · 经受实战检验的战略决断",
    "lawyers.desc": "我们坚决拒绝将重大关键决策转包给初级律师。每一项重大委托均由具备顶尖法庭与商业谈判实绩的资深合伙人亲自主导把控。",
    "lawyers.viewAll": "查看全部律师团队",
    "lawyers.highlight": "关键实绩亮点",
    "lawyers.fullProfile": "完整履历",
    "lawyers.inquiry": "直接接洽",

    "practices.eyebrow": "全方位专业能力",
    "practices.title": "贯穿商事生命周期的综合法律执业",
    "practices.desc": "紧密围绕企业、金融机构和家族办公室的关键发展节点，由合伙人统一调度协同把关。",
    "practices.explore": "查看业务详情",
    "practices.browseAll": "浏览全部 10 项业务板块 →",

    "standard.eyebrow": "Vantage 执业准则",
    "standard.title": "为何领袖企业在事关存亡时坚决信任我们",
    "standard.desc": "摒弃传统大所冗长拖沓的流程，以敏捷响应、绝对保密和高度商业洞见赢得托付。",
    "standard.p1.title": "资深合伙人直接主办",
    "standard.p1.desc": "为您直接制定诉讼与交易战略的是决策合伙人本人，绝无中介层层转达。",
    "standard.p2.title": "高度商业契合的法律策略",
    "standard.p2.desc": "将法律攻防与客户的财务资产负债表及商业周期精准锚定。",
    "standard.p3.title": "极致的机构级保密",
    "standard.p3.desc": "设立严格的内部信息屏障，全力保护商业声誉与核心情报。",
    "standard.card1.title": "恪守信托严谨",
    "standard.card1.desc": "及早提供坦诚的胜诉评估，精准研判何时果断出击、何时精准和解。",
    "standard.card2.title": "闪电危机响应",
    "standard.card2.desc": "面临紧急临时禁令或监管调查时，专案团队数小时内全面进驻。",
    "standard.card3.title": "以庭审实力施加杠杆",
    "standard.card3.desc": "随时准备出庭辩论的硬实力，往往能在庭前谈判中锁定决定性优势。",
    "standard.card4.title": "账单透明透明",
    "standard.card4.desc": "分阶段费用透明预估，杜绝模糊收费与账单意外。",

    "impact.eyebrow": "客户信任与实务影响",
    "impact.title": "深受跨国企业董事会与基金合伙人的一致信赖",
    "impact.desc": "来自全球总法律顾问与企业高层的真实反馈。",

    "cta.badge": "绝密专案咨询",
    "cta.title": "当关乎全局的时刻需要真正老练的顾问力量。",
    "cta.desc": "无论是应对重大跨境收购、突发诉讼或是内部调查，我们的合伙人均可在最高保密级别下审视案件。",
    "cta.assess": "提交案件评估",
    "cta.speak": "直接对话资深合伙人",

    "footer.desc": "为领袖企业、私募股权基金与大型机构提供战略法律顾问与出庭辩护。",
    "footer.quick": "快捷入口",
    "footer.practices": "核心业务",
    "footer.services": "客户服务",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. 版权所有.",
    "footer.disclaimer": "律师广告提示：过往胜诉记录并不代表或保证未来案件的相同结果。",
  },

  ja: {
    "nav.home": "ホーム",
    "nav.practiceAreas": "取扱分野",
    "nav.attorneys": "所属弁護士",
    "nav.ourFirm": "事務所案内",
    "nav.insights": "リーガル考察",
    "nav.payOnline": "オンライン決済",
    "nav.assessMatter": "案件診断",
    "nav.contact": "お問い合わせ",
    "nav.clientPortal": "クライアントポータル",
    "tagline.counsel": "法律事務所",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · 重大局面におけるリーガル顧問",
    "hero.headline": "企業の存亡を分ける重大事案に、決定的なリーガルアドバイスを。",
    "hero.subhead": "企業の安定性、戦略的M&A、または重大な信用が問われる場面において、Vantage Hallは緻密な法廷弁護と絶対的な守秘義務に基づいた信託助言を提供します。",
    "hero.cta.assess": "案件の診断を始める",
    "hero.cta.consult": "機密相談を申し込む",
    "hero.cta.portal": "決済ポータル",

    "stats.volume": "250億ドル超",
    "stats.volume.label": "取引・助言案件総額",
    "stats.trial": "94%",
    "stats.trial.label": "勝訴および有利な和解率",
    "stats.exp": "35年以上",
    "stats.exp.label": "シニアパートナー実務経験",
    "stats.counsel": "100%",
    "stats.counsel.label": "パートナー直接担当制",

    "lawyers.eyebrow": "幹部パートナーおよび法廷弁護士",
    "lawyers.title": "パートナーによる直接弁護。実戦で培われた確かな判断力。",
    "lawyers.desc": "重大な法的判断を若手アソシエイトに丸投げする大手モデルを排し、実績あるパートナーが直接戦略を立案・指揮します。",
    "lawyers.viewAll": "所属弁護士一覧",
    "lawyers.highlight": "特筆すべき実績",
    "lawyers.fullProfile": "詳細経歴",
    "lawyers.inquiry": "直接問い合わせ",

    "practices.eyebrow": "専門分野",
    "practices.title": "企業活動の全領域を網羅する統括リーガルサービス",
    "practices.desc": "企業の創業・資金調達から大型M&A、紛争解決まで一貫したパートナー指揮体制で対応します。",
    "practices.explore": "分野の詳細を見る",
    "practices.browseAll": "全10専門分野を見る →",

    "standard.eyebrow": "Vantage スタンダード",
    "standard.title": "重大局面で最高経営層が当事務所を選ぶ理由",
    "standard.desc": "無駄な人員配置を排し、迅速性・明快性・高い説明責任に特化した洗練されたブティック体制。",
    "standard.p1.title": "パートナー直接統括",
    "standard.p1.desc": "戦略を立案するパートナー自身が直接クライアントの窓口となります。",
    "standard.p2.title": "事業財務に即した戦略",
    "standard.p2.desc": "法的リスクを企業の財務諸表や事業目標と有機的に連携させます。",
    "standard.p3.title": "絶対的な情報管理",
    "standard.p3.desc": "極めて秘匿性の高い事案に対し最高水準の情報障壁を構築します。",
    "standard.card1.title": "信託の厳格性",
    "standard.card1.desc": "強固な法廷闘争か迅速な和解か、初期段階から妥協のない見通しを提示。",
    "standard.card2.title": "即応危機管理",
    "standard.card2.desc": "保全処分や当局調査の発生時には数時間以内に専任チームを展開。",
    "standard.card3.title": "法廷完遂力による交渉優位",
    "standard.card3.desc": "法廷闘争を最後まで完遂できる体制が、事前交渉での圧倒的な優位性を生みます。",
    "standard.card4.title": "明朗な報酬体系",
    "standard.card4.desc": "不透明な請求を廃止し、フェーズごとの予算目安を明示します。",

    "impact.eyebrow": "顧客からの信頼と実績",
    "impact.title": "グローバル企業取締役会およびファンド幹部からの信任",
    "impact.desc": "最高法務責任者や経営陣からの代表的な評価。",

    "cta.badge": "機密法律相談",
    "cta.title": "最高峰の経験が求められる重大事案に。",
    "cta.desc": "大型取引、複雑な民事訴訟、内部監査対応など、厳格な守秘義務のもとパートナーが直接対応します。",
    "cta.assess": "案件を診断する",
    "cta.speak": "パートナーに直接相談",

    "footer.desc": "企業経営陣、プライベート・キャピタル、機関投資家のための戦略的リーガルカウンセル。",
    "footer.quick": "リンク",
    "footer.practices": "取扱業務",
    "footer.services": "クライアント向け",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. All Rights Reserved.",
    "footer.disclaimer": "弁護士広告：過去の事案結果は将来の結果を保証するものではありません。",
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.practiceAreas": "مجالات الممارسة",
    "nav.attorneys": "المحامون",
    "nav.ourFirm": "عن الشركة",
    "nav.insights": "الرؤى القانونية",
    "nav.payOnline": "الدفع عبر الإنترنت",
    "nav.assessMatter": "تقييم القضية",
    "nav.contact": "اتصل بنا",
    "nav.clientPortal": "بوابة العملاء",
    "tagline.counsel": "استشارات قانونية",

    "hero.eyebrow": "فانتاج هول كونسل · قضايا بالغة الأهمية",
    "hero.headline": "استشارات قانونية حاسمة للمسائل ذات الأثر المستدام.",
    "hero.subhead": "عندما يكون استقرار الشركات أو الصفقات الكبرى أو السمعة القيادية على المحك، تقدم فانتاج هول دفاعاً صارماً واستشارات ائتمانية على أعلى درجات السرية.",
    "hero.cta.assess": "تقييم قضيتك القانونية",
    "hero.cta.consult": "طلب استشارة سرية",
    "hero.cta.portal": "بوابة دفع الأتعاب",

    "stats.volume": "+25 مليار دولار",
    "stats.volume.label": "حجم الصفقات والاستشارات",
    "stats.trial": "94%",
    "stats.trial.label": "نسبة النجاح والتسويات الإيجابية",
    "stats.exp": "+35",
    "stats.exp.label": "سنوات خبرة الشركاء الرئيسيين",
    "stats.counsel": "100%",
    "stats.counsel.label": "إشراف مباشر من الشركاء",

    "lawyers.eyebrow": "الشركاء الرئيسيون ومحامو المحاكم",
    "lawyers.title": "تمثيل مباشر من الشركاء. خبرة مثبتة في أصعب اللحظات.",
    "lawyers.desc": "نرفض تفويض القرارات الحيوية لمحامين مبتدئين؛ يتولى شركاؤنا المتمرسون إدارة كل قضية استراتيجياً وتنفيذياً.",
    "lawyers.viewAll": "عرض جميع المحامين",
    "lawyers.highlight": "إنجاز بارز",
    "lawyers.fullProfile": "الملف الكامل",
    "lawyers.inquiry": "استفسار مباشر",

    "practices.eyebrow": "القدرات القانونية المتخصصة",
    "practices.title": "استشارات شاملة عبر جميع التخصصات التجارية",
    "practices.desc": "نهيكل خدماتنا لتغطي المحطات المفصلية للشركات وصناديق الاستثمار والمؤسسات المالية.",
    "practices.explore": "استكشاف التخصص",
    "practices.browseAll": "استعراض كافة المجالات الـ 10 →",

    "standard.eyebrow": "معيار فانتاج",
    "standard.title": "لماذا يثق كبار القادة بنا عندما تكون كل الرهانات قائمة.",
    "standard.desc": "نموذج عمل عالي الدقة صُمم خصيصاً للسرعة والحسم والسرية التامة والموثوقية.",
    "standard.p1.title": "إشراف مباشر من الشركاء",
    "standard.p1.desc": "نقطة اتصالك المباشرة هي الشريك المخطط لاستراتيجيتك.",
    "standard.p2.title": "استراتيجية قانونية تجارية",
    "standard.p2.desc": "نوائم الخطط القانونية مع الميزانيات العمومية والخطط التجارية.",
    "standard.p3.title": "سرية مؤسسية مطلقة",
    "standard.p3.desc": "جدران حماية معلوماتية صارمة لحماية السمعة والمعلومات الحساسة.",
    "standard.card1.title": "صرامة ائتمانية",
    "standard.card1.desc": "تقييمات واقعية مبكرة تحدد متى نقاتل قضائياً ومتى نبرم تسويات جراحية حاسمة.",
    "standard.card2.title": "استجابة فورية للأزمات",
    "standard.card2.desc": "جاهزية كاملة لنشر الفريق القانوني خلال ساعات عند ظهور أوامر قضائية عاجلة.",
    "standard.card3.title": "قوة التفاوض في المحكمة",
    "standard.card3.desc": "جاهزيتنا للمرافعات حتى النهاية تمنح عملاءنا نفوذاً تفاوضياً لا مثيل له.",
    "standard.card4.title": "فواتير وأتعاب شفافة",
    "standard.card4.desc": "تقديرات مرحلية واضحة تماماً دون مفاجآت أو بنود مبهمة.",

    "impact.eyebrow": "ثقة العملاء والأثر القيادي",
    "impact.title": "محل ثقة مجالس إدارات كبرى الشركات وصناديق الاستثمار",
    "impact.desc": "آراء وانطباعات المستشارين القانونيين العامين وقادة الأعمال.",

    "cta.badge": "استشارة سرية",
    "cta.title": "عندما تتطلب القضية خبرة قانونية استثنائية.",
    "cta.desc": "شركاؤنا على أهبة الاستعداد لتقييم أهدافك وفق أعلى معايير السرية المهنية.",
    "cta.assess": "تقييم قضيتك",
    "cta.speak": "تحدث مع شريك",

    "footer.desc": "استشارات قانونية استراتيجية للقيادات التنفيذية وصناديق الاستثمار الخاصة والكيانات الكبرى.",
    "footer.quick": "روابط سريعة",
    "footer.practices": "مجالات التخصص",
    "footer.services": "خدمات العملاء",
    "footer.rights": "© 2026 فانتاج هول كونسل. جميع الحقوق محفوظة.",
    "footer.disclaimer": "إعلان محاماة. النتائج السابقة لا تضمن نتائج مماثلة مستقبلاً.",
  },

  pt: {
    "nav.home": "Início",
    "nav.practiceAreas": "Áreas de Atuação",
    "nav.attorneys": "Advogados",
    "nav.ourFirm": "O Escritório",
    "nav.insights": "Publicações",
    "nav.payOnline": "Pagamento Online",
    "nav.assessMatter": "Avaliar Caso",
    "nav.contact": "Contato",
    "nav.clientPortal": "Portal do Cliente",
    "tagline.counsel": "ADVOCACIA",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · CAUSAS DE ALTO IMPACTO",
    "hero.headline": "Assessoria jurídica decisiva para momentos de consequências profundas.",
    "hero.subhead": "Quando a solidez corporativa, fusões transformadoras ou a reputação de lideranças estão em jogo, o Vantage Hall entrega defesa técnica implacável e rigor fiduciário.",
    "hero.cta.assess": "Avaliar Caso Jurídico",
    "hero.cta.consult": "Solicitar Consulta Confidencial",
    "hero.cta.portal": "Portal de Pagamentos",

    "stats.volume": "+US$ 25 Bi",
    "stats.volume.label": "Volume em Transações e Consultoria",
    "stats.trial": "94%",
    "stats.trial.label": "Resoluções Favoráveis em Contencioso",
    "stats.exp": "+35",
    "stats.exp.label": "Anos de Experiência dos Sócios",
    "stats.counsel": "100%",
    "stats.counsel.label": "Condução Direta por Sócios",

    "lawyers.eyebrow": "Sócios Sêniores e Advogados de Tribunal",
    "lawyers.title": "Atuação direta dos sócios. Discernimento comprovado.",
    "lawyers.desc": "Rejeitamos a terceirização de decisões críticas para advogados juniores. Cada caso é liderado pessoalmente por sócios consagrados.",
    "lawyers.viewAll": "Ver Todos os Advogados",
    "lawyers.highlight": "Destaque de Atuação",
    "lawyers.fullProfile": "Perfil Completo",
    "lawyers.inquiry": "Consulta Direta",

    "practices.eyebrow": "Capacidades Jurídicas",
    "practices.title": "Assessoria completa através das disciplinas corporativas",
    "practices.desc": "Organizamos nossa banca em torno dos momentos cruciais de empresas, fundos de investimento e family offices.",
    "practices.explore": "Explorar Prática",
    "practices.browseAll": "Ver Todas as 10 Áreas →",

    "standard.eyebrow": "O Padrão Vantage",
    "standard.title": "Por que líderes confiam em nós quando tudo está em jogo.",
    "standard.desc": "Operamos sob um modelo boutique de excelência, focado em agilidade, clareza e fidelidade fiduciária.",
    "standard.p1.title": "Liderança Direta de Sócios",
    "standard.p1.desc": "Seu contato primário é o sócio que desenha a estratégia jurídica.",
    "standard.p2.title": "Alinhamento com o Negócio",
    "standard.p2.desc": "Alinhamos a tese jurídica ao balanço patrimonial e cronograma comercial da empresa.",
    "standard.p3.title": "Discrição Institucional Absoluta",
    "standard.p3.desc": "Barreiras éticas rígidas de sigilo para assuntos altamente sensíveis.",
    "standard.card1.title": "Rigor Fiduciário",
    "standard.card1.desc": "Avaliações precisas desde o início: litigar com firmeza ou fechar acordos estratégicos.",
    "standard.card2.title": "Agilidade em Crises",
    "standard.card2.desc": "Equipe pronta para mobilização imediata diante de liminares ou investigações regulatórias.",
    "standard.card3.title": "Vantagem em Julgamentos",
    "standard.card3.desc": "A disposição de ir até a sentença final confere enorme poder de barganha.",
    "standard.card4.title": "Transparência de Honorários",
    "standard.card4.desc": "Planejamento orçamentário por etapas sem surpresas ou cobranças opacas.",

    "impact.eyebrow": "Confiança e Impacto",
    "impact.title": "Confiado por conselhos de administração e fundos globais",
    "impact.desc": "Depoimentos de diretores jurídicos corporativos.",

    "cta.badge": "Consulta Confidencial",
    "cta.title": "Quando os riscos exigem profissionais com ampla bagagem.",
    "cta.desc": "Nossos sócios estão a postos para avaliar seus objetivos sob rigoroso sigilo profissional.",
    "cta.assess": "Avaliar Caso",
    "cta.speak": "Falar com um Sócio",

    "footer.desc": "Assessoria jurídica estratégica para executivos, fundos de private equity e clientes institucionais.",
    "footer.quick": "Acesso Rápido",
    "footer.practices": "Áreas de Atuação",
    "footer.services": "Serviços ao Cliente",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Todos os direitos reservados.",
    "footer.disclaimer": "Publicidade advocatícia. Resultados anteriores não garantem desfechos similares.",
  },

  it: {
    "nav.home": "Home",
    "nav.practiceAreas": "Aree di Pratica",
    "nav.attorneys": "Avvocati",
    "nav.ourFirm": "Lo Studio",
    "nav.insights": "Pubblicazioni",
    "nav.payOnline": "Paga Online",
    "nav.assessMatter": "Valuta il Caso",
    "nav.contact": "Contatti",
    "nav.clientPortal": "Portale Clienti",
    "tagline.counsel": "STUDIO LEGALE",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · CONTENZIOSO STRATEGICO",
    "hero.headline": "Consulenza decisiva per questioni di fondamentale importanza.",
    "hero.subhead": "Quando la stabilità aziendale, le operazioni straordinarie o la reputazione sono a rischio, Vantage Hall garantisce patrocinio rigoroso e assoluta riservatezza.",
    "hero.cta.assess": "Valuta la Tua Pratica Legale",
    "hero.cta.consult": "Richiedi Consulenza Riservata",
    "hero.cta.portal": "Portale Pagamenti",

    "stats.volume": "+25 Mld $",
    "stats.volume.label": "Volume Transazioni e Consulenza",
    "stats.trial": "94%",
    "stats.trial.label": "Successo in Contenziosi e Accordi",
    "stats.exp": "+35",
    "stats.exp.label": "Anni di Esperienza dei Partner",
    "stats.counsel": "100%",
    "stats.counsel.label": "Gestione Diretta dei Partner",

    "lawyers.eyebrow": "Partner Senior e Avvocati del Foro",
    "lawyers.title": "Assistenza diretta da parte dei partner. Giudizio autorevole.",
    "lawyers.desc": "Non affidiamo le scelte determinanti ad avvocati junior. Ogni dossier è seguito in prima persona da partner di comprovata esperienza.",
    "lawyers.viewAll": "Tutti i Professionisti",
    "lawyers.highlight": "Risultato Chiave",
    "lawyers.fullProfile": "Profilo Completo",
    "lawyers.inquiry": "Contatto Diretto",

    "practices.eyebrow": "Competenze Legali",
    "practices.title": "Consulenza integrata in tutti i settori commerciali",
    "practices.desc": "Servizi modellati attorno ai momenti cruciali di aziende, fondi di investimento e family office.",
    "practices.explore": "Dettaglio Area",
    "practices.browseAll": "Tutte le 10 Aree di Pratica →",

    "standard.eyebrow": "Lo Standard Vantage",
    "standard.title": "Perché i vertici aziendali ci scelgono nelle sfide più critiche.",
    "standard.desc": "Un modello boutique di élite concepito per garantire tempestività, chiarezza e lealtà fiduciaria.",
    "standard.p1.title": "Supervisione Diretta",
    "standard.p1.desc": "L'interlocutore primario è il partner che elabora la strategia.",
    "standard.p2.title": "Strategia Aziendale e Legale",
    "standard.p2.desc": "Allineiamo la difesa legale al bilancio e agli obiettivi commerciali.",
    "standard.p3.title": "Riservatezza Assoluta",
    "standard.p3.desc": "Rigorosi canali di protezione per vicende a elevata sensibilità.",
    "standard.card1.title": "Rigore Fiduciario",
    "standard.card1.desc": "Pareri tempestivi: sostenere il contenzioso o negoziare accordi chirurgici.",
    "standard.card2.title": "Pronto Intervento",
    "standard.card2.desc": "Team attivo in poche ore per provvedimenti cautelari e indagini regolatorie.",
    "standard.card3.title": "Forza Negoziale in Giudizio",
    "standard.card3.desc": "La solidità nell'affrontare il giudizio genera una leva negoziale senza pari.",
    "standard.card4.title": "Tariffe Chiare",
    "standard.card4.desc": "Preventivi articolati per fasi senza costi nascosti né sorprese.",

    "impact.eyebrow": "Fiducia dei Clienti",
    "impact.title": "Scelto da consigli di amministrazione e fondi d'investimento",
    "impact.desc": "Testimonianze di direttori legali e vertici industriali.",

    "cta.badge": "Consulto Riservato",
    "cta.title": "Quando la posta in gioco richiede giuristi di alto profilo.",
    "cta.desc": "I nostri partner sono a disposizione per esaminare i vostri obiettivi sotto stretto segreto professionale.",
    "cta.assess": "Valuta il Caso",
    "cta.speak": "Parla con un Partner",

    "footer.desc": "Consulenza legale strategica per la governance d'impresa, fondi di investimento e grandi istituzioni.",
    "footer.quick": "Link Rapidi",
    "footer.practices": "Aree di Pratica",
    "footer.services": "Servizi ai Clienti",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Tutti i diritti riservati.",
    "footer.disclaimer": "Pubblicità legale. I risultati precedenti non costituiscono garanzia di esiti futuri.",
  },

  ru: {
    "nav.home": "Главная",
    "nav.practiceAreas": "Практики",
    "nav.attorneys": "Партнеры",
    "nav.ourFirm": "О Фирме",
    "nav.insights": "Аналитика",
    "nav.payOnline": "Оплата Онлайн",
    "nav.assessMatter": "Оценка Дела",
    "nav.contact": "Контакты",
    "nav.clientPortal": "Портал Клиента",
    "tagline.counsel": "ЮРИДИЧЕСКАЯ ФИРМА",

    "hero.eyebrow": "VANTAGE HALL COUNSEL · СТРАТЕГИЧЕСКАЯ ПРАКТИКА",
    "hero.headline": "Решающая правовая защита в вопросах первостепенной важности.",
    "hero.subhead": "Когда на кону стабильность бизнеса, трансграничные сделки или деловая репутация, Vantage Hall обеспечивает бескомпромиссное судебное представительство и строгую конфиденциальность.",
    "hero.cta.assess": "Оценить Правовое Дело",
    "hero.cta.consult": "Запросить Консультацию",
    "hero.cta.portal": "Платежный Портал",

    "stats.volume": "$25 млрд+",
    "stats.volume.label": "Объем Сделок и Консультаций",
    "stats.trial": "94%",
    "stats.trial.label": "Успешные Судебные Решения",
    "stats.exp": "35+ лет",
    "stats.exp.label": "Опыт Старших Партнеров",
    "stats.counsel": "100%",
    "stats.counsel.label": "Личное Ведение Партнерами",

    "lawyers.eyebrow": "Руководство и Судебные Адвокаты",
    "lawyers.title": "Прямое участие партнеров. Проверенная репутация.",
    "lawyers.desc": "Мы не перекладываем ключевые решения на младших юристов. Каждым делом лично руководят старшие партнеры с многолетним стажем.",
    "lawyers.viewAll": "Все Адвокаты Фирмы",
    "lawyers.highlight": "Ключевое Достижение",
    "lawyers.fullProfile": "Полный Профиль",
    "lawyers.inquiry": "Прямой Запрос",

    "practices.eyebrow": "Ключевые Компетенции",
    "practices.title": "Комплексная правовая поддержка корпоративного сектора",
    "practices.desc": "Мы выстраиваем юридическую практику вокруг главных этапов развития компаний, фондов и частных инвесторов.",
    "practices.explore": "Подробнее о Практике",
    "practices.browseAll": "Все 10 Направлений Практики →",

    "standard.eyebrow": "Стандарт Vantage",
    "standard.title": "Почему лидеры бизнеса выбирают нас в критических ситуациях.",
    "standard.desc": "Бутиковый формат высшей категории, созданный для оперативности, ясности и фидуциарной верности клиенту.",
    "standard.p1.title": "Прямое Руководство Партнеров",
    "standard.p1.desc": "Ваш главный контакт — партнер, разрабатывающий стратегию.",
    "standard.p2.title": "Опора на Бизнес-Цели",
    "standard.p2.desc": "Мы согласовываем юридическую защиту с финансовым балансом и графиком компании.",
    "standard.p3.title": "Полная Конфиденциальность",
    "standard.p3.desc": "Строжайшие информационные барьеры для репутационно чувствительных дел.",
    "standard.card1.title": "Фидуциарная Строгость",
    "standard.card1.desc": "Ранний и честный прогноз: когда идти на судебный штурм, а когда заключать выверенное соглашение.",
    "standard.card2.title": "Мгновенное Реагирование",
    "standard.card2.desc": "Готовность команды в течение нескольких часов при внезапных обеспечительных мерах или проверках.",
    "standard.card3.title": "Судебный Рычаг в Переговорах",
    "standard.card3.desc": "Готовность дойти до финального вердикта дает мощнейшее преимущество на досудебной стадии.",
    "standard.card4.title": "Прозрачные Расчеты",
    "standard.card4.desc": "Поэтапное финансовое планирование без скрытых надбавок.",

    "impact.eyebrow": "Доверие Клиентов",
    "impact.title": "Нам доверяют советы директоров и фонды прямых инвестиций",
    "impact.desc": "Отзывы генеральных юрисконсультов и топ-менеджеров.",

    "cta.badge": "Конфиденциальная Консультация",
    "cta.title": "Когда ставки требуют безупречного опыта.",
    "cta.desc": "Наши партнеры готовы изучить ваши задачи в режиме строжайшей адвокатской тайны.",
    "cta.assess": "Оценить Дело",
    "cta.speak": "Связаться с Партнером",

    "footer.desc": "Стратегическая правовая поддержка руководства корпораций, частных фондов и крупных институтов.",
    "footer.quick": "Быстрые Ссылки",
    "footer.practices": "Практики",
    "footer.services": "Клиентский Сервис",
    "footer.rights": "© 2026 VANTAGE HALLCOUNSEL. Все права защищены.",
    "footer.disclaimer": "Реклама адвокатской деятельности. Прошлые результаты не гарантируют аналогичный исход.",
  },
};

interface LanguageContextType {
  currentLang: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  currentOption: LanguageOption;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  setLanguage: () => {},
  t: (key) => key,
  currentOption: SUPPORTED_LANGUAGES[0],
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<LanguageCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vh_selected_lang") as LanguageCode;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        setCurrentLangState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLangState(lang);
    try {
      localStorage.setItem("vh_selected_lang", lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const currentOption = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];
  const dir = currentOption.dir || "ltr";

  const t = (key: string): string => {
    const langDict = translations[currentLang];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, currentOption, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher() {
  const { currentLang, setLanguage, currentOption } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".language-switcher-container")) {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("click", closeOnOutside);
    }
    return () => window.removeEventListener("click", closeOnOutside);
  }, [open]);

  return (
    <div className="relative language-switcher-container inline-block text-left z-50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-200 hover:text-white hover:bg-white/15 transition-all border border-white/20 shadow-sm"
        title="Switch Language (10 languages available)"
      >
        <Globe className="size-3.5 text-brand-green" />
        <span className="text-base leading-none">{currentOption.flag}</span>
        <span className="font-semibold tracking-wide hidden sm:inline">{currentOption.name}</span>
        <span className="font-semibold tracking-wide sm:hidden uppercase">{currentOption.code}</span>
        <ChevronDown className={`size-3 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select Language"
          className="absolute left-0 mt-2 w-56 rounded-xl glass-card-dark border border-white/20 shadow-2xl backdrop-blur-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 border-b border-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-brand-green flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-slate-400 font-mono">10 Languages</span>
          </div>
          <div className="max-h-72 overflow-y-auto py-1 space-y-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left ${
                    isSelected
                      ? "bg-primary/25 text-white font-semibold border border-primary/40"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.nativeName}</div>
                      <div className="text-[0.65rem] text-slate-400">{lang.name}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="size-3.5 text-brand-green shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
