import { BASE_EXPLORER_URLS, NEAR_NETWORK } from "../config/constants";
import Artist, { ArtistJsonProps } from "../config/constants/models/artist";
import User, { UserJsonProps } from "../config/constants/models/user";
import { getArtistCoinStat } from './calls/getArtistCoinState';

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

export const nearExplorerAccount = (accountId: string) => {
  return `${BASE_EXPLORER_URLS[NEAR_NETWORK]}/accounts/${accountId}`;
}

export const loadCoinPrices = async (artist: Artist) => {
  try {
    const result = await getArtistCoinStat(artist.user.id);
      const payload = { artist, rawCoinInfo: result};
      return payload;
    } catch (error) {
      console.log(error);
    }
}