import * as React from "react"
import { Link } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";

import * as decalStyles from "../../../../styles/decal.module.css"
import * as defaultStyles from "../../../../styles/default.module.css"

import Nav from "../../../../components/nav"
import DecalNav from "../../../../components/decalNav"
import Button from "../../../../components/button";

import EastIcon from '@mui/icons-material/East';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import img1 from '../../../../images/decal/OLAB3-0.png';
import img2 from '../../../../images/decal/OLAB3-1.png';
import img3 from '../../../../images/decal/OLAB3-2.png';
import img4 from '../../../../images/decal/OLAB3-3.png';
import img5 from '../../../../images/decal/OLAB3-4.png';
import img6 from '../../../../images/decal/OLAB3-5.png';
import img7 from '../../../../images/decal/OLAB3-6.png';
import img8 from '../../../../images/decal/OLAB3-7.png';

const oculusLab3 = () => {

  return (
    <main>
      <body>
        <Nav activePage="decal"/>

        <div className={decalStyles.bodyWrapper}>
            <DecalNav activePage="oculuslab3" open="oculuslabs"/>
            <div className={decalStyles.textWrapper}>
                <h1>Oculus Lab 3: The Monster</h1>   

                <div className={decalStyles.toc}>
                    <h2>Table of Contents</h2>
                    <p><span className={decalStyles.redLink}>
                    <Button text="The Monster Prefab"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#the-monster-prefab"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Creating the Navmesh"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#creating-the-navmesh"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Moving the Monster"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#moving-the-monster"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Attacking the Player"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#attacking-the-player"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Shooting the Monster"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#shooting-the-monster"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Hurting the Monster"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#hurting-the-monster"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Killing the Monster"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="#killing-the-monster"
                            alt=""
                    /></span></p>
                    <p><span className={decalStyles.redLink}>
                    <Button text="Check Off"
                            color="red"
                            icon={EastIcon} 
                            type="underlineOut"
                            link="check-off"
                            alt=""
                    /></span></p>
                </div>

                <p>
                In this lab, we’ll focus on the main antagonist of our game: the monster. Before we jump into it, let’s list out all the things that this monster has to do:
                <ul>
                    <li>Move towards the player while avoiding obstacles.</li>
                    <li>Attack the player when it’s close enough.</li>
                    <li>Die after getting shot, then disappear.</li>
                    <li>Do all of the above with appropriate animations and sounds.</li>
                </ul>
                You can download the skeleton assetpackage <a href="https://drive.google.com/file/d/1FFYEI-ncfnX_9sBzzm0LQKzySGryEHBj/view?usp=sharing" target="_blank" className={decalStyles.yellowUnderline}>here</a>.
                <br/><br/>
                After initializing the new project with the skeleton, you will need to install the XR packages again through <b>Window > Package Manager > (on the top) Packages: Unity Registry</b>:
                <ul>
                    <li>Oculus XR Plugin</li>
                    <li>XR Plugin Management</li>
                    <li>XR Interaction Toolkit</li>
                </ul>
                </p>
                

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="the-monster-prefab">The Monster Prefab</h2>
                <p>
                Open the provided Lab scene in the assets folder. Within the prefabs folder, we’ve provided a Monster prefab for you already. Go ahead and drag it into the scene and turn it around to face the player.
                <br/><br/>
                <img src={img1}/>
                <br/><br/>
                As you’ll notice, the monster gameobject has two children already: hips and mesh_1. mesh_1 contains the mesh renderer that gives it the look it has, while the actual mesh itself is contained in the tree-like structure within hips, which contains the positions of all the bones in our monster’s skeletons (also called the rig).
                <br/><br/>
                We won’t go into the 3D modeling details. If you wish to learn more, UCBUGG is a well-established and fantastically run decal on the subject. We’ll focus instead on how to use this 3D model in our project.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="creating-the-navmesh">Creating the Navmesh</h2>
                <p>
                Moving our monster is a deceptively challenging task when there are obstacles in the way. There are a lot of ways to do it (if you’ve taken CS61B, you’ll remember Dijkstra’s algorithm or A* search, which can be adapted to work in this situation), but actually implementing one would be outside the scope of this course. Luckily, Unity already has a navigation infrastructure in place that we can take advantage of.
                <br/><br/>
                What we’re going to do is build what’s called a navigation mesh, or navmesh for short. A navmesh is a map of the environment that enables supported agents, called navmesh agents, to traverse the environment. By building this map ahead of time, agents won’t have to repeatedly compute where they can and cannot go while the game is running.
                <br/><br/>
                <img src={img2}/>
                <br/><br/>
                You can read more about Unity’s navigation system <a href="https://docs.unity3d.com/Manual/Navigation.html" target="_blank" className={decalStyles.yellowUnderline}>here</a>.
                <br/><br/>
                Next, open up the navigation window via Window > AI > Navigation and click on the “Bake” tab. This tab is where we can “bake” a navmesh into the environment for later use. Navmeshes are built given certain assumptions about the agent traversing it. As you can see in the “Baked Agent Size” section, Unity assumes our agent is a cylinder of certain radius and height.
                <br/><br/>
                <img src={img3}/>
                <br/><br/>
                We’ll only change one of these settings: set Agent Radius to 0.4 to better fit our monster. Then hit bake. You should see the map get covered in blue, representing all the traversable parts of the map.
                <br/><br/>
                <img src={img4}/>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="moving-the-monster">Moving the Monster</h2>
                <p>
                Now that we have a navmesh, let’s turn our monster into a nav mesh agent and move it. Add a “nav mesh agent” component to our monster gameobject. This component interacts with the navmesh and allows whatever object it’s attached to to move intelligently.
                <br/><br/>
                Change Speed to 0.75 (you don’t want the Monsters sprinting at you) and change Stopping Distance to 1.3. This indicates that once the monster gets within Stopping Distance of its target, it’ll stop moving - this will be useful once we incorporate attacks. Next, notice that we’re using the Humanoid agent type. Go to the Agents tab in the navigation window and change Radius to 0.4 to match the radius we used for the navmesh.
                <br/><br/>
                Next, create a new script called “Monster” that we’ll use to control all functionality of the gameobject. Start off by creating and initializing variables for the player, nav mesh agent, and audio source component. Note that in order to utilize the NavMeshAgent class, we’ll have to import UnityEngine.AI.
                <br/><br/>
                <div className={decalStyles.code}>
                    using System.Collections;
                    <br/>
                    using System.Collections.Generic;
                    <br/>
                    using UnityEngine;
                    <br/>
                    using UnityEngine.AI;
                    <br/><br/>
                    {`public class Monster : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;{`public GameObject player;`}
                    <br/>
                    &nbsp;&nbsp;{`private NavMeshAgent navMeshAgent;`}
                    <br/>
                    &nbsp;&nbsp;{`// Use this for initialization`}
                    <br/>
                    &nbsp;&nbsp;{`void Start () {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`navMeshAgent = GetComponent<NavMeshAgent>();`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`// Update is called once per frame`}
                    <br/>
                    &nbsp;&nbsp;{`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="using System.Collections;
                        using System.Collections.Generic;
                        using UnityEngine;
                        using UnityEngine.AI;
                        
                        public class Monster : MonoBehaviour {
                        
                            public GameObject player;
                        
                            private NavMeshAgent navMeshAgent;
                        
                            // Use this for initialization
                            void Start () {
                                navMeshAgent = GetComponent<NavMeshAgent>();
                            }
                            
                            // Update is called once per frame
                            void Update () {
                                
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Then to get the monster moving, all we have to do is add this line to Update(), which will repeatedly set the destination of the monster to the player’s location.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;{`navMeshAgent.SetDestination(player.transform.position);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Update () {
                            navMeshAgent.SetDestination(player.transform.position);
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                In Unity, add this script to the Monster gameobject. For the player field, drag in Main Camera which can be found under XR Origin > Camera Offset, which represents our headset. Press play, and you should see the monster move towards you.
                <br/><br/>
                It looks a little odd to see our monster power-slide to its destination, so we’re going to add in animation support. Add an Animator component to the Monster. We’ve provided a Controller for you in Assets > Animations > Monster and an Avatar (the mapping between Unity’s normal bone structure and a special one) in Models > Monster > MonsterAvatar. Drag those into their fields.
                <br/><br/>
                <img src={img5}/>
                <br/><br/>
                Take a look at the monster controller in the Animator window. It’s a little more complicated than the gun controller, but not by much. Notice that we start off in the “Walking” state. If you press play now, the monster should walk towards you with a lumbering walk animation.
                <br/><br/>
                Before continuing, we’re going to add in sound support. Add an audio source component to the Monster and disable Play On Awake. Then in Monster.cs, declare/initialize it properly along with three audio clips, which we’ll use throughout the lab. Play the spawnClip in Start() to announce that this Monster has spawned.
                <br/><br/>
                <div className={decalStyles.code}>
                    private NavMeshAgent navMeshAgent;
                    <br/>
                    private AudioSource audioSource;
                    <br/><br/>
                    public AudioClip spawnClip;
                    <br/>
                    public AudioClip hitClip;
                    <br/>
                    public AudioClip dieClip;
                    <br/>
                    {`void Start () {`}
                    <br/>
                    &nbsp;&nbsp;{`navMeshAgent = GetComponent<NavMeshAgent>();`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(spawnClip);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="private NavMeshAgent navMeshAgent;
                        private AudioSource audioSource;
                        
                        public AudioClip spawnClip;
                        public AudioClip hitClip;
                        public AudioClip dieClip;
                        
                        void Start () {
                            navMeshAgent = GetComponent<NavMeshAgent>();
                            audioSource = GetComponent<AudioSource>();
                            audioSource.PlayOneShot(spawnClip);
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                In Unity, you can find and fill in the appropriate clips in Assets > Sounds. The spawnClip is grrr1, hitClip is hit1, and dieClip is (very surprisingly) called die.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="attacking-the-player">Attacking the Player</h2>
                <p>
                The next thing we want to do is have the monster begin attacking the player once it gets in range. Looking at the monster controller again, we see that the state transitions from Walking to Attack when the “Attack” bool parameter is set to true. Let’s do just that in our Monster.cs script.
                <br/><br/>
                We’ll need to add a check to make sure we’re in range to attack. First, add a public attackRange variable and set it to 1.3 in the editor. Then add and initialize the animator variable.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public class Monster : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;{`public GameObject player;`}
                    <br/>
                    &nbsp;&nbsp;{`public float attackRange;`}
                    <br/><br/>
                    &nbsp;&nbsp;{`private NavMeshAgent navMeshAgent;`}
                    <br/>
                    &nbsp;&nbsp;{`private AudioSource audioSource;`}
                    <br/>
                    &nbsp;&nbsp;{`private Animator animator;`}
                    <br/><br/>
                    &nbsp;&nbsp;...
                    <br/><br/>
                    &nbsp;&nbsp;{`// Use this for initialization`}
                    <br/>
                    &nbsp;&nbsp;{`void Start () {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`navMeshAgent = GetComponent<NavMeshAgent>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`audioSource = GetComponent<AudioSource>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`audioSource.PlayOneShot(spawnClip);`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`animator = GetComponent<Animator>();`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/><br/>
                    ...
                    <br/><br/>
                    {`}`}
                    <CopyToClipboard
                        text="public class Monster : MonoBehaviour {

                            public GameObject player;
                            public float attackRange;
                        
                            private NavMeshAgent navMeshAgent;
                            private AudioSource audioSource;
                            private Animator animator;
                        
                            ...
                        
                            // Use this for initialization
                            void Start () {
                                navMeshAgent = GetComponent<NavMeshAgent>();
                                audioSource = GetComponent<AudioSource>();
                                audioSource.PlayOneShot(spawnClip);
                                animator = GetComponent<Animator>();
                            }
                        
                            ...
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Then in update, compute the distance between the monster and the player. Since we only care about the 2D distance between the two, we’ll zero out the y component before computing the magnitude.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;{`navMeshAgent.SetDestination(player.transform.position);`}
                    <br/>
                    &nbsp;&nbsp;{`Vector3 distanceVector = transform.position - player.transform.position;`}
                    <br/>
                    &nbsp;&nbsp;{`distanceVector.y = 0;`}
                    <br/>
                    &nbsp;&nbsp;{`float distance = distanceVector.magnitude;`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Update () {
                            navMeshAgent.SetDestination(player.transform.position);
                        
                            Vector3 distanceVector = transform.position - player.transform.position;
                            distanceVector.y = 0;
                            float distance = distanceVector.magnitude;
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Use this distance to check whether or not we should transition into attacking.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;...
                    <br/>
                    &nbsp;&nbsp;{`if (distance <= attackRange) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`animator.SetBool("Attack", true);`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="
                        void Update () {
                            ...
                            
                            if (distance <= attackRange) {
                                animator.SetBool('Attack', true);
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Save your work and try it in the editor. The monster should walk towards you, then stop some distance away and start hitting you with its fists. Whenever it hits you, an error should also pop up in the console:
                <br/><br/>
                <img src={img6}/>
                <br/><br/>
                Unity allows you to hook up <a href="https://docs.unity3d.com/Manual/AnimationEventsOnImportedClips.html" target="_blank" className={decalStyles.yellowUnderline}>animation events</a> to certain points in time within an animation. These events take in a function name. When the animation plays in-game and reaches that point in time, Unity will look for that function and call it. In this case, there’s an animation event attached to the moment the monster’s fists hit the ground, with function name “Attack”. Since we don’t have a function called “Attack” yet, it raises this error. Stub in the Attack() function to fix this; we’ll just play the hitClip sound for now.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Attack() {`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Attack() {
                            audioSource.PlayOneShot(hitClip);
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="shooting-the-monster">Shooting the Monster</h2>
                <p>
                Now that the monster can attack us, it’s only fair that we are able to fight back. On a high level, this is the procedure for shooting the monster:
                <ol>
                    <li>Player shoots gun. Invisible ray comes out of the gun and travels forward.</li>
                    <li>Ray hits an invisible collider on the monster, which calls a function.</li>
                    <li>Monster triggers its hurt animation, takes damage.</li>
                    <li>If monster loses all its health, kill it.</li>
                </ol>
                Start by adding a capsule collider to the monster. Set the radius to 1, the height to 3, the center to y=1.5, and mark it as a trigger so it doesn’t collide with the environment. It should just about encapsulate the monster.
                <br/><br/>
                <img src={img7}/>
                <br/><br/>
                Next, switch to editing the Gun.cs script. We’re going to add a raycast check to Fire() to check if we’ve hit a monster. I won’t pretend to be able to explain raycasting better than Unity itself, so before looking at the code below, 
                watch the first minute and a half of <a href="https://unity3d.com/learn/tutorials/topics/physics/raycasting" target="_blank" className={decalStyles.yellowUnderline}>this</a> video. <b>Raycasts can be confusing intuitively, so don’t be afraid to ask for clarification!</b>
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Fire() {`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(audioSource.clip);`}
                    <br/>
                    &nbsp;&nbsp;{`particleSystem.Play();`}
                    <br/><br/>
                    &nbsp;&nbsp;{`RaycastHit hit;`}
                    <br/>
                    &nbsp;&nbsp;{`Vector3 origin = particleSystem.transform.position;`}
                    <br/>
                    &nbsp;&nbsp;{`Vector3 direction = particleSystem.transform.right;`}
                    <br/>
                    &nbsp;&nbsp;{`if (Physics.Raycast(origin, direction, out hit, 100f)) {`}
                    <br/><br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Fire() {
                            audioSource.PlayOneShot(audioSource.clip);
                            particleSystem.Play();
                        
                            RaycastHit hit;
                            Vector3 origin = particleSystem.transform.position;
                            Vector3 direction = particleSystem.transform.right;
                            if (Physics.Raycast(origin, direction, out hit, 100f)) {
                        
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                We’re using the position/rotation of MuzzleFlashEffect (the gameobject particleSystem is attached to) for the origin of the raycast since it sits at the front of the gun where the bullet would come out of. The direction is set to its “right” direction because it’s the red arrow (which corresponds to the right direction) that points out of the gun barrel. We’ve defined a hit object to hold any data that comes through, and the ray itself lasts for 100 meters.
                <br/><br/>
                The end result is that this if case returns true only if the fired raycast hit something, with whatever collider it hit stored in the “hit” variable. We’ll now check if that collider belonged to a monster. If it does, we’ll extract the Monster script from it and call an appropriate function.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Fire() {`}
                    <br/>
                    &nbsp;&nbsp;...
                    <br/>
                    &nbsp;&nbsp;{`if (Physics.Raycast(origin, direction, out hit, 100f)) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`GameObject hitObject = hit.collider.gameObject;`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (hitObject.CompareTag("Monster")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`print("Hit a monster!");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Fire() {
                            ...
                        
                            if (Physics.Raycast(origin, direction, out hit, 100f)) {
                                GameObject hitObject = hit.collider.gameObject;
                                if (hitObject.CompareTag('Monster')) {
                                    print('Hit a monster!');
                                }
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                In Unity, assign the “Monster” tag to the monster gameobject, creating it if necessary. Press play, and shoot your gun at the monster. Does it trigger the print message?
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="hurting-the-monster">Hurting the Monster</h2>
                <p>
                Before we start replacing the print message with proper damage-taking interaction, we need to go into details on the monster’s various gameplay states. Our monster can be in one of three states at any given point in time:
                <ol>
                    <li><b>ALIVE: </b>In this state, the monster will move towards and attack you.</li>
                    <li><b>DYING: </b>In this state, the monster has taken enough damage and is in the midst of doing its death animation. It will no longer move towards you and cannot take further damage.</li>
                    <li><b>SINKING: </b>In this state, the monster has finished its death animation and is now sinking through the ground before finally getting removed from the game.</li>
                </ol>
                To implement this in script, we’re going to use C#’s <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/enum" target="_blank" className={decalStyles.yellowUnderline}>enum</a> system to list the possible states and a variable to track which state we’re in. Switch to Monster.cs.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public class Monster : MonoBehaviour {`}
                    <br/>
                    &nbsp;&nbsp;{`public enum State {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`ALIVE, DYING, SINKING`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    &nbsp;&nbsp;{`public State monsterState = State.ALIVE;`}
                    <br/>
                    &nbsp;&nbsp;...
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public class Monster : MonoBehaviour {

                            public enum State {
                                ALIVE, DYING, SINKING
                            }
                            
                            public State monsterState = State.ALIVE;
                        
                            ...
                        
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Our monster should only be moving around if it’s in the ALIVE state. Encapsulate the code you’ve written in Update() so far in an if block checking for this.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`void Update () {`}
                    <br/>
                    &nbsp;&nbsp;{`if (monsterState == State.ALIVE) {`}
                    <br/><br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Update () {
                            if (monsterState == State.ALIVE) {
                                
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Next, we’re going to implement the monster’s health. Add a public int maxHealth (set that to 100 in Unity) and private int currHealth to the class. Initialize currHealth properly in Start(). Finally, stub in a public Hurt() function that we’ll be using soon.
                <br/><br/>
                <div className={decalStyles.code}>
                    public int maxHealth;
                    private int currHealth;
                    {`void Start () {`}
                    <br/>
                    ...
                    <br/>
                    &nbsp;&nbsp;{`currHealth = maxHealth;`}
                    <br/>
                    {`}`}
                    <br/>
                    ...
                    <br/>
                    {`public void Hurt(int damage) {`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public int maxHealth;
                        private int currHealth;
                        
                        void Start () {
                            ...
                        
                            currHealth = maxHealth;
                        }
                        
                        ...
                        
                        public void Hurt(int damage) {
                        
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Now switch back to editing Gun.cs. Add a public int damage, which will represent how much damage each bullet deals to a monster.
                <br/><br/>
                <div className={decalStyles.code}>
                    public int damage;
                    <CopyToClipboard
                        text="public int damage;">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Set it to 20 in Unity. Then in the raycast section, remove the print statement. In its place, extract out the monster script from the monster gameobject, and call the Hurt() function with the newly defined damage var as the parameter.
                <br/><br/>
                <div className={decalStyles.code}>
                    RaycastHit hit;
                    Vector3 origin = particleSystem.transform.position;
                    Vector3 direction = particleSystem.transform.right;
                    {`if (Physics.Raycast(origin, direction, out hit, 100f)) {`}
                    <br/>
                    &nbsp;&nbsp;{`GameObject hitObject = hit.collider.gameObject;`}
                    <br/>
                    &nbsp;&nbsp;{`if (hitObject.CompareTag("Monster")) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`Monster monsterScript = hitObject.GetComponent<Monster>();`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`monsterScript.Hurt(damage);`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="RaycastHit hit;
                        Vector3 origin = particleSystem.transform.position;
                        Vector3 direction = particleSystem.transform.right;
                        if (Physics.Raycast(origin, direction, out hit, 100f)) {
                            GameObject hitObject = hit.collider.gameObject;
                            if (hitObject.CompareTag('Monster')) {
                                Monster monsterScript = hitObject.GetComponent<Monster>();
                                monsterScript.Hurt(damage);
                            }
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Switch again to editing Monster.cs so we can fill out the Hurt() function. It’s fairly straightforward: we first check if the monster is still alive, and if so call the proper animation trigger (which you can view in the Monster’s animation controller. We also subtract the damage taken from its current health, and if it dips below 0 we’ll call Die(), which we’ll stub in with a print statement for now.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void Hurt(int damage) {`}
                    <br/>
                    &nbsp;&nbsp;{`if (monsterState == State.ALIVE) {`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`animator.SetTrigger("Hurt");`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`currHealth -= damage;`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`if (currHealth <= 0)`}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Die();`}
                    <br/>
                    &nbsp;&nbsp;{`}`}
                    <br/>
                    {`}`}
                    <br/>
                    {`void Die() {`}
                    <br/>
                    &nbsp;&nbsp;{`print("Monster died.");`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void Hurt(int damage) {
                            if (monsterState == State.ALIVE) {
                                animator.SetTrigger('Hurt');
                                currHealth -= damage;
                                if (currHealth <= 0)
                                    Die();
                            }
                        }
                        
                        void Die() {
                            print('Monster died.');
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Try it out now. You should be able to shoot the Monster and trigger a small stagger animation, and after shooting it five times see the print statement (make sure to set Max Health to 100 in the Monster GameObject’s Monster component).
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="killing-the-monster">Killing the Monster</h2>
                <p>
                Filling in the Die() function is fairly straightforward:
                <ul>
                    <li>Set the state appropriately.</li>
                    <li>Play the dying sound effect (dieClip).</li>
                    <li>Stop navigating towards the player.</li>
                    <li>Trigger the appropriate animation.</li>
                </ul>
                <div className={decalStyles.code}>
                    {`void Die() {`}
                    <br/>
                    &nbsp;&nbsp;{`monsterState = State.DYING;`}
                    <br/>
                    &nbsp;&nbsp;{`audioSource.PlayOneShot(dieClip);`}
                    <br/>
                    &nbsp;&nbsp;{`navMeshAgent.isStopped = true;`}
                    <br/>
                    &nbsp;&nbsp;{`animator.SetTrigger(“Dead”);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="void Die() { 
                            monsterState = State.DYING; 
                            audioSource.PlayOneShot(dieClip); 
                            navMeshAgent.isStopped = true; 
                            animator.SetTrigger(“Dead”); 
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                If you try the game now, you should be able to see all this happen after shooting the monster five times! You should also notice an error message in the console:
                <br/><br/>
                <img src={img8}/>
                <br/><br/>
                This is an animation event hooked up to the end of the death animation. If we were to just let the monster sit there forever, the corpses would end up glitching into one another and lagging the game. So we’re now going to use this animation event to make dead monsters sink through the floor and then disappear after dieing. Stub in the public StartSinking() function.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`public void StartSinking() {`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void StartSinking() {

                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                There are a couple things we need to do in this function:
                <ul>
                    <li>Set the state appropriately.</li>
                    <li>Disable the navigation component. The nav mesh agent component overrides movement control from other sources, so in order to make our monster sink through script we must disable this component first.</li>
                    <li>Set the monster to be destroyed after a set amount of time. We’ll use 5 seconds, which should be long enough for the monster to fully move through the floor.</li>
                </ul>
                <div className={decalStyles.code}>
                    {`public void StartSinking() {`}
                    <br/>
                    &nbsp;&nbsp;{`monsterState = State.SINKING;`}
                    <br/>
                    &nbsp;&nbsp;{`navMeshAgent.enabled = false;`}
                    <br/>
                    &nbsp;&nbsp;{`Destroy(gameObject, 5);`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="public void StartSinking() { 
                            monsterState = State.SINKING; 
                            navMeshAgent.enabled = false; 
                            Destroy(gameObject, 5); 
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Next is to make the monster actually sink, which we’ll do in the Update() function. Add a public float sinkSpeed, which will represent how quickly the monster sinks through the ground.
                <br/><br/>
                <div className={decalStyles.code}>
                    public float sinkSpeed;
                    <CopyToClipboard
                        text="public float sinkSpeed;">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Then in Update(), add an else if block for when our monster is in the sinking state. In it, we’ll calculate how far down the monster needs to move this frame and translate it downwards that much. Time.deltaTime returns the time between this frame and the previous.
                <br/><br/>
                <div className={decalStyles.code}>
                    {`else if (monsterState == State.SINKING) {`}
                    <br/>
                    &nbsp;&nbsp;{`float sinkDistance = sinkSpeed * Time.deltaTime;`}
                    <br/>
                    &nbsp;&nbsp;{`transform.Translate(new Vector3(0, -sinkDistance, 0));`}
                    <br/>
                    {`}`}
                    <CopyToClipboard
                        text="else if (monsterState == State.SINKING) {
                            float sinkDistance = sinkSpeed * Time.deltaTime;
                            transform.Translate(new Vector3(0, -sinkDistance, 0));
                        }">
                            <ContentCopyIcon className={decalStyles.copy}/>
                    </CopyToClipboard>
                </div>
                <br/><br/>
                Set sinkSpeed to 0.15 in Unity, and give it a try! Killing the monster should now make it sink through the floor before disappearing from the scene.
                </p>

                <div className={decalStyles.boxLine}>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                    <div className={decalStyles.box}></div>
                </div> 

                <h2 id="check-off">Check Off</h2>
                <p>
                <i>This is the end of lab 3. To check off, show a facilitator that your monster will do the following:
                <ul>
                    <li>Spawn with a sound effect and move towards the player.</li>
                    <li>Stop moving when in range and begin attacking the player (with sound effect).</li>
                    <li>Stagger when shot by a gun.</li>
                    <li>Fall to the ground after taking enough damage (with sound effect) and sink through the floor before getting removed from the scene.</li>
                </ul>
                </i>
                </p>
                
            </div>
        </div>

      </body>
    </main>
  )
}

export default oculusLab3

export const Head = () => <title>Extended Reality @ Berkeley</title>
