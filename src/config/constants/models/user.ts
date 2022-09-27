import { MIXER_ACCOUNT } from "..";
import { Model } from "../types";

export interface UserJsonProps {
  username?: string;
  account_id: string;
  followings_count?: number;
  id: number;
  followers_count?: number;
  token_name?: string;
  bio?: string;
  website?: string;
  soundcloud_link?: string;
  twitter_link?: string;
  country?: string;
  is_artist?: boolean;
  email?: string;
}

export interface UserProps {
  username?: string;
  accountId?: string;
  followingsCount?: number;
  id?: number;
  followersCount?: number;
  tokenName?: string;
  bio?: string;
  website?: string;
  soundCloudLink?: string;
  twitterLink?: string;
  country?: string;
  isArtist?: boolean;
  email?: string;
}

export default class User implements Model {
  username: string;
  accountId: string;
  followingsCount: number;
  id: number;
  followersCount: number;
  tokenName: string;
  bio: string;
  website: string;
  soundCloudLink: string;
  twitterLink: string;
  country: string;
  isArtist: boolean;
  email: string;

  constructor({ username, accountId, followingsCount, id, followersCount, tokenName, bio, website, soundCloudLink, twitterLink, country, isArtist, email }: UserProps) {
    this.username = username;
    this.accountId = accountId;
    this.followingsCount = followingsCount;
    this.id = id;
    this.followersCount = followersCount;
    this.tokenName = tokenName;
    this.bio = bio;
    this.website = website;
    this.soundCloudLink = soundCloudLink;
    this.twitterLink = twitterLink;
    this.country = country;
    this.isArtist = isArtist;
    this.email = email;
  }

  get accountType() {
    return this.isArtist ? "Artiste" : "Listener";
  }

  get accountDomain() {
    return `${this.accountId}.${MIXER_ACCOUNT}`;
  }

  fromJson(jsonData: UserJsonProps) {
    this.username = jsonData['username'];
    this.accountId = jsonData['account_id'];
    this.followingsCount = jsonData['followings_count'];
    this.id = jsonData['id'];
    this.followersCount = jsonData['followers_count'];
    this.tokenName = jsonData['token_name'];
    this.bio = jsonData['bio'];
    this.website = jsonData['website'];
    this.soundCloudLink = jsonData['soundcloud_link'];
    this.twitterLink = jsonData['twitter_link'];
    this.country = jsonData['country'];
    this.isArtist = jsonData['is_artist'];
    this.email = jsonData['email'];
  }

  toJson() {
    const map = {
      'username': this.username,
      'account_id': this.accountId,
      'followings_count': this.followingsCount,
      'id': this.id,
      'followers_count': this.followersCount,
      'token_name': this.tokenName,
      'bio': this.bio,
      'website': this.website,
      'soundcloud_link': this.soundCloudLink,
      'twitter_link': this.twitterLink,
      'country': this.country,
      'is_artist': this.isArtist,
      'email': this.email
    }

    return map;
  }
}