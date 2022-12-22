import React, { useState } from "react";
import { Layout } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import Links from "../tools/links";
import Posts from "../tools/posts";
import { HeroSVG } from "../../icon/svg";

const { Header, Footer, Sider, Content } = Layout;

export default function Index() {
  const [search, setSearch] = useState("");

  const getSearch = () => {
    if (!search) return;

    console.log(`Searching "${search}" key...`);
    window.location.replace("/?keyword=" + search);
  };
  return (
    // <Layout>
    <>
      <div className="cards">
        <div className="card" style={{ position: "fixed" }}>
          <Sider
            // collapsible={true}
            className="sContainer"
            width={300}
            theme="light"
          >
            <Links />
          </Sider>
        </div>
        {/* <Layout className="sContainer"> */}
        <div className="card" style={{ paddingLeft: 300 }}>
          <Header style={{ backgroundColor: "#fff" }}>
            <div className="test">
              <ul className="headerListContainer">
                <li>
                  <p>Эхлэл</p>
                </li>
                <li
                  onClick={() => {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <p>Программууд</p>
                </li>
              </ul>
            </div>
          </Header>
          <Content className="mainContainer">
            <div className="contentContainer">
              <div className="searchContainer">
                <p>Эрчим хүчний салбарын нэгдсэн мэдээлэл</p>
                <div style={{ position: "relative", paddingLeft: "20%" }}>
                  <input
                    type="text"
                    placeholder="Хайх..."
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.charCode === 13) getSearch();
                    }}
                  />
                  <button onClick={getSearch}>
                    <AiOutlineSearch className="searchIcon" />
                  </button>
                </div>
              </div>
              <div className="energyM">
                {/* svg */}
                <HeroSVG />
                {/* <img
                alt="title"
                src={require("./../../assets/theme/clean-energy-vs-green-energy.png")}
                style={{ width: "100%" }}
              /> */}
              </div>
            </div>
          </Content>

          <Posts />
          <img
            src={require("../../assets/image/bann.png")}
            alt="bottom image"
            className="bottomImage"
          />
        </div>
      </div>

      <Footer
        style={{
          paddingLeft: 300,
          paddingRight: 300,
          fontSize: 11,
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <>
          <div
            className="footerContainer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              width: "100%",
            }}
          >
            <div>
              <ul className="footerListContainer">
                <li>
                  <a href="https://ndc.able.mn/">И-Оффис</a>
                </li>
                <li>
                  <a href="https://webmail.ndc.energy.mn/">Электрон шуудан</a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul className="footerListContainer">
                <li>
                  <a href="http://sbm.energy.mn/login/auth?logout">
                    Тэг үлдэгдэлтэй данс
                  </a>
                </li>
                <li>
                  <a href="https://disnews.energy.mn/login.php">
                    Диспетчерийн хоногийн мэдээ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="footerListContainer">
                <li>
                  <a href="https://disnews.energy.mn/disnews/login.php">
                    Технологийн зөрчил
                  </a>
                </li>
                <li>
                  <a href="http://rpa.energy.mn/">Зөвлөл</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      </Footer>

      {/* </Layout> */}
    </>

    // </Layout>
  );
}
