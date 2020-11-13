import React from 'react'

function ListRender(){
    const names = ['sai','narayana','shiva']
    return(
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default ListRender