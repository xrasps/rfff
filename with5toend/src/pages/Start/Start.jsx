import { useState } from 'react';
import Banner from '../../components/Banner/Banner'
import StartCatalog from '../../components/StartCatalog/StartCatalog'
import Slider from '../../components/Slider/Slider'
import Accordion from '../../components/Accordion/Accordion'


export default function Start () {

    return(
        <>
        <Banner />
        <Slider />
        <Accordion title="Вопрос 1" content="Ответ 1" />
        <Accordion title="Вопрос 2" content="Ответ 2" />
        <Accordion title="Вопрос 3" content="Ответ 3" />
        <StartCatalog />
        </>
    )
}