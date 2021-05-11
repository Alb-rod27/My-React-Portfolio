import React, { useState } from 'react';

function Portfolio() {
    const [projects] = useState([ 
        {
            name: 'Run-Buddy',
            pageLink: 'https://alb-rod27.github.io/run-buddy/',
            repo: 'https://github.com/Alb-rod27/run-buddy',
            img: 0,
        },
        {
            name: 'Musix',
            pageLink: 'https://evanteems.github.io/Musix-Genre/',
            repo: 'https://github.com/evanteems/Musix-Genre',
            img: 1,
        },
        {
            name: 'Project-2-Haunted maps',
            pageLink: 'https://github.com/calebp80/Project-2',
            repo: 'https://uclaproject-2.herokuapp.com/',
            img: 2,
        },
        {
            name: 'Refactor',
            pageLink: 'https://alb-rod27.github.io/week01-refactor/',
            repo: 'https://github.com/Alb-rod27/week01-refactor',
            img: 3,
        },
        {
            name: 'Daily-Planner',
            pageLink: 'https://github.com/Alb-rod27/Daily-planner',
            repo: 'https://alb-rod27.github.io/Daily-planner/',
            img: 4,
        },
        {
            name: 'Password-Generator',
            pageLink: 'https://alb-rod27.github.io/password-generator/',
            repo: 'https://github.com/Alb-rod27/password-generator',
            img: 5,
        }
    ])

    const apps = projects.map((apps, i) =>
        <div className="px-2">
            <h2>{apps.name}</h2>
            <a href={apps.pageLink} target="_blank" rel="noreferrer">Link</a>
            <a href={apps.repo} target="_blank" rel="noreferrer">Github</a>
            <div className={`project${i} repoBG`}></div>
        </div>
    )
    return (
        <section className="my-5">
            <h1 id='about' >Portfolio</h1>
            <div className="flex-row">
                {apps}
            </div>
        </section>
    );
}

export default Portfolio;