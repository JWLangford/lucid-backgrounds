// @ts-nocheck
import "react-lazy-load-image-component/src/effects/blur.css"
import "regenerator-runtime/runtime.js"

import Downloader from "js-file-downloader"
import * as React from "react"

import { getImages } from "./fetch"


interface IImage {
  url: string
  alt: string
  id: string
  downloads: string
}

export function List() {
  const emptyImage: IImage = {
    id: "",
    url: "",
    alt: "",
    downloads: ""
  }
  const [image, setImage] = React.useState<IImage>(emptyImage)
  const [ratio, setRatio] = React.useState("uk-child-width-1-3")
  const [images, setImages] = React.useState<IImage[]>([])
  const IMAGE_PREFIX = "https://d37xqt7jhl117l.cloudfront.net/"

  async function fetchImages() {
    try {
      const response = await getImages()
      setImages(response.images)
      console.log("resp: ", response)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  React.useEffect(() => {
    fetchImages()
  }, [])

  const toggle = (index: number) => {
    setImage(images[index])
    window.UIkit.modal("#modal-example").toggle()
  }

  const toggleRatio = (ratio: string) => {
    setRatio(ratio)
  }

  const download = (image: IImage) => {
    new Downloader({
     url: IMAGE_PREFIX + image.url,
    })
      .then(function () {
        console.log("Done")
        increaseDownloads(image.id)
      })
      .catch(function (error) {
        console.log("Error: ", error)
      })
  }

  return (
    <div className="uk-animation-fade">
      <div className="uk-grid uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center">
        <div className="uk-button-group" style={{ marginBottom: "40px" }}>
          <button
            onClick={() => toggleRatio("uk-child-width-1-3")}
            className={`uk-button ${
              ratio === "uk-child-width-1-3" ? "uk-button-primary" : "uk-button-default"
            } `}
          >
            1 : 3
          </button>
          <button
            onClick={() => toggleRatio("uk-child-width-1-2")}
            className={`uk-button ${
              ratio === "uk-child-width-1-2" ? "uk-button-primary" : "uk-button-default"
            } `}
          >
            1 : 2
          </button>
          <button
            onClick={() => toggleRatio("uk-child-width-1-1")}
            className={`uk-button ${
              ratio === "uk-child-width-1-1" ? "uk-button-primary" : "uk-button-default"
            } `}
          >
            1 : 1
          </button>
        </div>
      </div>

      <div className={`uk-grid uk-grid-medium ${ratio}`}>
        {images.map((image, index) => (
          <div key={image.id} style={{ marginBottom: "40px" }}>
            <div
              className="uk-card uk-card-default uk-card-body"
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <div className="uk-inline-clip uk-transition-toggle">
                <img
                  src={IMAGE_PREFIX + image.url}
                  height="200"
                  className="uk-transition-scale-up uk-transition-opaque"
                  alt={image.alt}
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
              <img className="uk-img" src={IMAGE_PREFIX + image.url} height="400" alt={image.alt} />
              <p className="uk-text-right"></p>
            </div>
            <div className="uk-modal-footer uk-text-right">
              <button className="uk-button uk-button-default uk-modal-close" type="button">
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
  )
}
