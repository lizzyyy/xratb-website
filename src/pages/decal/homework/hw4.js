import * as React from "react"
import { Link } from "gatsby";

import * as decalStyles from "../../../styles/decal.module.css"
import * as defaultStyles from "../../../styles/default.module.css"

import Nav from "../../../components/nav"
import DecalNav from "../../../components/decalNav"
import Button from "../../../components/button";

import EastIcon from '@mui/icons-material/East';

import img1 from '../../../images/decal/HW4-0.png';
import img2 from '../../../images/decal/HW4-1.png';
import img3 from '../../../images/decal/HW4-2.png';
import img4 from '../../../images/decal/HW4-3.png';

const hw4 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="hw4" open="homework"/>
            <div className={decalStyles.textWrapper}>
                <h1>Homework 4: Pong</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Your Task"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#your-task"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Puck Physics"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#puck-physics"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Player Interactions"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#player-interactions"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Artificial Intelligence"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#artificial-intelligence"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Game Logic"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#game-logic"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Submission and Grading"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="submission-and-grading"
                            alt=""
                    /></span></p>
                </div>

                <p>
                By now, you should have a pretty good grasp on Unity from the labs and the other homework assignments. Unlike these past assignments, however, your final project is completely free-form, with no set instructions to follow. As a way to bridge this gap, this final assignment will be a lot less guided than the previous ones.
                <br/><br/>
                You’ll be building a clone of Pong, the classic Atari game. Download the skeleton package <a href="https://drive.google.com/file/d/1c7m916mECxBUbsGPNjTeQAhDPE2XL1l5/view?usp=sharing" target="_blank" className={decalStyles.yellowUnderline}>here</a>.
                <br/><br/>
                <img src={img1}/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="your-task">Your Task</h2>
                <p>
                Everyone has heard of <a href="https://www.youtube.com/watch?v=fiShX2pTz9A" target="_blank" className={decalStyles.yellowUnderline}>Pong</a>, and for good reason - it was the first financially successful video game of all time and kick-started the industry as we know it today. It is also an extremely simple game (out of necessity, considering it had to fit on 128 bytes of ram). The combination of these two factors makes it a traditional programming exercise for anyone learning a new language or tool.
                <br/><br/>
                Your task is to implement a game of Pong such that it meets the specifications, which are described below. If you look at the skeleton package, you’ll notice that while we’ve built the scene for you, there’s almost no starter code. You recommend using the scene provided, but you are free to start from scratch.
                <br/><br/>
                Now, let’s break down a game of Pong. What are the components that work together to make the game tick?
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="puck-physics">Puck Physics</h2>
                <p>
                <img src={img2}/>
                <br/><br/>
                The puck moves across the table, bouncing off of the walls and paddles. With respect to movement, we expect the following from your puck:
                <ul>
                    <li>It moves in straight lines at constant velocity, and doesn’t change speed after bouncing off an object.</li>
                    <li>The angle it reflects to after bouncing off an object is the same angle as when it came in (imagine a laser bouncing off a mirror).</li>
                </ul>
                <i>This isn’t faithful to the original games. In other versions of Pong, the puck would speed up after every collision until somebody lost. The angle that which the puck would reflect off the paddle would also change depending on which part of the paddle was hit. You are free to implement this more advanced version for extra credit.</i>
                </p>

                <h2>Implementation Hints</h2>
                <p>
                In the scene provided, we’ve taken advantage of Unity physics to both specifications by attaching a <a href="https://docs.unity3d.com/Manual/class-PhysicMaterial.html" target="_blank" className={decalStyles.yellowUnderline}>physics material</a> with full bounciness to the puck gameobject. We’ve also changed its rigidbody’s collision detection to “Continuous Dynamic”, which tells Unity that this object is going to move around a lot and should be treated accordingly.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="player-interactions">Player Interactions</h2>
                <p>
                <img src={img3}/>
                <br/><br/>
                The player controls the blue paddle on the left side of the screen. Pressing the <b>up</b> or <b>w</b> keys on the keyboard should move the paddle up, while pressing <b>down</b> or <b>s</b> should move it down. The paddle should move at a constant, reasonable speed, and shouldn’t clip into or move through the walls.
                </p>

                <h2>Implementation Hints</h2>
                <p>
                Utilize Unity’s <a href="https://docs.unity3d.com/Manual/ConventionalGameInput.html" target="_blank" className={decalStyles.yellowUnderline}>input manager</a> to access keyboard input (you used it in roll-a-ball to move the ball). Instead of using physics to move the paddle around, it’d be easier to directly modify its transform.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="artificial-intelligence">Artificial Intelligence</h2>
                <p>
                <img src={img4}/>
                <br/><br/>
                An AI agent controls the red paddle on the right side of the screen. The movement of this paddle is subject to the same constraints as the player - it must move at the same speed as the player, cannot clip or pass through walls, and cannot accelerate.
                <br/><br/>
                You must script an AI for this paddle so that one person can play against the computer. The AI doesn’t have to be perfect by any means - it’s fine if it’s able to hit the puck roughly ~50% of the time.
                </p>

                <h2>Implementation Hints</h2>
                <p>
                There are many possible solutions for this part. One simple approach is comparing the paddle’s z position with that of the puck’s, and choosing a direction to move in off of that. Since this is Berkeley though, for full credit we require that AI agents be run by multi-layer convolutional neural nets fed by the data of every pong, air hockey, and beer pong game ever played*.
                <br/><br/>
                <i>*This is a joke. But we will give extra credit to anyone who manages to implement an ML powered pong AI into this assignment. 
                    To get started, you could look into Unity’s recently released <a href="https://github.com/Unity-Technologies/ml-agents" target="_blank" className={decalStyles.yellowUnderline}>ML Agents</a>. 
                    Want to go even further? Do it off of purely pixel values with <a href="https://github.com/openai/universe" target="_blank" className={decalStyles.yellowUnderline}>OpenAI Universe</a> with <a href="http://www.nature.com/nature/journal/v518/n7540/abs/nature14236.html?foxtrotcallback=true" target="_blank" className={decalStyles.yellowUnderline}>deep reinforcement learning</a>.</i>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="game-logic">Game Logic</h2>
                <p>
                When the game begins, the puck should receive an impulse that gets it moving across the table. This can be either hard-coded to move towards a certain player or completely randomized. It must, however, have a decent amount of movement on the x-axis so that the game doesn’t get stuck. At this time, the score will be 0 to 0. This is reflected in the ScoreUI object which we’ve scripted and put into the scene for you already.
                <br/><br/>
                Changes in game logic occur when the puck passes by a paddle and reaches the goal behind it. The following things occur:
                <ul>
                    <li>The scoring player receives a point (update ScoreUI accordingly).</li>
                    <li>The puck is moved back to the center of the table.</li>
                    <li>The puck receives an impulse that gets it moving towards the <i>player who was scored on</i>.</li>
                </ul>
                When the winning score of 5 is reached, a message must be displayed on screen indicating who won. ScoreUI does this for you already.
                </p>

                <h2>Implementation Hints</h2>
                <p>
                There are many ways you could detect a goal being scored: triggers, <a href="https://unity3d.com/learn/tutorials/topics/physics/detecting-collisions-oncollisionenter" target="_blank" className={decalStyles.yellowUnderline}>collision detection</a> with the border,  
                or a simple distance check on the x-axis. Since the puck has a rigidbody, you can use <a href="https://docs.unity3d.com/ScriptReference/Rigidbody.AddForce.html" target="_blank" className={decalStyles.yellowUnderline}>AddForce</a> to apply an initial impulse to it.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="submission-and-grading">Submission and Grading</h2>
                <p>
                Use simmer.io to submit your work to bCourses.
                <br/><br/>
                Grading will be done by whether or not the submission meets the described specifications. For full credit, a facilitator must be able to actually play the game. Partial credit will be given if some components (puck, player, AI, logic) work but others don’t. Unlike HW2 and HW3, making additional improvements is not required for this assignment. We will, however, still give extra credit to those we deem went above and beyond with their submission.
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default hw4

export const Head = () => <title>Extended Reality @ Berkeley</title>
