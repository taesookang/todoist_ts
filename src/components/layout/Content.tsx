import React from 'react'
import Sidebar from './Sidebar';
import Tasks from '../Tasks';


interface Props {

}

export const Content: React.FC<Props> = () => {
    return(
        <section className="content">
            <Sidebar />
            <Tasks />
        </section>
    )
}

export default Content;