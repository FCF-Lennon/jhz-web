export interface NavItem {
    label: string;
    href: string;
    external?: boolean;
    highlight?: boolean;
    children?: {
        label: string;
        href: string;
        external?: boolean
    }[];
};

export const SITE_INFO = {
    name: 'Colegio Bicentenario Jorge Huneeus Zegers',
    shortName: 'Colegio JHZ',
    motto: 'Lideres en formación valórica, educación emocional e innovación pedagógica',
    description: 'Centro Educacional Bicentenario Jorge Huneeus Zegers en la Pintana. Educación Pre Básica, Básica y Media Técnico Profesional con enfoque en formación integral y excelencia académica',
    phone: '+56 2 26567925',
    email: 'contacto@jhz.cl',
    address: 'Avenida Santa Rosa 10934, La Pintana, Región Metropolitana, Chile',
    logoUrl: 'https://jhz.cl/wp-content/uploads/2022/09/Logo_JHZ_Bicentenario_300x300.png',
    socials: {
        instagram: 'https://www.instagram.com/colegiojhz/',
        facebook: 'https://www.facebook.com/jhzoficial/',
        youtube: 'https://www.youtube.com/channel/UCgJSLaaGZU3tiOk5q0SKu4Q',
    },
};

// Navegación principal unificada (Escritorio + 1 único menú en Móvil)
export const  MAIN_NAV:  NavItem[] = [
    { 
        label: 'Inicio', 
        href: '/' 
    },
    {
        label: 'Colegio',
        href: '/colegio',
        children: [
            { label: 'Nuestro Colegio', href: '/colegio#colegio' },
            { label: 'Visión y Misión', href: '/colegio#visionmision' },
            { label: 'Nuestros Origenes', href: '/colegio#origenes' },
            { label: 'Equipo Directivo', href: '/colegio#equipo' },
            { label: 'Infraestructura', href: '/colegio#infraestructura' },
            { label: 'Trabaja con Nosotros', href: '/colegio#trabaja' },
        ],
    },
    {
        label: 'Comunidad',
        href: '#',
        children: [
            { label: 'PIE (Inclusión)', href: '/pie' },
            { label: 'Bienestar Estudiantil', href: '/bienestar-estudiantil' },
            { label: 'Talleres', href: '/talleres' },
            { label: 'Ecologearte', href: '/ecologearte' },
            { label: 'CRA / Biblioteca', href: '/cra' },
            { label: 'Colaboradores', href: '/colaboradores' },
            { label: 'Fundación FEIZH', href: 'https://feizh.cl/', external: true },
        ],
    },
    {
        label: 'Documentos Oficiales',
        href: '#',
        children: [
            { label: 'RICE 2026', href: 'https://jhz.cl/wp-content/uploads/2026/09/RICE2026.pdf', external: true },
            { label: 'Proyecto Educativo 2026', href: 'https://jhz.cl/wp-content/uploads/2026/09/ProyectoEducativo24946.pdf', external: true },
            { label: 'Reglamento de Evaluación', href: 'https://jhz.cl/wp-content/uploads/2026/09/ReglamentoDeEvaluacion24946.pdf', external: true },
            { label: 'PISE (Seguridad Escolar)', href: 'https://jhz.cl/wp-content/uploads/2024/08/Reporte-semana-de-la-seguridad-2024-JHZ.pdf', external: true },
            { label: 'Cuenta Pública', href: 'https://jhz.cl/wp-content/uploads/2024/04/Cuenta-publica.-2024-docx.pdf', external: true },
            { label: 'Lista de Útiles 2026', href: 'https://jhz.cl/prepara-con-tiempo-el-regreso-a-clases-2026-descarga-ahora-la-lista-de-utiles-por-nivel-y-especialidad/', external: true },
        ],
    },
    { 
        label: 'Noticias', 
        href: '/noticias' 
    },
];

// Botones de acción rápida (Barra superior en escritorio / Pie del cajón en móvil)
export const QUICK_ACTIONS: NavItem[] = [
  { label: 'Notasnet', href: 'https://jhz.cl/notasnet/', external: true },
  { label: 'Admisión 2027', href: '/admision', highlight: true },
];

export const SELLOS_EDUCATIVOS = [
  {
    title: 'Formación Integral',
    description:
      'Desarrollo de todos los estudiantes en sus dimensiones moral, espiritual, intelectual, afectiva, emocional y física, vivenciando hábitos saludables y el cuidado del medio ambiente.',
    icon: 'star',
  },
  {
    title: 'Aprendizaje de Calidad',
    description:
      'Fomento de la curiosidad, iniciativa, trabajo en equipo y creatividad, promoviendo el pensamiento reflexivo y crítico junto con el uso responsable de la tecnología.',
    icon: 'trophy',
  },
  {
    title: 'Valoración de la Diversidad',
    description:
      'Cultura inclusiva que compromete a toda la comunidad escolar, atendiendo la diversidad étnica, cultural, social y las necesidades educativas especiales de nuestros estudiantes.',
    icon: 'diversity',
  },
  {
    title: 'Promoción del Buen Trato',
    description:
      'Fortalecimiento de un ambiente de respeto, organizado y seguro, resolviendo conflictos mediante el diálogo, la justicia, la solidaridad y la generosidad.',
    icon: 'heart',
  },
];