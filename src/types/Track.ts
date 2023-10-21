export interface Track {
  id: number;
  releasedAt: string;
  songTitle: string;
  songUrl: string;
  artwork: string;
  isNft: boolean;
  description: string;
  genres: string | string[];
  moods: string | string[];
  isrcCode: string;
  upcCode: string;
  features: string;
  founderReward: number;
  totalListens: number;
  tokenName: string;
  artistId: number;
  artistName: string;
  artistAccountId: string;
  tokenUrl?: string;
}