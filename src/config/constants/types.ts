export interface Track {
  title: string;
  author: string;
  isVerified: boolean;
  coinPrice: string;
  coverPhoto: string;
  trackSource: string;
}

export interface Artist {
  name: string;
  tokenName: string;
  coinPrice: string;
  isVerified: boolean;
  photo: string;
}