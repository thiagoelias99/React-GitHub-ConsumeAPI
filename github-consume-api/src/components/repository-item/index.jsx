import React from 'react'

const RepositoryItem = ({name, fullname, linkToRepo}) => {
  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h4>fullname</h4>
            <a href={linkToRepo} target='blank'>{fullname}</a>
        </div>

    </div>
  )
}

export default RepositoryItem