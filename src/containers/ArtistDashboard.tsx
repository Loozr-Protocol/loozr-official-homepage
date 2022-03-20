import { useParams } from "react-router-dom";
import { Artist } from "../config/constants/types";
import ProfileSummary from "../components/ProfileSummary";
import artistsData from "../config/mock-data/artists.json";
import ReadMore from "../components/Readmore";
import SongTable from "../components/song/SongTable";

export default function ArtistDashboard() {
  const artists: Artist[] = artistsData.map((artist) => artist);
  let { id } = useParams();

  if (!id) {
    return (
      <>
        <div className="main-content">
          <div className="mt-60"></div>
          <h1>Request Not Valid!</h1>
        </div>
      </>
    );
  }
  const artist = artists[parseInt(id)];

  return (
    <>
      <div className="main-content">
        <div className="mt-100"></div>
        <div
          id="block-nvblockaboutindex"
          className="about section-padding pt-20 pb-80"
        >
          <div className="container d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-3 img-mons">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={artist.photo} alt="" />
                  </div>
                </div>
                <div className="col-md-8 partial-offset-md-1">
                  <div className="profile-content mt-md-100 mb-0">
                    <ProfileSummary artist={artist} />
                    <div className="wow">
                      <ReadMore
                        text={`By purchasing and holding ${artist.tokenName} coin, you
                        are contributing to the artist’s economy and investing
                        in their reputation and potential. As a holder of a
                        ${artist.tokenName} Profile Coin, you are eligible for
                        creative perks such as real time ROI and rewards of the
                        artist.`}
                      />
                    </div>
                    <div className="d-flex align-items-center mt-20">
                      <a href="/" className="button btn-accent">
                        Buy Artist Coin
                      </a>
                      <div className="dropdown dropdown-dialog ml-3">
                        <button
                          className="btn btn-menu"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="/">
                            Copy Profile Link
                          </a>
                          <a className="dropdown-item" href="/">
                            Join Telegram
                          </a>
                          <a className="dropdown-item" href="/">
                            Follow Artist
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="mt-50 d-md-flex justify-content-start list-unstyled profile-summary-li">
                      <li>1.3M listens</li>
                      <li>300k followers</li>
                      <li>304 holders</li>
                      <li className="d-flex">
                        <span className="wrip-wrap">0xe007120…e505767f5</span>
                        <a href="/" className="ml-2 anchor">
                          Copy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <hr className="col-9" />
          </div>
          <div className="container d-flex justify-content-center mt-20">
            <div className="col-lg-10">
              <h4 className="vxcaption">Songs Tokens by Artist $KONTROLLER</h4>
              {artist.songs.map((song) => (
                <SongTable song={song} />
              ))}
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
