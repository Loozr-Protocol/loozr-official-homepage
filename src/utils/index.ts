import Artist, { ArtistJsonProps } from "../config/constants/models/artist";
import User, { UserJsonProps } from "../config/constants/models/user";

export function copy(content: string) {
  if (!!content) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    // el.style = { display: 'none' };
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}

export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const decodedJWT = () => {
  const jwtToken = localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : null;
  const result = parseJwt(jwtToken);
  return result
}

export const jsonToUser = (jsonData: UserJsonProps) => {
  const user = new User({});
  user.fromJson(jsonData);
  return user;
}

export const jsonToArtist = (jsonData: ArtistJsonProps) => {
  const artist = new Artist({});
  artist.fromJson(jsonData);
  return artist;
}