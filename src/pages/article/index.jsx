import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import Links from "../tools/links";
import { Link } from "react-router-dom";
import { HeroSVG } from "../../icon/svg";
import moment from "moment";

const { Header, Footer, Sider, Content } = Layout;

export default function Index(props) {
  const { data } = props.location.state;
  useEffect(() => {
    if (!data) props.history.push("/");
  }, []);
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
                  <Link to="/">
                    <p>Эхлэл</p>
                  </Link>
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
          <Content
            className="mainContainer"
            style={{ backgroundColor: "#fff" }}
          >
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
          <div className="article-cards">
            <div
              className="article-container"
              style={{
                padding: 30,
                margin: 50,
              }}
            >
              <h2>{data?.title?.rendered}</h2>
              <p style={{ display: "flex", justifyContent: "flex-end" }}>
                {moment(data?.date).format("yyyy-MM-DD")}
              </p>
              <hr />
              {
                <div
                  dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                />
              }
            </div>
          </div>
          <img
            src={require("./../../assets/image/bann.png")}
            alt="bottom image"
            className="bottomImage"
          />
        </div>
      </div>
      <Footer
        style={{
          paddingLeft: 300,
          fontSize: 12,
          backgroundColor: "#fff",
        }}
      >
        <div
          className="footerContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ul className="footerListContainer">
              <li>
                <a href="https://ndc.able.mn/">И-Оффис</a>
              </li>
              <li>
                <a href="https://email.energy.mn/">Электрон шуудан</a>{" "}
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
      </Footer>
      {/* </Layout> */}
    </>

    // </Layout>
  );
}
