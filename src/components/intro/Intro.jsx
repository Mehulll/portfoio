import "./intro.scss"

export default function Intro() {    
    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "leftLeft">
                   <span>HELLO THERE</span>
                   <h1>I am Mehul Jain.</h1>
                   <h1>I am a Software Developer</h1>
                </div>
                <div className = "leftRight">
                    <button><a href = "#testimonials">LATEST PROJECTS</a></button>
                    <button><a href = "#portfolio">MORE ABOUT ME</a></button>
                </div>
            </div>
        </div>
    )
}
