import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'

const GitCard =( {data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" }})=>{
    return(
        <div className='card'>
            <img src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
            <p className='description'>{data.description}</p>
            <div className='tags'>
                {data.tags.map((tag, index) => (
                    <p key={index} className='tag'>{tag}</p>
                ))}
            </div>
            <div className="urls">
                <a href={data.repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
                {data.demoLink && <a href={data.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        </div>
    )
}
const Github = () => {
  return (
    <MacWindow>
      <div className="cards">
        {githubData.map(project => {
           return <GitCard data={project} />
        })}
      </div>
    </MacWindow>
  )
}

export default Github