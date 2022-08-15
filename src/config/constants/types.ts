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
    accountId: string;
    email: string;
  };
  jwtToken: string;
}

export interface AppState {
  songs: Song[];
  user: UserState;
}