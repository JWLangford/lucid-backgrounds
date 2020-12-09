import "antd/dist/antd.css"

import { Layout } from "antd"
import * as React from "react"

import { Header as MainHeader, List } from "../components"

const { Content } = Layout

export const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <MainHeader />
        <List />
      </Content>
    </Layout>
  )
}
