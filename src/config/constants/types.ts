export interface Track {
  title: string;
  author: string;
  isVerified: boolean;
  coinPrice: string;
  coverPhoto: string;
  trackSource: string;
}

export interface Song {
  id: number;
  author: string;
  name: string;
  listens: string;
  tokenName: string;
  duration: string;
  photo: string;
  coinValue: string;
  USDValue: string;
  url: string;
  audio?: HTMLAudioElement;
}

export interface Artist {
  name: string;
  tokenName: string;
  coinPrice: string;
  coinPriceFull: string;
  USDValue: string;
  isVerified: boolean;
  photo: string;
  songs: Song[]
}

export interface UserState {
  userInfo: {
    username: string;
    account_id: string;
    followings_count: number;
    id: number;
    followers_count: number;
    token_name: string;
    bio: string;
    website: string;
    is_artist: string;
    email: string;
  };
  jwtToken: string;
  loading: boolean;
  success: boolean;
  accountSetupSuccess: boolean;
  error: string
}