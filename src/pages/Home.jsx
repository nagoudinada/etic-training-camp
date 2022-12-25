import React from 'react'
import Banner from '../components/Banner'
import SideFilter from '../components/SideFilter'
import Anc from '../components/Anc'
import Filter from '../components/Filter'

function Home() {
  return (
    <div>
        <Banner/>
        <Filter/>
        <SideFilter/>

    </div>
  )
}

export default Home