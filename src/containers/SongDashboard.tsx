/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from "react-router-dom";
import { Artist } from "../config/constants/types";
import artistsData from "../config/mock-data/artists.json";
import ReadMore from "../components/Readmore";
import PlayButton from "../components/Buttons/PlayButton";

export default function ArtistDashboard() {
  const artists: Artist[] = artistsData.map((artist) => artist);
  let { id, songId } = useParams();

  if (!id || !songId) {
    return (
      <>
        <div className="main-content">
          <div className="mt-60"></div>
          <h1>Request Not Valid!</h1>
        </div>
      </>
    );
  }

  if (
    !artists[parseInt(id)] ||
    !artists[parseInt(id)].songs[parseInt(songId)]
  ) {
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
  const song = artists[parseInt(id)].songs[parseInt(songId)];

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
                <div className="col-10 col-md-3">
                  <div className="wow position-relative" data-wow-delay=".5s">
                    <img
                      src={song.photo}
                      className="img1-thumb  zero-radius"
                      alt=""
                    />
                    <img
                      src="/img/thumbnail.png"
                      className="img1-thumb d-thumb"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-8 offset-md-1">
                  <div className="profile-content mt-md-10 mb-0 tiny-mt-20">
                    <div className="row mb-30">
                      <div className="col-12">
                        <h6>Song Name Token</h6>
                        <h2 className="text-uppercase">{artist.tokenName}</h2>
                      </div>
                    </div>
                    <div className="d-flex song-summary mb-20">
                      <div className="d-flex align-items-center profile">
                        <img
                          src={artist.photo}
                          className="profile mr-2"
                          alt={artist.name}
                        />
                        <span>{artist.name}</span>
                      </div>
                      <div className="offset-1 info-block">
                        <span>{song.duration},</span>&nbsp;
                        <span>{song.listens} listens</span>
                      </div>
                    </div>
                    <div className="wow">
                      <ReadMore
                        text={`You are supporting, participating, and becoming a part of this song by purchasing and holding
${song.tokenName} Song Coin. You are entitled for song benefits like streaming gains, ROI, fame and
rewards as ${song.tokenName} investor.`}
                      />
                    </div>
                    <div className="d-flex align-items-center mt-20">
                      <PlayButton song={song} />
                      <a
                        role="button"
                        data-toggle="modal"
                        data-target="#waitlistDialog"
                        className="button btn-accent ml-3"
                      >
                        Buy Artist Coin
                      </a>
                      <img
                        src="/img/icon-heart.png"
                        className="ml-3 img-icon"
                        alt=""
                      />
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
                            Copy Song Link
                          </a>
                          <a className="dropdown-item" href="/">
                            How It Works
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-15">
            <hr className="col-9" />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
