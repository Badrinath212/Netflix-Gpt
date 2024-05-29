export const LOGO_URL=
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_URL=
    "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const API_details = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' +process.env.REACT_APP_TMDB_API,
    }
};
    
export const NOW_PLAYING_API=
    "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const TMDB_CDN_URL=
    "https://image.tmdb.org/t/p/w500/";
export const NETFLIX_ICON=
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const DEFAULTLANG_CONSTS=[{identifier:"english",name:"English"},
                {identifier:"telugu",name:"Telugu"},
                {identifier:"hindi",name:"Hindi"},
                {identifier:"spanish",name:"Spanish"}];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;