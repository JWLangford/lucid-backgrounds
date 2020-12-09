import { Typography } from "antd"
import * as React from "react"

const { Title } = Typography

export function Header() {
  return (
    <div>
      <Title>Lucid Backgrounds</Title>
      <Title level={3} type="secondary">
        A passion project to share clean and simple background images. All images are free and easy
        to download. No royalties or strings, just free backgrounds.
      </Title>
    </div>
  )
}
