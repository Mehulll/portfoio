import "./testimonials.scss";
import youtube from "../../assests/youtube.png"
import linkdin from "../../assests/linkedin.png"
import rightarrow from "../../assests/right-arrow.png"
import github from "../../assests/github.png"
import netflix from "../../assests/netflix.png"
import dashboard from "../../assests/dashboard.jpg"
import millionare from "../../assests/millionare.jpg"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Dashboard",
      title: "React Frontend Admin Panel",
      img: dashboard,
      icon: github,
      desc:
        "This is a react admin panel which can be merge with any website for manage their system.",
      link: "https://mehulll.github.io/dashboard/",
      linkg: "https://github.com/Mehulll"
    },
    {
      id: 2,
      name: "Netflix",
      title: "React Netflix Homepage Clone",
      img: netflix,
      icon: youtube,
      desc:
        "Now a days everyone uses netflix so I try to make this is a react netflix homepage clone try a put every small detail please check it out live.",
      featured: true,
      link : "https://mehulll.github.io/netflix/",
      linkg: "https://www.youtube.com/channel/UCQY1_kyJD0FRo98Dr-XMXug"
    },
    {
      id: 3,
      name: "Millionare",
      title: "React Millionare Quiz Game",
      img: millionare,
      icon: linkdin,
      desc:
        "Who don't want to be a millionare so lets play this game and feels like you become a millionare.",
        link: "https://mehulll.github.io/quiz/",
      linkg: "https://www.linkedin.com/in/mehul-jain-68653a186/"
      
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Latest Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={rightarrow} className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href = {d.linkg}><img className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <button><a href={d.link}>See Live</a></button>
          </div>
        ))}
      </div>
    </div>
  );
}