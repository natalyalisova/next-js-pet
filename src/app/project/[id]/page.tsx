import React from 'react'
import {getProjectDetails} from "../../../../lib/actions";
import {ProjectInterface} from "../../../../common.types";
import Modal from "@/components/Modal";
import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";


const page = async ({params: {id,}}: { params: { id: string } }) => {
    // const session = await getCurrentUser();
    const result = await getProjectDetails(id) as {
        project?: ProjectInterface
    };


    if (!result?.project) {
        <p>Failed to fetch project information</p>
    }

    console.log(result?.project);

    return (
        <Modal>
            <h3 className="modal-head-text">{result.project?.title}</h3>
            <div className="modal-head-info mt-5">
                <Link href={`/profile/${result.project?.createdBy.id}`}>
                    <div className="flexStart gap-2">
                        <Image
                            src={result!.project!.createdBy?.avatarUrl}
                            width={24}
                            height={24}
                            className="rounded-full"
                            alt="Profile Image"
                        />
                        <p>{result.project?.createdBy.name}</p>
                        <p className="text-purple-700">{result.project?.category}</p>
                    </div>
                </Link>
            </div>
            <div className="w-full bg-sky-400 rounded-md mt-5">
                <div className="flex justify-center items-center p-8">
                    <Image
                        src={result!.project!.image}
                        width={814}
                        height={614}
                        className="object-cover h-full rounded-2xl"
                        alt="Project Image"
                    />
                </div>
            </div>
            <div className="mt-5">
                <p>{result.project?.description}</p>
            </div>
            <div className="flex flex-row mt-5">
                <Link href={result!.project!.githubUrl}>
                    <div className="flexStart gap-2">
                        <Image src="/images/github-mark.png"
                               alt="Github"
                               width={25}
                               height={25}/>
                        <p className="underline underline-offset-2 text-violet-700 inline">
                            Github
                        </p>
                    </div>
                </Link>
                <Link href={result!.project!.githubUrl}>
                    <div className="flexStart gap-2 ml-5">
                        <FontAwesomeIcon icon={faRocket}/>
                        <p className="underline underline-offset-2 text-violet-700 inline">
                            Live site
                        </p>
                    </div>
                </Link>
            </div>
        </Modal>
    )
}

export default page;
