// import { Header } from '../header/header';
// import { MenuBar } from '../header/menubar';
import { Header, MenuBar } from '../header'; // here index.js refered automatically
// import { Footer } from '../footer/footer'
import { Footer } from '../footer'
import { Body } from '../body'
// import { Body } from '../body/body'
import React from 'react'

export const Page = () => <div>
    <Header />
    <MenuBar/>
    <Body />
    <Footer />
</div>