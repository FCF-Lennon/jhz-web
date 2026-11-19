
export interface NoticiaJHZ {
    id: number;
    slug: string;
    titulo: string;
    extracto: string;
    contenido: string;
    fecha: string;
    fechaISO: string;
    imagenURL: string;
    imagenALT: string;
    categorias: string[];
    linkOriginal: string;
};

const WP_API_URL = 'https://jhz.cl/wp-json/wp/v2';

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '')
    .trim();
};

export async function getNoticias(cantidad = 8): Promise<NoticiaJHZ[]> {
    try {
        const response = await fetch(`${WP_API_URL}/posts?_embed&per_page=${cantidad}`);
        if (!response.ok) {
            throw new Error(`Error al consultar WP API: ${response.status} ${response.statusText}`);
        }
        const posts = await response.json();
        return posts.map((post:any) => {
            const media = post._embedded?.['wp:featuredmedia']?.[0];
            const terms = post._embedded?.['wp:term']?.[0] || [];
            const tituloLimpio = decodeHtmlEntities(post.title?.rendered || 'Noticia Colegio JHZ');
            const categorias = terms
            .map((t: any) => t.name)
            .filter((name: string) => name && name.toLowerCase() !== 'uncategorized');
            return {
                id: post.id,
                slug: post.slug,
                titulo: tituloLimpio,
                extracto: decodeHtmlEntities(post.excerpt?.rendered || ''),
                contenido: post.content?.rendered || '',
                fecha: new Date(post.date).toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }),
                fechaISO: post.date,
                imagenURL:
                    media?.media_details?.sizes?.large?.source_url ||
                    media?.source_url ||
                    'https://jhz.cl/wp-content/uploads/2022/09/Logo_JHZ_Bicentenario_300x300.png',
                imagenALT: media?.alt_text?.trim() || tituloLimpio,
                categorias: categorias.length > 0 ? categorias : ['Comunidad JHZ'],
                linkOriginal: post.link,
            };
        });
    } catch (error) {
        console.error('Error en getNoticias():', error);
        return [];
    }
};

export async function getNoticiaPorSlug(slug: string): Promise<NoticiaJHZ | null> {
  try {
    const response = await fetch(`${WP_API_URL}/posts?_embed&slug=${encodeURIComponent(slug)}`);
    if (!response.ok) return null;

    const posts = await response.json();
    if (!posts.length) return null;

    const post = posts[0];
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    const tituloLimpio = decodeHtmlEntities(post.title?.rendered || '');

    return {
      id: post.id,
      slug: post.slug,
      titulo: tituloLimpio,
      extracto: decodeHtmlEntities(post.excerpt?.rendered || ''),
      contenido: post.content?.rendered || '',
      fecha: new Date(post.date).toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      fechaISO: post.date,
      imagenURL: media?.source_url || '',
      imagenALT: media?.alt_text?.trim() || tituloLimpio,
      categorias: ['Noticias'],
      linkOriginal: post.link,
    };
  } catch {
    return null;
  }
}