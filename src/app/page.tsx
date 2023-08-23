import {fetchAllProjects} from "../../lib/actions";
import {ProjectInterface} from "../../common.types";

type ProjectSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

const Home = () => {


        return (
            <section className="flex-start flex-col paddings mb-16">
                <h1>Home</h1>
                <h1>Categories</h1>
                <h1>LoadMore</h1>
                <h1>Posts</h1>
            </section>
        )
}

export default Home;
