import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useProjectsValue, useSelectedProjectValue } from '../context'
import { firebase } from '../firebase'
import { Project } from '../types'


interface Props {
    project: Project
}

export const IndividualProject: React.FC<Props> = ({ project }) => {
    const [showConfirn, setShowConfirn] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const deleteProject = docId => {
        firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(()=> {
            setProjects([...projects]);
            setSelectedProject('INBOX')
        });
    }


    return (null);
}

export default IndividualProject;