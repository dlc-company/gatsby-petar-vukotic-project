import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'


export default () => (
    <Layout>
        <SimpleHero>
            <Banner title="radni naslov" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.">
                <Link to="/" className="btn-white">link text</Link>
            </Banner>
        </SimpleHero>
        <About/>
        <Services/>
    </Layout>
)