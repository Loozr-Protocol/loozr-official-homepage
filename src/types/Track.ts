export interface Track {
  id: number;
  releasedAt: string;
  songName: string;
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
  artist: number;
  tokenUrl?: string;
}