import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
  	<div className="hero">
  		<div className="hero-group">
  			<h1>Learn to <br /> design and code React apps</h1>
   			<p>Complete course about the best tools and design systems. 
   			Prototype and build apps with React and Swift</p>
    		<Link to="/page-2/">Watch the video</Link>
    		<div className="logos">
    			<img src={require('../img/logo-sketch.png')} width="50" />
    			<img src={require('../img/logo-figma.png')} width="50" />
    			<img src={require('../img/logo-studio.png')} width="50" />
    			<img src={require('../img/logo-framer.png')} width="50" />
    			<img src={require('../img/logo-react.png')} width="50" />
    			<img src={require('../img/logo-swift.png')} width="50" />
    		</div>

    		<Wave />
  		</div>
  	</div>

  	<div className="cards">
  		<h2>11 courses, more to come</h2>
  		<div className="card-group">
	  		<Card 
	  			title="Design Systems"
	  			text="10 sections"
	  			image={require('../img/wallpaper.jpg')} />
	  		<Card 
	  			title="React for designers"
	  			text="12 sections"
	  			image={require('../img/wallpaper2.jpg')} />
	  		<Card 
	  			title="Sound Design"
	  			text="5 sections"
	  			image={require('../img/wallpaper3.jpg')} />
	  		<Card 
	  			title="ARKit 2"
	  			text="10 sections"
	  			image={require('../img/wallpaper4.jpg')} />
	  		<Card 
	  			title="Animate in Principle"
	  			text="5 sections"
	  			image={require('../img/wallpaper.jpg')} />
	  		<Card 
	  			title="Video Editing"
	  			text="4 sections"
	  			image={require('../img/wallpaper2.jpg')} />
	  		<Card 
	  			title="Motion Design"
	  			text="8 sections"
	  			image={require('../img/wallpaper3.jpg')} />
	  		<Card 
	  			title="SpriteKit Game"
	  			text="9 sections"
	  			image={require('../img/wallpaper4.jpg')} />
	  	</div>
  	</div>
  	
  	<Section 
  		image={require('../img/wallpaper.jpg')}
  		logo={require('../img/logo-react.png')}
  		title='React for Designers'
  		text='Learn how to build a modern site using React and the most efficient
  		libraries to get your ste/product online. Get familiar with components,
  		Grid CSS, animations, interactions, dynamic data with Contentful and 
  		deploying your site with Netlify.'/>
  </div>
)

export default IndexPage