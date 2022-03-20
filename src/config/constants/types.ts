export interface Track {
  title: string;
  author: string;
  isVerified: boolean;
  coinPrice: string;
  coverPhoto: string;
  trackSource: string;
}

export interface Song {
  name: string,
  duration: string,
  photo: string,
  coinValue: string,
  USDValue: string
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