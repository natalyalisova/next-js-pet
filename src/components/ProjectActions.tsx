"use client"

import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {deleteProject, fetchToken} from "../../lib/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons";


type Props = {
    projectId: string
}

const ProjectActions = ({projectId}: Props) => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const router = useRouter()


    const handleDeleteProject = async () => {
        setIsDeleting(true)

        const {token} = await fetchToken(); //secure action

        try {
            await deleteProject(projectId, token);

            router.push("/");
        } catch (error) {
            console.error(error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <>
            <Link href={`/edit-project/${projectId}`} className="flexCenter edit-action_btn">
                <FontAwesomeIcon icon={faPenToSquare} width={15} height={15}/>
            </Link>

            <button
                type="button"
                disabled={isDeleting}
                className={`flexCenter delete-action_btn ${isDeleting ? "bg-gray" : "bg-primary-purple"}`}
                onClick={handleDeleteProject}
            >
                <FontAwesomeIcon icon={faTrashCan} width={15} height={15}/>
            </button>
        </>
    )
}

export default ProjectActions;
