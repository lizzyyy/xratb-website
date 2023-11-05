import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

const lectures = () => {

  return (
    <main>
      <body className={decalStyles.lectures}>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="lectures" open=""/>
            <div className={decalStyles.textWrapper}>
                <h1>Lectures</h1>
                <p><span className={decalStyles.redLink}>
                    <Button text="Introduction to Virtual Reality"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/13T6wd6Z9EuEcUqYar1VxqRZNkZE2ZlQgTfqLHhlKU8U/edit#slide=id.g307cf37b28_0_0'}
                            alt="lecture 0"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Fundamentals of Virtual Reality"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/183FZ6uqiyfL_n-T95IRhHthC4fRFT77ZBD3ATRdporQ/edit#slide=id.g307cf37b28_0_0'}
                            alt="lecture 1"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Locomotion and Motion Sickness"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1PZgj_DiYGCIYRX620wg3tAD1_4PO5J-zDXu9OOvvUJc/edit#slide=id.g307cf37b28_0_0'}
                            alt="lecture 2"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Hardware and Input Schemes"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1KCfqNKHneh2C2ec0RwapuSxnntyupZ9U0gVrObOxjSQ/edit#slide=id.g347210751b_2_5'}
                            alt="lecture 3"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Principles of VR Design"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/15AwMiOmNVb88HiAy-MsTdwgaIaz5YHIf5Y84axn-NLY/edit'}
                            alt="lecture 4"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Applications of VR and Social Implications"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1Xb_qNbduOUWOEJBrZYkImkJZQT2z2wfKiQjN6CjvLBI/edit'}
                            alt="lecture 5"
                    /></span></p>
                
                <br/>
                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 
                <br/>

                <h1>Unity Lectures</h1>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #1: The Basics"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1qscPGN_BRFgeddpIfj7ByeYdVAodnRbF6etP8dDPsE8/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 1"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #2: XR Interaction (Brief Overview)"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1N2KaIbHHMZZIiZNbgTFIETRg3Hc6M9labjTY4Cv4kYg/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 1"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #3: XR Interaction (Full Overview)"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1kR5zm_vgsancrylKVEpJQ1R0glxE2CHb_X-yCQI5pB0/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 3"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #4: UI"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1F3M6bGQoFsgBxbs_rrbRio1fkAV89DSbRa6ZBIUpymg/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 4"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #5: Advanced Code Tips"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1-vuMUJC_BqF__WgTOCOR_R20KWUq0A_iPFDPEN72KPA/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 5"
                    /></span></p>
                <p><span className={decalStyles.redLink}>
                    <Button text="Unity Lecture #6: Physics"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link={'https://docs.google.com/presentation/d/1RWSiUluQWPc6ZSgdD67UfwC5n34-zKEOeK3xW47fqwI/edit#slide=id.g14994011e85_0_179'}
                            alt="unity lecture 6"
                    /></span></p>
            </div>
        </div>

      </body>
    </main>
  )
}

export default lectures

export const Head = () => <title>Extended Reality @ Berkeley</title>
