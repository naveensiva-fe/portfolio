import React from 'react'
import './tools.css'

function Tools() {
  const tools = [
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name:'Express', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name:'Node.js', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name:'Canva', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  ];

  return (
    <>
    <div className='tools-container'>
        <h1>Tools and Technologies</h1>
        <div className='tools-grid'>
            {tools.map((tool, index) => (
                <div key={index} className='tool-item'>
                    <img src={tool.img} alt={tool.name} />
                    <p>{tool.name}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Tools