import "./about.scss"

export default function About() {

    return (
        <div className = "portfolio" id = "portfolio">
           <span>ABOUT</span>
            <h1>Personal Info</h1>
            <p className = "portp">Get to know more about me</p>
            <div className = "content">
                <div className="leftContent">
                    <h2>Hello!</h2>
                    <p>My name is Mehul Jain and I'm a passionate Software Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technologgy.</p>
                    <p>I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p>
                </div>
                <div className="rightContent">
                    <h2>Skills</h2>
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>JAVASCRIPT</button>
                    <button>SCSS</button>
                    <button>REACT</button>
                    <button>GIT</button>
                    <button>EXPRESS</button>
                    <button>NODEJS</button>
                    <button>MONGODB</button>
                </div>
               
            </div>
            <div className="extra">
                    
                    </div>
        </div>
    )
}
