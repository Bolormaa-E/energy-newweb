import React from "react";
import "./style.css";
import datas from "./datas.json";

export default function Links() {
  const [scrollDis, setScrollDis] = React.useState(0);
  const [tabScroll, setTabScroll] = React.useState(0);
  const onScroll = (e) => {
    setTabScroll(e.currentTarget.scrollTop);
  };

  React.useEffect(() => {
    const getScrollSize = (_) => {
      setScrollDis(window.scrollY);
    };
    window.addEventListener("scroll", getScrollSize);
    return () => {
      window.removeEventListener("scroll", getScrollSize);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          scrollDis >= 100 || tabScroll >= 100 ? "show_header" : ""
        } header__fixed`}
      >
        <div className="linksFlex">
          <div className="logo">
            <img
              alt="{el.title}"
              src="http://energy.gov.mn/images/logo_new.jpg"
            />
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="title"
            href="https://www.energy.gov.mn/"
          >
            ЭРЧИМ ХҮЧНИЙ ЯАМ
          </a>
        </div>
        <div className="test">
          <ul className="headerListContainer">
            <li>
              <p>Эхлэл</p>
            </li>
            <li>
              <p>Программууд</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        onScroll={onScroll}
        style={{ paddingBottom: 20, maxHeight: "100vh", overflowY: "scroll" }}
      >
        {datas.map((el, key) => (
          <div key={key} className="linksFlex">
            <div className="logo">
              <img alt={el.title} src={el.img} />
            </div>
            <a rel="noreferrer" target="_blank" className="title" href={el.url}>
              {el.title.toUpperCase()}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
