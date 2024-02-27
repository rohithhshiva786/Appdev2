
// import React from 'react'
// import NavbarU from '../Components/NavbarU';
import './Feedback.css';
// import { FaInfoCircle } from 'react-icons/fa';
// import { IoInformationCircle } from 'react-icons/io';


const Feedback = () => {
  return (
    <div>
        <div className='l1'>
            <div className='l2'>
            </div>
            <div className='l3'>
                <div className='l4'>
                    <h1>FEEDBACK</h1><br></br>
                    <label>Email:</label><br></br><br></br>
                    <input type="email" id="email" name="email" placeholder="Your Email" required /><br></br><br></br><br></br>
                    <label>Message:</label><br></br><br></br>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" cols="55" className='' required /><br></br><br></br>
                    <button type="submit" className='l5'>Submit</button>
                </div>
            </div>
        </div>
    <div className='AdminviewEvents1'>
        {/* <NavbarU/> */}
        <div className="container00">
    <section className="section0">
    
        <div className="image1"><img src="https://coaching.starchess.in/f4d6ca4c8f10aee7003a7d85e7adffa9.svg" alt="Image 1"/></div>
        <div className="content1">
        
            <span className='ViewEventTitle1'>Learn from Activity Based Curriculum (ABC) for Chess</span>
            <p>Build a strong foundation with the world’s first activity-based curriculum (ABC) for chess. It has over 2500+ interactive activities from over 150 lessons across 5 learning levels (from beginner to advanced).</p>
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}
        </div>
    </section>
    <section className="section0 reverse">
        <div className="image1"><img src="https://coaching.starchess.in/3bffffe1525ad027c014c532e4ff376d.svg" alt="Image 2"/></div>
        <div className="content1-reverse">
            <span className='ViewEventTitle1'>Smart & Active Learning</span>
            <p>Learn from interactive chess courses on openings, middlegames, endgames, tactics, and strategies. Watch instructive video lessons and solve the activities/puzzles to practice your learning!</p>
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}

        </div>
    </section>
    <section className="section0">
    
        <div className="image1"><img src="https://coaching.starchess.in/c47b55d81f29f391eda13e0b4a5243fc.svg" alt="Image 1"/></div>
        <div className="content1">
        
            <span className='ViewEventTitle1'>Compete in Online Tournaments</span>
            <p>Participate in online chess tournaments. Compete with other students and try to win the tournaments of different formats (Swiss, Quad, Swiss Team).</p>
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}
        </div>
    </section>
    <section className="section0 reverse">
        <div className="image1"><img src="https://coaching.starchess.in/3d1506b757c2958c91ba91028525588d.svg" alt="Image 2"/></div>
        <div className="content1-reverse">
            <span className='ViewEventTitle1'>Solve Chess Quizzes</span>
            <p>Solve chess puzzles, MCQs, fun-loaded capture activities, play with computer, and more from our interactive quizzes.</p>
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}

        </div>
    </section>
    <section className="section0">
    
    <div className="image1"><img src="https://coaching.starchess.in/9a4a6bb173af24422a297730d34e9a2b.svg" alt="Image 1"/></div>
    <div className="content1">
    
        <span className='ViewEventTitle1'>Interactive Classroom</span>
        <p>Attend online chess classes with our interactive classroom. Actively participate in the classes by answering questions, solving puzzles, and fight for the leaderboard by scoring more points!</p>
        {/* <div className="ViewDeleteButton">
            <button className='View'>View</button>
            <button className='Delete'>Delete</button>
        </div> */}
    </div>
</section>

<section className="section0 reverse">
    
    <div className="image1"><img src="https://coaching.starchess.in/a784f9f705a4c4ef6c2f7e40dcb20caf.svg" alt="Image 1"/></div>
    <div className="content1">
    
        <span className='ViewEventTitle1'>Play with friends and bots</span>
        <p>Play casual games with your friends or challenge computers/bots from over 20+ levels. You can also play blindfold chess to improve your calculation and visualization skills.</p>
        {/* <div className="ViewDeleteButton">
            <button className='View'>View</button>
            <button className='Delete'>Delete</button>
        </div> */}
    </div>
</section>

<section className="section0">
    
    <div className="image1"><img src="https://coaching.starchess.in/0fefa384cce8be95ec6e14b65743dae9.svg" alt="Image 1"/></div>
    <div className="content1">
    
        <span className='ViewEventTitle1'>Student Reports</span>
        <p>Get access to daily, weekly, and monthly student reports - see detailed statistics of classes attended, problems solved, quizzes completed, points scored, games won, and more.</p>
        {/* <div className="ViewDeleteButton">
            <button className='View'>View</button>
            <button className='Delete'>Delete</button>
        </div> */}
    </div>
</section>
    
</div>
</div>
    </div>
  );
};

export default Feedback;