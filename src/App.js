import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Counter from './components/counter';
import Footer from './components/footer';
import Header from './components/header';
import Hireme from './components/hireme';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header></Header>
				<Home></Home>
				<About></About>
				<Resume></Resume>
				<Services></Services>
				<Skills></Skills>
				<Projects></Projects>
				<Blog></Blog>
				<Counter></Counter>
				<Hireme></Hireme>
				<Contact></Contact>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
