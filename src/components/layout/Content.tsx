import React from 'react'
import Sidebar from './Sidebar';


interface Props {

}

export const Content: React.FC<Props> = () => {
    return(
        <section>
            <Sidebar />
        </section>
    )
}

export default Content;