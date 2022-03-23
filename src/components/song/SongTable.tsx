import { Link } from "react-router-dom";
import { Song } from "../../config/constants/types";

interface SongTableProps {
  song: Song;
  id: number;
  songId: number;
}

export default function SongTable({ id, songId, song }: SongTableProps) {
  return (
    <>
      <div className="row mt-40">
        <div className="col-md-3">
          <div className="d-flex">
            <img src={song.photo} className="vxthumbnail" alt="" />
            <div className="vxdescription">
              <h4>{song.name}</h4>
              <p>{song.coinValue} LZR Coin Price</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 partial-offset-md-1 sm-mt10">
          <div className="d-flex align-items-center">
            <p className="vxcaption">{song.duration} mins</p>
            <img src="/img/icon-heart.png" className="ml-4 img-icon" alt="" />
            <div className="dropdown dropdown-dialog ml-4">
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
                <Link className="dropdown-item" to={`/artists/${id}/songs/${songId}`}>
                  View Song
                </Link>
                <Link className="dropdown-item" to="/">
                  Copy Song Link
                </Link>
                <Link className="dropdown-item" to="/">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
