import { Component } from "react/cjs/react.production.min";
import $ from "jquery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Testimonial from "./Components/Testimonial";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: {},
        };
    }

    componentDidMount() {
        this.getResumeData();
    }

    getResumeData() {
        $.ajax({
            url: "http://localhost:3000/resumeData.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Hero data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Testimonial data={this.state.resumeData.testimonials} />
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default App;
