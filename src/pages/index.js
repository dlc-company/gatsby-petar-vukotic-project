import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

import PartnerLogos from '../components/Home/PartnerLogos'


export default () => (
    <Layout>
        <SimpleHero>
            <Banner title="radni naslov" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.">
                <Link to="/" className="btn-white">link text</Link>
            </Banner>
        </SimpleHero>
       
        <Services/>

        <About/>

        <PartnerLogos/>

    </Layout>
)