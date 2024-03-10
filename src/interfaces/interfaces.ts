export interface Movie {
    id: string;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    belongs_to_collection: {
      poster_path: string;
      backdrop_path: string;
    };
    genres: {
      id: number;
      name: string;
    }[];
    production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
    tagline: string;
    runtime: string;
    spoken_languages: {
      name: string;
      english_name: string;
      iso_639_1: string;
    }[];
  }