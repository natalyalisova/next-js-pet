import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-regular-svg-icons";


type Props ={
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}


const ProjectCard =({id,image, title, name, avatarUrl, userId}: Props)=>{
    return (
        <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            ProjectCard
            <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
                <Image
                    src={image}
                    width={414}
                    height={314}
                    className="object-cover h-full  w-full rounded-2xl"
                    alt="Project Image"
                />
                <div className="hidden group-hover:flex profile_card-title">
                    <p className="w-full">{title}</p>
                </div>
            </Link>
            <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
                <Link href={`/profile/${userId}`}>
                    <div className="flexCenter gap-2">
                        <Image
                            src={avatarUrl}
                            width={24}
                            height={24}
                            className="rounded-full"
                            alt="Profile Image"
                                />
                    </div>
                </Link>

                <div className="flexCenter gap-3">
                    <div className="flexCenter gap-2">
                        <FontAwesomeIcon icon={faHeart} width={25} height={25}/>
                        <p className="text-sm ml-2">376</p>
                    </div>
                    <div className="flexCenter gap-2">
                        <FontAwesomeIcon icon={faEye} width={25} height={25}/>
                        <p className="text-sm ml-2">3,2k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
