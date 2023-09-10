import React from 'react'
import {getProjectDetails} from "../../../../lib/actions";
import {ProjectInterface} from "../../../../common.types";
import Modal from "@/components/Modal";
import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import RelatedProjects from "@/components/RelatedProjects";
import {getCurrentUser} from "../../../../lib/session";
import ProjectActions from "@/components/ProjectActions";


const page = async ({params: {id,}}: { params: { id: string } }) => {
    const session = await getCurrentUser();
    const result = await getProjectDetails(id) as {
        project?: ProjectInterface
    };

    if (!result?.project) return (
        <p className="no-result-text">Failed to fetch project info</p>
    )


    const projectDetails = result?.project

    const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`


    return (
        <Modal>
            <section className=" w-full">
                <div className="flex-1 flexStart">
                    <p className="self-start text-xl font-semibold">
                        {result.project?.title}
                    </p>
                </div>

                <div className="flex flex-row justify-between mt-5 w-full">
                    <Link href={renderLink()} className="flex flex-row flexStart gap-3">
                        <Image
                            src={result.project?.createdBy?.avatarUrl}
                            width={24}
                            height={24}
                            className="rounded-full"
                            alt="Profile Image"
                        />
                        <p>{result.project?.createdBy.name}</p>
                        <p className="text-purple-700">{result.project?.category}</p>
                    </Link>

                    {session?.user?.email === projectDetails?.createdBy?.email && (
                        <div className="flex flex-end  items-center gap-2">
                            <ProjectActions projectId={result.project?.id}/>
                        </div>
                    )}
                </div>

            </section>
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
            <RelatedProjects userId={result.project?.createdBy.id} projectId={result.project?.id}/>
        </Modal>
    )
}

export default page;
