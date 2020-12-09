// @ts-nocheck
import "react-lazy-load-image-component/src/effects/blur.css"
import "regenerator-runtime/runtime.js"

import { CloudDownloadOutlined } from "@ant-design/icons"
import { Button, Col, Image, Radio, Row } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"
import * as React from "react"

import { downloadImage, getImages } from "./fetch"

interface IImage {
  url: string
  alt: string
  id: string
  downloads: string
}

export function List() {
  const [ratio, setRatio] = React.useState(6)
  const [images, setImages] = React.useState<IImage[]>([])
  const IMAGE_PREFIX = "https://d37xqt7jhl117l.cloudfront.net/"

  async function fetchImages() {
    try {
      const response = await getImages()
      setImages(response.images)
    } catch (error) {
      console.error(error)
    }
  }

  async function download(url: string) {
    try {
      await downloadImage(url)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchImages()
  }, [])

  const toggleRatio = (e: RadioChangeEvent) => {
    setRatio(e.target.value)
  }

  const saveData = (function () {
    var a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display: none"
    return function (data, fileName) {
      var json = JSON.stringify(data),
        blob = new Blob([json], { type: "octet/stream" }),
        url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = fileName
      a.click()
      window.URL.revokeObjectURL(url)
    }
  })()

  // const download = (image: IImage) => {
  // const link = document.createElement("a")
  // link.href = image.url
  // document.body.appendChild(link)
  // link.click()
  // document.body.removeChild(link)
  // new Downloader({
  //   url: IMAGE_PREFIX + image.url,
  // })
  //   .then(function () {
  //     increaseDownloads(image.id)
  //   })
  //   .catch(function (error) {
  //     console.error(error)
  //   })
  // }

  const onClickImage = (value: boolean) => {
    if (value) {
      setTimeout(() => {
        const operations = document.getElementsByClassName("ant-image-preview-operations")
        if (operations && operations.length > 0) {
          const lineElement = document.createElement("li")
          const spanElement = document.createElement("div")

          lineElement.className = "ant-image-preview-operations-operation"

          spanElement.className = "anticon"
          spanElement.setAttribute("dangerouslySetInnerHTML", <CloudDownloadOutlined />)
          lineElement.appendChild(spanElement)

          operations.item(operations.length - 1).appendChild(lineElement)
        }
      }, 1000)
    }
  }

  return (
    <div>
      <Row justify="center" style={{ marginBottom: "40px" }}>
        <Col span={5}>
          <Radio.Group value={ratio} onChange={toggleRatio}>
            <Radio.Button value={6}>1 : 4</Radio.Button>
            <Radio.Button value={8}>1 : 3</Radio.Button>
            <Radio.Button value={12}>1 : 2</Radio.Button>
            <Radio.Button value={24}>1 : 1</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {images.map((image) => (
          <Col
            key={image.id}
            style={{ marginBottom: "40px", position: "relative" }}
            className="gutter-row"
            span={ratio}
          >
            <Button
              type="link"
              style={{ position: "absolute", zIndex: 1 }}
              icon={<CloudDownloadOutlined />}
              onClick={() => download(IMAGE_PREFIX + image.url)}
            />

            <Image
              src={IMAGE_PREFIX + image.url}
              height="200"
              style={{ cursor: "pointer" }}
              alt={image.alt}
              preview={{ onVisibleChange: onClickImage }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
