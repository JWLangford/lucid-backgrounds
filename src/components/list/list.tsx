//@ts-nocheck
import "react-lazy-load-image-component/src/effects/blur.css"

import Downloader from "js-file-downloader"
import * as React from "react"

export function List() {
  const [image, setImage] = React.useState("");
  const [ratio, setRatio] = React.useState("uk-child-width-1-3");

  const landscapeImages = [
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-10_bak_wAwvF1N4eS.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-25_dX6JSAIAvb.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-23_OMXwVllmvG.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-4_U4ehPEGXsnG.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-60_bak_bUdALVIMYt9.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-6_sSVwKVvmKmCZ.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-7_WlKxYN3OOit.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-8_LbTohlNvcPr1.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-9_yV3czkpZ_0P.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-14_Ys1yDq2Xg0h.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-11_2lxRvu--2JR.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-12_qbrO4uJ1rr.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-22_vrZGbQ2BRTy.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-24_bak_NsX4i1cR74.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-26_7WRCcyAEh.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-1_FPUVb05pfq.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-27_VZn7WOo7M2P.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-15_tx_hJwYC5MH6.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-33_rr-G8PWopY.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-31_zIsyAqAaJ.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-30_ovh3D5sltz.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-34_wTdyQwthZf2.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-32_E38PCq1KQ.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-51_Ec3S6ksL6aSm.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-40_A1fqeRuGeD.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-50_p5H6tvkBvO.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-41_GMCEvnpJC1I7.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-62_-5Ho0LW4nTv.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-5_-NVcqzrXHWn.png",
    "https://ik.imagekit.io/e0ingeecpi/wallpaper-61_Vzvcw9DM10.png",
  ];

  const toggle = (index: number) => {
    setImage(landscapeImages[index]);
    window.UIkit.modal("#modal-example").toggle();
  };

  const toggleRatio = (ratio: string) => {
    setRatio(ratio);
  };

  const download = (url: string) => {
    new Downloader({
      url,
    })
      .then(function () {
        console.log("Done");
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="uk-animation-fade">
      <div
        class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center"
        uk-grid
      >
        <div className="uk-button-group" style={{ marginBottom: "40px" }}>
          <button
            onClick={() => toggleRatio("uk-child-width-1-3")}
            className={`uk-button ${
              ratio === "uk-child-width-1-3"
                ? "uk-button-primary"
                : "uk-button-default"
            } `}
          >
            1 : 3
          </button>
          <button
            onClick={() => toggleRatio("uk-child-width-1-2")}
            className={`uk-button ${
              ratio === "uk-child-width-1-2"
                ? "uk-button-primary"
                : "uk-button-default"
            } `}
          >
            1 : 2
          </button>
          <button
            onClick={() => toggleRatio("uk-child-width-1-1")}
            className={`uk-button ${
              ratio === "uk-child-width-1-1"
                ? "uk-button-primary"
                : "uk-button-default"
            } `}
          >
            1 : 1
          </button>
        </div>
      </div>

      <div className={`uk-grid uk-grid-medium ${ratio}`}>
        {landscapeImages.map((image, index) => (
          <div key={image} style={{ marginBottom: "40px" }}>
            <div
              className="uk-card uk-card-default uk-card-body"
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <div className="uk-inline-clip uk-transition-toggle">
                <img
                  src={image}
                  height="200"
                  className="uk-transition-scale-up uk-transition-opaque"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div id="modal-example" className="uk-modal">
          <div className="uk-modal-dialog">
            <div className="uk-modal-body">
              <img className="uk-img" src={image} height="400" />
              <p className="uk-text-right"></p>
            </div>
            <div className="uk-modal-footer uk-text-right">
              <button
                className="uk-button uk-button-default uk-modal-close"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={() => download(image)}
                className="uk-button uk-button-primary"
                type="button"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
