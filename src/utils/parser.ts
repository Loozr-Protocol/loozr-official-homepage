import { Track } from "../types/Track";
import { SONG_COIN_DOMAIN } from "../utils/constants";

export function parseRawTrack(rawTrack: any): Track {
  return {
    id: rawTrack.created_at,
    releasedAt: rawTrack.created_at,
    songTitle: rawTrack.song_title,
    songUrl: rawTrack.song_url,
    artwork: rawTrack.artwork,
    isNft: rawTrack.is_nft,
    description: rawTrack.description,
    genres: rawTrack.genres,
    moods: rawTrack.moods,
    isrcCode: rawTrack.isrc_code,
    upcCode: rawTrack.upc_code,
    features: rawTrack.features,
    founderReward: rawTrack.founder_reward,
    totalListens: rawTrack.total_listens,
    tokenName: rawTrack.token_name,
    artistId: rawTrack.artist,
    artistName: rawTrack.artist_name,
    artistAccountId: rawTrack.artist_account_id,
    tokenUrl: `${rawTrack.token_name}.${SONG_COIN_DOMAIN}`,
  };
}
